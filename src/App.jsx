import { useEffect, useRef, useState } from 'react'
import logoImage from './assets/vintara-logo.jpg'
import phoneLamp01 from './assets/products/retro-telephone-lamp-01.jpg'
import phoneLamp02 from './assets/products/retro-telephone-lamp-02.jpg'
import phoneLamp03 from './assets/products/retro-telephone-lamp-03.jpg'
import phoneLamp04 from './assets/products/retro-telephone-lamp-04.jpg'
import './App.css'

const instagramUrl = 'https://www.instagram.com/our.vintage.lights/'
const emailAddress = 'vintarastudio@yahoo.com'

const pages = {
  home: { bg: '/', en: '/en' },
  available: { bg: '/available-lamps', en: '/en/available-lamps' },
  sold: { bg: '/sold-lamps', en: '/en/sold-lamps' },
  about: { bg: '/about-us', en: '/en/about-us' },
  contacts: { bg: '/contacts', en: '/en/contacts' },
  product: {
    bg: '/lamps/retro-telephone-lamp',
    en: '/en/lamps/retro-telephone-lamp',
  },
}

const content = {
  bg: {
    languageLabel: 'Език',
    nav: {
      home: 'Начало',
      available: 'Налични лампи',
      sold: 'Продадени лампи',
      about: 'За нас',
      contacts: 'Контакти',
    },
    home: {
      kicker: 'Ръчна изработка и upcycling дизайн',
      title: 'Осветление с история',
      intro:
        'Ръчно изработени винтидж лампи от стари телефони, фотоапарати, радиа и настолни часовници.',
      story:
        'Даваме нов живот на забравени предмети и ги превръщаме в артистично осветление за домове, студиа, офиси и специални пространства.',
      contactCta: 'Свържи се с нас',
      highlights: [
        ['Ръчна изработка', 'Всеки детайл се обработва и сглобява внимателно.'],
        ['Уникални бройки', 'Всяка лампа е единствена, с форма и история.'],
        ['Upcycling дизайн', 'Старото става функционално, красиво и различно.'],
      ],
      imageStripTitle: 'Винтидж телефон, превърнат в топла светлина.',
      ctaTitle: 'Разгледай колекцията',
      ctaText:
        'Открий своята уникална лампа и добави характер към пространството си.',
      cta: 'Разгледай наличните лампи',
    },
    available: {
      kicker: 'Налични лампи',
      title: 'Готови уникати, които търсят своето място.',
      text:
        'Всеки продукт е единствен по рода си. За цена, доставка и допълнителни кадри ни пиши директно в Instagram.',
    },
    sold: {
      kicker: 'Продадени лампи',
      title: 'Минали проекти, които вече имат нов дом.',
      text:
        'Ако харесаш продаден модел, можем да обсъдим сходна идея според наличните винтидж предмети.',
      badge: 'Продадено',
      cta: 'Попитай за подобна лампа',
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
      title: 'Свържи се с нас за цена, доставка или custom идея.',
      text:
        'Най-бързият начин е Instagram DM. Можеш също да ни пишеш по имейл с името на лампата, която те интересува.',
      instagram: 'Instagram',
      email: 'Имейл',
      instagramCta: 'Отвори Instagram',
      emailCta: 'Изпрати имейл',
    },
    product: {
      back: 'Назад към наличните лампи',
      available: 'Продава се',
      price: 'Цена при запитване',
      cta: 'Пиши за цена и доставка',
      gallery: 'Допълнителни снимки',
      dmHint: 'Пиши ни на лично в Instagram и изпрати името на продукта.',
    },
    footer: 'E&K Vintara Studio - handmade vintage lights',
  },
  en: {
    languageLabel: 'Language',
    nav: {
      home: 'Home',
      available: 'Available Lamps',
      sold: 'Sold Lamps',
      about: 'About us',
      contacts: 'Contacts',
    },
    home: {
      kicker: 'Handmade upcycled lighting',
      title: 'Lighting with a story',
      intro:
        'Handmade vintage lamps created from old telephones, cameras, radios, and desk clocks.',
      story:
        'We give forgotten objects a new life and turn them into artistic lighting for homes, studios, offices, and special spaces.',
      contactCta: 'Contact us',
      highlights: [
        ['Handmade craft', 'Every detail is carefully restored and assembled.'],
        ['Unique pieces', 'Each lamp is one of a kind, with its own shape and story.'],
        ['Upcycled design', 'The old becomes functional, beautiful, and different.'],
      ],
      imageStripTitle: 'A vintage telephone transformed into warm light.',
      ctaTitle: 'Explore the collection',
      ctaText: 'Find your unique lamp and add character to your space.',
      cta: 'View available lamps',
    },
    available: {
      kicker: 'Available Lamps',
      title: 'Ready one-of-one pieces looking for their place.',
      text:
        'Each product is unique. For price, delivery, and extra details, message us directly on Instagram.',
    },
    sold: {
      kicker: 'Sold Lamps',
      title: 'Past projects that already found a new home.',
      text:
        'If you like a sold piece, we can discuss a similar idea based on the vintage objects we currently have.',
      badge: 'Sold',
      cta: 'Ask for a similar lamp',
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
      title: 'Contact us for price, delivery, or a custom idea.',
      text:
        'The fastest way is Instagram DM. You can also email us with the name of the lamp you are interested in.',
      instagram: 'Instagram',
      email: 'Email',
      instagramCta: 'Open Instagram',
      emailCta: 'Send email',
    },
    product: {
      back: 'Back to available lamps',
      available: 'Available',
      price: 'Price on request',
      cta: 'Ask about price and delivery',
      gallery: 'Additional photos',
      dmHint: 'Message us on Instagram and send the product name.',
    },
    footer: 'E&K Vintara Studio - handmade vintage lights',
  },
}

const phoneLamp = {
  slug: 'retro-telephone-lamp',
  titleBg: 'Винтидж телефон лампа',
  titleEn: 'Vintage Telephone Lamp',
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

const availableProducts = [
  phoneLamp,
  {
    slug: 'vintage-camera-lamp',
    titleBg: 'Винтидж камера лампа',
    titleEn: 'Vintage Camera Lamp',
    summaryBg:
      'Ръчно направена лампа от Voigtlander/Rollei камера с модерен абажур.',
    summaryEn:
      'Handmade lamp created from a Voigtlander/Rollei camera with a modern shade.',
  },
  {
    slug: 'mini-tripod-camera-lamp',
    titleBg: 'Мини статив камера лампа',
    titleEn: 'Mini Tripod Camera Lamp',
    summaryBg:
      'Винтидж камера върху мини статив с минималистичен абажур за уютен интериор.',
    summaryEn:
      'Vintage camera mounted on a mini tripod with a minimalist shade for cozy interiors.',
  },
  {
    slug: 'unique-vintage-table-lamp',
    titleBg: 'Уникална винтидж настолна лампа',
    titleEn: 'Unique Vintage Table Lamp',
    summaryBg:
      'Единствена по рода си upcycled лампа за дом, студио или специален кът.',
    summaryEn:
      'One-of-a-kind upcycled lighting piece for home or studio decor.',
  },
]

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
  const routeEntry = Object.entries(pages).find(
    ([, urls]) => urls.bg === pathWithoutLanguage || urls.en === normalizedPath,
  )

  return {
    language,
    page: routeEntry?.[0] || 'home',
  }
}

function App() {
  const initialRoute = getRouteFromPath(window.location.pathname)
  const [language, setLanguage] = useState(initialRoute.language)
  const [page, setPage] = useState(initialRoute.page)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const headerRef = useRef(null)
  const copy = content[language]

  useEffect(() => {
    const handleRouteChange = () => {
      const nextRoute = getRouteFromPath(window.location.pathname)
      setLanguage(nextRoute.language)
      setPage(nextRoute.page)
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
    setIsMenuOpen(false)
  }

  function handleLanguageChange(event) {
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
          {['home', 'available', 'sold', 'about', 'contacts'].map((navPage) => (
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
            {['home', 'available', 'sold', 'about', 'contacts'].map((navPage) => (
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
        {page === 'about' && <AboutPage copy={copy} />}
        {page === 'contacts' && <ContactsPage copy={copy} />}
        {page === 'product' && (
          <ProductPage copy={copy} language={language} navigateTo={navigateTo} />
        )}
      </main>

      <footer className="site-footer">{copy.footer}</footer>
    </div>
  )
}

function HomePage({ copy, language, navigateTo }) {
  return (
    <section className="page home-page">
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
          <img src={phoneLamp01} alt={copy.home.imageStripTitle} />
          <figcaption>{copy.home.imageStripTitle}</figcaption>
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
        {[phoneLamp02, phoneLamp03, phoneLamp04].map((image, index) => (
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

function AboutPage({ copy }) {
  return (
    <section className="page split-page">
      <div>
        <p className="kicker">{copy.about.kicker}</p>
        <h1>{copy.about.title}</h1>
      </div>
      <div className="text-panel">
        <p>{copy.about.text}</p>
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
      </div>
    </section>
  )
}

function ProductPage({ copy, language, navigateTo }) {
  const title = language === 'bg' ? phoneLamp.titleBg : phoneLamp.titleEn
  const summary = language === 'bg' ? phoneLamp.summaryBg : phoneLamp.summaryEn
  const description =
    language === 'bg' ? phoneLamp.descriptionBg : phoneLamp.descriptionEn
  const features = language === 'bg' ? phoneLamp.featuresBg : phoneLamp.featuresEn

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
        <div className="product-gallery">
          <img className="main-product-image" src={phoneLamp.images[0]} alt={title} />
          <h2>{copy.product.gallery}</h2>
          <div className="gallery-grid">
            {phoneLamp.images.slice(1).map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`${title} ${index + 2}`}
              />
            ))}
          </div>
        </div>
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

function ProductCard({ product, copy, language, navigateTo }) {
  const title = language === 'bg' ? product.titleBg : product.titleEn
  const summary = language === 'bg' ? product.summaryBg : product.summaryEn
  const isRealProduct = product.slug === phoneLamp.slug

  return (
    <article className="product-card">
      {isRealProduct ? (
        <a
          className="product-image-link"
          href={pages.product[language]}
          onClick={(event) => {
            event.preventDefault()
            navigateTo(pages.product[language])
          }}
        >
          <img src={product.images[0]} alt={title} />
        </a>
      ) : (
        <ProductPlaceholder label={title} />
      )}
      <div className="product-body">
        <span className="status-badge available">{copy.product.available}</span>
        <h3>{title}</h3>
        <p>{summary}</p>
        <div className="product-actions">
          <span>{copy.product.price}</span>
          {isRealProduct ? (
            <a
              className="button secondary"
              href={pages.product[language]}
              onClick={(event) => {
                event.preventDefault()
                navigateTo(pages.product[language])
              }}
            >
              {language === 'bg' ? 'Виж детайли' : 'View details'}
            </a>
          ) : (
            <a
              className="button secondary"
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              {copy.product.cta}
            </a>
          )}
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
