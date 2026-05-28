import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const siteUrl = 'https://ourvintagelights.com'
const emailAddress = 'vintarastudio@yahoo.com'
const instagramUrl = 'https://www.instagram.com/our.vintage.lights/'
const rootDir = path.dirname(fileURLToPath(import.meta.url))

const localizedRoutes = {
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

const imageUrls = [
  `${siteUrl}/images/retro-telephone-lamp-01.jpg`,
  `${siteUrl}/images/retro-telephone-lamp-02.jpg`,
  `${siteUrl}/images/retro-telephone-lamp-03.jpg`,
  `${siteUrl}/images/retro-telephone-lamp-04.jpg`,
]

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'E&K Vintara Studio',
  url: siteUrl,
  logo: `${siteUrl}/images/vintara-logo.jpg`,
  email: emailAddress,
  sameAs: [instagramUrl],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'E&K Vintara Studio',
  url: siteUrl,
  inLanguage: ['bg-BG', 'en'],
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Vintage Telephone Lamp',
  alternateName: 'Винтидж телефон лампа',
  brand: {
    '@type': 'Brand',
    name: 'E&K Vintara Studio',
  },
  image: imageUrls,
  description:
    'Handmade retro telephone lamp with a warm Edison LED bulb, created from an authentic vintage rotary phone.',
  category: 'Handmade vintage lighting',
  offers: {
    '@type': 'Offer',
    url: `${siteUrl}${localizedRoutes.product.bg}`,
    availability: 'https://schema.org/InStock',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'BGN',
      description: 'Price on request',
    },
    seller: {
      '@type': 'Organization',
      name: 'E&K Vintara Studio',
    },
  },
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
    key: 'product',
    lang: 'bg',
    path: localizedRoutes.product.bg,
    title: 'Винтидж телефон лампа | Лампа от стар телефон',
    description:
      'Продава се винтидж телефон лампа с топла Edison LED крушка. Ръчно изработена уникална ретро лампа от ротационен телефон.',
    schemas: [productSchema],
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
    key: 'product',
    lang: 'en',
    path: localizedRoutes.product.en,
    title: 'Vintage Telephone Lamp | Handmade retro phone lamp',
    description:
      'Available handmade vintage telephone lamp with warm Edison LED bulb, created from an authentic rotary phone.',
    schemas: [productSchema],
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
    `<title>${escapeHtml(page.title)}</title>`,
    `<meta name="description" content="${escapeHtml(page.description)}" />`,
    `<link rel="canonical" href="${canonical}" />`,
    getAlternateLinks(page),
    `<meta property="og:type" content="${page.key === 'product' ? 'product' : 'website'}" />`,
    `<meta property="og:site_name" content="E&amp;K Vintara Studio" />`,
    `<meta property="og:title" content="${escapeHtml(page.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(page.description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:image" content="${siteUrl}/images/${page.key === 'product' ? 'retro-telephone-lamp-01.jpg' : 'vintara-logo.jpg'}" />`,
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
