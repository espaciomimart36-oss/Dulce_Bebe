const storageKey = 'dulcebebe.catalog.v1';
const adminApp = document.querySelector('#admin-app');

const form = document.querySelector('#product-form');
const sectionSelect = document.querySelector('#section');
const labelInput = document.querySelector('#label');
const titleInput = document.querySelector('#title');
const priceInput = document.querySelector('#price');
const promoInput = document.querySelector('#promo');
const stockInput = document.querySelector('#stock');
const imageFilesInput = document.querySelector('#image-files');
const imageStatus = document.querySelector('#image-status');
const imagesInput = document.querySelector('#images');
const productsRoot = document.querySelector('#products');
const countLabel = document.querySelector('#count');
const cancelEditBtn = document.querySelector('#cancel-edit');
const resetDefaultsBtn = document.querySelector('#reset-defaults');
const editSectionInput = document.querySelector('#edit-section');
const editIndexInput = document.querySelector('#edit-index');
const formTitle = document.querySelector('#form-title');

const cloudinaryCloudName = 'dazpzsbwm';
const cloudinaryUploadPreset = 'dulce_bebe_sin_firmar';
const cloudinaryUploadFolder = 'dulce_bebe';

const allowedImageMimeTypes = new Set(['image/jpeg', 'image/png']);
const allowedImageExtensions = new Set(['jpg', 'jpeg', 'png', 'mjpg']);

let pendingImageFiles = [];

const cloneData = (data) => JSON.parse(JSON.stringify(data));

const normalizeStock = (value) => {
  const parsed = Number.parseInt(String(value ?? '').trim(), 10);

  if (!Number.isFinite(parsed) || parsed < 0) {
    return 2;
  }

  return parsed;
};

const normalizeCatalogStock = (sections) =>
  (Array.isArray(sections) ? sections : []).map((section) => ({
    ...section,
    items: (section.items || []).map((item) => ({
      ...item,
      stock: normalizeStock(item.stock),
    })),
  }));

const getFileExtension = (fileName) => {
  const dotIndex = fileName.lastIndexOf('.');

  if (dotIndex < 0) {
    return '';
  }

  return fileName.slice(dotIndex + 1).toLowerCase();
};

const setImageStatus = (message, isError = false) => {
  if (!imageStatus) {
    return;
  }

  imageStatus.textContent = message;
  imageStatus.classList.toggle('is-error', isError);
};

const loadCatalog = () => {
  try {
    const raw = localStorage.getItem(storageKey);

    if (!raw) {
      return normalizeCatalogStock(cloneData(window.DEFAULT_CATALOG_SECTIONS || []));
    }

    const parsed = JSON.parse(raw);

    if (Array.isArray(parsed)) {
      return normalizeCatalogStock(parsed);
    }

    return normalizeCatalogStock(cloneData(window.DEFAULT_CATALOG_SECTIONS || []));
  } catch (_error) {
    return normalizeCatalogStock(cloneData(window.DEFAULT_CATALOG_SECTIONS || []));
  }
};

const saveCatalog = (catalog) => {
  localStorage.setItem(storageKey, JSON.stringify(catalog));
};

let catalog = loadCatalog();

const resetForm = () => {
  form.reset();
  pendingImageFiles = [];
  setImageStatus('No hay archivos seleccionados.');
  stockInput.value = '2';
  editSectionInput.value = '';
  editIndexInput.value = '';
  formTitle.textContent = 'Nuevo producto';
};

const parseImages = (value) =>
  value
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

const uniq = (values) => values.filter((value, index) => values.indexOf(value) === index);

const uploadImageToCloudinary = async (file) => {
  const endpoint = `https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/image/upload`;
  const formData = new FormData();

  formData.append('file', file);
  formData.append('upload_preset', cloudinaryUploadPreset);
  formData.append('folder', cloudinaryUploadFolder);

  const response = await fetch(endpoint, {
    method: 'POST',
    body: formData,
  });

  const data = await response.json();

  if (!response.ok || !data.secure_url) {
    throw new Error(data?.error?.message || 'No se pudo subir la imagen a Cloudinary.');
  }

  return data.secure_url;
};

const uploadPendingImages = async () => {
  if (pendingImageFiles.length === 0) {
    return [];
  }

  setImageStatus(`Subiendo ${pendingImageFiles.length} imagen(es) a Cloudinary...`);
  const uploadedUrls = [];

  for (const file of pendingImageFiles) {
    const imageUrl = await uploadImageToCloudinary(file);
    uploadedUrls.push(imageUrl);
  }

  return uploadedUrls;
};

const readImageFiles = async (files) => {
  const selectedFiles = Array.from(files || []);

  if (selectedFiles.length === 0) {
    pendingImageFiles = [];
    setImageStatus('No hay archivos seleccionados.');
    return;
  }

  const hasInvalidFile = selectedFiles.some((file) => {
    const extension = getFileExtension(file.name);
    const validByExtension = allowedImageExtensions.has(extension);
    const validByMime = !file.type || allowedImageMimeTypes.has(file.type);
    return !(validByExtension && validByMime);
  });

  if (hasInvalidFile) {
    pendingImageFiles = [];
    imageFilesInput.value = '';
    setImageStatus('Solo se permiten archivos JPG, JPEG, MJPG o PNG.', true);
    return;
  }

  pendingImageFiles = selectedFiles;
  const suffix = pendingImageFiles.length === 1 ? '' : 's';
  setImageStatus(`${pendingImageFiles.length} archivo${suffix} listo${suffix} para subir.`);
};

const mergeImages = (uploadedUrls) => {
  const manualImages = parseImages(imagesInput.value);
  return uniq([...uploadedUrls, ...manualImages]);
};

const buildMeta = (item) => {
  const parts = [item.label || 'Sin categoría'];

  if (item.price) {
    parts.push(`Precio: ${item.price}`);
  }

  if (item.promo) {
    parts.push(`Promo: ${item.promo}`);
  }

  parts.push(`Stock: ${normalizeStock(item.stock)}`);

  parts.push(`${(item.images || []).length} fotos`);
  return parts.join(' · ');
};

const populateSectionSelect = () => {
  sectionSelect.innerHTML = catalog
    .map((section) => `<option value="${section.id}">${section.kicker}</option>`)
    .join('');
};

const renderProducts = () => {
  const total = catalog.reduce((acc, section) => acc + section.items.length, 0);
  countLabel.textContent = `${total} productos cargados`;

  productsRoot.innerHTML = catalog
    .map(
      (section) => `
        <section class="section-block">
          <h3 class="section-title">${section.kicker}</h3>
          ${section.items
            .map(
              (item, index) => `
                <article class="item-row">
                  <div>
                    <p class="item-name">${item.title}</p>
                    <p class="item-meta">${buildMeta(item)}</p>
                  </div>
                  <div class="item-actions">
                    <div class="stock-quick" aria-label="Ajuste rapido de stock">
                      <button type="button" data-action="stock-dec" data-section="${section.id}" data-index="${index}" aria-label="Restar stock">-</button>
                      <span>${normalizeStock(item.stock)}</span>
                      <button type="button" data-action="stock-inc" data-section="${section.id}" data-index="${index}" aria-label="Sumar stock">+</button>
                    </div>
                    <button type="button" data-action="edit" data-section="${section.id}" data-index="${index}">Editar</button>
                    <button type="button" data-action="delete" data-section="${section.id}" data-index="${index}">Borrar</button>
                  </div>
                </article>
              `,
            )
            .join('')}
        </section>
      `,
    )
    .join('');
};

const hydrateForm = (sectionId, index) => {
  const section = catalog.find((entry) => entry.id === sectionId);

  if (!section) {
    return;
  }

  const item = section.items[index];

  if (!item) {
    return;
  }

  formTitle.textContent = 'Editar producto';
  sectionSelect.value = sectionId;
  labelInput.value = item.label || '';
  titleInput.value = item.title || '';
  priceInput.value = item.price || '';
  promoInput.value = item.promo || '';
  stockInput.value = String(normalizeStock(item.stock));
  pendingImageFiles = [];
  imagesInput.value = (item.images || []).join('\n');
  imageFilesInput.value = '';
  setImageStatus('No hay archivos seleccionados.');

  editSectionInput.value = sectionId;
  editIndexInput.value = String(index);
};

const removeItem = (sectionId, index) => {
  const section = catalog.find((entry) => entry.id === sectionId);

  if (!section) {
    return;
  }

  section.items.splice(index, 1);
  saveCatalog(catalog);
  renderProducts();
  resetForm();
};

const adjustItemStock = (sectionId, index, delta) => {
  const section = catalog.find((entry) => entry.id === sectionId);

  if (!section) {
    return;
  }

  const item = section.items[index];

  if (!item) {
    return;
  }

  item.stock = Math.max(0, normalizeStock(item.stock) + delta);
  saveCatalog(catalog);
  renderProducts();
};

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const sectionId = sectionSelect.value;
  const targetSection = catalog.find((section) => section.id === sectionId);

  if (!targetSection) {
    return;
  }

  let uploadedUrls = [];

  try {
    uploadedUrls = await uploadPendingImages();
  } catch (error) {
    setImageStatus(error.message || 'No se pudieron subir las imagenes.', true);
    return;
  }

  const payload = {
    label: labelInput.value.trim(),
    title: titleInput.value.trim(),
    price: priceInput.value.trim(),
    promo: promoInput.value.trim(),
    stock: normalizeStock(stockInput.value),
    images: mergeImages(uploadedUrls),
  };

  if (!payload.title || payload.images.length === 0) {
    return;
  }

  const editSection = editSectionInput.value;
  const editIndex = editIndexInput.value;

  if (editSection && editIndex !== '') {
    const previousSection = catalog.find((entry) => entry.id === editSection);

    if (previousSection) {
      previousSection.items.splice(Number(editIndex), 1);
    }
  }

  targetSection.items.unshift(payload);
  saveCatalog(catalog);
  renderProducts();
  resetForm();
});

if (imageFilesInput) {
  imageFilesInput.addEventListener('change', () => {
    readImageFiles(imageFilesInput.files);
  });
}

productsRoot.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-action]');

  if (!button) {
    return;
  }

  const action = button.dataset.action;
  const section = button.dataset.section;
  const index = Number(button.dataset.index);

  if (action === 'edit') {
    hydrateForm(section, index);
    return;
  }

  if (action === 'stock-inc') {
    adjustItemStock(section, index, 1);
    return;
  }

  if (action === 'stock-dec') {
    adjustItemStock(section, index, -1);
    return;
  }

  if (action === 'delete') {
    removeItem(section, index);
  }
});

cancelEditBtn.addEventListener('click', resetForm);

resetDefaultsBtn.addEventListener('click', () => {
  catalog = normalizeCatalogStock(cloneData(window.DEFAULT_CATALOG_SECTIONS || []));
  saveCatalog(catalog);
  populateSectionSelect();
  renderProducts();
  resetForm();
});

const initAdmin = () => {
  if (!localStorage.getItem(storageKey)) {
    saveCatalog(catalog);
  } else {
    saveCatalog(catalog);
  }

  populateSectionSelect();
  renderProducts();
};

if (adminApp) {
  initAdmin();
}
