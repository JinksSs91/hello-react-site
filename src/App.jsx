import { useEffect, useRef, useState } from 'react'
import logoImage from './assets/vintara-logo.jpg'
import phoneLamp01 from './assets/products/retro-telephone-lamp-01.jpg'
import phoneLamp02 from './assets/products/retro-telephone-lamp-02.jpg'
import phoneLamp03 from './assets/products/retro-telephone-lamp-03.jpg'
import phoneLamp04 from './assets/products/retro-telephone-lamp-04.jpg'
import viliaLamp01 from './assets/products/vilia-camera-lamp-01.jpg'
import viliaLamp02 from './assets/products/vilia-camera-lamp-02.jpg'
import viliaLamp03 from './assets/products/vilia-camera-lamp-03.jpg'
import viliaLamp05 from './assets/products/vilia-camera-lamp-05.jpg'
import redTa900Lamp01 from './assets/products/red-ta-900-telephone-lamp-01.jpg'
import redTa900Lamp02 from './assets/products/red-ta-900-telephone-lamp-02.jpg'
import homeHeroBlackPhone from './assets/home/home-hero-black-phone-clean.jpg'
import homeWhitePhone from './assets/home/home-white-phone.jpg'
import homeClockLamp from './assets/home/home-clock-lamp.jpg'
import homeBluePhone from './assets/home/home-blue-phone.jpg'
import './App.css'

const instagramUrl = 'https://www.instagram.com/our.vintage.lights/'
const emailAddress = 'vintarastudio@yahoo.com'
const viberPhone = '+359899161880'
const navigationPages = [
  'home',
  'available',
  'sold',
  'reviews',
  'about',
  'contacts',
]

const pages = {
  home: { bg: '/', en: '/en' },
  available: { bg: '/available-lamps', en: '/en/available-lamps' },
  sold: { bg: '/sold-lamps', en: '/en/sold-lamps' },
  reviews: { bg: '/customer-reviews', en: '/en/customer-reviews' },
  about: { bg: '/about-us', en: '/en/about-us' },
  contacts: { bg: '/contacts', en: '/en/contacts' },
}

const productRoutes = {
  'retro-telephone-lamp': {
    bg: '/lamps/retro-telephone-lamp',
    en: '/en/lamps/retro-telephone-lamp',
  },
  'vilia-camera-lamp': {
    bg: '/lamps/vilia-camera-lamp',
    en: '/en/lamps/vilia-camera-lamp',
  },
  'red-ta-900-telephone-lamp': {
    bg: '/lamps/red-ta-900-telephone-lamp',
    en: '/en/lamps/red-ta-900-telephone-lamp',
  },
}

const content = {
  bg: {
    languageLabel: 'Език',
    nav: {
      home: 'Начало',
      available: 'Налични лампи',
      sold: 'Продадени лампи',
      reviews: 'Отзиви от клиенти',
      about: 'За нас',
      contacts: 'Контакти',
    },
    home: {
      slogan: 'Втори живот за забравената техника',
      kicker: 'Ръчна изработка с внимание към всеки детайл',
      title: 'Осветление с история',
      intro:
        'Ръчно изработени винтидж лампи от стари телефони, фотоапарати, радиа и настолни часовници.',
      story:
        'Даваме нов живот на забравени предмети и ги превръщаме в артистично осветление за домове, студиа, офиси и арт пространства.',
      contactCta: 'Свържи се с нас',
      highlights: [
        ['Ръчна изработка', 'Всеки детайл се обработва и сглобява внимателно.'],
        ['Единствени по рода си лампи', 'Всяка лампа е с уникален дизайн'],
        ['Upcycling дизайн', 'Старото става функционално, красиво и различно.'],
      ],
      imageStripTitle: 'Ръчно изработени винтидж лампи с характер.',
      ctaTitle: 'Разгледай колекцията',
      ctaText:
        'Открий своята уникална лампа и добави характер към пространството си.',
      cta: 'Разгледай наличните лампи',
    },
    available: {
      kicker: 'Налични лампи',
      title: 'Готови лампи, които търсят своя нов дом.',
      text:
        'Всеки продукт е единствен по рода си. За цена, доставка и допълнителни кадри ни пиши или ни се обади',
    },
    sold: {
      kicker: 'Продадени лампи',
      title: 'Минали проекти, които вече имат нов дом.',
      text:
        'Ако харесаш продаден модел, можем да обсъдим сходна идея според наличните винтидж предмети.',
      badge: 'Продадено',
      cta: 'Попитай за подобна лампа',
    },
    reviews: {
      kicker: 'Отзиви от клиенти',
      title: 'Историите продължават в домовете на нашите клиенти.',
      text:
        'Тук ще споделяме снимки, Instagram stories и автентична обратна връзка от хората, избрали лампа на E&K Vintara Studio.',
      upcoming: 'Очаквайте скоро',
      cards: [
        [
          'Instagram stories',
          'Споделени моменти с лампите в техния нов дом.',
          'story',
        ],
        [
          'Писмени отзиви',
          'Реални впечатления за изработката, светлината и доставката.',
          'message',
        ],
        [
          'Снимки от клиенти',
          'Автентични кадри на завършените лампи в различни интериори.',
          'photo',
        ],
      ],
    },
    about: {
      kicker: 'За нас',
      title: 'E&K Vintara Studio дава втори живот на предмети с душа.',
      text:
        'Създаваме лампи от автентични винтидж телефони, фотоапарати, радиа и часовници. Подбираме всеки предмет по форма, патина и история, след което го превръщаме в функционален интериорен акцент.',
      points: [
        'Ръчна изработка',
        'Устойчив upcycling подход',
        'Единствен характер',
        'Ретро естетика с модерна функция',
      ],
    },
    contacts: {
      kicker: 'Контакти',
      title: 'Свържи се с нас за цена, доставка или изработка на лампа по твой дизайн.',
      text:
        'Най-бързият начин е чрез съобщение в Instagram. Можеш също да ни изпратиш имейл, да се свържеш с нас във Viber или да ни се обадиш на посочения телефонен номер.',
      instagram: 'Instagram',
      email: 'Имейл',
      viber: 'Viber',
      instagramCta: 'Отвори Instagram',
      emailCta: 'Изпрати имейл',
      viberCta: 'Обади се',
    },
    product: {
      back: 'Назад към наличните лампи',
      available: 'Продава се',
      price: 'Цена при запитване',
      cta: 'Пиши за цена и доставка',
      details: 'Виж детайли',
      gallery: 'Допълнителни снимки',
      dmHint: 'Пиши ни на лично в Instagram и изпрати името на продукта.',
      openImage: 'Отвори снимка',
      closeGallery: 'Затвори галерията',
      previousImage: 'Предишна снимка',
      nextImage: 'Следваща снимка',
      imageCount: 'Снимка',
      imageCountOf: 'от',
    },
    footer: 'ръчно изработени винтидж лампи',
  },
  en: {
    languageLabel: 'Language',
    nav: {
      home: 'Home',
      available: 'Available Lamps',
      sold: 'Sold Lamps',
      reviews: 'Customer Reviews',
      about: 'About us',
      contacts: 'Contacts',
    },
    home: {
      slogan: 'A second life for forgotten technology',
      kicker: 'Handmade with attention to every detail',
      title: 'Lighting with a story',
      intro:
        'Handmade vintage lamps created from old telephones, cameras, radios, and desk clocks.',
      story:
        'We give forgotten objects a new life and turn them into artistic lighting for homes, studios, offices, and art spaces.',
      contactCta: 'Contact us',
      highlights: [
        ['Handmade craft', 'Every detail is carefully restored and assembled.'],
        ['One-of-a-kind lamps', 'Every lamp has a unique design.'],
        ['Upcycled design', 'The old becomes functional, beautiful, and different.'],
      ],
      imageStripTitle: 'Handmade vintage lamps with character.',
      ctaTitle: 'Explore the collection',
      ctaText: 'Find your unique lamp and add character to your space.',
      cta: 'View available lamps',
    },
    available: {
      kicker: 'Available Lamps',
      title: 'Ready lamps looking for their new home.',
      text:
        'Each product is one of a kind. For price, delivery, and extra photos, message us or call us.',
    },
    sold: {
      kicker: 'Sold Lamps',
      title: 'Past projects that already found a new home.',
      text:
        'If you like a sold piece, we can discuss a similar idea based on the vintage objects we currently have.',
      badge: 'Sold',
      cta: 'Ask for a similar lamp',
    },
    reviews: {
      kicker: 'Customer Reviews',
      title: 'The stories continue in our customers’ homes.',
      text:
        'Here we will share photos, Instagram stories, and authentic feedback from people who chose an E&K Vintara Studio lamp.',
      upcoming: 'Coming soon',
      cards: [
        [
          'Instagram stories',
          'Shared moments featuring the lamps in their new homes.',
          'story',
        ],
        [
          'Written reviews',
          'Real impressions of the craftsmanship, light, and delivery.',
          'message',
        ],
        [
          'Customer photos',
          'Authentic images of finished lamps in different interiors.',
          'photo',
        ],
      ],
    },
    about: {
      kicker: 'About us',
      title: 'E&K Vintara Studio gives a second life to objects with soul.',
      text:
        'We create lamps from authentic vintage telephones, cameras, radios, and clocks. Each object is chosen for its shape, patina, and story, then transformed into a functional interior accent.',
      points: [
        'Handmade craft',
        'Sustainable upcycling',
        'One-of-one character',
        'Retro aesthetics with modern function',
      ],
    },
    contacts: {
      kicker: 'Contacts',
      title: 'Contact us for price, delivery, or a lamp made to your own design.',
      text:
        'The fastest way is by message on Instagram. You can also email us, contact us on Viber, or call the listed phone number.',
      instagram: 'Instagram',
      email: 'Email',
      viber: 'Viber',
      instagramCta: 'Open Instagram',
      emailCta: 'Send email',
      viberCta: 'Call',
    },
    product: {
      back: 'Back to available lamps',
      available: 'Available',
      price: 'Price on request',
      cta: 'Ask about price and delivery',
      details: 'View details',
      gallery: 'Additional photos',
      dmHint: 'Message us on Instagram and send the product name.',
      openImage: 'Open image',
      closeGallery: 'Close gallery',
      previousImage: 'Previous image',
      nextImage: 'Next image',
      imageCount: 'Image',
      imageCountOf: 'of',
    },
    footer: 'handmade vintage lights',
  },
}

const phoneLamp = {
  slug: 'retro-telephone-lamp',
  routes: productRoutes['retro-telephone-lamp'],
  titleBg: 'Телефон с шайба от 70-те години на 20 век',
  titleEn: '1970s Rotary Telephone Lamp',
  summaryBg:
    'Винтидж телефон, получил нов живот като уникална лампа с топла Edison LED крушка.',
  summaryEn:
    'A vintage telephone brought back to life as a unique lamp with a warm Edison LED bulb.',
  images: [phoneLamp01, phoneLamp02, phoneLamp03, phoneLamp04],
  descriptionBg: [
    '✨ПРОДАВА СЕ☎️✨ Винтидж телефон, получил нов живот, в отлично състояние.',
    'Ръчно превърнат в уникална лампа с топла Edison LED крушка - перфектен акцент за уютен дом, офис, студио или ретро кът.',
    'Всеки детайл е запазен, за да носи духа на миналото, но с модерна функция и атмосфера. 📞➡️💡',
    'Този модел ротационни телефони е характерен за Източна Европа от 70-те и 80-те години - здрав, тежък и създаден да издържи десетилетия.',
    'Навремето такива телефони са били символ на стил и престиж в дома, а днес се превръщат в истински винтидж декор.',
    'Перфектен подарък за любители на ретро техника, индустриален дизайн и нестандартен интериор.',
    '📩 Пиши на лично за цена и доставка.',
  ],
  descriptionEn: [
    '✨FOR SALE☎️✨ A vintage telephone brought back to life, in excellent condition.',
    'Handmade into a unique lamp with a warm Edison LED bulb - a perfect accent for a cozy home, office, studio, or retro corner.',
    'Every detail has been preserved to carry the spirit of the past, now with modern function and atmosphere. 📞➡️💡',
    'This style of rotary telephone was common in Eastern Europe during the 1970s and 1980s - solid, heavy, and built to last for decades.',
    'At the time, phones like this were a symbol of style and prestige in the home. Today, they become true vintage decor.',
    'A perfect gift for lovers of retro technology, industrial design, and unusual interiors.',
    '📩 Message us for price and delivery.',
  ],
  featuresBg: [
    'Ръчна изработка',
    'Работеща лампа',
    'Топла уютна светлина',
    'Единствен по рода си',
  ],
  featuresEn: [
    'Handmade',
    'Working lamp',
    'Warm cozy light',
    'One of a kind',
  ],
}

const viliaLamp = {
  slug: 'vilia-camera-lamp',
  routes: productRoutes['vilia-camera-lamp'],
  titleBg: 'Фотоапарат Вилия от 1980г.',
  titleEn: 'Vilia Camera from 1980',
  summaryBg:
    'Ръчно изработена лампа от vintage фотоапарат Vilia с топла Edison крушка.',
  summaryEn:
    'Handmade lamp created from a vintage Vilia camera with a warm Edison bulb.',
  images: [viliaLamp01, viliaLamp02, viliaLamp03, viliaLamp05],
  descriptionBg: [
    '✨ПРОДАВА СЕ✨📸✨ Ръчно изработена лампа от vintage фотоапарат Vilia - истинска класика от СССР, произвеждана през 70-те и 80-те години.',
    'Със своя емблематичен Triplet 69-3 обектив и автентичен ретро дизайн, този апарат получава нов живот като cozy decor лампа с топла Edison крушка.',
    'Перфектен акцент за vintage интериор, студио или подарък за любител на аналоговата фотография.',
  ],
  descriptionEn: [
    '✨FOR SALE✨📸✨ A handmade lamp created from a vintage Vilia camera - a true Soviet classic produced during the 1970s and 1980s.',
    'With its iconic Triplet 69-3 lens and authentic retro design, this camera gets a new life as a cozy decor lamp with a warm Edison bulb.',
    'A perfect accent for a vintage interior, studio, or a gift for someone who loves analog photography.',
  ],
  featuresBg: [
    'Ръчна изработка',
    'Vilia vintage фотоапарат',
    'Топла Edison крушка',
    'Единствена по рода си',
  ],
  featuresEn: [
    'Handmade',
    'Vilia vintage camera',
    'Warm Edison bulb',
    'One of a kind',
  ],
}

const redTa900Lamp = {
  slug: 'red-ta-900-telephone-lamp',
  routes: productRoutes['red-ta-900-telephone-lamp'],
  titleBg: 'Чисто нов червен телефон с шайба от 1991г',
  titleEn: 'Brand New Red Rotary Telephone from 1991',
  summaryBg:
    'Оригинален ретро телефон TA-900 от 1991 г., ръчно преобразен в уникална лампа.',
  summaryEn:
    'An original TA-900 retro telephone from 1991, handmade into a unique lamp.',
  images: [redTa900Lamp01, redTa900Lamp02],
  descriptionBg: [
    '✨ПРОДАВА СЕ ✨💡📞 Когато миналото срещне модерния уют...',
    'Представям ти една наистина специална лампа - създадена от оригинален ретро телефон ТА-900, произведен през 1991 г. в Белоградчик (ИНКОМС).',
    'Най-интересното? Телефонът е чисто нов - никога не е използван, запазен десетилетия в оригиналния си кашон, с оригинален етикет, ръководство за експлоатация, автентични печати и маркировки.',
    'Преобразен ръчно в лампа, той запазва душата на миналото, но носи топлина и стил в съвременния дом.',
    'Подходяща за хол, спалня или офис, подарък с характер, стилни продуктови снимки или декор.',
    'Това не е просто лампа - това е история, която свети.',
    '📩 Пиши ми за детайли и цена.',
  ],
  descriptionEn: [
    '✨FOR SALE ✨💡📞 When the past meets modern comfort...',
    'A truly special lamp created from an original TA-900 retro telephone, produced in 1991 in Belogradchik by INCOMS.',
    'The most interesting part? The telephone is brand new - never used, preserved for decades in its original box, with the original label, user manual, authentic stamps, and markings.',
    'Handmade into a lamp, it keeps the soul of the past while bringing warmth and style into a modern home.',
    'Suitable for a living room, bedroom, office, a gift with character, product photography, or decor.',
    'This is not just a lamp - it is a story that glows.',
    '📩 Message me for details and price.',
  ],
  featuresBg: [
    'ТА-900 от 1991 г.',
    'Чисто нов телефон',
    'Ръчна изработка',
    'Топла уютна светлина',
  ],
  featuresEn: [
    'TA-900 from 1991',
    'Brand new telephone',
    'Handmade',
    'Warm cozy light',
  ],
}

const availableProducts = [phoneLamp, viliaLamp, redTa900Lamp]
const productBySlug = Object.fromEntries(
  availableProducts.map((product) => [product.slug, product]),
)

const soldProducts = [
  {
    slug: 'sold-retro-telephone-lamp',
    titleBg: 'Ретро телефон лампа',
    titleEn: 'Retro Telephone Lamp',
    summaryBg:
      'Продаден проект от автентичен винтидж телефон, превърнат във функционална декоративна лампа.',
    summaryEn:
      'Sold project made from an authentic vintage telephone transformed into a functional decorative lamp.',
  },
  {
    slug: 'sold-retro-phone-decor-light',
    titleBg: 'Ретро телефонна декор лампа',
    titleEn: 'Retro Phone Decor Light',
    summaryBg:
      'Продаден акцентен модел, съчетаващ ретро естетика и модерна топла светлина.',
    summaryEn:
      'Sold accent piece combining retro aesthetics with modern warm lighting.',
  },
]

function getRouteFromPath(pathname) {
  const normalizedPath = pathname.replace(/\/+$/, '') || '/'
  const language = normalizedPath === '/en' || normalizedPath.startsWith('/en/')
    ? 'en'
    : 'bg'
  const pathWithoutLanguage =
    language === 'en' ? normalizedPath.replace(/^\/en/, '') || '/' : normalizedPath
  const productEntry = Object.entries(productRoutes).find(
    ([, urls]) => urls.bg === pathWithoutLanguage || urls.en === normalizedPath,
  )

  if (productEntry) {
    return {
      language,
      page: 'product',
      productSlug: productEntry[0],
    }
  }

  const routeEntry = Object.entries(pages).find(
    ([, urls]) => urls.bg === pathWithoutLanguage || urls.en === normalizedPath,
  )

  return {
    language,
    page: routeEntry?.[0] || 'home',
    productSlug: null,
  }
}

function App() {
  const initialRoute = getRouteFromPath(window.location.pathname)
  const [language, setLanguage] = useState(initialRoute.language)
  const [page, setPage] = useState(initialRoute.page)
  const [productSlug, setProductSlug] = useState(initialRoute.productSlug)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const headerRef = useRef(null)
  const copy = content[language]
  const activeProduct = productSlug ? productBySlug[productSlug] : null

  useEffect(() => {
    const handleRouteChange = () => {
      const nextRoute = getRouteFromPath(window.location.pathname)
      setLanguage(nextRoute.language)
      setPage(nextRoute.page)
      setProductSlug(nextRoute.productSlug)
    }

    window.addEventListener('popstate', handleRouteChange)
    return () => window.removeEventListener('popstate', handleRouteChange)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [page, language])

  useEffect(() => {
    function handlePointerDown(event) {
      if (!headerRef.current?.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [])

  function navigateTo(href) {
    window.history.pushState({}, '', href)
    const nextRoute = getRouteFromPath(window.location.pathname)
    setLanguage(nextRoute.language)
    setPage(nextRoute.page)
    setProductSlug(nextRoute.productSlug)
    setIsMenuOpen(false)
  }

  function handleLanguageChange(event) {
    if (page === 'product' && activeProduct) {
      navigateTo(activeProduct.routes[event.target.value])
      return
    }

    navigateTo(pages[page][event.target.value])
  }

  return (
    <div className="site-shell">
      <header className="site-header" ref={headerRef}>
        <a
          className="brand-logo"
          href={pages.home[language]}
          aria-label="E&K Vintara Studio"
          onClick={(event) => {
            event.preventDefault()
            navigateTo(pages.home[language])
          }}
        >
          <img src={logoImage} alt="E&K Vintara Studio" />
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          {navigationPages.map((navPage) => (
            <a
              className={page === navPage || (page === 'product' && navPage === 'available') ? 'active' : ''}
              key={navPage}
              href={pages[navPage][language]}
              onClick={(event) => {
                event.preventDefault()
                navigateTo(pages[navPage][language])
              }}
            >
              {copy.nav[navPage]}
            </a>
          ))}
        </nav>

        <label className="language-select">
          <span>{copy.languageLabel}</span>
          <select
            value={language}
            onChange={handleLanguageChange}
            aria-label={copy.languageLabel}
          >
            <option value="bg">BG</option>
            <option value="en">EN</option>
          </select>
        </label>

        <button
          className="menu-toggle"
          type="button"
          aria-label={
            isMenuOpen
              ? language === 'bg' ? 'Затвори меню' : 'Close menu'
              : language === 'bg' ? 'Отвори меню' : 'Open menu'
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}
          id="mobile-menu"
        >
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navigationPages.map((navPage) => (
              <a
                className={page === navPage || (page === 'product' && navPage === 'available') ? 'active' : ''}
                key={navPage}
                href={pages[navPage][language]}
                onClick={(event) => {
                  event.preventDefault()
                  navigateTo(pages[navPage][language])
                }}
              >
                {copy.nav[navPage]}
              </a>
            ))}
          </nav>

          <label className="mobile-language-select">
            <span>{copy.languageLabel}</span>
            <select
              value={language}
              onChange={handleLanguageChange}
              aria-label={copy.languageLabel}
            >
              <option value="bg">BG</option>
              <option value="en">EN</option>
            </select>
          </label>
        </div>
      </header>

      <main>
        {page === 'home' && <HomePage copy={copy} language={language} navigateTo={navigateTo} />}
        {page === 'available' && (
          <AvailablePage copy={copy} language={language} navigateTo={navigateTo} />
        )}
        {page === 'sold' && <SoldPage copy={copy} language={language} />}
        {page === 'reviews' && <ReviewsPage copy={copy} />}
        {page === 'about' && <AboutPage copy={copy} />}
        {page === 'contacts' && <ContactsPage copy={copy} />}
        {page === 'product' && activeProduct && (
          <ProductPage
            copy={copy}
            language={language}
            navigateTo={navigateTo}
            product={activeProduct}
          />
        )}
      </main>

      <SiteFooter
        copy={copy}
        language={language}
        navigateTo={navigateTo}
        page={page}
      />
    </div>
  )
}

function HomePage({ copy, language, navigateTo }) {
  return (
    <section className="page home-page">
      <p className="home-slogan">{copy.home.slogan}</p>

      <div className="hero-panel">
        <div className="hero-copy">
          <p className="kicker">{copy.home.kicker}</p>
          <h1>{copy.home.title}</h1>
          <p className="hero-lead">{copy.home.intro}</p>
          <p>{copy.home.story}</p>
          <div className="hero-actions">
            <a
              className="button primary"
              href={pages.available[language]}
              onClick={(event) => {
                event.preventDefault()
                navigateTo(pages.available[language])
              }}
            >
              {copy.home.cta}
            </a>
            <a
              className="button secondary"
              href={pages.contacts[language]}
              onClick={(event) => {
                event.preventDefault()
                navigateTo(pages.contacts[language])
              }}
            >
              {copy.home.contactCta}
            </a>
          </div>
        </div>
        <figure className="hero-image-card">
          <img src={homeHeroBlackPhone} alt={copy.home.imageStripTitle} />
        </figure>
      </div>

      <div className="highlight-grid">
        {copy.home.highlights.map(([title, text]) => (
          <article className="highlight-card" key={title}>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </div>

      <div className="image-strip" aria-label={copy.home.imageStripTitle}>
        {[homeWhitePhone, homeClockLamp, homeBluePhone].map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`${copy.home.imageStripTitle} ${index + 1}`}
          />
        ))}
      </div>

      <div className="cta-band">
        <div>
          <h2>{copy.home.ctaTitle}</h2>
          <p>{copy.home.ctaText}</p>
        </div>
        <a
          className="button secondary"
          href={pages.available[language]}
          onClick={(event) => {
            event.preventDefault()
            navigateTo(pages.available[language])
          }}
        >
          {copy.home.cta}
        </a>
      </div>
    </section>
  )
}

function AvailablePage({ copy, language, navigateTo }) {
  return (
    <section className="page">
      <PageHeader
        kicker={copy.available.kicker}
        title={copy.available.title}
        text={copy.available.text}
      />
      <div className="product-grid">
        {availableProducts.map((product) => (
          <ProductCard
            key={product.slug}
            product={product}
            copy={copy}
            language={language}
            navigateTo={navigateTo}
          />
        ))}
      </div>
    </section>
  )
}

function SoldPage({ copy, language }) {
  return (
    <section className="page">
      <PageHeader
        kicker={copy.sold.kicker}
        title={copy.sold.title}
        text={copy.sold.text}
      />
      <div className="product-grid">
        {soldProducts.map((product) => (
          <article className="product-card sold-card" key={product.slug}>
            <ProductPlaceholder label={copy.sold.badge} />
            <div className="product-body">
              <span className="status-badge">{copy.sold.badge}</span>
              <h3>{language === 'bg' ? product.titleBg : product.titleEn}</h3>
              <p>
                {language === 'bg' ? product.summaryBg : product.summaryEn}
              </p>
              <a
                className="button secondary"
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
                {copy.sold.cta}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function ReviewsPage({ copy }) {
  return (
    <section className="page reviews-page">
      <PageHeader
        kicker={copy.reviews.kicker}
        title={copy.reviews.title}
        text={copy.reviews.text}
      />
      <div className="reviews-grid">
        {copy.reviews.cards.map(([title, text, type]) => (
          <article className="review-card" key={title}>
            <div className={`review-preview ${type}`} aria-hidden="true">
              <span className="review-preview-mark">
                {type === 'story' ? 'STORY' : type === 'message' ? 'DM' : 'PHOTO'}
              </span>
              <span className="review-preview-line"></span>
              <span className="review-preview-line short"></span>
            </div>
            <div className="review-copy">
              <span className="status-badge">{copy.reviews.upcoming}</span>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function AboutPage({ copy }) {
  return (
    <section className="page about-page">
      <PageHeader
        kicker={copy.about.kicker}
        title={copy.about.title}
        text={copy.about.text}
      />
      <div className="text-panel">
        <ul className="pill-list">
          {copy.about.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function ContactsPage({ copy }) {
  return (
    <section className="page contacts-page">
      <PageHeader
        kicker={copy.contacts.kicker}
        title={copy.contacts.title}
        text={copy.contacts.text}
      />
      <div className="contact-grid">
        <ContactCard
          label={copy.contacts.instagram}
          value="@our.vintage.lights"
          href={instagramUrl}
          cta={copy.contacts.instagramCta}
        />
        <ContactCard
          label={copy.contacts.email}
          value={emailAddress}
          href={`mailto:${emailAddress}`}
          cta={copy.contacts.emailCta}
        />
        <ContactCard
          label={copy.contacts.viber}
          value={viberPhone}
          href={`tel:${viberPhone}`}
          cta={copy.contacts.viberCta}
        />
      </div>
    </section>
  )
}

function ProductPage({ copy, language, navigateTo, product }) {
  const title = language === 'bg' ? product.titleBg : product.titleEn
  const summary = language === 'bg' ? product.summaryBg : product.summaryEn
  const description =
    language === 'bg' ? product.descriptionBg : product.descriptionEn
  const features = language === 'bg' ? product.featuresBg : product.featuresEn

  return (
    <section className="page product-detail-page">
      <a
        className="back-link"
        href={pages.available[language]}
        onClick={(event) => {
          event.preventDefault()
          navigateTo(pages.available[language])
        }}
      >
        {copy.product.back}
      </a>
      <div className="product-detail">
        <ProductGallery
          images={product.images}
          title={title}
          copy={copy.product}
        />
        <div className="product-detail-copy">
          <span className="status-badge available">{copy.product.available}</span>
          <h1>{title}</h1>
          <p className="hero-lead">{summary}</p>
          <div className="price-line">{copy.product.price}</div>
          <ul className="check-list">
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <div className="description-stack">
            {description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="dm-hint">{copy.product.dmHint}</p>
          <a
            className="button primary"
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
          >
            {copy.product.cta}
          </a>
        </div>
      </div>
    </section>
  )
}

function ProductGallery({ images, title, copy }) {
  const [activeImageIndex, setActiveImageIndex] = useState(null)
  const isOpen = activeImageIndex !== null

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setActiveImageIndex(null)
      }

      if (event.key === 'ArrowLeft') {
        setActiveImageIndex((current) =>
          current === 0 ? images.length - 1 : current - 1,
        )
      }

      if (event.key === 'ArrowRight') {
        setActiveImageIndex((current) => (current + 1) % images.length)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [images.length, isOpen])

  function showPreviousImage() {
    setActiveImageIndex((current) =>
      current === 0 ? images.length - 1 : current - 1,
    )
  }

  function showNextImage() {
    setActiveImageIndex((current) => (current + 1) % images.length)
  }

  return (
    <>
      <div className="product-gallery">
        <button
          className="gallery-image-button main"
          type="button"
          onClick={() => setActiveImageIndex(0)}
          aria-label={`${copy.openImage}: ${title} 1`}
        >
          <img className="main-product-image" src={images[0]} alt={title} />
        </button>
        <h2>{copy.gallery}</h2>
        <div className="gallery-grid">
          {images.slice(1).map((image, index) => (
            <button
              className="gallery-image-button"
              type="button"
              key={image}
              onClick={() => setActiveImageIndex(index + 1)}
              aria-label={`${copy.openImage}: ${title} ${index + 2}`}
            >
              <img src={image} alt={`${title} ${index + 2}`} />
            </button>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${copy.gallery}: ${title}`}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setActiveImageIndex(null)
            }
          }}
        >
          <button
            className="lightbox-control close"
            type="button"
            onClick={() => setActiveImageIndex(null)}
            aria-label={copy.closeGallery}
          >
            ×
          </button>
          <button
            className="lightbox-control previous"
            type="button"
            onClick={showPreviousImage}
            aria-label={copy.previousImage}
          >
            ‹
          </button>
          <figure className="lightbox-figure">
            <img
              src={images[activeImageIndex]}
              alt={`${title} ${activeImageIndex + 1}`}
            />
            <figcaption>
              {copy.imageCount} {activeImageIndex + 1} {copy.imageCountOf}{' '}
              {images.length}
            </figcaption>
          </figure>
          <button
            className="lightbox-control next"
            type="button"
            onClick={showNextImage}
            aria-label={copy.nextImage}
          >
            ›
          </button>
        </div>
      )}
    </>
  )
}

function ProductCard({ product, copy, language, navigateTo }) {
  const title = language === 'bg' ? product.titleBg : product.titleEn
  const summary = language === 'bg' ? product.summaryBg : product.summaryEn

  return (
    <article className="product-card">
      <a
        className="product-image-link"
        href={product.routes[language]}
        onClick={(event) => {
          event.preventDefault()
          navigateTo(product.routes[language])
        }}
      >
        <img src={product.images[0]} alt={title} />
      </a>
      <div className="product-body">
        <span className="status-badge available">{copy.product.available}</span>
        <h3>{title}</h3>
        <p>{summary}</p>
        <div className="product-actions">
          <span>{copy.product.price}</span>
          <a
            className="button secondary"
            href={product.routes[language]}
            onClick={(event) => {
              event.preventDefault()
              navigateTo(product.routes[language])
            }}
          >
            {copy.product.details}
          </a>
        </div>
      </div>
    </article>
  )
}

function ProductPlaceholder({ label }) {
  return (
    <div className="product-placeholder">
      <span>{label}</span>
    </div>
  )
}

function SiteFooter({ copy, language, navigateTo, page }) {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <strong>E&K Vintara Studio</strong>
        <span>- {copy.footer}</span>
      </div>

      <nav className="footer-nav" aria-label="Footer navigation">
        {navigationPages.map((navPage) => (
          <a
            className={page === navPage || (page === 'product' && navPage === 'available') ? 'active' : ''}
            key={navPage}
            href={pages[navPage][language]}
            onClick={(event) => {
              event.preventDefault()
              navigateTo(pages[navPage][language])
            }}
          >
            {copy.nav[navPage]}
          </a>
        ))}
      </nav>

      <div className="footer-socials" aria-label="Social links">
        <a
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <InstagramIcon />
        </a>
        <a href={`mailto:${emailAddress}`} aria-label={copy.contacts.email}>
          <EmailIcon />
        </a>
        <a href={`tel:${viberPhone}`} aria-label={copy.contacts.viber}>
          <PhoneIcon />
        </a>
      </div>
    </footer>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17" cy="7" r="1" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
      <path d="M5 8l7 5 7-5" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8.2 5.2l1.4 3.2-1.7 1.2c1 2.1 2.4 3.5 4.5 4.5l1.2-1.7 3.2 1.4-.4 3.5c-.1.8-.8 1.4-1.6 1.4C9.5 18.7 5.3 14.5 5.3 9.2c0-.8.6-1.5 1.4-1.6l1.5-.4z" />
    </svg>
  )
}

function PageHeader({ kicker, title, text }) {
  return (
    <div className="page-header">
      <p className="kicker">{kicker}</p>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  )
}

function ContactCard({ label, value, href, cta }) {
  return (
    <article className="contact-card">
      <span>{label}</span>
      <strong>{value}</strong>
      <a className="button secondary" href={href} target="_blank" rel="noreferrer">
        {cta}
      </a>
    </article>
  )
}

export default App
