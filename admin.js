const storageKey = 'dulcebebe.catalog.v1';
const adminApp = document.querySelector('#admin-app');

const form = document.querySelector('#product-form');
const sectionSelect = document.querySelector('#section');
const labelInput = document.querySelector('#label');
const titleInput = document.querySelector('#title');
const priceInput = document.querySelector('#price');
const promoInput = document.querySelector('#promo');
const imagesInput = document.querySelector('#images');
const productsRoot = document.querySelector('#products');
const countLabel = document.querySelector('#count');
const cancelEditBtn = document.querySelector('#cancel-edit');
const resetDefaultsBtn = document.querySelector('#reset-defaults');
const editSectionInput = document.querySelector('#edit-section');
const editIndexInput = document.querySelector('#edit-index');
const formTitle = document.querySelector('#form-title');

const cloneData = (data) => JSON.parse(JSON.stringify(data));

const loadCatalog = () => {
  try {
    const raw = localStorage.getItem(storageKey);

    if (!raw) {
      return cloneData(window.DEFAULT_CATALOG_SECTIONS || []);
    }

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : cloneData(window.DEFAULT_CATALOG_SECTIONS || []);
  } catch (_error) {
    return cloneData(window.DEFAULT_CATALOG_SECTIONS || []);
  }
};

const saveCatalog = (catalog) => {
  localStorage.setItem(storageKey, JSON.stringify(catalog));
};

let catalog = loadCatalog();

const resetForm = () => {
  form.reset();
  editSectionInput.value = '';
  editIndexInput.value = '';
  formTitle.textContent = 'Nuevo producto';
};

const parseImages = (value) =>
  value
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

const buildMeta = (item) => {
  const parts = [item.label || 'Sin categoría'];

  if (item.price) {
    parts.push(`Precio: ${item.price}`);
  }

  if (item.promo) {
    parts.push(`Promo: ${item.promo}`);
  }

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
  imagesInput.value = (item.images || []).join('\n');
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

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const sectionId = sectionSelect.value;
  const targetSection = catalog.find((section) => section.id === sectionId);

  if (!targetSection) {
    return;
  }

  const payload = {
    label: labelInput.value.trim(),
    title: titleInput.value.trim(),
    price: priceInput.value.trim(),
    promo: promoInput.value.trim(),
    images: parseImages(imagesInput.value),
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

  if (action === 'delete') {
    removeItem(section, index);
  }
});

cancelEditBtn.addEventListener('click', resetForm);

resetDefaultsBtn.addEventListener('click', () => {
  catalog = cloneData(window.DEFAULT_CATALOG_SECTIONS || []);
  saveCatalog(catalog);
  populateSectionSelect();
  renderProducts();
  resetForm();
});

const initAdmin = () => {
  if (!localStorage.getItem(storageKey)) {
    saveCatalog(catalog);
  }

  populateSectionSelect();
  renderProducts();
};

if (adminApp) {
  initAdmin();
}
