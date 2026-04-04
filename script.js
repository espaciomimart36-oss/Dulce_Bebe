const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.main-nav');
const catalogRoot = document.querySelector('#productos');
const featuredRoot = document.querySelector('#catalog-featured');
const catalogSummary = document.querySelector('#catalog-summary');
const toggleCatalogBtn = document.querySelector('#toggle-catalog-btn');
const whatsappLinks = document.querySelectorAll('.js-whatsapp-link');
const openCartBtn = document.querySelector('#open-cart-btn');
const closeCartBtn = document.querySelector('#close-cart-btn');
const cartDrawer = document.querySelector('#cart-drawer');
const cartOverlay = document.querySelector('#cart-overlay');
const cartItemsRoot = document.querySelector('#cart-items');
const cartCount = document.querySelector('#cart-count');
const cartSendBtn = document.querySelector('#cart-send-btn');
const cartClearBtn = document.querySelector('#cart-clear-btn');
const cartEmptyText = document.querySelector('#cart-empty-text');
const openRegisterBtn = document.querySelector('#open-register-btn');
const openLoginBtn = document.querySelector('#open-login-btn');
const logoutBtn = document.querySelector('#logout-btn');
const closeRegisterBtn = document.querySelector('#close-register-btn');
const registerOverlay = document.querySelector('#register-overlay');
const registerModal = document.querySelector('#register-modal');
const loginOverlay = document.querySelector('#login-overlay');
const loginModal = document.querySelector('#login-modal');
const closeLoginBtn = document.querySelector('#close-login-btn');
const registerForm = document.querySelector('#register-form');
const loginForm = document.querySelector('#login-form');
const registerNameInput = document.querySelector('#register-name');
const registerLastNameInput = document.querySelector('#register-lastname');
const registerEmailInput = document.querySelector('#register-email');
const registerPhoneInput = document.querySelector('#register-phone');
const registerPasswordInput = document.querySelector('#register-password');
const registerProvinceSelect = document.querySelector('#register-province');
const registerCpInput = document.querySelector('#register-cp');
const registerCityInput = document.querySelector('#register-city');
const registerHint = document.querySelector('#register-hint');
const loginEmailInput = document.querySelector('#login-email');
const loginPasswordInput = document.querySelector('#login-password');
const loginHint = document.querySelector('#login-hint');
const checkoutNameInput = document.querySelector('#checkout-name');
const checkoutLastNameInput = document.querySelector('#checkout-lastname');
const checkoutEmailInput = document.querySelector('#checkout-email');
const checkoutPhoneInput = document.querySelector('#checkout-phone');
const checkoutProvinceSelect = document.querySelector('#checkout-province');
const checkoutCpInput = document.querySelector('#checkout-cp');
const checkoutCityInput = document.querySelector('#checkout-city');
const checkoutHint = document.querySelector('#checkout-hint');
const shippingBaseText = document.querySelector('#shipping-base-text');
const shippingFinalText = document.querySelector('#shipping-final-text');
const promoHalf = document.querySelector('#promo-half');
const promoFree = document.querySelector('#promo-free');
const whatsappNumber = '5493757633601';
const defaultWhatsappMessage = 'Hola! Quería hacer una consulta sobre Dulce Bebé. ¿Me podrían ayudar?';
const catalogStorageKey = 'dulcebebe.catalog.v1';
const cartStorageKey = 'dulcebebe.cart.v1';
const checkoutStorageKey = 'dulcebebe.checkout.v1';
const customerProfileStorageKey = 'dulcebebe.customer-profile.v1';
const customersStorageKey = 'dulcebebe.customers.v1';
const customerSessionStorageKey = 'dulcebebe.customer-session.v1';

const defaultCatalogSections = window.DEFAULT_CATALOG_SECTIONS || [
  {
    id: 'ajuar',
    kicker: 'Ajuar y esenciales',
    title: 'Esenciales delicados para los primeros días.',
    description:
      'Una selección suave y amorosa para armar el ajuar con calma.',
    helper: 'Consultanos si querés ver más fotitos o armar un set.',
    items: [
      {
        label: 'Ajuar',
        title: 'Ajuar clásico',
        images: ['ajuar.jpg', 'ajuar1.jpg'],
      },
      {
        label: 'Ajuar',
        title: 'Ajuar de 3 piezas',
        images: ['ajuar3piezas.jpg'],
      },
      {
        label: 'Esencial',
        title: 'Kit bebé',
        images: ['kitbebe.jpg', 'kitbebe1.jpg', 'kitbebe2.jpg'],
      },
      {
        label: 'Textil',
        title: 'Manta de algodón',
        images: ['mantasdealgodon.jpg'],
      },
      {
        label: 'Textil',
        title: 'Trapitos suaves',
        images: ['trapitosbebe.jpg'],
      },
      {
        label: 'Esencial',
        title: 'Pañal de tela',
        images: ['pañaldetela.jpg'],
      },
      {
        label: 'Básico',
        title: 'Ranitas suaves',
        images: ['ranitas.jpg'],
      },
    ],
  },
  {
    id: 'ropa',
    kicker: 'Ropita y conjuntos',
    title: 'Ropita pensada para vestir cada momento con ternura.',
    description:
      'Vestidos, conjuntos, abrigos y básicos presentados de forma más linda y ordenada.',
    helper: 'Consultanos por talle, colores o disponibilidad.',
    items: [
      {
        label: 'Abrigo',
        title: 'Abrigo de hilo',
        images: ['abrigodehilotalleunico.jpg'],
      },
      {
        label: 'Abrigo',
        title: 'Abrigo de morley con lanilla',
        images: [
          'abrigodemorleyconlanilla.jpg',
          'abrigodemorleyconlanilla1.jpg',
          'abrigodemorleyconlanilla2.jpg',
          'abrigodemorleyconlanilla3.jpg',
          'abrigodemorleyconlanilla4.jpg',
        ],
      },
      {
        label: 'Abrigo',
        title: 'Abrigo de plush',
        images: ['abrigodeplushtalle5.jpg'],
      },
      {
        label: 'Básico',
        title: 'Body manga larga',
        images: ['bodymangalargatalle6.jpg'],
      },
      {
        label: 'Camisa',
        title: 'Camisita blanca',
        images: ['camisablancatalle3.jpg'],
      },
      {
        label: 'Conjunto',
        title: 'Conjunto azul',
        images: ['conjuntoazultalle2.jpg'],
      },
      {
        label: 'Conjunto',
        title: 'Conjunto de algodón',
        images: ['conjuntodealgodon.jpg', 'conjuntodealgodon1.jpg'],
      },
      {
        label: 'Conjunto',
        title: 'Conjunto de plush',
        images: ['conjuntodeplush.jpg'],
      },
      {
        label: 'Conjunto',
        title: 'Conjunto de lino',
        images: ['Conjuntosdelinotalle4.jpg', 'Conjuntosdelinotalle4v2.jpg'],
      },
      {
        label: 'Conjunto',
        title: 'Conjunto delicado',
        images: ['conjuntotalle1.jpg', 'conjuntotalle1v2.jpg'],
      },
      {
        label: 'Enterito',
        title: 'Enterito peludito',
        images: ['enteritopeluditoconbroche.jpg'],
      },
      {
        label: 'Bebé',
        title: 'Jardinero',
        images: ['jardinero.jpg', 'jardinero1.jpg'],
      },
      {
        label: 'Básico',
        title: 'Palazo de plush',
        images: ['Únicopalazodeplushtalle5.jpg'],
      },
      {
        label: 'Pantalón',
        title: 'Pantalones de algodón',
        images: [
          'pantalonesdealgodon.jpg',
          'pantalonesdealgodon1.jpg',
          'pantalonesdealgodon2.jpg',
          'pantalonesdealgodon3.jpg',
        ],
      },
      {
        label: 'Pijama',
        title: 'Pijama Poplar',
        images: ['pijamapoplar.jpg'],
      },
      {
        label: 'Pijama',
        title: 'Pijamas suaves',
        images: ['pijamas.jpg', 'pijamas1.jpg'],
      },
      {
        label: 'Pijama',
        title: 'Pijamas de algodón',
        images: ['pijamasdealgodon.jpg', 'pijamasdealgodon1.jpg'],
      },
      {
        label: 'Básico',
        title: 'Remerita suave',
        images: ['remeritatalle2.jpg'],
      },
      {
        label: 'Vestido',
        title: 'Vestido de corderoy',
        images: [
          'vestidodecorderoy.jpg',
          'vestidodecorderoy1.jpg',
          'vestidodecorderoy2.jpg',
          'vestidodecorderoy3.jpg',
        ],
      },
      {
        label: 'Vestido',
        title: 'Vestido de morley con vincha',
        images: [
          'vestidodemorleyconvincha.jpg',
          'vestidodemorleyconvincha1.jpg',
          'vestidodemorleyconvincha2.jpg',
        ],
      },
      {
        label: 'Vestido',
        title: 'Vestido waffle',
        images: ['vestidodewafleknit.jpg', 'vestidodewafleknit1.jpg', 'vestidodewafleknit2.jpg'],
      },
      {
        label: 'Vestido',
        title: 'Vestido para nena',
        images: ['vestidonena.jpg', 'vestidonena1.jpg'],
      },
    ],
  },
  {
    id: 'accesorios',
    kicker: 'Accesorios y detalles',
    title: 'Detalles tiernos para completar cada compra.',
    description:
      'Accesorios elegidos para sumar practicidad y un toque dulce al catálogo.',
    helper: 'Consultanos por colores, modelos o disponibilidad.',
    items: [
      {
        label: 'Accesorio',
        title: 'Chupete y portachupete',
        images: ['chpete y portachupete.jpg'],
      },
      {
        label: 'Accesorio',
        title: 'Chupete frutal',
        images: ['chupetefurta.jpg', 'chupetefrutav2.jpg'],
      },
      {
        label: 'Mamadera',
        title: 'Mamadera 260 ml',
        images: ['mamadera260ml.jpg', 'mamaderde260ml2.jpg'],
      },
      {
        label: 'Mamadera',
        title: 'Mamadera de silicona',
        images: ['mamaderadesilicona.jpg'],
      },
      {
        label: 'Repuesto',
        title: 'Repuesto para mamadera Philips',
        images: ['repuestomamaderaphilips.jpg'],
      },
      {
        label: 'Accesorio',
        title: 'Medias para bebé',
        images: ['mediasbebes.jpg'],
      },
      {
        label: 'Accesorio',
        title: 'Turbante',
        images: ['turbante.jpg'],
      },
      {
        label: 'Accesorio',
        title: 'Vincha de morley',
        images: ['vinchademorley.jpg'],
      },
      {
        label: 'Accesorio',
        title: 'Vinchas de plush',
        images: ['vinchasdeplush.jpg'],
      },
    ],
  },
];

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

const slugify = (value) =>
  String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const loadCatalogSections = () => {
  try {
    const raw = localStorage.getItem(catalogStorageKey);

    if (!raw) {
      return normalizeCatalogStock(cloneData(defaultCatalogSections));
    }

    const parsed = JSON.parse(raw);

    if (!Array.isArray(parsed) || parsed.length === 0) {
      return normalizeCatalogStock(cloneData(defaultCatalogSections));
    }

    return normalizeCatalogStock(parsed);
  } catch (_error) {
    return normalizeCatalogStock(cloneData(defaultCatalogSections));
  }
};

const saveCatalogSections = (sections) => {
  localStorage.setItem(catalogStorageKey, JSON.stringify(sections));
};

let catalogSections = loadCatalogSections();

const loadCart = () => {
  try {
    const raw = localStorage.getItem(cartStorageKey);

    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (_error) {
    return [];
  }
};

const saveCart = (cart) => {
  localStorage.setItem(cartStorageKey, JSON.stringify(cart));
};

let cart = loadCart();
let itemIndex = new Map();

if (!localStorage.getItem(catalogStorageKey)) {
  saveCatalogSections(catalogSections);
} else {
  saveCatalogSections(catalogSections);
}

const refreshCatalogFromStorage = () => {
  catalogSections = loadCatalogSections();
};

const findCatalogItemById = (itemId) => itemIndex.get(itemId);

const clampCartToStock = () => {
  let changed = false;

  cart = cart
    .map((entry) => {
      const match = findCatalogItemById(entry.id);

      if (!match) {
        changed = true;
        return null;
      }

      const maxStock = normalizeStock(match.item.stock);

      if (maxStock <= 0) {
        changed = true;
        return null;
      }

      const nextQuantity = Math.min(entry.quantity, maxStock);

      if (nextQuantity !== entry.quantity || entry.stock !== maxStock) {
        changed = true;
      }

      return {
        ...entry,
        quantity: nextQuantity,
        stock: maxStock,
      };
    })
    .filter(Boolean);

  if (changed) {
    saveCart(cart);
  }
};

const buildItemIndexFromCatalog = () => {
  itemIndex = new Map(
    catalogSections.flatMap((section) =>
      section.items.map((item) => [getItemId(section.id, item), { item, sectionId: section.id }]),
    ),
  );
};

const renderCatalogUI = () => {
  if (!catalogRoot) {
    return;
  }

  buildItemIndexFromCatalog();

  const featuredItems = featuredTitles
    .map((title) => {
      const section = catalogSections.find((entry) => entry.items.some((item) => item.title === title));
      const item = section?.items.find((entry) => entry.title === title);

      if (!section || !item) {
        return null;
      }

      return { item, sectionId: section.id };
    })
    .filter(Boolean);

  if (featuredRoot) {
    featuredRoot.innerHTML = featuredItems.map(({ item, sectionId }) => renderFeaturedItem(item, sectionId)).join('');
  }

  catalogRoot.innerHTML = catalogSections.map((section) => renderSection(section)).join('');
  clampCartToStock();
  renderCart();
};

const assetPath = (fileName) => {
  if (typeof fileName !== 'string') {
    return '';
  }

  if (
    fileName.startsWith('data:image/') ||
    fileName.startsWith('http://') ||
    fileName.startsWith('https://') ||
    fileName.startsWith('blob:')
  ) {
    return fileName;
  }

  return encodeURI(`img/${fileName}`);
};

const featuredTitles = [
  'Ajuar clásico',
  'Kit bebé',
  'Conjunto de algodón',
  'Vestido de corderoy',
  'Vestido waffle',
  'Abrigo de morley con lanilla',
  'Mamadera 260 ml',
  'Chupete frutal',
];

const argentinaProvinces = [
  'Buenos Aires',
  'Catamarca',
  'Chaco',
  'Chubut',
  'Ciudad Autonoma de Buenos Aires',
  'Cordoba',
  'Corrientes',
  'Entre Rios',
  'Formosa',
  'Jujuy',
  'La Pampa',
  'La Rioja',
  'Mendoza',
  'Misiones',
  'Neuquen',
  'Rio Negro',
  'Salta',
  'San Juan',
  'San Luis',
  'Santa Cruz',
  'Santa Fe',
  'Santiago del Estero',
  'Tierra del Fuego',
  'Tucuman',
];

const viacargoBaseByProvince = {
  'Ciudad Autonoma de Buenos Aires': 6500,
  'Buenos Aires': 8000,
  'Cordoba': 9000,
  'Santa Fe': 9000,
  'Entre Rios': 9000,
  'Mendoza': 10500,
  'San Juan': 11000,
  'San Luis': 10000,
  'La Pampa': 9800,
  'Neuquen': 12000,
  'Rio Negro': 12000,
  'Chubut': 13000,
  'Santa Cruz': 14500,
  'Tierra del Fuego': 16000,
  'Misiones': 10500,
  'Corrientes': 9800,
  'Chaco': 9800,
  'Formosa': 10500,
  'Santiago del Estero': 9800,
  'Tucuman': 10000,
  'Salta': 11000,
  'Jujuy': 11000,
  'Catamarca': 10500,
  'La Rioja': 10500,
};

const buildWhatsappLink = (productName) => {
  const message = productName
    ? `Hola! Vi ${productName} en la página de Dulce Bebé y quería hacer una consulta. ¿Me podrían ayudar?`
    : defaultWhatsappMessage;

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};

const normalizeText = (value) =>
  String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();

const normalizeProvinceName = (value) => normalizeText(value).replace(/\s+/g, ' ');

const normalizePhone = (value) => {
  let digits = String(value || '').replace(/\D/g, '');

  while (digits.startsWith('0')) {
    digits = digits.slice(1);
  }

  if (!digits) {
    return '';
  }

  if (digits.startsWith('549')) {
    return digits;
  }

  if (digits.startsWith('54')) {
    return `549${digits.slice(2)}`;
  }

  if (digits.startsWith('9')) {
    return `54${digits}`;
  }

  return `549${digits}`;
};

const formatPhoneDisplay = (value) => {
  const normalized = normalizePhone(value);

  if (!normalized) {
    return '';
  }

  return `+${normalized}`;
};

const buildWhatsappDirectLink = (rawPhone) => {
  const normalized = normalizePhone(rawPhone);
  return normalized ? `https://wa.me/${normalized}` : '#';
};

const formatMoneyAr = (value) =>
  new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(Math.max(0, Math.round(value || 0)));

const parsePriceToNumber = (raw) => {
  if (!raw) {
    return 0;
  }

  const digits = String(raw).replace(/[^\d]/g, '');
  return digits ? Number(digits) : 0;
};

const getSubtotal = () =>
  cart.reduce((acc, item) => {
    const unit = parsePriceToNumber(item.price);
    return acc + unit * item.quantity;
  }, 0);

const loadCheckout = () => {
  try {
    const raw = localStorage.getItem(checkoutStorageKey);

    if (!raw) {
      return {
        name: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        province: 'Misiones',
        cp: '',
        city: '',
      };
    }

    const parsed = JSON.parse(raw);
    return {
      name: parsed?.name || '',
      lastName: parsed?.lastName || '',
      email: parsed?.email || '',
      phone: parsed?.phone || '',
      password: parsed?.password || '',
      province: parsed?.province || 'Misiones',
      cp: parsed?.cp || '',
      city: parsed?.city || '',
    };
  } catch (_error) {
    return {
      name: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      province: 'Misiones',
      cp: '',
      city: '',
    };
  }
};

const loadCustomerProfile = () => {
  try {
    const raw = localStorage.getItem(customerProfileStorageKey);

    if (!raw) {
      return {
        name: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        province: 'Misiones',
        cp: '',
        city: '',
      };
    }

    const parsed = JSON.parse(raw);

    return {
      name: parsed?.name || '',
      lastName: parsed?.lastName || '',
      email: parsed?.email || '',
      phone: parsed?.phone || '',
      password: parsed?.password || '',
      province: parsed?.province || 'Misiones',
      cp: parsed?.cp || '',
      city: parsed?.city || '',
    };
  } catch (_error) {
    return {
      name: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      province: 'Misiones',
      cp: '',
      city: '',
    };
  }
};

const saveCustomerProfile = (profile) => {
  localStorage.setItem(customerProfileStorageKey, JSON.stringify(profile));
};

const defaultCustomerSession = Object.freeze({ loggedIn: false, email: '' });
let currentCustomerSession = { ...defaultCustomerSession };

const purgeStoredCustomerSession = () => {
  try {
    localStorage.removeItem(customerSessionStorageKey);
    sessionStorage.removeItem(customerSessionStorageKey);
  } catch (_error) {
    // No hacemos nada si el navegador bloquea el storage.
  }
};

const loadCustomerSession = () => {
  return { ...currentCustomerSession };
};

const saveCustomerSession = (session) => {
  currentCustomerSession = {
    loggedIn: Boolean(session?.loggedIn),
    email: session?.email?.trim() || '',
  };
  purgeStoredCustomerSession();
};

const clearCustomerSession = () => {
  currentCustomerSession = { ...defaultCustomerSession };
  purgeStoredCustomerSession();
};

const getCurrentSessionProfile = () => {
  const session = loadCustomerSession();

  if (!session.loggedIn || !session.email) {
    return null;
  }

  const normalizedEmail = session.email.trim().toLowerCase();
  const customer = loadRegisteredCustomers().find(
    (entry) => entry.email?.trim().toLowerCase() === normalizedEmail,
  );

  if (customer) {
    return customer;
  }

  const profile = loadCustomerProfile();

  if (profile.email?.trim().toLowerCase() === normalizedEmail) {
    return profile;
  }

  return null;
};

const loadRegisteredCustomers = () => {
  try {
    const raw = localStorage.getItem(customersStorageKey);

    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (_error) {
    return [];
  }
};

const saveRegisteredCustomers = (customers) => {
  localStorage.setItem(customersStorageKey, JSON.stringify(customers));
};

const upsertRegisteredCustomer = (profile) => {
  const customers = loadRegisteredCustomers();
  const normalizedEmail = profile.email.trim().toLowerCase();
  const normalizedPhone = normalizePhone(profile.phone);
  const now = new Date().toISOString();

  const index = customers.findIndex(
    (entry) =>
      entry.email?.trim().toLowerCase() === normalizedEmail || normalizePhone(entry.phone) === normalizedPhone,
  );

  const payload = {
    ...profile,
    phone: normalizedPhone,
    password: String(profile.password || '').trim(),
    updatedAt: now,
    createdAt: customers[index]?.createdAt || now,
  };

  if (index >= 0) {
    customers[index] = payload;
  } else {
    customers.unshift(payload);
  }

  saveRegisteredCustomers(customers);

  if (window.ClientsStore?.upsertClient) {
    window.ClientsStore.upsertClient(payload).catch(() => {
      // Fallback local ya guardado arriba.
    });
  }
};

const saveCheckout = () => {
  if (
    !checkoutNameInput ||
    !checkoutLastNameInput ||
    !checkoutEmailInput ||
    !checkoutPhoneInput ||
    !checkoutProvinceSelect ||
    !checkoutCpInput ||
    !checkoutCityInput
  ) {
    return;
  }

  localStorage.setItem(
    checkoutStorageKey,
    JSON.stringify({
      name: checkoutNameInput.value.trim(),
      lastName: checkoutLastNameInput.value.trim(),
      email: checkoutEmailInput.value.trim(),
      phone: normalizePhone(checkoutPhoneInput.value),
      province: checkoutProvinceSelect.value,
      cp: checkoutCpInput.value.trim(),
      city: checkoutCityInput.value.trim(),
    }),
  );
};

const findCustomerByEmailAndPassword = async (email, password) => {
  if (window.ClientsStore?.findByCredentials) {
    const firebaseMatch = await window.ClientsStore.findByCredentials(email, password);

    if (firebaseMatch) {
      return firebaseMatch;
    }
  }

  const normalizedEmail = email.trim().toLowerCase();
  const normalizedPassword = String(password || '').trim();

  return loadRegisteredCustomers().find(
    (customer) =>
      customer.email?.trim().toLowerCase() === normalizedEmail &&
      String(customer.password || '').trim() === normalizedPassword,
  );
};

const getBaseShippingByProvince = (province) => {
  const normalized = normalizeProvinceName(province);
  return viacargoBaseByProvince[normalized] || 10500;
};

const getShippingQuote = () => {
  const subtotal = getSubtotal();
  const province = checkoutProvinceSelect?.value || 'Misiones';
  const base = getBaseShippingByProvince(province);

  if (subtotal >= 100000) {
    return {
      subtotal,
      base,
      final: 0,
      promo: 'free',
    };
  }

  if (subtotal >= 50000) {
    return {
      subtotal,
      base,
      final: Math.round(base / 2),
      promo: 'half',
    };
  }

  return {
    subtotal,
    base,
    final: base,
    promo: 'none',
  };
};

const updateShippingSummary = () => {
  if (!shippingBaseText || !shippingFinalText) {
    return;
  }

  const quote = getShippingQuote();
  shippingBaseText.textContent = `Costo base ViaCargo (${checkoutProvinceSelect?.value || 'Misiones'}): ${formatMoneyAr(
    quote.base,
  )}`;
  shippingFinalText.textContent = `Costo final estimado: ${formatMoneyAr(quote.final)}`;

  if (promoHalf) {
    promoHalf.hidden = quote.promo !== 'half';
  }

  if (promoFree) {
    promoFree.hidden = quote.promo !== 'free';
  }
};

const populateProvinceSelect = () => {
  [checkoutProvinceSelect, registerProvinceSelect].filter(Boolean).forEach((select) => {
    select.innerHTML = argentinaProvinces
      .map((province) => `<option value="${province}">${province}</option>`)
      .join('');
  });
};

const syncProfileToCheckout = (profile) => {
  if (
    !checkoutNameInput ||
    !checkoutLastNameInput ||
    !checkoutEmailInput ||
    !checkoutPhoneInput ||
    !checkoutProvinceSelect ||
    !checkoutCpInput ||
    !checkoutCityInput
  ) {
    return;
  }

  checkoutNameInput.value = profile.name || '';
  checkoutLastNameInput.value = profile.lastName || '';
  checkoutEmailInput.value = profile.email || '';
  checkoutPhoneInput.value = formatPhoneDisplay(profile.phone || '');
  checkoutProvinceSelect.value = argentinaProvinces.includes(profile.province) ? profile.province : 'Misiones';
  checkoutCpInput.value = profile.cp || '';
  checkoutCityInput.value = profile.city || '';
};

const hydrateCheckout = () => {
  const checkout = loadCheckout();
  const profile = loadCustomerProfile();

  if (
    !checkoutNameInput ||
    !checkoutLastNameInput ||
    !checkoutEmailInput ||
    !checkoutPhoneInput ||
    !checkoutCpInput ||
    !checkoutCityInput
  ) {
    return;
  }

  if (profile.name || profile.lastName || profile.email || profile.phone || profile.cp || profile.city) {
    syncProfileToCheckout(profile);
    saveCheckout();
    return;
  }

  checkoutNameInput.value = checkout.name;
  checkoutLastNameInput.value = checkout.lastName;
  checkoutEmailInput.value = checkout.email;
  checkoutPhoneInput.value = formatPhoneDisplay(checkout.phone || '');
  checkoutProvinceSelect.value = argentinaProvinces.includes(checkout.province) ? checkout.province : 'Misiones';
  checkoutCpInput.value = checkout.cp;
  checkoutCityInput.value = checkout.city;
};

const hydrateRegister = () => {
  const profile = loadCustomerProfile();

  if (
    !registerNameInput ||
    !registerLastNameInput ||
    !registerEmailInput ||
    !registerPhoneInput ||
    !registerPasswordInput ||
    !registerProvinceSelect ||
    !registerCpInput ||
    !registerCityInput
  ) {
    return;
  }

  registerNameInput.value = profile.name;
  registerLastNameInput.value = profile.lastName;
  registerEmailInput.value = profile.email;
  registerPhoneInput.value = formatPhoneDisplay(profile.phone || '');
  registerPasswordInput.value = profile.password || '';
  registerProvinceSelect.value = argentinaProvinces.includes(profile.province) ? profile.province : 'Misiones';
  registerCpInput.value = profile.cp;
  registerCityInput.value = profile.city;
};

const updateRegisterButtonState = () => {
  const session = loadCustomerSession();

  // Sin sesión: Registrarme + Iniciar sesión visibles; Pedido + Cerrar ocultos
  // Con sesión: Registrarme + Iniciar sesión ocultos; Pedido + Cerrar visibles
  if (openRegisterBtn) {
    openRegisterBtn.hidden = session.loggedIn;
  }

  if (openLoginBtn) {
    openLoginBtn.hidden = session.loggedIn;
    openLoginBtn.classList.remove('is-active');
    openLoginBtn.textContent = 'Iniciar sesión';
    openLoginBtn.setAttribute('aria-label', 'Iniciar sesión');
  }

  if (logoutBtn) {
    logoutBtn.hidden = !session.loggedIn;
  }

  if (openCartBtn) {
    openCartBtn.hidden = !session.loggedIn;
  }
};

const openRegister = () => {
  if (!registerModal || !registerOverlay) {
    return;
  }

  registerModal.classList.add('is-open');
  registerModal.setAttribute('aria-hidden', 'false');
  registerOverlay.hidden = false;

  if (registerHint) {
    registerHint.textContent =
      'Al registrarte, tus datos se cargan automaticamente al momento de pedir por WhatsApp.';
  }
};

const openLogin = () => {
  const session = loadCustomerSession();

  if (session.loggedIn) {
    if (loginHint) {
      loginHint.textContent = 'Ya tenés una sesión activa.';
    }

    return;
  }

  if (!loginModal || !loginOverlay) {
    return;
  }

  loginModal.classList.add('is-open');
  loginModal.setAttribute('aria-hidden', 'false');
  loginOverlay.hidden = false;

  if (loginHint) {
    loginHint.textContent = 'Ingresá el email y la clave que creaste al registrarte.';
  }
};

const closeLogin = () => {
  if (!loginModal || !loginOverlay) {
    return;
  }

  loginModal.classList.remove('is-open');
  loginModal.setAttribute('aria-hidden', 'true');
  loginOverlay.hidden = true;
};

const closeRegister = () => {
  if (!registerModal || !registerOverlay) {
    return;
  }

  registerModal.classList.remove('is-open');
  registerModal.setAttribute('aria-hidden', 'true');
  registerOverlay.hidden = true;
};

let cpLookupController = null;

const resolveProvinceNameFromApi = (apiProvince) => {
  const normalizedApi = normalizeProvinceName(apiProvince);
  return argentinaProvinces.find((province) => normalizeProvinceName(province) === normalizedApi) || apiProvince;
};

const lookupPostalCodeForTargets = async ({ cpInput, cityInput, provinceSelect, hintEl, onResolved }) => {
  if (!cpInput || !cityInput || !provinceSelect || !hintEl) {
    return;
  }

  const cpValue = cpInput.value.trim();

  if (cpValue.length < 4) {
    hintEl.textContent = 'Ingresá al menos 4 digitos del codigo postal para detectar localidad y provincia.';
    return;
  }

  if (cpLookupController) {
    cpLookupController.abort();
  }

  cpLookupController = new AbortController();

  try {
    const response = await fetch(
      `https://apis.datos.gob.ar/georef/api/codigos_postales?codigo_postal=${encodeURIComponent(cpValue)}&max=1`,
      { signal: cpLookupController.signal },
    );

    if (!response.ok) {
      throw new Error('lookup-error');
    }

    const data = await response.json();
    const match = data?.codigos_postales?.[0];
    const locality = match?.localidad?.nombre;
    const province = match?.provincia?.nombre;

    if (!match || !locality || !province) {
      hintEl.textContent = 'No encontramos ese codigo postal. Podés completar la localidad manualmente.';

      if (cpValue === '3364') {
        cityInput.value = 'Comandante Andresito';
        provinceSelect.value = 'Misiones';
        hintEl.textContent = '3364 detectado: Comandante Andresito, Misiones.';
      }

      onResolved?.();

      updateShippingSummary();
      return;
    }

    cityInput.value = locality;
    provinceSelect.value = resolveProvinceNameFromApi(province);
    hintEl.textContent = `${cpValue} detectado: ${locality}, ${province}.`;
    onResolved?.();
    updateShippingSummary();
  } catch (error) {
    if (error.name === 'AbortError') {
      return;
    }

    if (cpValue === '3364') {
      cityInput.value = 'Comandante Andresito';
      provinceSelect.value = 'Misiones';
      hintEl.textContent = '3364 detectado: Comandante Andresito, Misiones.';
    } else {
      hintEl.textContent =
        'No pudimos validar el codigo postal en este momento. Podés continuar con la localidad manual.';
    }

    onResolved?.();
    updateShippingSummary();
  }
};

const lookupCheckoutPostalCode = () =>
  lookupPostalCodeForTargets({
    cpInput: checkoutCpInput,
    cityInput: checkoutCityInput,
    provinceSelect: checkoutProvinceSelect,
    hintEl: checkoutHint,
    onResolved: saveCheckout,
  });

const lookupRegisterPostalCode = () =>
  lookupPostalCodeForTargets({
    cpInput: registerCpInput,
    cityInput: registerCityInput,
    provinceSelect: registerProvinceSelect,
    hintEl: registerHint,
  });

const validateCheckout = () => {
  if (
    !checkoutNameInput ||
    !checkoutLastNameInput ||
    !checkoutEmailInput ||
    !checkoutPhoneInput ||
    !checkoutProvinceSelect ||
    !checkoutCpInput ||
    !checkoutCityInput
  ) {
    return { ok: false, message: 'No se encontro el formulario de datos.' };
  }

  const name = checkoutNameInput.value.trim();
  const lastName = checkoutLastNameInput.value.trim();
  const email = checkoutEmailInput.value.trim();
  const phone = normalizePhone(checkoutPhoneInput.value.trim());
  const province = checkoutProvinceSelect.value.trim();
  const cp = checkoutCpInput.value.trim();
  const city = checkoutCityInput.value.trim();

  if (!name || !lastName || !email || !phone || !province || !cp || !city) {
    return {
      ok: false,
      message: 'Completá nombre, apellido, email, telefono, provincia, codigo postal y localidad.',
    };
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!emailOk) {
    return { ok: false, message: 'Ingresá un email valido.' };
  }

  if (phone.length < 10) {
    return { ok: false, message: 'Ingresá un telefono valido para coordinar por WhatsApp.' };
  }

  return { ok: true };
};

const buildCartWhatsappLink = (enforceValidation = false) => {
  const session = loadCustomerSession();

  if (!session.loggedIn) {
    if (enforceValidation && checkoutHint) {
      checkoutHint.textContent = 'Para comprar tenés que iniciar sesión con tu cuenta registrada.';
    }

    return '#';
  }

  if (cart.length === 0) {
    return buildWhatsappLink();
  }

  const checkoutValidation = validateCheckout();

  if (!checkoutValidation.ok) {
    if (enforceValidation && checkoutHint) {
      checkoutHint.textContent = checkoutValidation.message;
    }

    return '#';
  }

  const quote = getShippingQuote();
  const subtotal = quote.subtotal;
  const promoText =
    quote.promo === 'free'
      ? 'PROMO ENVIO GRATIS aplicado 🎁'
      : quote.promo === 'half'
        ? 'PROMO 50% DE ENVIO aplicado 🎁 1/2'
        : 'Sin promo de envio';

  const lines = cart.map((item) => {
    const parts = [`- ${item.quantity} x ${item.title}`];

    if (item.price) {
      parts.push(`(${item.price})`);
    }

    return parts.join(' ');
  });

  const message = [
    'Hola! Quiero consultar por este pedido de Dulce Bebe:',
    '',
    `Cliente: ${checkoutNameInput.value.trim()} ${checkoutLastNameInput.value.trim()}`,
    `Email: ${checkoutEmailInput.value.trim()}`,
    `Telefono: ${formatPhoneDisplay(checkoutPhoneInput.value.trim())}`,
    `Provincia: ${checkoutProvinceSelect.value.trim()}`,
    `Codigo postal: ${checkoutCpInput.value.trim()}`,
    `Localidad: ${checkoutCityInput.value.trim()}`,
    '',
    ...lines,
    '',
    `Subtotal productos: ${formatMoneyAr(subtotal)}`,
    `Envio ViaCargo base: ${formatMoneyAr(quote.base)}`,
    `Envio ViaCargo final: ${formatMoneyAr(quote.final)}`,
    promoText,
    '',
    'Quisiera coordinar envio y forma de pago.',
  ].join('\n');

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};

const getItemId = (sectionId, item) => `${sectionId}::${slugify(item.title)}`;

const renderCart = () => {
  if (!cartItemsRoot || !cartCount || !cartSendBtn || !cartEmptyText) {
    return;
  }

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const session = loadCustomerSession();
  cartCount.textContent = String(totalItems);
  updateShippingSummary();
  cartSendBtn.href = buildCartWhatsappLink(false);
  cartSendBtn.target = '_blank';
  cartSendBtn.rel = 'noreferrer';

  if (cart.length === 0) {
    cartItemsRoot.innerHTML = '';
    cartEmptyText.hidden = false;
    cartSendBtn.classList.add('is-disabled');
    cartClearBtn?.setAttribute('disabled', 'disabled');
    return;
  }

  cartEmptyText.hidden = true;

  if (!session.loggedIn) {
    cartSendBtn.classList.add('is-disabled');
    cartSendBtn.href = '#';

    if (checkoutHint) {
      checkoutHint.textContent = 'Para comprar tenés que iniciar sesión con tu cuenta registrada.';
    }
  } else {
    cartSendBtn.classList.remove('is-disabled');
  }

  cartClearBtn?.removeAttribute('disabled');

  cartItemsRoot.innerHTML = cart
    .map(
      (item) => `
        <article class="cart-item-row">
          <img class="cart-item-image" src="${assetPath(item.image)}" alt="${item.title}" />
          <div class="cart-item-copy">
            <p class="cart-item-title">${item.title}</p>
            <p class="cart-item-meta">${item.label}${item.price ? ` · ${item.price}` : ''}</p>
            <div class="cart-item-controls">
              <button type="button" class="qty-btn" data-cart-action="decrease" data-cart-id="${item.id}">-</button>
              <span class="qty-value">${item.quantity}</span>
              <button type="button" class="qty-btn" data-cart-action="increase" data-cart-id="${item.id}">+</button>
              <button type="button" class="cart-remove-btn" data-cart-action="remove" data-cart-id="${item.id}">Quitar</button>
            </div>
          </div>
        </article>
      `,
    )
    .join('');

  cartSendBtn.href = buildCartWhatsappLink(false);
};

const openCart = () => {
  if (!cartDrawer || !cartOverlay) {
    return;
  }

  cartDrawer.classList.add('is-open');
  cartDrawer.setAttribute('aria-hidden', 'false');
  cartOverlay.hidden = false;
};

const closeCart = () => {
  if (!cartDrawer || !cartOverlay) {
    return;
  }

  cartDrawer.classList.remove('is-open');
  cartDrawer.setAttribute('aria-hidden', 'true');
  cartOverlay.hidden = true;
};

const addToCart = (sectionId, item) => {
  const session = loadCustomerSession();

  if (!session.loggedIn) {
    if (catalogSummary) {
      catalogSummary.textContent = 'Iniciá sesión para poder comprar.';
    }

    openLogin();
    return;
  }

  const itemId = getItemId(sectionId, item);
  const availableStock = normalizeStock(item.stock);

  if (availableStock <= 0) {
    if (catalogSummary) {
      catalogSummary.textContent = `${item.title}: sin stock disponible.`;
    }

    return;
  }

  const existing = cart.find((entry) => entry.id === itemId);

  if (existing) {
    if (existing.quantity >= availableStock) {
      if (catalogSummary) {
        catalogSummary.textContent = `${item.title}: alcanzaste el stock disponible (${availableStock}).`;
      }

      return;
    }

    existing.quantity += 1;
  } else {
    cart.unshift({
      id: itemId,
      sectionId,
      title: item.title,
      label: item.label || 'Producto',
      price: item.price || '',
      image: item.images?.[0] || '',
      stock: availableStock,
      quantity: 1,
    });
  }

  saveCart(cart);
  renderCart();
  openCart();
};

const updateCartItemQuantity = (itemId, delta) => {
  const item = cart.find((entry) => entry.id === itemId);

  if (!item) {
    return;
  }

  item.quantity += delta;

  if (item.quantity <= 0) {
    cart = cart.filter((entry) => entry.id !== itemId);
  }

  saveCart(cart);
  renderCart();
};

const removeCartItem = (itemId) => {
  cart = cart.filter((entry) => entry.id !== itemId);
  saveCart(cart);
  renderCart();
};

const renderThumbs = (item) => {
  if (item.images.length === 1) {
    return '';
  }

  return `
    <div class="thumb-wrap">
      <p class="thumb-caption">Más fotitos</p>
      <div class="thumb-strip" aria-label="Más fotos de ${item.title}">
        ${item.images
          .map(
            (image, index) => `
              <button
                type="button"
                class="thumb-btn${index === 0 ? ' is-active' : ''}"
                data-image="${assetPath(image)}"
                data-alt="${item.title} · vista ${index + 1}"
                aria-label="Ver ${item.title} en la vista ${index + 1}"
              >
                <img src="${assetPath(image)}" alt="" />
              </button>
            `,
          )
          .join('')}
      </div>
    </div>
  `;
};

const renderItem = (item, helper, sectionId) => `
  ${(() => {
    const stock = normalizeStock(item.stock);
    const stockClass = stock <= 0 ? 'stock-badge is-out' : stock === 1 ? 'stock-badge is-last' : 'stock-badge';
    const stockLabel = stock <= 0 ? 'Sin stock' : stock === 1 ? 'Último disponible' : `Stock: ${stock}`;
    const disableAdd = stock <= 0 ? 'disabled' : '';

    return `
  <article class="catalog-card reveal" data-section-id="${sectionId}" data-item-id="${getItemId(sectionId, item)}">
    <div class="catalog-media">
      ${item.promo ? `<span class="item-promo">${item.promo}</span>` : ''}
      <span class="${stockClass}">${stockLabel}</span>
      <img
        class="catalog-main-image"
        src="${assetPath(item.images[0])}"
        alt="${item.title}"
        loading="lazy"
      />
    </div>
    <div class="catalog-body">
      <div class="catalog-meta">
        <span>${item.label}</span>
      </div>
      <h3>${item.title}</h3>
      ${item.price ? `<p class="item-price">${item.price}</p>` : ''}
      ${renderThumbs(item)}
      <div class="catalog-footer">
        <p>${helper}</p>
        <div class="catalog-cta-row">
          <button type="button" class="cart-add-btn" data-cart-add="${getItemId(sectionId, item)}" ${disableAdd}>Agregar</button>
          <a href="${buildWhatsappLink(item.title)}" class="consult-link js-whatsapp-link" target="_blank" rel="noreferrer">Consultar</a>
        </div>
      </div>
    </div>
  </article>
`;
  })()}
`;

const renderFeaturedItem = (item, sectionId) => `
  ${(() => {
    const stock = normalizeStock(item.stock);
    const stockClass = stock <= 0 ? 'stock-badge is-out' : stock === 1 ? 'stock-badge is-last' : 'stock-badge';
    const stockLabel = stock <= 0 ? 'Sin stock' : stock === 1 ? 'Último disponible' : `Stock: ${stock}`;
    const disableAdd = stock <= 0 ? 'disabled' : '';

    return `
  <article class="catalog-card featured-card reveal" data-section-id="${sectionId}" data-item-id="${getItemId(sectionId, item)}">
    <div class="catalog-media">
      ${item.promo ? `<span class="item-promo">${item.promo}</span>` : ''}
      <span class="${stockClass}">${stockLabel}</span>
      <img
        class="catalog-main-image"
        src="${assetPath(item.images[0])}"
        alt="${item.title}"
        loading="lazy"
      />
    </div>
    <div class="catalog-body">
      <div class="catalog-meta">
        <span>${item.label}</span>
      </div>
      <h3>${item.title}</h3>
      ${item.price ? `<p class="item-price">${item.price}</p>` : ''}
      <div class="catalog-footer">
        <p>Consultanos por este producto.</p>
        <div class="catalog-cta-row">
          <button type="button" class="cart-add-btn" data-cart-add="${getItemId(sectionId, item)}" ${disableAdd}>Agregar</button>
          <a href="${buildWhatsappLink(item.title)}" class="consult-link js-whatsapp-link" target="_blank" rel="noreferrer">Consultar</a>
        </div>
      </div>
    </div>
  </article>
`;
  })()}
`;

const renderSection = (section) => `
  <section class="catalog-section reveal" id="${section.id}">
    <div class="catalog-section-head">
      <div>
        <span class="catalog-section-kicker">${section.kicker}</span>
        <h3>${section.title}</h3>
      </div>
      <p>${section.description}</p>
    </div>
    <div class="catalog-grid">
      ${section.items.map((item) => renderItem(item, section.helper, section.id)).join('')}
    </div>
  </section>
`;

if (menuBtn && nav) {
  const closeMenu = () => {
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  };

  menuBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !menuBtn.contains(event.target)) {
      closeMenu();
    }
  });
}

if (catalogRoot) {
  renderCatalogUI();

  if (catalogSummary) {
    catalogSummary.textContent = 'Viendo selección destacada.';
  }

  if (toggleCatalogBtn) {
    toggleCatalogBtn.addEventListener('click', () => {
      const isCollapsed = catalogRoot.classList.toggle('is-collapsed');

      if (isCollapsed) {
        toggleCatalogBtn.textContent = 'Ver más productos';

        if (catalogSummary) {
          catalogSummary.textContent = 'Viendo selección destacada.';
        }

        return;
      }

      toggleCatalogBtn.textContent = 'Ver menos productos';

      if (catalogSummary) {
        catalogSummary.textContent = 'Mostrando catálogo completo.';
      }
    });
  }

  catalogRoot.addEventListener('click', (event) => {
    const addButton = event.target.closest('[data-cart-add]');

    if (addButton) {
      const match = itemIndex.get(addButton.dataset.cartAdd || '');

      if (match) {
        addToCart(match.sectionId, match.item);
      }

      return;
    }

    const thumb = event.target.closest('.thumb-btn');

    if (!thumb) {
      return;
    }

    const card = thumb.closest('.catalog-card');
    const mainImage = card?.querySelector('.catalog-main-image');

    if (!card || !mainImage) {
      return;
    }

    mainImage.classList.remove('is-swapping');
    void mainImage.offsetWidth;
    mainImage.src = thumb.dataset.image || mainImage.src;
    mainImage.alt = thumb.dataset.alt || mainImage.alt;
    mainImage.classList.add('is-swapping');

    card.querySelectorAll('.thumb-btn').forEach((button) => {
      button.classList.remove('is-active');
    });

    thumb.classList.add('is-active');
  });

  featuredRoot?.addEventListener('click', (event) => {
    const addButton = event.target.closest('[data-cart-add]');

    if (!addButton) {
      return;
    }

    const match = itemIndex.get(addButton.dataset.cartAdd || '');

    if (match) {
      addToCart(match.sectionId, match.item);
    }
  });

  window.addEventListener('storage', (event) => {
    if (event.key !== catalogStorageKey) {
      return;
    }

    refreshCatalogFromStorage();
    renderCatalogUI();

    if (catalogSummary) {
      catalogSummary.textContent = 'Catálogo actualizado desde admin.';
    }
  });
}

cartItemsRoot?.addEventListener('click', (event) => {
  const button = event.target.closest('[data-cart-action]');

  if (!button) {
    return;
  }

  const action = button.dataset.cartAction;
  const itemId = button.dataset.cartId || '';

  if (action === 'increase') {
    updateCartItemQuantity(itemId, 1);
    return;
  }

  if (action === 'decrease') {
    updateCartItemQuantity(itemId, -1);
    return;
  }

  if (action === 'remove') {
    removeCartItem(itemId);
  }
});

openCartBtn?.addEventListener('click', openCart);
closeCartBtn?.addEventListener('click', closeCart);
cartOverlay?.addEventListener('click', closeCart);
cartClearBtn?.addEventListener('click', () => {
  cart = [];
  saveCart(cart);
  renderCart();
});

openRegisterBtn?.addEventListener('click', openRegister);
openLoginBtn?.addEventListener('click', openLogin);
logoutBtn?.addEventListener('click', () => {
  clearCustomerSession();
  updateRegisterButtonState();
  renderCart();

  if (catalogSummary) {
    catalogSummary.textContent = 'Sesión cerrada. Iniciá sesión para comprar.';
  }
});
closeRegisterBtn?.addEventListener('click', closeRegister);
registerOverlay?.addEventListener('click', closeRegister);
closeLoginBtn?.addEventListener('click', closeLogin);
loginOverlay?.addEventListener('click', closeLogin);

registerForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  if (
    !registerNameInput ||
    !registerLastNameInput ||
    !registerEmailInput ||
    !registerPhoneInput ||
    !registerPasswordInput ||
    !registerProvinceSelect ||
    !registerCpInput ||
    !registerCityInput
  ) {
    return;
  }

  const email = registerEmailInput.value.trim();
  const phone = normalizePhone(registerPhoneInput.value.trim());
  const password = registerPasswordInput.value.trim();
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!emailOk) {
    if (registerHint) {
      registerHint.textContent = 'Ingresá un email valido para continuar.';
    }

    return;
  }

  if (phone.length < 10) {
    if (registerHint) {
      registerHint.textContent = 'Ingresá un telefono valido para continuar.';
    }

    return;
  }

  if (password.length < 4) {
    if (registerHint) {
      registerHint.textContent = 'La clave debe tener al menos 4 caracteres.';
    }

    return;
  }

  const profile = {
    name: registerNameInput.value.trim(),
    lastName: registerLastNameInput.value.trim(),
    email,
    phone,
    password,
    province: registerProvinceSelect.value,
    cp: registerCpInput.value.trim(),
    city: registerCityInput.value.trim(),
  };

  if (
    !profile.name ||
    !profile.lastName ||
    !profile.email ||
    !profile.phone ||
    !profile.password ||
    !profile.province ||
    !profile.cp ||
    !profile.city
  ) {
    if (registerHint) {
      registerHint.textContent = 'Todos los datos son obligatorios para completar el registro.';
    }

    return;
  }

  saveCustomerProfile(profile);
  upsertRegisteredCustomer(profile);
  syncProfileToCheckout(profile);
  saveCheckout();
  // No iniciar sesión automáticamente al registrarse
  updateShippingSummary();

  if (registerHint) {
    registerHint.textContent = 'Registro exitoso. Ahora podés iniciar sesión para hacer tu pedido.';
  }

  closeRegister();
});

loginForm?.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (!loginEmailInput || !loginPasswordInput) {
    return;
  }

  const email = loginEmailInput.value.trim();
  const password = loginPasswordInput.value.trim();

  if (!email || !password) {
    if (loginHint) {
      loginHint.textContent = 'Completá email y clave para iniciar sesión.';
    }

    return;
  }

  const customer = await findCustomerByEmailAndPassword(email, password);

  if (!customer) {
    if (loginHint) {
      loginHint.textContent = 'Email o clave incorrectos. Revisá tus datos.';
    }

    return;
  }

  const profile = {
    name: customer.name || '',
    lastName: customer.lastName || '',
    email: customer.email || '',
    phone: customer.phone || '',
    password: customer.password || '',
    province: customer.province || 'Misiones',
    cp: customer.cp || '',
    city: customer.city || '',
  };

  saveCustomerProfile(profile);
  syncProfileToCheckout(profile);
  saveCheckout();
  saveCustomerSession({ loggedIn: true, email: customer.email || '' });
  updateShippingSummary();
  updateRegisterButtonState();

  if (loginHint) {
    loginHint.textContent = 'Sesión iniciada. Tus datos ya están cargados en el pedido.';
  }

  closeLogin();
});

populateProvinceSelect();
hydrateCheckout();
hydrateRegister();
purgeStoredCustomerSession();
updateRegisterButtonState();
updateShippingSummary();

[checkoutNameInput, checkoutLastNameInput, checkoutEmailInput, checkoutPhoneInput, checkoutProvinceSelect, checkoutCpInput, checkoutCityInput]
  .filter(Boolean)
  .forEach((input) => {
    input.addEventListener('input', () => {
      saveCheckout();
      updateShippingSummary();

      if (cartSendBtn) {
        cartSendBtn.href = buildCartWhatsappLink(false);
      }
    });
  });

checkoutCpInput?.addEventListener('blur', lookupCheckoutPostalCode);
registerCpInput?.addEventListener('blur', lookupRegisterPostalCode);

cartSendBtn?.addEventListener('click', (event) => {
  const link = buildCartWhatsappLink(true);

  if (link === '#') {
    event.preventDefault();
    return;
  }

  cartSendBtn.href = link;
});

whatsappLinks.forEach((link) => {
  if (link.classList.contains('consult-link')) {
    return;
  }

  link.href = buildWhatsappLink();
  link.target = '_blank';
  link.rel = 'noreferrer';
});
