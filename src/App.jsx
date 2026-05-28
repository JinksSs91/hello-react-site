import { useState } from 'react'
import './App.css'

const instagramUrl = 'https://www.instagram.com/our.vintage.lights/'

const content = {
  bg: {
    languageLabel: 'Език',
    nav: ['Начало', 'Колекция', 'Студио', 'Контакт'],
    heroKicker: 'Ръчно изработено ретро осветление',
    heroTitle: 'Винтидж предмети, превърнати в светлина с характер.',
    heroText:
      'E&K Vintara Studio създава уникални лампи от стари камери, телефони и намерени обекти. Всяка вещ запазва своята история и получава ново място у дома.',
    heroPrimary: 'Разгледай колекцията',
    heroSecondary: 'Пиши ни в Instagram',
    stats: [
      ['5', 'примерни продукта'],
      ['1/1', 'уникални бройки'],
      ['DM', 'поръчка в Instagram'],
    ],
    collectionKicker: 'Колекция',
    collectionTitle: 'Малки ретро сцени за бюро, студио и уютни вечери.',
    price: 'Цена при запитване',
    productCta: 'Попитай за продукта',
    aboutKicker: 'Студио',
    aboutTitle: 'Спасени предмети, нова светлина.',
    aboutText:
      'Търсим обекти с форма, патина и настроение, след което ги превръщаме в функционални лампи с модерен електрически живот. Резултатът е декор, който не изглежда като масово производство.',
    aboutPoints: ['Винтидж основи', 'Ръчна изработка', 'Единствен характер'],
    contactKicker: 'Instagram',
    contactTitle: 'Хареса си лампа? Пиши ни директно.',
    contactText:
      'Наличностите и цените се уточняват лично, защото всяка лампа е различна. Изпрати ни DM с продукта, който ти е интересен.',
    contactCta: 'Отвори Instagram',
    footer: 'E&K Vintara Studio - handmade vintage lights',
  },
  en: {
    languageLabel: 'Language',
    nav: ['Home', 'Collection', 'Studio', 'Contact'],
    heroKicker: 'Handmade retro lighting',
    heroTitle: 'Vintage objects turned into light with character.',
    heroText:
      'E&K Vintara Studio creates one-of-a-kind lamps from old cameras, telephones, and found objects. Each piece keeps its story and finds a new place at home.',
    heroPrimary: 'View collection',
    heroSecondary: 'Message on Instagram',
    stats: [
      ['5', 'sample products'],
      ['1/1', 'unique pieces'],
      ['DM', 'order on Instagram'],
    ],
    collectionKicker: 'Collection',
    collectionTitle: 'Small retro scenes for desks, studios, and cozy evenings.',
    price: 'Price on request',
    productCta: 'Ask about this piece',
    aboutKicker: 'Studio',
    aboutTitle: 'Rescued objects, newly lit.',
    aboutText:
      'We look for objects with shape, patina, and mood, then turn them into functional lamps with modern electrical life. The result is decor that does not feel mass produced.',
    aboutPoints: ['Vintage bases', 'Handmade finish', 'One-of-one character'],
    contactKicker: 'Instagram',
    contactTitle: 'Found a lamp you like? Message us directly.',
    contactText:
      'Availability and prices are confirmed personally because each lamp is different. Send us a DM with the piece you are interested in.',
    contactCta: 'Open Instagram',
    footer: 'E&K Vintara Studio - handmade vintage lights',
  },
}

const products = [
  {
    name: 'Vintage Camera Lamp',
    labelBg: 'Камера 1976',
    descriptionBg:
      'Ръчно направена лампа от Voigtlander/Rollei камера с модерен абажур.',
    descriptionEn:
      'Handmade lamp created from a 1976 Voigtlander/Rollei camera with a modern shade.',
    accent: 'camera',
  },
  {
    name: 'Retro Telephone Lamp',
    labelBg: 'Телефон',
    descriptionBg:
      'Функционална декоративна лампа от автентичен винтидж телефон.',
    descriptionEn:
      'Functional decorative lamp made from an authentic vintage telephone.',
    accent: 'phone',
  },
  {
    name: 'Mini Tripod Camera Lamp',
    labelBg: 'Мини статив',
    descriptionBg:
      'Винтидж камера върху мини статив с минималистичен абажур за уютен интериор.',
    descriptionEn:
      'Vintage camera mounted on a mini tripod with a minimalist shade for cozy interiors.',
    accent: 'tripod',
  },
  {
    name: 'Retro Phone Decor Light',
    labelBg: 'Акцент',
    descriptionBg:
      'Ръчно изработена акцентна лампа, която смесва ретро естетика и модерна светлина.',
    descriptionEn:
      'Handmade accent lamp combining retro aesthetics with modern lighting.',
    accent: 'glow',
  },
  {
    name: 'Unique Vintage Table Lamp',
    labelBg: 'Уникат',
    descriptionBg:
      'Единствена по рода си upcycled лампа за дом, студио или специален кът.',
    descriptionEn:
      'One-of-a-kind upcycled lighting piece for home or studio decor.',
    accent: 'table',
  },
]

function App() {
  const [language, setLanguage] = useState('bg')
  const copy = content[language]

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="E&K Vintara Studio">
          <span className="brand-mark">E&K</span>
          <span>Vintara Studio</span>
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          {copy.nav.map((item, index) => (
            <a key={item} href={['#home', '#collection', '#studio', '#contact'][index]}>
              {item}
            </a>
          ))}
        </nav>

        <label className="language-select">
          <span>{copy.languageLabel}</span>
          <select
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
            aria-label={copy.languageLabel}
          >
            <option value="bg">BG</option>
            <option value="en">EN</option>
          </select>
        </label>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <p className="kicker">{copy.heroKicker}</p>
            <h1>{copy.heroTitle}</h1>
            <p className="hero-text">{copy.heroText}</p>
            <div className="hero-actions">
              <a className="button primary" href="#collection">
                {copy.heroPrimary}
              </a>
              <a
                className="button secondary"
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
                {copy.heroSecondary}
              </a>
            </div>
          </div>

          <div className="hero-showcase" aria-label="Vintage lamp illustration">
            <div className="lamp-card">
              <span className="lamp-shade"></span>
              <span className="lamp-neck"></span>
              <span className="lamp-camera"></span>
              <span className="lamp-lens"></span>
              <span className="lamp-glow"></span>
            </div>
          </div>

          <div className="stats-grid" aria-label="Studio highlights">
            {copy.stats.map(([value, label]) => (
              <div className="stat" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section collection-section" id="collection">
          <div className="section-heading">
            <p className="kicker">{copy.collectionKicker}</p>
            <h2>{copy.collectionTitle}</h2>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.name}>
                <div className={`product-visual ${product.accent}`}>
                  <span>{language === 'bg' ? product.labelBg : product.name}</span>
                </div>
                <div className="product-body">
                  <div>
                    <h3>{product.name}</h3>
                    <p>
                      {language === 'bg'
                        ? product.descriptionBg
                        : product.descriptionEn}
                    </p>
                  </div>
                  <div className="product-footer">
                    <span>{copy.price}</span>
                    <a
                      className="button product-button"
                      href={instagramUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {copy.productCta}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section about-section" id="studio">
          <div>
            <p className="kicker">{copy.aboutKicker}</p>
            <h2>{copy.aboutTitle}</h2>
          </div>
          <div className="about-copy">
            <p>{copy.aboutText}</p>
            <ul>
              {copy.aboutPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <p className="kicker">{copy.contactKicker}</p>
          <h2>{copy.contactTitle}</h2>
          <p>{copy.contactText}</p>
          <a
            className="button primary"
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
          >
            {copy.contactCta}
          </a>
        </section>
      </main>

      <footer className="site-footer">{copy.footer}</footer>
    </div>
  )
}

export default App
