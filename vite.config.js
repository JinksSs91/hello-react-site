import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const siteUrl = 'https://ourvintagelights.com'
const browserTitle = 'E&K Vintara Studio'
const emailAddress = 'vintarastudio@yahoo.com'
const instagramUrl = 'https://www.instagram.com/our.vintage.lights/'
const viberPhone = '+359899161880'
const rootDir = path.dirname(fileURLToPath(import.meta.url))

const localizedRoutes = {
  home: { bg: '/', en: '/en' },
  available: { bg: '/available-lamps', en: '/en/available-lamps' },
  sold: { bg: '/sold-lamps', en: '/en/sold-lamps' },
  markets: { bg: '/art-markets', en: '/en/art-markets' },
  marketGalleryReBazaar: {
    bg: '/art-markets/re-bazaar-mall-galeria-burgas-2026',
    en: '/en/art-markets/re-bazaar-mall-galeria-burgas-2026',
  },
  media: { bg: '/media-about-us', en: '/en/media-about-us' },
  reviews: { bg: '/customer-reviews', en: '/en/customer-reviews' },
  about: { bg: '/about-us', en: '/en/about-us' },
  contacts: { bg: '/contacts', en: '/en/contacts' },
  productTelephone: {
    bg: '/lamps/retro-telephone-lamp',
    en: '/en/lamps/retro-telephone-lamp',
  },
  productVilia: {
    bg: '/lamps/vilia-camera-lamp',
    en: '/en/lamps/vilia-camera-lamp',
  },
  productRedTa900: {
    bg: '/lamps/red-ta-900-telephone-lamp',
    en: '/en/lamps/red-ta-900-telephone-lamp',
  },
  soldProductPinkTelephone: {
    bg: '/sold-lamps/pink-rotary-telephone-lamp',
    en: '/en/sold-lamps/pink-rotary-telephone-lamp',
  },
}

const phoneImageUrls = [
  `${siteUrl}/images/retro-telephone-lamp-01.jpg`,
  `${siteUrl}/images/retro-telephone-lamp-02.jpg`,
  `${siteUrl}/images/retro-telephone-lamp-03.jpg`,
  `${siteUrl}/images/retro-telephone-lamp-04.jpg`,
]

const viliaImageUrls = [
  `${siteUrl}/images/vilia-camera-lamp-01.jpg`,
  `${siteUrl}/images/vilia-camera-lamp-02.jpg`,
  `${siteUrl}/images/vilia-camera-lamp-03.jpg`,
  `${siteUrl}/images/vilia-camera-lamp-05.jpg`,
]

const redTa900ImageUrls = [
  `${siteUrl}/images/red-ta-900-telephone-lamp-01.jpg`,
  `${siteUrl}/images/red-ta-900-telephone-lamp-02.jpg`,
]

const pinkTelephoneImageUrls = [
  `${siteUrl}/images/pink-rotary-telephone-lamp-01.jpg`,
  `${siteUrl}/images/pink-rotary-telephone-lamp-02.jpg`,
  `${siteUrl}/images/pink-rotary-telephone-lamp-03.jpg`,
]

const reBazaarImageUrls = [
  `${siteUrl}/images/markets/re-bazaar-2026/re-bazaar-main.jpg`,
  `${siteUrl}/images/markets/re-bazaar-2026/re-bazaar-01.jpg`,
  `${siteUrl}/images/markets/re-bazaar-2026/re-bazaar-02.jpg`,
  `${siteUrl}/images/markets/re-bazaar-2026/re-bazaar-03.jpg`,
  `${siteUrl}/images/markets/re-bazaar-2026/re-bazaar-04.jpg`,
]

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'E&K Vintara Studio',
  url: siteUrl,
  logo: `${siteUrl}/images/vintara-logo.jpg`,
  email: emailAddress,
  telephone: viberPhone,
  sameAs: [instagramUrl],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'E&K Vintara Studio',
  url: siteUrl,
  inLanguage: ['bg-BG', 'en'],
}

function getProductSchema({
  name,
  alternateName,
  image,
  description,
  url,
  category,
  availability = 'InStock',
}) {
  const offers = {
    '@type': 'Offer',
    url: `${siteUrl}${url}`,
    availability: `https://schema.org/${availability}`,
    seller: {
      '@type': 'Organization',
      name: 'E&K Vintara Studio',
    },
  }

  if (availability === 'InStock') {
    offers.priceSpecification = {
      '@type': 'PriceSpecification',
      priceCurrency: 'BGN',
      description: 'Price on request',
    }
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    alternateName,
    brand: {
      '@type': 'Brand',
      name: 'E&K Vintara Studio',
    },
    image,
    description,
    category,
    offers,
  }
}

const phoneProductSchema = getProductSchema({
  name: '1970s Rotary Telephone Lamp',
  alternateName: 'Телефон с шайба от 70-те години на 20 век',
  image: phoneImageUrls,
  description:
    'Handmade retro telephone lamp with a warm Edison LED bulb, created from an authentic vintage rotary phone.',
  category: 'Handmade vintage lighting',
  url: localizedRoutes.productTelephone.bg,
})

const viliaProductSchema = getProductSchema({
  name: 'Vilia Camera from 1980',
  alternateName: 'Фотоапарат Вилия от 1980г.',
  image: viliaImageUrls,
  description:
    'Handmade vintage Vilia camera lamp with a warm Edison bulb, created from a Soviet camera classic from the 1970s and 1980s.',
  category: 'Handmade vintage camera lamp',
  url: localizedRoutes.productVilia.bg,
})

const redTa900ProductSchema = getProductSchema({
  name: 'Brand New Red Rotary Telephone from 1991',
  alternateName: 'Чисто нов червен телефон с шайба от 1991г',
  image: redTa900ImageUrls,
  description:
    'Handmade red TA-900 telephone lamp created from an original 1991 INCOMS retro telephone preserved in its original box.',
  category: 'Handmade vintage telephone lamp',
  url: localizedRoutes.productRedTa900.bg,
})

const pinkTelephoneProductSchema = getProductSchema({
  name: 'Pink Rotary Telephone Lamp',
  alternateName: 'Розов телефон с шайба',
  image: pinkTelephoneImageUrls,
  description:
    'Sold handmade pink rotary telephone lamp with warm light and a one-of-a-kind retro design.',
  category: 'Handmade vintage telephone lamp',
  url: localizedRoutes.soldProductPinkTelephone.bg,
  availability: 'SoldOut',
})

const reBazaarEventSchema = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'Re-Bazaar (Mall Galeria Burgas)',
  startDate: '2026-04-25',
  endDate: '2026-04-26',
  eventStatus: 'https://schema.org/EventCompleted',
  location: {
    '@type': 'Place',
    name: 'Mall Galeria Burgas',
  },
  image: reBazaarImageUrls,
  organizer: {
    '@type': 'Organization',
    name: 'E&K Vintara Studio',
    url: siteUrl,
  },
  url: `${siteUrl}${localizedRoutes.marketGalleryReBazaar.bg}`,
}

const seoPages = [
  {
    key: 'home',
    lang: 'bg',
    path: localizedRoutes.home.bg,
    title: 'Винтидж лампи и ръчно изработено upcycling осветление | E&K Vintara Studio',
    description:
      'Ръчно изработени винтидж лампи от стари телефони, фотоапарати, радиа и часовници. Уникално upcycling осветление с история и характер.',
  },
  {
    key: 'available',
    lang: 'bg',
    path: localizedRoutes.available.bg,
    title: 'Налични винтидж лампи | Ръчно изработени уникални лампи',
    description:
      'Разгледайте налични винтидж лампи, ръчно изработени от стари телефони, фотоапарати и автентични ретро предмети.',
  },
  {
    key: 'sold',
    lang: 'bg',
    path: localizedRoutes.sold.bg,
    title: 'Продадени ретро лампи | E&K Vintara Studio',
    description:
      'Архив от продадени ретро лампи и upcycling проекти. Вдъхновение за custom винтидж осветление по идея.',
  },
  {
    key: 'markets',
    lang: 'bg',
    path: localizedRoutes.markets.bg,
    title: 'Участия в арт базари | E&K Vintara Studio',
    description:
      'Снимки, видеа и информация за участията на E&K Vintara Studio в арт базари, изложения и творчески събития.',
  },
  {
    key: 'marketGalleryReBazaar',
    lang: 'bg',
    path: localizedRoutes.marketGalleryReBazaar.bg,
    title: 'Re-Bazaar в Mall Galeria Burgas | E&K Vintara Studio',
    description:
      'Снимки от участието на E&K Vintara Studio в Re-Bazaar в Mall Galeria Burgas на 25 и 26 април 2026 г.',
    schemas: [reBazaarEventSchema],
    image: 'markets/re-bazaar-2026/re-bazaar-main.jpg',
  },
  {
    key: 'media',
    lang: 'bg',
    path: localizedRoutes.media.bg,
    title: 'Медиите за нас | E&K Vintara Studio',
    description:
      'Статии, интервюта и медийни публикации за E&K Vintara Studio и ръчно изработените винтидж лампи.',
  },
  {
    key: 'reviews',
    lang: 'bg',
    path: localizedRoutes.reviews.bg,
    title: 'Отзиви от клиенти | E&K Vintara Studio',
    description:
      'Снимки, Instagram stories и автентична обратна връзка от клиенти на E&K Vintara Studio и техните ръчно изработени винтидж лампи.',
  },
  {
    key: 'about',
    lang: 'bg',
    path: localizedRoutes.about.bg,
    title: 'За нас | Ръчна изработка и устойчив дизайн',
    description:
      'E&K Vintara Studio създава ръчно изработени лампи от винтидж предмети с фокус върху устойчив дизайн, upcycling и ретро естетика.',
  },
  {
    key: 'contacts',
    lang: 'bg',
    path: localizedRoutes.contacts.bg,
    title: 'Контакти | E&K Vintara Studio',
    description:
      'Свържете се с E&K Vintara Studio за цена, доставка или custom ръчно изработена винтидж лампа.',
  },
  {
    key: 'productTelephone',
    lang: 'bg',
    path: localizedRoutes.productTelephone.bg,
    title: 'Телефон с шайба от 70-те години на 20 век | Лампа от стар телефон',
    description:
      'Продава се винтидж телефон лампа с топла Edison LED крушка. Ръчно изработена уникална ретро лампа от ротационен телефон.',
    schemas: [phoneProductSchema],
    image: 'retro-telephone-lamp-01.jpg',
    isProduct: true,
  },
  {
    key: 'productVilia',
    lang: 'bg',
    path: localizedRoutes.productVilia.bg,
    title: 'Фотоапарат Вилия от 1980г. | Ръчно изработена винтидж лампа',
    description:
      'Продава се ръчно изработена Vilia фотоапарат лампа с топла Edison крушка. Уникална upcycling лампа от vintage фотоапарат от СССР.',
    schemas: [viliaProductSchema],
    image: 'vilia-camera-lamp-01.jpg',
    isProduct: true,
  },
  {
    key: 'productRedTa900',
    lang: 'bg',
    path: localizedRoutes.productRedTa900.bg,
    title: 'Чисто нов червен телефон с шайба от 1991г | Ръчно изработена ретро лампа',
    description:
      'Продава се червена TA-900 телефон лампа от оригинален ретро телефон, произведен през 1991 г. в Белоградчик. Ръчна изработка и топла светлина.',
    schemas: [redTa900ProductSchema],
    image: 'red-ta-900-telephone-lamp-01.jpg',
    isProduct: true,
  },
  {
    key: 'soldProductPinkTelephone',
    lang: 'bg',
    path: localizedRoutes.soldProductPinkTelephone.bg,
    title: 'Розов телефон с шайба | Продадена ръчно изработена ретро лампа',
    description:
      'Продадена ръчно изработена розова телефонна лампа с топла светлина и уникален дизайн за ретро интериори.',
    schemas: [pinkTelephoneProductSchema],
    image: 'pink-rotary-telephone-lamp-01.jpg',
    isProduct: true,
  },
  {
    key: 'home',
    lang: 'en',
    path: localizedRoutes.home.en,
    title: 'Handmade vintage lamps and upcycled lighting | E&K Vintara Studio',
    description:
      'Handmade vintage lamps from old telephones, cameras, radios, and clocks. Unique upcycled lighting with story and character.',
  },
  {
    key: 'available',
    lang: 'en',
    path: localizedRoutes.available.en,
    title: 'Available handmade vintage lamps | E&K Vintara Studio',
    description:
      'Browse available handmade vintage lamps and unique upcycled lighting made from authentic retro objects.',
  },
  {
    key: 'sold',
    lang: 'en',
    path: localizedRoutes.sold.en,
    title: 'Sold retro lamps | E&K Vintara Studio',
    description:
      'Explore sold retro lamp projects and upcycled lighting ideas from E&K Vintara Studio.',
  },
  {
    key: 'markets',
    lang: 'en',
    path: localizedRoutes.markets.en,
    title: 'Art Market Events | E&K Vintara Studio',
    description:
      'Photos, videos, and information about E&K Vintara Studio at art markets, exhibitions, and creative events.',
  },
  {
    key: 'marketGalleryReBazaar',
    lang: 'en',
    path: localizedRoutes.marketGalleryReBazaar.en,
    title: 'Re-Bazaar at Mall Galeria Burgas | E&K Vintara Studio',
    description:
      'Photos from E&K Vintara Studio at Re-Bazaar in Mall Galeria Burgas on April 25 and 26, 2026.',
    schemas: [reBazaarEventSchema],
    image: 'markets/re-bazaar-2026/re-bazaar-main.jpg',
  },
  {
    key: 'media',
    lang: 'en',
    path: localizedRoutes.media.en,
    title: 'In the Media | E&K Vintara Studio',
    description:
      'Articles, interviews, and media features about E&K Vintara Studio and its handmade vintage lamps.',
  },
  {
    key: 'reviews',
    lang: 'en',
    path: localizedRoutes.reviews.en,
    title: 'Customer Reviews | E&K Vintara Studio',
    description:
      'Customer photos, Instagram stories, and authentic feedback about handmade vintage lamps by E&K Vintara Studio.',
  },
  {
    key: 'about',
    lang: 'en',
    path: localizedRoutes.about.en,
    title: 'About us | Handmade upcycled lighting studio',
    description:
      'E&K Vintara Studio creates handmade vintage lamps from authentic retro objects with sustainable upcycling and modern function.',
  },
  {
    key: 'contacts',
    lang: 'en',
    path: localizedRoutes.contacts.en,
    title: 'Contacts | E&K Vintara Studio',
    description:
      'Contact E&K Vintara Studio for prices, delivery, or a custom handmade vintage lamp project.',
  },
  {
    key: 'productTelephone',
    lang: 'en',
    path: localizedRoutes.productTelephone.en,
    title: '1970s Rotary Telephone Lamp | Handmade retro phone lamp',
    description:
      'Available handmade vintage telephone lamp with warm Edison LED bulb, created from an authentic rotary phone.',
    schemas: [phoneProductSchema],
    image: 'retro-telephone-lamp-01.jpg',
    isProduct: true,
  },
  {
    key: 'productVilia',
    lang: 'en',
    path: localizedRoutes.productVilia.en,
    title: 'Vilia Camera from 1980 | Handmade vintage camera lamp',
    description:
      'Available handmade Vilia camera lamp with a warm Edison bulb, created from a Soviet vintage camera classic.',
    schemas: [viliaProductSchema],
    image: 'vilia-camera-lamp-01.jpg',
    isProduct: true,
  },
  {
    key: 'productRedTa900',
    lang: 'en',
    path: localizedRoutes.productRedTa900.en,
    title: 'Brand New Red Rotary Telephone from 1991 | Handmade retro phone lamp',
    description:
      'Available handmade red TA-900 telephone lamp made from an original 1991 INCOMS retro telephone preserved in its original box.',
    schemas: [redTa900ProductSchema],
    image: 'red-ta-900-telephone-lamp-01.jpg',
    isProduct: true,
  },
  {
    key: 'soldProductPinkTelephone',
    lang: 'en',
    path: localizedRoutes.soldProductPinkTelephone.en,
    title: 'Pink Rotary Telephone Lamp | Sold handmade retro lamp',
    description:
      'Sold handmade pink rotary telephone lamp with warm light and a unique design for retro interiors.',
    schemas: [pinkTelephoneProductSchema],
    image: 'pink-rotary-telephone-lamp-01.jpg',
    isProduct: true,
  },
]

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function getAlternateLinks(page) {
  const routes = localizedRoutes[page.key]

  return [
    `<link rel="alternate" hreflang="bg-BG" href="${siteUrl}${routes.bg}" />`,
    `<link rel="alternate" hreflang="en" href="${siteUrl}${routes.en}" />`,
    `<link rel="alternate" hreflang="x-default" href="${siteUrl}${routes.bg}" />`,
  ].join('\n    ')
}

function getJsonLd(schemas) {
  return schemas
    .map(
      (schema) =>
        `<script type="application/ld+json">${JSON.stringify(schema)}</script>`,
    )
    .join('\n    ')
}

function injectSeo(html, page) {
  const canonical = `${siteUrl}${page.path}`
  const schemas = [organizationSchema, websiteSchema, ...(page.schemas || [])]
  const seoTags = [
    `<title>${escapeHtml(browserTitle)}</title>`,
    `<meta name="description" content="${escapeHtml(page.description)}" />`,
    `<link rel="canonical" href="${canonical}" />`,
    getAlternateLinks(page),
    `<meta property="og:type" content="${page.isProduct ? 'product' : 'website'}" />`,
    `<meta property="og:site_name" content="E&amp;K Vintara Studio" />`,
    `<meta property="og:title" content="${escapeHtml(page.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(page.description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:image" content="${siteUrl}/images/${page.image || 'vintara-logo.jpg'}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    getJsonLd(schemas),
  ].join('\n    ')

  return html
    .replace(/<html lang="[^"]*">/, `<html lang="${page.lang}">`)
    .replace(/<title>.*?<\/title>/s, seoTags)
}

function getOutputPath(outDir, routePath) {
  if (routePath === '/') {
    return path.join(outDir, 'index.html')
  }

  return path.join(outDir, routePath.replace(/^\//, ''), 'index.html')
}

function getSitemapXml() {
  const urls = seoPages
    .map((page) => {
      const alternates = [
        { lang: 'bg-BG', href: `${siteUrl}${localizedRoutes[page.key].bg}` },
        { lang: 'en', href: `${siteUrl}${localizedRoutes[page.key].en}` },
      ]
        .map(
          (alternate) =>
            `    <xhtml:link rel="alternate" hreflang="${alternate.lang}" href="${alternate.href}" />`,
        )
        .join('\n')

      return `  <url>
    <loc>${siteUrl}${page.path}</loc>
${alternates}
  </url>`
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`
}

function seoStaticPagesPlugin() {
  return {
    name: 'vintara-seo-static-pages',
    apply: 'build',
    async closeBundle() {
      const outDir = path.join(rootDir, 'dist')
      const baseHtml = await readFile(path.join(outDir, 'index.html'), 'utf8')

      await Promise.all(
        seoPages.map(async (page) => {
          const outputPath = getOutputPath(outDir, page.path)
          await mkdir(path.dirname(outputPath), { recursive: true })
          await writeFile(outputPath, injectSeo(baseHtml, page))
        }),
      )

      await writeFile(
        path.join(outDir, 'robots.txt'),
        `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`,
      )
      await writeFile(path.join(outDir, 'sitemap.xml'), getSitemapXml())
    },
  }
}

export default defineConfig({
  plugins: [react(), seoStaticPagesPlugin()],
})
