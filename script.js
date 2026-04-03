const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.main-nav');
const catalogRoot = document.querySelector('#productos');
const featuredRoot = document.querySelector('#catalog-featured');
const catalogSummary = document.querySelector('#catalog-summary');
const toggleCatalogBtn = document.querySelector('#toggle-catalog-btn');
const whatsappLinks = document.querySelectorAll('.js-whatsapp-link');
const whatsappNumber = '5493757633601';
const defaultWhatsappMessage = 'Hola! Quería hacer una consulta sobre Dulce Bebé. ¿Me podrían ayudar?';
const catalogStorageKey = 'dulcebebe.catalog.v1';

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

const loadCatalogSections = () => {
  try {
    const raw = localStorage.getItem(catalogStorageKey);

    if (!raw) {
      return cloneData(defaultCatalogSections);
    }

    const parsed = JSON.parse(raw);

    if (!Array.isArray(parsed) || parsed.length === 0) {
      return cloneData(defaultCatalogSections);
    }

    return parsed;
  } catch (_error) {
    return cloneData(defaultCatalogSections);
  }
};

const saveCatalogSections = (sections) => {
  localStorage.setItem(catalogStorageKey, JSON.stringify(sections));
};

let catalogSections = loadCatalogSections();

if (!localStorage.getItem(catalogStorageKey)) {
  saveCatalogSections(catalogSections);
}

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

const buildWhatsappLink = (productName) => {
  const message = productName
    ? `Hola! Vi ${productName} en la página de Dulce Bebé y quería hacer una consulta. ¿Me podrían ayudar?`
    : defaultWhatsappMessage;

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
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

const renderItem = (item, helper) => `
  <article class="catalog-card reveal">
    <div class="catalog-media">
      ${item.promo ? `<span class="item-promo">${item.promo}</span>` : ''}
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
        <a href="${buildWhatsappLink(item.title)}" class="consult-link js-whatsapp-link" target="_blank" rel="noreferrer">Consultar</a>
      </div>
    </div>
  </article>
`;

const renderFeaturedItem = (item) => `
  <article class="catalog-card featured-card reveal">
    <div class="catalog-media">
      ${item.promo ? `<span class="item-promo">${item.promo}</span>` : ''}
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
        <a href="${buildWhatsappLink(item.title)}" class="consult-link js-whatsapp-link" target="_blank" rel="noreferrer">Consultar</a>
      </div>
    </div>
  </article>
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
      ${section.items.map((item) => renderItem(item, section.helper)).join('')}
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
  const allItems = catalogSections.flatMap((section) => section.items);
  const featuredItems = featuredTitles
    .map((title) => allItems.find((item) => item.title === title))
    .filter(Boolean);

  if (featuredRoot) {
    featuredRoot.innerHTML = featuredItems.map((item) => renderFeaturedItem(item)).join('');
  }

  catalogRoot.innerHTML = catalogSections.map((section) => renderSection(section)).join('');

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
}

whatsappLinks.forEach((link) => {
  if (link.classList.contains('consult-link')) {
    return;
  }

  link.href = buildWhatsappLink();
  link.target = '_blank';
  link.rel = 'noreferrer';
});
