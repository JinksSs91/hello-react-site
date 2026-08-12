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
import pinkTelephoneLamp01 from './assets/products/pink-rotary-telephone-lamp-01.jpg'
import pinkTelephoneLamp02 from './assets/products/pink-rotary-telephone-lamp-02.jpg'
import pinkTelephoneLamp03 from './assets/products/pink-rotary-telephone-lamp-03.jpg'
import russianTelephoneLamp01 from './assets/products/russian-rotary-telephone-lamp-01.jpg'
import russianTelephoneLamp02 from './assets/products/russian-rotary-telephone-lamp-02.jpg'
import russianTelephoneLamp03 from './assets/products/russian-rotary-telephone-lamp-03.jpg'
import russianTelephoneLamp04 from './assets/products/russian-rotary-telephone-lamp-04.jpg'
import mayakClockLamp01 from './assets/products/mayak-desk-clock-lamp-01.jpg'
import mayakClockLamp02 from './assets/products/mayak-desk-clock-lamp-02.jpg'
import mayakClockLamp03 from './assets/products/mayak-desk-clock-lamp-03.jpg'
import mayakClockLamp04 from './assets/products/mayak-desk-clock-lamp-04.jpg'
import bgDnesLogo from './assets/media/bgdnes.png'
import regNewsLogo from './assets/media/regnews.png'
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
  'markets',
  'media',
  'reviews',
  'about',
  'contacts',
]

const productCategories = [
  'all',
  'retro-telephones',
  'radios',
  'cameras',
  'desk-clocks',
  'other',
]

const pages = {
  home: { bg: '/', en: '/en' },
  available: { bg: '/available-lamps', en: '/en/available-lamps' },
  sold: { bg: '/sold-lamps', en: '/en/sold-lamps' },
  markets: { bg: '/art-markets', en: '/en/art-markets' },
  media: { bg: '/media-about-us', en: '/en/media-about-us' },
  reviews: { bg: '/customer-reviews', en: '/en/customer-reviews' },
  about: { bg: '/about-us', en: '/en/about-us' },
  contacts: { bg: '/contacts', en: '/en/contacts' },
}

const marketGalleryRoutes = {
  're-bazaar-mall-galeria-burgas-2026': {
    bg: '/art-markets/re-bazaar-mall-galeria-burgas-2026',
    en: '/en/art-markets/re-bazaar-mall-galeria-burgas-2026',
  },
}

const reBazaarImages = [
  '/images/markets/re-bazaar-2026/re-bazaar-main.jpg',
  '/images/markets/re-bazaar-2026/re-bazaar-01.jpg',
  '/images/markets/re-bazaar-2026/re-bazaar-02.jpg',
  '/images/markets/re-bazaar-2026/re-bazaar-03.jpg',
  '/images/markets/re-bazaar-2026/re-bazaar-04.jpg',
]

const customerReviewImages = Array.from(
  { length: 11 },
  (_, index) =>
    `/images/reviews/customer-review-${String(index + 1).padStart(2, '0')}.jpg`,
)

const handmadeDesignMarketPoster =
  '/images/markets/handmade-design-market-2026/handmade-design-market-poster.jpg'
const handmadeDesignMarketUrl =
  'https://www.instagram.com/p/DZTMBCqttSt/?igsh=dmt6MTJiN2dtbTZ4'

const soldInstagramProductSlugs = [
  'yellow-ta72m-custom-lamp',
  'smena-2-memory-lamp',
  'black-rotary-telephone-lamp',
  'zenit-tripod-lamp',
  'smena-8m-camera-lamp',
  'praktica-mtl5-camera-lamp',
  'zenit-122-victory-camera-lamp',
  'zenit-legend-camera-lamp',
  'zorki-4-camera-lamp',
  'yantar-desk-clock-lamp',
  'telephone-switchboard-lamp',
  'weathered-vintage-camera-lamp',
  'smena-2-retro-camera-lamp',
  'orange-telephone-1984-lamp',
  'p-170-military-telephone-lamp',
  'blue-telephone-lamp',
  'pink-classic-telephone-lamp',
  'pink-jewel-telephone-lamp',
  'pink-jewel-first-edition-lamp',
]

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
  'cream-rotary-telephone-lamp': {
    bg: '/lamps/cream-rotary-telephone-lamp',
    en: '/en/lamps/cream-rotary-telephone-lamp',
  },
  'red-ta-900-telephone-lamp-original-box': {
    bg: '/lamps/red-ta-900-telephone-lamp-original-box',
    en: '/en/lamps/red-ta-900-telephone-lamp-original-box',
  },
  'red-ta-900-telephone-lamp-second-edition': {
    bg: '/lamps/red-ta-900-telephone-lamp-second-edition',
    en: '/en/lamps/red-ta-900-telephone-lamp-second-edition',
  },
  'quartz-5-camera-lamp': {
    bg: '/lamps/quartz-5-camera-lamp',
    en: '/en/lamps/quartz-5-camera-lamp',
  },
  'porst-compact-reflex-oc-lamp': {
    bg: '/lamps/porst-compact-reflex-oc-lamp',
    en: '/en/lamps/porst-compact-reflex-oc-lamp',
  },
  'zenit-camera-lamp': {
    bg: '/lamps/zenit-camera-lamp',
    en: '/en/lamps/zenit-camera-lamp',
  },
  'union-sewing-machine-lamp': {
    bg: '/lamps/union-sewing-machine-lamp',
    en: '/en/lamps/union-sewing-machine-lamp',
  },
  'orange-telephone-lamp': {
    bg: '/lamps/orange-telephone-lamp',
    en: '/en/lamps/orange-telephone-lamp',
  },
  'yellow-telephone-lamp-1988': {
    bg: '/lamps/yellow-telephone-lamp-1988',
    en: '/en/lamps/yellow-telephone-lamp-1988',
  },
  'white-radio-point-lamp-1986': {
    bg: '/lamps/white-radio-point-lamp-1986',
    en: '/en/lamps/white-radio-point-lamp-1986',
  },
  'blue-radio-point-lamp': {
    bg: '/lamps/blue-radio-point-lamp',
    en: '/en/lamps/blue-radio-point-lamp',
  },
  'black-white-telephone-lamp': {
    bg: '/lamps/black-white-telephone-lamp',
    en: '/en/lamps/black-white-telephone-lamp',
  },
  'pink-1980s-telephone-lamp': {
    bg: '/lamps/pink-1980s-telephone-lamp',
    en: '/en/lamps/pink-1980s-telephone-lamp',
  },
  'pink-rotary-telephone-lamp': {
    bg: '/sold-lamps/pink-rotary-telephone-lamp',
    en: '/en/sold-lamps/pink-rotary-telephone-lamp',
  },
  'russian-rotary-telephone-lamp': {
    bg: '/sold-lamps/russian-rotary-telephone-lamp',
    en: '/en/sold-lamps/russian-rotary-telephone-lamp',
  },
  'mayak-desk-clock-lamp': {
    bg: '/sold-lamps/mayak-desk-clock-lamp',
    en: '/en/sold-lamps/mayak-desk-clock-lamp',
  },
  ...Object.fromEntries(
    soldInstagramProductSlugs.map((slug) => [
      slug,
      {
        bg: `/sold-lamps/${slug}`,
        en: `/en/sold-lamps/${slug}`,
      },
    ]),
  ),
}

const content = {
  bg: {
    nav: {
      home: 'Начало',
      available: 'Налични лампи',
      sold: 'Продадени лампи',
      markets: 'Участия в базари',
      media: 'Медиите за нас',
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
      counters: [
        {
          value: 30,
          prefix: 'Над',
          suffix: '',
          label:
            'Доволни клиенти от стартирането на проекта ни в началото на март 2026',
          wide: true,
        },
        {
          value: 27,
          suffix: '+',
          label: 'Спасени от изхвърляне в боклука ретро телефони',
        },
        {
          value: 21,
          suffix: '+',
          label: 'Спасени от изхвърляне в боклука ретро фотоапарати',
        },
        {
          value: 3,
          suffix: '+',
          label: 'Спасени от изхвърляне в боклука ретро настолни часовници',
        },
        {
          value: 5,
          suffix: '+',
          label: 'Спасени от изхвърляне в боклука ретро радиа и радиоточки',
        },
        {
          value: 12,
          suffix: '+',
          label: 'Налични лампи от спасените антики',
        },
        {
          value: 15,
          suffix: '+',
          label: 'Предмети, чакащи реда си да бъдат превърнати в лампи',
        },
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
      details: 'Виж проекта',
    },
    categories: {
      label: 'Филтрирай по категория',
      empty: 'В тази категория все още няма добавени лампи.',
      items: {
        all: 'Всички',
        'retro-telephones': 'Ретро телефони',
        radios: 'Радиа',
        cameras: 'Фотоапарати',
        'desk-clocks': 'Настолни часовници',
        other: 'Други',
      },
    },
    markets: {
      kicker: 'Участия в базари',
      title: 'Срещи на живо с хора, които ценят различното.',
      text:
        'Тук ще споделяме снимки и моменти от арт базари, изложения и творчески събития, в които участваме.',
      viewGallery: 'Разгледай снимките',
      back: 'Назад към участията в базари',
      filters: {
        label: 'Филтрирай участията',
        past: 'Отминали',
        upcoming: 'Предстоящи',
      },
      gallery: {
        title: 'Re-Bazaar (Mall Galeria Burgas) 25-26 Април 2026г.',
        status: 'Отминал',
        date: '25-26 април 2026 г.',
        location: 'Mall Galeria Burgas',
        text:
          'Снимки от щанда на E&K Vintara Studio и срещите ни с посетителите на Re-Bazaar.',
      },
      upcomingEvent: {
        title: 'Handmade Design Market',
        status: 'Отминал',
        date: '7-9 август 2026 г.',
        location: 'Алеята пред Флора, Морска градина, гр. Бургас',
        text:
          'Над 40 български бранда в Морската градина. Ще ви очакват работилници, музика и забавления за цялото семейство. Вкусотии и напитки от местни брандове, както разбира се и нашият щанд с ръчно изработени лампи.',
        admission: 'Вход свободен',
        cta: 'Виж събитието в Instagram',
      },
    },
    media: {
      kicker: 'Медиите за нас',
      title: 'Историите зад лампите, разказани в медиите.',
      text:
        'Статии и медийни публикации за E&K Vintara Studio, хората зад проекта и втория живот на забравената техника.',
      cta: 'Прочети статията',
      cards: [
        {
          publication: 'RegNews',
          image: regNewsLogo,
          date: '4 май 2026 г.',
          title:
            'Ретрото може не само да е модерно, но и да блести – доказват го Ели и Калоян',
          summary:
            'Историята на Ели и Калоян, идеята да спасят старите предмети от забравата и превръщането им в лампи с характер.',
          url: 'https://www.regnews.net/news/17778929987450/retroto-mozhe-ne-samo-da-e-moderno-no-i-da-blesti-dokazvat-go-eli-i-kaloyan-',
        },
        {
          publication: 'България Днес',
          image: bgDnesLogo,
          date: '20 май 2026 г.',
          title: 'Годеници правят лампи от стари телефони',
          summary:
            'Публикация за началото на творческия проект и новия живот на стари телефони, радиа, фотоапарати и настолни часовници.',
          url: 'https://www.bgdnes.bg/bulgaria/article/22879771',
        },
      ],
    },
    reviews: {
      kicker: 'Отзиви от клиенти',
      title: 'Историите продължават в домовете на нашите клиенти.',
      text:
        'Снимки, Instagram stories и автентична обратна връзка от хората, избрали лампа на E&K Vintara Studio.',
      galleryTitle: 'Отзиви и снимки от клиенти',
      imageAlts: [
        'Клиентски отзив за получени лампи и успешна доставка',
        'Червена телефонна лампа в интериора на клиент',
        'Клиентски съобщения за получена с много любов лампа',
        'Оранжева телефонна лампа в дома на клиент',
        'Две фотоапаратни лампи, споделени от клиент',
        'Оранжева телефонна лампа върху дървена мебел',
        'Разопакована оранжева телефонна лампа',
        'Лампа от фотоапарат Смена-2 в дома на клиент',
        'Черна телефонна лампа в артистичен интериор',
        'Червена телефонна лампа, споделена от клиент',
        'Клиентски отзив за лампа, избрана като подарък',
      ],
    },
    about: {
      kicker: 'За нас',
      title: 'Здравейте, ние сме Елена и Калоян.',
      intro:
        'Двойка от Пловдив, заедно от над пет години, и споделяме любовта към пътуванията, старите вещи и историите, които носят със себе си.',
      origin:
        'E&K Vintara Studio започна почти случайно. Докато разчиствахме стар таван, попаднахме на няколко забравени ретро телефона. Тъкмо щяхме да ги изхвърлим, когато си помислихме:',
      question: 'а защо да не им дадем втори живот?',
      transformation: 'И така ги превърнахме в лампи.',
      learning:
        'Учехме всичко в движение — кабели, пробиване, боядисване, реставрация, много експерименти и понякога започване отначало. От няколко стари телефона колекцията постепенно се разрасна с радиа, фотоапарати, часовници и други позабравени предмети, които откриваме по време на пътуванията си, по битпазари, при колекционери или при хора, които просто не искат да ги видят изхвърлени.',
      today:
        'Днес превръщаме тези малки частици от миналото в уникални лампи, създадени за съвременния дом.',
      closing: 'Стари предмети. Нови истории. И малко повече светлина.',
    },
    contacts: {
      kicker: 'Контакти',
      title: 'Свържи се с нас за цена, доставка или изработка на лампа по твой дизайн.',
      text:
        'Най-бързият начин е чрез съобщение в Instagram. Можеш също да ни изпратиш имейл или да се свържеш с нас по телефон, Viber, Telegram или WhatsApp.',
      instagram: 'Instagram',
      email: 'Имейл',
      viber: 'Телефон (Viber/Telegram/WhatsApp)',
      instagramCta: 'Отвори Instagram',
      emailCta: 'Изпрати имейл',
      viberCta: 'Обади се',
    },
    product: {
      back: 'Назад към наличните лампи',
      available: 'Продава се',
      cta: 'Поръчай чрез съобщение в Instagram',
      details: 'Виж детайли',
      gallery: 'Допълнителни снимки',
      dmHint: 'Пиши ни в Instagram и изпрати името на продукта, който искаш да поръчаш.',
      openImage: 'Отвори снимка',
      closeGallery: 'Затвори галерията',
      previousImage: 'Предишна снимка',
      nextImage: 'Следваща снимка',
      imageCount: 'Снимка',
      imageCountOf: 'от',
      sold: 'Продадено',
      soldBack: 'Назад към продадените лампи',
      soldCta: 'Попитай за подобна лампа',
      soldHint:
        'Харесва ти този модел? Пиши ни в Instagram, за да обсъдим подобна лампа.',
    },
    footer: '📍 гр. Пловдив',
  },
  en: {
    nav: {
      home: 'Home',
      available: 'Available Lamps',
      sold: 'Sold Lamps',
      markets: 'Art Markets',
      media: 'In the Media',
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
      counters: [
        {
          value: 30,
          prefix: 'Over',
          suffix: '',
          label: 'Happy customers since our project launched in early March 2026',
          wide: true,
        },
        {
          value: 27,
          suffix: '+',
          label: 'Retro telephones saved from being thrown away',
        },
        {
          value: 21,
          suffix: '+',
          label: 'Retro cameras saved from being thrown away',
        },
        {
          value: 3,
          suffix: '+',
          label: 'Retro desk clocks saved from being thrown away',
        },
        {
          value: 5,
          suffix: '+',
          label: 'Retro radios and wired radio sets saved from being thrown away',
        },
        {
          value: 12,
          suffix: '+',
          label: 'Available lamps created from rescued antiques',
        },
        {
          value: 15,
          suffix: '+',
          label: 'Objects waiting to be transformed into lamps',
        },
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
      details: 'View project',
    },
    categories: {
      label: 'Filter by category',
      empty: 'There are no lamps in this category yet.',
      items: {
        all: 'All',
        'retro-telephones': 'Retro Telephones',
        radios: 'Radios',
        cameras: 'Cameras',
        'desk-clocks': 'Desk Clocks',
        other: 'Other',
      },
    },
    markets: {
      kicker: 'Art Markets',
      title: 'Meeting people who appreciate something different.',
      text:
        'Here we will share photos and moments from art markets, exhibitions, and creative events we take part in.',
      viewGallery: 'View photos',
      back: 'Back to art markets',
      filters: {
        label: 'Filter market events',
        past: 'Past',
        upcoming: 'Upcoming',
      },
      gallery: {
        title: 'Re-Bazaar (Mall Galeria Burgas), April 25-26, 2026',
        status: 'Past',
        date: 'April 25-26, 2026',
        location: 'Mall Galeria Burgas',
        text:
          'Photos of the E&K Vintara Studio stand and our meetings with visitors at Re-Bazaar.',
      },
      upcomingEvent: {
        title: 'Handmade Design Market',
        status: 'Past',
        date: 'August 7-9, 2026',
        location: 'The walkway in front of Flora, Sea Garden, Burgas',
        text:
          'More than 40 Bulgarian brands will gather in the Sea Garden. Expect workshops, music, and entertainment for the whole family, local food and drinks, and of course our stand with handmade lamps.',
        admission: 'Free admission',
        cta: 'View event on Instagram',
      },
    },
    media: {
      kicker: 'In the Media',
      title: 'The stories behind the lamps, shared by the media.',
      text:
        'Articles and media coverage about E&K Vintara Studio, the people behind the project, and the second life of forgotten technology.',
      cta: 'Read article',
      languageNote: 'Article in Bulgarian',
      cards: [
        {
          publication: 'RegNews',
          image: regNewsLogo,
          date: 'May 4, 2026',
          title:
            'Ретрото може не само да е модерно, но и да блести – доказват го Ели и Калоян',
          summary:
            'The story of Eli and Kaloyan, their idea to save old objects from being forgotten, and their transformation into lamps with character.',
          url: 'https://www.regnews.net/news/17778929987450/retroto-mozhe-ne-samo-da-e-moderno-no-i-da-blesti-dokazvat-go-eli-i-kaloyan-',
        },
        {
          publication: 'България Днес',
          image: bgDnesLogo,
          date: 'May 20, 2026',
          title: 'Годеници правят лампи от стари телефони',
          summary:
            'A feature about the beginning of the creative project and the new life given to old telephones, radios, cameras, and desk clocks.',
          url: 'https://www.bgdnes.bg/bulgaria/article/22879771',
        },
      ],
    },
    reviews: {
      kicker: 'Customer Reviews',
      title: 'The stories continue in our customers’ homes.',
      text:
        'Photos, Instagram stories, and authentic feedback from people who chose an E&K Vintara Studio lamp.',
      galleryTitle: 'Customer reviews and photos',
      imageAlts: [
        'Customer feedback about received lamps and successful delivery',
        'Red telephone lamp in a customer interior',
        'Customer messages about a lamp received with love',
        'Orange telephone lamp in a customer home',
        'Two camera lamps shared by a customer',
        'Orange telephone lamp on wooden furniture',
        'Unboxed orange telephone lamp',
        'Smena-2 camera lamp in a customer home',
        'Black telephone lamp in an artistic interior',
        'Red telephone lamp shared by a customer',
        'Customer feedback about a lamp chosen as a gift',
      ],
    },
    about: {
      kicker: 'About us',
      title: 'Hello, we are Elena and Kaloyan.',
      intro:
        'We are a couple from Plovdiv, together for more than five years, and we share a love of travel, old objects, and the stories they carry.',
      origin:
        'E&K Vintara Studio began almost by accident. While clearing out an old attic, we came across several forgotten vintage telephones. We were just about to throw them away when we thought:',
      question: 'why not give them a second life?',
      transformation: 'And so we turned them into lamps.',
      learning:
        'We learned everything as we went — wiring, drilling, painting, restoration, plenty of experimenting, and sometimes starting over. From those few old telephones, the collection gradually grew to include radios, cameras, clocks, and other long-forgotten objects that we discover on our travels, at flea markets, through collectors, or from people who simply do not want to see them thrown away.',
      today:
        'Today, we transform these small pieces of the past into unique lamps created for the modern home.',
      closing: 'Old objects. New stories. And a little more light.',
    },
    contacts: {
      kicker: 'Contacts',
      title: 'Contact us for price, delivery, or a lamp made to your own design.',
      text:
        'The fastest way is by message on Instagram. You can also email us or contact us by phone, Viber, Telegram, or WhatsApp.',
      instagram: 'Instagram',
      email: 'Email',
      viber: 'Phone (Viber/Telegram/WhatsApp)',
      instagramCta: 'Open Instagram',
      emailCta: 'Send email',
      viberCta: 'Call',
    },
    product: {
      back: 'Back to available lamps',
      available: 'Available',
      cta: 'Order via Instagram message',
      details: 'View details',
      gallery: 'Additional photos',
      dmHint: 'Message us on Instagram with the name of the product you would like to order.',
      openImage: 'Open image',
      closeGallery: 'Close gallery',
      previousImage: 'Previous image',
      nextImage: 'Next image',
      imageCount: 'Image',
      imageCountOf: 'of',
      sold: 'Sold',
      soldBack: 'Back to sold lamps',
      soldCta: 'Ask for a similar lamp',
      soldHint:
        'Like this piece? Message us on Instagram to discuss a similar lamp.',
    },
    footer: '📍 Plovdiv, Bulgaria',
  },
}

const phoneLamp = {
  slug: 'retro-telephone-lamp',
  routes: productRoutes['retro-telephone-lamp'],
  category: 'retro-telephones',
  titleBg: 'Телефон с шайба от 70-те години на 20 век',
  titleEn: '1970s Rotary Telephone Lamp',
  summaryBg:
    'Винтидж телефон, получил нов живот като уникална лампа с топла Edison LED крушка.',
  summaryEn:
    'A vintage telephone brought back to life as a unique lamp with a warm Edison LED bulb.',
  images: [
    phoneLamp01,
    phoneLamp02,
    phoneLamp03,
    phoneLamp04,
  ],
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
  category: 'cameras',
  titleBg: 'Фотоапарат Вилия от 1980г.',
  titleEn: 'Vilia Camera from 1980',
  summaryBg:
    'Ръчно изработена лампа от vintage фотоапарат Vilia с топла Edison крушка.',
  summaryEn:
    'Handmade lamp created from a vintage Vilia camera with a warm Edison bulb.',
  images: [viliaLamp05, viliaLamp01, viliaLamp02, viliaLamp03],
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
  category: 'retro-telephones',
  titleBg: 'Чисто нов червен телефон с шайба от 1991г',
  titleEn: 'Brand New Red Rotary Telephone from 1991',
  summaryBg:
    'Оригинален ретро телефон TA-900 от 1991 г., ръчно преобразен в уникална лампа.',
  summaryEn:
    'An original TA-900 retro telephone from 1991, handmade into a unique lamp.',
  images: [
    redTa900Lamp02,
    redTa900Lamp01,
  ],
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

function createInstagramProduct({
  slug,
  category,
  titleBg,
  titleEn,
  summaryBg,
  summaryEn,
  imagePrefix,
  images,
  descriptionBg,
  descriptionEn,
  featuresBg,
  featuresEn,
  status,
}) {
  return {
    slug,
    routes: productRoutes[slug],
    category,
    titleBg,
    titleEn,
    summaryBg,
    summaryEn,
    images: images || [
      `/images/products/${imagePrefix}-01.jpg`,
      `/images/products/${imagePrefix}-02.jpg`,
    ],
    descriptionBg,
    descriptionEn,
    featuresBg,
    featuresEn,
    status,
  }
}

const creamRotaryTelephoneLamp = createInstagramProduct({
  slug: 'cream-rotary-telephone-lamp',
  category: 'retro-telephones',
  titleBg: 'Кремав телефон с шайба от 70-те и 80-те години',
  titleEn: 'Cream Rotary Telephone Lamp from the 1970s–1980s',
  summaryBg: 'Отделна ръчна изработка от автентичен кремав телефон с шайба и топла Edison LED крушка.',
  summaryEn: 'A separate handmade piece created from an authentic cream rotary telephone with a warm Edison LED bulb.',
  images: [
    '/images/products/retro-telephone-lamp-instagram-01.jpg',
    '/images/products/retro-telephone-lamp-instagram-02.jpg',
  ],
  descriptionBg: [
    'Винтидж телефон, получил нов живот, в отлично състояние.',
    'Ръчно превърнат в уникална лампа с топла Edison LED крушка — перфектен акцент за уютен дом, офис, студио или ретро кът.',
    'Всеки детайл е запазен, за да носи духа на миналото, но с модерна функция и атмосфера. Този модел ротационни телефони е характерен за Източна Европа от 70-те и 80-те години — здрав, тежък и създаден да издържи десетилетия.',
    'Перфектен подарък за любители на ретро техника, индустриален дизайн и нестандартен интериор.',
  ],
  descriptionEn: [
    'A vintage telephone in excellent condition, given a new life.',
    'Handmade into a unique lamp with a warm Edison LED bulb — a perfect accent for a cozy home, office, studio, or retro corner.',
    'Every detail has been preserved to carry the spirit of the past with a modern function and atmosphere. This rotary telephone style was typical of Eastern Europe in the 1970s and 1980s — solid, heavy, and built to last.',
    'A perfect gift for lovers of retro technology, industrial design, and unusual interiors.',
  ],
  featuresBg: ['Отделна ръчна изработка', 'Автентичен телефон с шайба', 'Топла Edison LED крушка', 'Единствена по рода си'],
  featuresEn: ['Separate handmade piece', 'Authentic rotary telephone', 'Warm Edison LED bulb', 'One of a kind'],
})

const redTa900OriginalBoxLamp = createInstagramProduct({
  slug: 'red-ta-900-telephone-lamp-original-box',
  category: 'retro-telephones',
  titleBg: 'Червен телефон ТА-900 от 1991 г. с оригинална кутия',
  titleEn: 'Red TA-900 Telephone Lamp from 1991 with Original Box',
  summaryBg: 'Отделна лампа от чисто нов ТА-900, запазен с оригиналната си кутия и документи.',
  summaryEn: 'A separate lamp made from a brand-new TA-900 preserved with its original box and documents.',
  images: [
    '/images/products/red-ta-900-instagram-01.jpg',
    '/images/products/red-ta-900-instagram-02.jpg',
  ],
  descriptionBg: [
    'Когато миналото срещне модерния уют — специална лампа от оригинален ретро телефон ТА-900, произведен през 1991 г. в Белоградчик от ИНКОМС.',
    'Телефонът е чисто нов и никога не е използван. Запазен е десетилетия в оригиналния си кашон с етикет, ръководство за експлоатация, автентични печати и маркировки.',
    'Преобразен ръчно в лампа, той запазва душата на миналото и носи топлина и стил в съвременния дом. Това не е просто лампа, а история, която свети.',
  ],
  descriptionEn: [
    'Where the past meets modern comfort — a special lamp made from an original TA-900 retro telephone manufactured in 1991 in Belogradchik by INCOMS.',
    'The telephone is brand new and was never used. It was preserved for decades in its original box with its label, user manual, authentic stamps, and markings.',
    'Handmade into a lamp, it keeps the soul of the past while bringing warmth and style to a modern home. This is not just a lamp, but a story that glows.',
  ],
  featuresBg: ['Отделна ръчна изработка', 'ТА-900 от 1991 г.', 'Оригинална кутия и документи', 'Никога не е използван'],
  featuresEn: ['Separate handmade piece', 'TA-900 from 1991', 'Original box and documents', 'Never used'],
})

const redTa900SecondEditionLamp = createInstagramProduct({
  slug: 'red-ta-900-telephone-lamp-second-edition',
  category: 'retro-telephones',
  titleBg: 'Червен телефон ТА-900 — втора уникална изработка',
  titleEn: 'Red TA-900 Telephone Lamp — Second Unique Piece',
  summaryBg: 'Втора отделна ръчно изработена лампа от червен ретро телефон ТА-900.',
  summaryEn: 'A second, separately handmade lamp created from a red TA-900 retro telephone.',
  images: [
    '/images/products/red-ta-900-instagram-04.jpg',
    '/images/products/red-ta-900-instagram-03.jpg',
  ],
  descriptionBg: [
    'Оригинален червен ретро телефон ТА-900, ръчно преобразен в уникална лампа с характер.',
    'Автентичните детайли и силуетът на телефона са запазени, а топлата светлина му дава нов живот и създава уютна атмосфера.',
    'Тази отделна изработка е подходяща за хол, спалня, офис, арт пространство или като подарък за любител на ретро техниката и нестандартния дизайн.',
  ],
  descriptionEn: [
    'An original red TA-900 retro telephone, handmade into a unique lamp with character.',
    'Its authentic details and telephone silhouette have been preserved, while the warm light gives it a new life and a cozy atmosphere.',
    'This separate piece is ideal for a living room, bedroom, office, art space, or as a gift for someone who loves retro technology and unusual design.',
  ],
  featuresBg: ['Отделна ръчна изработка', 'Оригинален ТА-900', 'Топла светлина', 'Уникална бройка'],
  featuresEn: ['Separate handmade piece', 'Original TA-900', 'Warm light', 'Unique piece'],
})

const quartz5CameraLamp = createInstagramProduct({
  slug: 'quartz-5-camera-lamp',
  category: 'cameras',
  titleBg: 'Ретро камера „Кварц 5“',
  titleEn: 'Quartz 5 Vintage Movie Camera Lamp',
  summaryBg: 'Оригинална 8-милиметрова камера „Кварц 5“, реставрирана и превърната в дизайнерска лампа.',
  summaryEn: 'An original Quartz 5 8 mm movie camera, restored and transformed into a designer lamp.',
  imagePrefix: 'quartz-5-camera-lamp',
  descriptionBg: [
    'Уникална ръчно изработена дизайнерска лампа, създадена от оригинална ретро филмова камера „Кварц 5“. Автентичният корпус, обективът и характерните механични детайли са запазени и превърнати във функционален интериорен акцент.',
    '„Кварц 5“ е съветска любителска 8-милиметрова филмова камера, създадена за домашни филми и кратки кинолюбителски продукции. Серията е характерна с масивния си метален корпус, механичен дизайн и отличителен винтидж вид.',
    'Камерата е ръчно реставрирана и преобразувана в работеща лампа с винтидж крушка, като оригиналният ѝ облик е максимално запазен. Пълен комплект, готов за използване.',
  ],
  descriptionEn: [
    'A unique handmade designer lamp created from an original Quartz 5 vintage movie camera. Its authentic body, lens, and distinctive mechanical details have been preserved and transformed into a functional interior accent.',
    'The Quartz 5 is a Soviet amateur 8 mm movie camera made for home films and short productions. The series is known for its solid metal body, mechanical design, and distinctive vintage appearance.',
    'The camera was restored by hand and converted into a working lamp with a vintage bulb while preserving as much of its original character as possible. Complete and ready to use.',
  ],
  featuresBg: ['Ръчна реставрация', 'Оригинална камера „Кварц 5“', 'Винтидж крушка', 'Готова за използване'],
  featuresEn: ['Hand-restored', 'Original Quartz 5 camera', 'Vintage bulb', 'Ready to use'],
})

const porstCameraLamp = createInstagramProduct({
  slug: 'porst-compact-reflex-oc-lamp',
  category: 'cameras',
  titleBg: 'Фотоапарат Porst Compact Reflex OC',
  titleEn: 'Porst Compact Reflex OC Camera Lamp',
  summaryBg: 'Реставриран японски 35 mm фотоапарат, превърнат в настолна лампа с гъвкаво метално рамо.',
  summaryEn: 'A restored Japanese 35 mm camera transformed into a desk lamp with a flexible metal arm.',
  imagePrefix: 'porst-compact-reflex-oc-lamp',
  descriptionBg: [
    'Ръчно изработена лампа от реставриран винтидж фотоапарат Porst Compact Reflex OC — японски 35 mm огледално-рефлексен апарат, произвеждан от Cosina и продаван в Европа под марката Porst.',
    'Запазени са характерните винтидж детайли, надписи, метални елементи и оригиналният фотографски характер. Гъвкавото метално рамо завършва с ретро фасунга и топла LED Edison крушка.',
    'Подходяща е за винтидж или индустриален интериор, кабинет, библиотека, домашен офис, кафе, ресторант, студио или като оригинален подарък за фотограф.',
    'Това е декоративна лампа от реставриран фотоапарат, а не действащ фотоапарат. Всеки екземпляр има собствена история и характер.',
  ],
  descriptionEn: [
    'A handmade lamp created from a restored Porst Compact Reflex OC vintage camera — a Japanese 35 mm SLR manufactured by Cosina and sold in Europe under the Porst brand.',
    'Its original markings, metal elements, and photographic character have been preserved. A flexible metal arm ends in a retro socket with a warm LED Edison bulb.',
    'Perfect for vintage and industrial interiors, a study, library, home office, café, restaurant, studio, or as an original gift for a photographer.',
    'This is a decorative lamp made from a restored camera, not a functioning camera. Every piece has its own history and character.',
  ],
  featuresBg: ['Ръчна реставрация', 'Porst Compact Reflex OC', 'Гъвкаво метално рамо', 'Топла LED Edison крушка'],
  featuresEn: ['Hand-restored', 'Porst Compact Reflex OC', 'Flexible metal arm', 'Warm LED Edison bulb'],
})

const zenitCameraLamp = createInstagramProduct({
  slug: 'zenit-camera-lamp',
  category: 'cameras',
  titleBg: 'Фотоапарат Zenit с ретро светкавица',
  titleEn: 'Zenit Camera Lamp with Vintage Flash Base',
  summaryBg: 'Оригинален фотоапарат Zenit с поставка от ретро светкавица и топла Edison крушка.',
  summaryEn: 'An original Zenit camera with a vintage flash base and a warm Edison bulb.',
  imagePrefix: 'zenit-camera-lamp',
  descriptionBg: [
    'Ръчно изработена лампа от оригинален винтидж фотоапарат Zenit с поставка от ретро светкавица. Всеки детайл е внимателно запазен, за да съчетае носталгията по аналоговата фотография с топлината на модерното осветление.',
    'Лампата използва LED Edison крушка с топла светлина и е подходяща за хол, спалня, офис или творческо студио.',
    'Това не е просто лампа, а предмет с история и оригинален подарък за фотографи, колекционери и любители на ретро дизайна.',
  ],
  descriptionEn: [
    'A handmade lamp built from an original vintage Zenit camera and a retro flash unit used as its base. Every detail has been carefully preserved, combining analog photography nostalgia with the warmth of modern lighting.',
    'The lamp uses a warm LED Edison bulb and is suitable for a living room, bedroom, office, or creative studio.',
    'More than a lamp, it is an object with a story and an original gift for photographers, collectors, and lovers of retro design.',
  ],
  featuresBg: ['Ръчна изработка', 'Оригинален Zenit', 'Поставка от ретро светкавица', 'LED Edison крушка'],
  featuresEn: ['Handmade', 'Original Zenit camera', 'Vintage flash base', 'LED Edison bulb'],
})

const unionSewingMachineLamp = createInstagramProduct({
  slug: 'union-sewing-machine-lamp',
  category: 'other',
  titleBg: 'Шевна машина UNION',
  titleEn: 'UNION Sewing Machine Lamp',
  summaryBg: 'Класическа шевна машина UNION, преобразена в уникална винтидж лампа с абажур.',
  summaryEn: 'A classic UNION sewing machine transformed into a unique vintage lamp with a shade.',
  imagePrefix: 'union-sewing-machine-lamp',
  descriptionBg: [
    'Ръчно изработена лампа от класическа ретро шевна машина UNION. Машината получава нов живот като уникален акцент, който съчетава носталгия, топлина и характер.',
    'Шевните машини UNION са популярни през средата на XX век и са известни със своя здрав метален корпус, елегантни орнаменти и издръжлив механизъм. Навремето са били незаменим помощник във всеки дом, а днес се превръщат в истинско ретро бижу.',
  ],
  descriptionEn: [
    'A handmade lamp created from a classic UNION vintage sewing machine. It receives a new life as a unique accent combining nostalgia, warmth, and character.',
    'UNION sewing machines were popular in the middle of the twentieth century and are known for their sturdy metal bodies, elegant decoration, and durable mechanisms. Once an essential household tool, this one is now a true retro gem.',
  ],
  featuresBg: ['Ръчна изработка', 'Автентична машина UNION', 'Класически абажур', 'Единствена по рода си'],
  featuresEn: ['Handmade', 'Authentic UNION machine', 'Classic lampshade', 'One of a kind'],
})

const orangeTelephoneLamp = createInstagramProduct({
  slug: 'orange-telephone-lamp',
  category: 'retro-telephones',
  titleBg: 'Оранжев ретро телефон',
  titleEn: 'Orange Retro Telephone Lamp',
  summaryBg: 'Автентичен оранжев телефон, ръчно преобразен в лампа с топла светлина.',
  summaryEn: 'An authentic orange telephone, handmade into a lamp with warm light.',
  imagePrefix: 'orange-telephone-lamp',
  images: [
    '/images/products/orange-telephone-lamp-02.jpg',
    '/images/products/orange-telephone-lamp-01.jpg',
  ],
  descriptionBg: [
    'Някога част от ежедневието, днес акцент в интериора. Тази лампа е ръчно изработена от автентичен оранжев ретро телефон, който получава нов живот и нова функция.',
    'Всеки детайл е внимателно запазен и преобразен, за да съчетае носталгията от миналото с уюта на съвременния дом. Топлата светлина създава спокойна атмосфера, а уникалният дизайн привлича погледа и разказва история.',
    'Подходяща за хора, които обичат различното, ценят ръчната изработка и искат да внесат характер в пространството си. Всеки екземпляр е единствен по рода си.',
  ],
  descriptionEn: [
    'Once part of everyday life, now an interior accent. This lamp is handmade from an authentic orange retro telephone that has been given a new life and function.',
    'Every detail has been carefully preserved and transformed, combining nostalgia with the comfort of a modern home. The warm light creates a calm atmosphere while the distinctive design tells its story.',
    'Made for people who value unusual objects, craftsmanship, and character. Every piece is one of a kind.',
  ],
  featuresBg: ['Автентичен ретро телефон', 'Ръчна изработка', 'Топла светлина', 'Уникална бройка'],
  featuresEn: ['Authentic retro telephone', 'Handmade', 'Warm light', 'Unique piece'],
})

const yellowTelephoneLamp = createInstagramProduct({
  slug: 'yellow-telephone-lamp-1988',
  category: 'retro-telephones',
  titleBg: 'Жълт телефон от 1988 г.',
  titleEn: 'Yellow 1988 Telephone Lamp',
  summaryBg: 'Ярък жълт телефон от 1988 г., преобразен в артистична лампа с топла светлина.',
  summaryEn: 'A bright yellow telephone from 1988 transformed into an artistic lamp with warm light.',
  imagePrefix: 'yellow-telephone-lamp-1988',
  descriptionBg: [
    'Тази уникална лампа, създадена от ретро телефон, носи духа на 1988 година — време, когато нещата се правеха с характер и внимание към детайла.',
    'Ръчно изработена, с топла светлина и уютно излъчване, тя не е просто осветление, а акцент, който разказва история. Подходяща е за нощно шкафче, хол или като артистичен елемент в модерен дом с винтидж душа.',
    'Единствена по рода си лампа от истински ретро телефон, която създава уют и атмосфера.',
  ],
  descriptionEn: [
    'Created from a retro telephone, this unique lamp carries the spirit of 1988 — a time when objects were made with character and attention to detail.',
    'Handmade with warm light and a cozy presence, it is more than illumination: it is an accent with a story. Perfect for a bedside table, living room, or as an artistic element in a modern home with a vintage soul.',
    'A one-of-a-kind lamp made from a genuine retro telephone, bringing warmth and atmosphere to the room.',
  ],
  featuresBg: ['Телефон от 1988 г.', 'Ръчна изработка', 'Топла светлина', 'Ярък винтидж дизайн'],
  featuresEn: ['Telephone from 1988', 'Handmade', 'Warm light', 'Bright vintage design'],
})

const whiteRadioPointLamp = createInstagramProduct({
  slug: 'white-radio-point-lamp-1986',
  category: 'radios',
  titleBg: 'Бяла радиоточка от 1986 г.',
  titleEn: 'White 1986 Wired Radio Lamp',
  summaryBg: 'Винтидж радиоточка от 1986 г. с оригинална кутия и документи, преобразена в лампа.',
  summaryEn: 'A 1986 vintage wired radio with its original box and documents, transformed into a lamp.',
  imagePrefix: 'white-radio-point-lamp-1986',
  descriptionBg: [
    'Винтидж радиоточка, уникално и ръчно преобразена в лампа. Запазена е с оригиналната си кутия, в която е стояла от 1986 г., сертификат за произход и гаранционна карта.',
    'Оригиналният винтидж корпус е съчетан с топла уютна светлина. Подходяща е за нощно шкафче, хол, офис или като подарък за любител на ретро дизайна.',
    'Уникално ръчно изработено изделие за ретро, скандинавски или бохо интериор.',
  ],
  descriptionEn: [
    'A vintage wired radio uniquely transformed into a handmade lamp. It comes with its original box, where it had been stored since 1986, as well as its certificate of origin and warranty card.',
    'The original vintage body is paired with warm, cozy light. It is suitable for a bedside table, living room, office, or as a gift for someone who appreciates retro design.',
    'A unique handmade piece for retro, Scandinavian, or boho interiors.',
  ],
  featuresBg: ['Радиоточка от 1986 г.', 'Оригинална кутия и документи', 'Ръчна изработка', 'Топла светлина'],
  featuresEn: ['Wired radio from 1986', 'Original box and documents', 'Handmade', 'Warm light'],
})

const blueRadioPointLamp = createInstagramProduct({
  slug: 'blue-radio-point-lamp',
  category: 'radios',
  titleBg: 'Синя винтидж радиоточка',
  titleEn: 'Blue Vintage Wired Radio Lamp',
  summaryBg: 'Синя ретро радиоточка, ръчно трансформирана в уютна настолна лампа.',
  summaryEn: 'A blue retro wired radio, handmade into a cozy desk lamp.',
  imagePrefix: 'blue-radio-point-lamp',
  images: [
    '/images/products/blue-radio-point-lamp-02.jpg',
    '/images/products/blue-radio-point-lamp-01.jpg',
  ],
  descriptionBg: [
    'Уникална синя винтидж радиоточка, трансформирана в стилна лампа, която добавя характер и топлина в дома.',
    'Оригиналният винтидж дизайн е съчетан с топла и мека светлина. Подходяща е за нощно шкафче, офис, хол или като акцент в уютен кът за четене.',
    'Ръчно изработена уникална бройка за ретро и модерни интериори — истински характер и история в едно.',
  ],
  descriptionEn: [
    'A unique blue vintage wired radio transformed into a stylish lamp that adds warmth and character to the home.',
    'Its original vintage design is paired with warm, soft light. Perfect for a bedside table, office, living room, or as an accent in a cozy reading corner.',
    'A unique handmade piece for retro and modern interiors, combining genuine history and character.',
  ],
  featuresBg: ['Оригинален винтидж корпус', 'Ръчна изработка', 'Топла мека светлина', 'Уникална бройка'],
  featuresEn: ['Original vintage body', 'Handmade', 'Warm soft light', 'Unique piece'],
})

const blackWhiteTelephoneLamp = createInstagramProduct({
  slug: 'black-white-telephone-lamp',
  category: 'retro-telephones',
  titleBg: 'Черно-бял ретро телефон',
  titleEn: 'Black and White Retro Telephone Lamp',
  summaryBg: 'Черно-бял телефон в отлично състояние, реставриран и превърнат в артистична лампа.',
  summaryEn: 'A black and white telephone in excellent condition, restored and transformed into an artistic lamp.',
  imagePrefix: 'black-white-telephone-lamp',
  descriptionBg: [
    'Черно-бяла лампа-телефон в отлично състояние, без забележки и драскотини. Реставрирана и освежена от нас, тя чака своя нов собственик.',
    'Готова е да внесе характер и светлина върху бюро, нощно шкафче или в арт кафене.',
  ],
  descriptionEn: [
    'A black and white telephone lamp in excellent condition, free from marks and scratches. Restored and refreshed by us, it is ready for its new owner.',
    'Ready to bring character and light to a desk, bedside table, or art café.',
  ],
  featuresBg: ['Отлично състояние', 'Ръчно реставрирана', 'Без драскотини', 'Уникален черно-бял дизайн'],
  featuresEn: ['Excellent condition', 'Hand-restored', 'No scratches', 'Unique black and white design'],
})

const pink1980sTelephoneLamp = createInstagramProduct({
  slug: 'pink-1980s-telephone-lamp',
  category: 'retro-telephones',
  titleBg: 'Розов ретро телефон от 80-те',
  titleEn: 'Pink 1980s Rotary Telephone Lamp',
  summaryBg:
    'Оригинален яркорозов телефон от 80-те години с кутия, сертификат и гаранция, ръчно превърнат в лампа.',
  summaryEn:
    'An original bright-pink 1980s telephone with its box, certificate, and warranty, handmade into a lamp.',
  imagePrefix: 'pink-1980s-telephone-lamp',
  descriptionBg: [
    'Уникален винтидж акцент за хора, които обичат предмети с история. Оригиналният розов телефон от 80-те години е ръчно превърнат в ефектна настолна лампа, като са запазени емблематичната шайба и характерният ретро дизайн.',
    'Телефонът е с оригиналната си кутия, сертификат и гаранция от 80-те години. Яркият розов цвят и топлата светлина го превръщат в единствен по рода си декоративен предмет.',
    'Подходяща е за нощно шкафче, бюро, ретро интериор или като нестандартен подарък. Лампата не просто осветява стаята — тя връща малко от чара на аналоговата епоха.',
  ],
  descriptionEn: [
    'A unique vintage accent for people who love objects with a story. This original pink telephone from the 1980s was handmade into a striking desk lamp while preserving its iconic rotary dial and distinctive retro design.',
    'The telephone comes with its original box, certificate, and warranty from the 1980s. Its bright pink color and warm light make it a truly one-of-a-kind decorative piece.',
    'Perfect for a bedside table, desk, retro interior, or an unconventional gift. The lamp does more than illuminate a room — it brings back a little of the charm of the analog era.',
  ],
  featuresBg: [
    'Оригинален телефон от 80-те',
    'Оригинална кутия, сертификат и гаранция',
    'Ръчна изработка',
    'Ярък розов цвят',
  ],
  featuresEn: [
    'Original 1980s telephone',
    'Original box, certificate, and warranty',
    'Handmade',
    'Bright pink color',
  ],
})

const availableProducts = [
  pink1980sTelephoneLamp,
  quartz5CameraLamp,
  porstCameraLamp,
  zenitCameraLamp,
  phoneLamp,
  creamRotaryTelephoneLamp,
  orangeTelephoneLamp,
  yellowTelephoneLamp,
  blackWhiteTelephoneLamp,
  redTa900Lamp,
  redTa900OriginalBoxLamp,
  redTa900SecondEditionLamp,
  viliaLamp,
  whiteRadioPointLamp,
  blueRadioPointLamp,
].map((product) => ({
  ...product,
  priceEur: {
    'pink-1980s-telephone-lamp': 95,
    'quartz-5-camera-lamp': 170,
    'porst-compact-reflex-oc-lamp': 120,
    'zenit-camera-lamp': 130,
    'retro-telephone-lamp': 140,
    'cream-rotary-telephone-lamp': 85,
    'orange-telephone-lamp': 80,
    'yellow-telephone-lamp-1988': 80,
    'black-white-telephone-lamp': 110,
    'red-ta-900-telephone-lamp': 120,
    'red-ta-900-telephone-lamp-original-box': 120,
    'red-ta-900-telephone-lamp-second-edition': 120,
    'vilia-camera-lamp': 90,
    'white-radio-point-lamp-1986': 60,
    'blue-radio-point-lamp': 60,
  }[product.slug],
}))

const pinkTelephoneLamp = {
  slug: 'pink-rotary-telephone-lamp',
  routes: productRoutes['pink-rotary-telephone-lamp'],
  category: 'retro-telephones',
  status: 'sold',
  titleBg: 'Розов телефон с шайба',
  titleEn: 'Pink Rotary Telephone Lamp',
  summaryBg:
    'Ръчно изработена розова телефонна лампа с топла светлина и единствен по рода си дизайн.',
  summaryEn:
    'A handmade pink telephone lamp with warm light and a one-of-a-kind design.',
  images: [pinkTelephoneLamp01, pinkTelephoneLamp02, pinkTelephoneLamp03],
  descriptionBg: [
    '✨ Ретро настроение с модерен чар ✨💡',
    'Тази ръчно изработена лампа от винтидж телефон превръща всеки ъгъл в уютно и стилно място.',
    'Перфектна за спалня, офис или подарък за човек с вкус към нестандартния декор. 💖',
  ],
  descriptionEn: [
    '✨ Retro mood with modern charm ✨💡',
    'This handmade lamp created from a vintage telephone turns any corner into a cozy and stylish space.',
    'Perfect for a bedroom, office, or as a gift for someone who appreciates unconventional decor. 💖',
  ],
  featuresBg: [
    'Ръчно изработена',
    'Работеща лампа с топла светлина',
    'Единствен по рода си дизайн',
    'Идеална за ретро интериори',
  ],
  featuresEn: [
    'Handmade',
    'Working lamp with warm light',
    'One-of-a-kind design',
    'Perfect for retro interiors',
  ],
}

const russianTelephoneLamp = {
  slug: 'russian-rotary-telephone-lamp',
  routes: productRoutes['russian-rotary-telephone-lamp'],
  category: 'retro-telephones',
  status: 'sold',
  titleBg: 'Руски телефон-лампа от 50-те–70-те години',
  titleEn: 'Russian Rotary Telephone Lamp from the 1950s–1970s',
  summaryBg:
    'Ръчно изработена винтидж лампа от автентичен съветски ротационен телефон.',
  summaryEn:
    'A handmade vintage lamp created from an authentic Soviet rotary telephone.',
  images: [
    russianTelephoneLamp01,
    russianTelephoneLamp02,
    russianTelephoneLamp03,
    russianTelephoneLamp04,
  ],
  descriptionBg: [
    'Ръчно изработена винтидж лампа, създадена от истински руски ротационен телефон от 50-те–70-те години.',
    'Запазени са автентичните детайли - класическата шайба за набиране, металните елементи и ретро излъчването, характерно за старите съветски телефони.',
    'Днес този емблематичен дизайн оживява отново като уникална лампа и стилен акцент за уютен, винтидж или индустриален интериор.',
    'Уникален ръчно изработен декор с история, характер и топла атмосфера.',
  ],
  descriptionEn: [
    'A handmade vintage lamp created from an authentic Russian rotary telephone dating from the 1950s–1970s.',
    'Its original details have been preserved, including the classic rotary dial, metal elements, and the distinctive retro character of old Soviet telephones.',
    'Today, this iconic design comes to life again as a unique lamp and a stylish accent for cozy, vintage, or industrial interiors.',
    'A one-of-a-kind handmade decor piece with history, character, and a warm atmosphere.',
  ],
  featuresBg: [
    'Автентичен ротационен телефон',
    'Ръчна изработка',
    'Запазени оригинални детайли',
    'Уникален ретро дизайн',
  ],
  featuresEn: [
    'Authentic rotary telephone',
    'Handmade',
    'Preserved original details',
    'Unique retro design',
  ],
}

const mayakClockLamp = {
  slug: 'mayak-desk-clock-lamp',
  routes: productRoutes['mayak-desk-clock-lamp'],
  category: 'desk-clocks',
  status: 'sold',
  titleBg: 'Настолен часовник „Маяк“ от СССР',
  titleEn: 'Mayak Soviet Desk Clock Lamp',
  summaryBg:
    'Винтидж лампа с работещ часовник и термометър, създадена от автентичен съветски настолен часовник „Маяк“.',
  summaryEn:
    'A vintage lamp with a working clock and thermometer, created from an authentic Soviet Mayak desk clock.',
  images: [
    mayakClockLamp01,
    mayakClockLamp02,
    mayakClockLamp03,
    mayakClockLamp04,
  ],
  descriptionBg: [
    'Добавете топлина и характер към дома си с тази уникална ръчно изработена винтидж лампа, съчетаваща функционалност и ретро естетика.',
    'Лампата е създадена с внимание към детайла от автентичен стар руски часовник „Маяк“, произведен в СССР. Часовникът работи напълно изправно и придава истински винтидж характер.',
    'Тази лампа е не само източник на светлина, но и впечатляващ декоративен елемент, който създава уютна атмосфера в спалня, хол, офис или винтидж интериор.',
    'Топлата светлина и ретро визията я превръщат в отличителен акцент за любителите на старинния стил и уникалните предмети.',
  ],
  descriptionEn: [
    'Bring warmth and character into your home with this unique handmade vintage lamp, combining practical function with authentic retro aesthetics.',
    'The lamp was carefully created from an original Russian Mayak clock made in the USSR. The clock remains fully functional and gives the piece its genuine vintage character.',
    'More than a source of light, this lamp is a striking decorative piece that creates a cozy atmosphere in a bedroom, living room, office, or vintage interior.',
    'Its warm glow and retro appearance make it a distinctive accent for anyone who appreciates antique style and one-of-a-kind objects.',
  ],
  featuresBg: [
    'Ръчно изработена винтидж лампа',
    'Оригинален работещ часовник „Маяк“ от СССР',
    'Вграден работещ термометър',
    'Топла светлина с винтидж Edison крушка',
    'Дървен корпус с автентичен ретро дизайн',
    'Уникален и единствен по рода си артикул',
  ],
  featuresEn: [
    'Handmade vintage lamp',
    'Original working Mayak clock made in the USSR',
    'Built-in working thermometer',
    'Warm light from a vintage Edison bulb',
    'Wooden case with authentic retro design',
    'Unique one-of-a-kind piece',
  ],
}

const soldInstagramProducts = [
  {
    slug: 'yellow-ta72m-custom-lamp', category: 'retro-telephones', imagePrefix: 'yellow-ta72m-custom-lamp',
    titleBg: 'Жълт телефон TA-72M — изработка по поръчка', titleEn: 'Yellow TA-72M Custom Telephone Lamp',
    summaryBg: 'Личен телефон TA-72M на клиент, ръчно преобразен в яркожълта декоративна лампа.',
    summaryEn: 'A client’s own TA-72M telephone, handmade into a bright-yellow decorative lamp.',
    descriptionBg: [
      'Тази лампа е направена по поръчка от личния телефон на клиента — оригинален ретро ротационен TA-72M, получил нов живот като декоративна настолна лампа.',
      'Запазени са характерният яркожълт корпус, механичната шайба и спираловидният кабел, а слушалката е превърната в стойка за крушката.',
      'TA-72M е представител на класическите аналогови телефони от епохата на ротационното набиране — с масивен корпус и разпознаваем индустриален дизайн. Всеки детайл е обработен ръчно, така че оригиналният характер на телефона да остане видима част от новата му функция.',
    ],
    descriptionEn: [
      'This custom lamp was created from the client’s own telephone — an original vintage TA-72M rotary phone given a new life as a decorative desk lamp.',
      'Its distinctive bright-yellow body, mechanical rotary dial, and coiled cord were preserved, while the handset was transformed into the support for the bulb.',
      'The TA-72M represents the classic analog telephones of the rotary-dial era, with a substantial body and recognizable industrial design. Every detail was finished by hand so the telephone’s original character remains a visible part of its new function.',
    ],
    featuresBg: ['Изработка по поръчка', 'Оригинален TA-72M', 'Запазен яркожълт корпус', 'Ръчна изработка'],
    featuresEn: ['Custom-made piece', 'Original TA-72M', 'Preserved bright-yellow body', 'Handmade'],
  },
  {
    slug: 'smena-2-memory-lamp', category: 'cameras', imagePrefix: 'smena-2-memory-lamp',
    titleBg: 'Фотоапарат „Смена 2“ — лампа със спомени', titleEn: 'Smena 2 Camera Memory Lamp',
    summaryBg: 'Автентичен фотоапарат „Смена 2“, ръчно превърнат във винтидж лампа с топла светлина.',
    summaryEn: 'An authentic Smena 2 camera handmade into a vintage lamp with warm light.',
    descriptionBg: ['Уникална лампа, ръчно изработена от автентичен фотоапарат „Смена 2“ и превърната в стилен акцент за дома.', 'Топлата светлина и винтидж визията създават уют и характер. Подходяща е за любители на фотографията, ретро дизайна и подаръци с история.'],
    descriptionEn: ['A unique lamp handmade from an authentic Smena 2 camera and transformed into a stylish home accent.', 'Its warm light and vintage appearance create comfort and character. A fitting piece for lovers of photography, retro design, and gifts with a story.'],
  },
  {
    slug: 'black-rotary-telephone-lamp', category: 'retro-telephones', imagePrefix: 'black-rotary-telephone-lamp',
    titleBg: 'Черен класически телефон-лампа', titleEn: 'Classic Black Telephone Lamp',
    summaryBg: 'Класически черен телефон с декоративна Edison крушка и елегантно ретро излъчване.',
    summaryEn: 'A classic black telephone with a decorative Edison bulb and an elegant retro presence.',
    descriptionBg: ['Класическият черен телефон е ръчно преобразен в лампа, която съчетава винтидж излъчване с топла и уютна атмосфера.', 'Подходяща е за нощно шкафче, хол, офис, винтидж интериор или кафе. Единствената по рода си изработка добавя характер, стил и история.'],
    descriptionEn: ['This classic black telephone was handmade into a lamp that combines vintage character with a warm, cozy atmosphere.', 'It suits a bedside table, living room, office, vintage interior, or café. The one-of-a-kind piece adds character, style, and history.'],
  },
  {
    slug: 'zenit-tripod-lamp', category: 'cameras', imagePrefix: 'zenit-tripod-lamp',
    titleBg: 'Фотоапарат Zenit с подвижен статив', titleEn: 'Zenit Camera Lamp with Adjustable Tripod',
    summaryBg: 'Оригинален Zenit, превърнат в лампа със статив, който се монтира в две позиции.',
    summaryEn: 'An original Zenit transformed into a lamp with a tripod that mounts in two positions.',
    descriptionBg: ['Винтидж фотоапарат Zenit, ръчно превърнат в стилна настолна лампа, която съчетава история, дизайн и функционалност.', 'Автентичният вид е запазен, а LED Edison крушката дава топла светлина. Стативът може да бъде монтиран в две различни позиции за различна визия и стабилност.'],
    descriptionEn: ['A vintage Zenit camera handmade into a stylish desk lamp combining history, design, and function.', 'Its authentic appearance is preserved and paired with a warm LED Edison bulb. The tripod can be mounted in two positions for a different look and stability.'],
  },
  {
    slug: 'smena-8m-camera-lamp', category: 'cameras', imagePrefix: 'smena-8m-camera-lamp',
    titleBg: 'Фотоапарат „Смена 8M“', titleEn: 'Smena 8M Camera Lamp',
    summaryBg: 'Фотографската класика „Смена 8M“, преобразена в дизайнерска лампа с Edison крушка.',
    summaryEn: 'The Smena 8M photography classic transformed into a designer lamp with an Edison bulb.',
    descriptionBg: ['Втори живот за една фотографска класика. Емблематичният „Смена 8M“ е превърнат в дизайнерска лампа с винтидж чар.', 'Всеки детайл е запазен с внимание, а топлата LED Edison крушка създава мека светлина за нощно шкафче, хол, офис или творческо студио.'],
    descriptionEn: ['A second life for a photography classic. The iconic Smena 8M was transformed into a designer lamp with vintage charm.', 'Every detail was carefully preserved, while the warm LED Edison bulb creates soft light for a bedside table, living room, office, or creative studio.'],
  },
  {
    slug: 'praktica-mtl5-camera-lamp', category: 'cameras', imagePrefix: 'praktica-mtl5-camera-lamp',
    titleBg: 'Фотоапарат Praktica MTL5', titleEn: 'Praktica MTL5 Camera Lamp',
    summaryBg: 'Класически 35 mm фотоапарат от Източна Германия, превърнат в лампа с индустриален характер.',
    summaryEn: 'A classic East German 35 mm camera transformed into a lamp with industrial character.',
    descriptionBg: ['Praktica MTL5 е класически 35 mm SLR фотоапарат, произведен в Източна Германия през 80-те години, известен със здравата метална конструкция и ръчния контрол.', 'Емблематичният винтидж дизайн и M42 системата го превръщат в перфектна основа за ръчно изработена лампа с индустриална и ретро естетика.'],
    descriptionEn: ['The Praktica MTL5 is a classic 35 mm SLR made in East Germany during the 1980s, known for its sturdy metal construction and manual controls.', 'Its iconic vintage design and M42 system make it a perfect foundation for a handmade lamp with industrial and retro character.'],
  },
  {
    slug: 'zenit-122-victory-camera-lamp', category: 'cameras', imagePrefix: 'zenit-122-victory-camera-lamp',
    titleBg: 'Юбилеен Zenit 122 „50 Победа“', titleEn: 'Zenit 122 “50 Victory” Anniversary Camera Lamp',
    summaryBg: 'Юбилеен Zenit 122 от 90-те години, преобразен в лампа с топла Edison светлина.',
    summaryEn: 'A special-edition 1990s Zenit 122 transformed into a lamp with warm Edison light.',
    descriptionBg: ['Ръчно изработена лампа от автентичен Zenit 122 — емблематичен съветски 35 mm SLR модел от 90-те години със здрав корпус и механичен характер.', 'Специалният знак „50 Победа“ отбелязва 50 години от 1945 г. и прави модела особено интересен за колекционери. Топлата Edison крушка добавя уют, без да отнема от историята му.'],
    descriptionEn: ['A handmade lamp created from an authentic Zenit 122, an iconic Soviet 35 mm SLR from the 1990s with a robust body and mechanical character.', 'Its “50 Victory” emblem commemorates fifty years since 1945 and makes it especially interesting to collectors. The warm Edison bulb adds comfort without diminishing its history.'],
  },
  {
    slug: 'zenit-legend-camera-lamp', category: 'cameras', imagePrefix: 'zenit-legend-camera-lamp',
    titleBg: 'Класически фотоапарат Zenit', titleEn: 'Classic Zenit Camera Lamp',
    summaryBg: 'Автентичен Zenit с нов живот като лампа, съчетаваща винтидж стил и топла светлина.',
    summaryEn: 'An authentic Zenit given a new life as a lamp combining vintage style and warm light.',
    descriptionBg: ['Нов живот за една легенда — ръчно изработена лампа от автентичен ретро фотоапарат Zenit.', 'Винтидж стилът, топлата ambient светлина и запазените детайли я превръщат в характерен акцент за дом, студио или офис.'],
    descriptionEn: ['A new life for a legend: a handmade lamp created from an authentic vintage Zenit camera.', 'Its vintage style, warm ambient light, and preserved details make it a distinctive accent for a home, studio, or office.'],
  },
  {
    slug: 'zorki-4-camera-lamp', category: 'cameras', imagePrefix: 'zorki-4-camera-lamp',
    titleBg: 'Фотоапарат „Зоркий 4“', titleEn: 'Zorki 4 Camera Lamp',
    summaryBg: 'Автентичен „Зоркий 4“, превърнат в лампа с топла Edison крушка и история във всеки детайл.',
    summaryEn: 'An authentic Zorki 4 transformed into a lamp with a warm Edison bulb and history in every detail.',
    descriptionBg: ['Ръчно изработена лампа от автентичен фотоапарат „Зоркий 4“, превърнат в стилен акцент за дом, студио или арт пространство.', 'Топлата Edison светлина и запазеният винтидж характер я правят подходяща за любители на фотографията, ретро дизайна и нестандартния декор.'],
    descriptionEn: ['A handmade lamp created from an authentic Zorki 4 camera and transformed into a stylish accent for a home, studio, or art space.', 'Its warm Edison light and preserved vintage character make it ideal for lovers of photography, retro design, and unconventional decor.'],
  },
  {
    slug: 'yantar-desk-clock-lamp', category: 'desk-clocks', imagePrefix: 'yantar-desk-clock-lamp',
    titleBg: 'Настолен часовник „Янтар“', titleEn: 'Yantar Desk Clock Lamp',
    summaryBg: 'Съветски кварцов часовник „Янтар“ от 70-те/80-те години, превърнат в лампа.',
    summaryEn: 'A Soviet Yantar quartz desk clock from the 1970s–1980s transformed into a lamp.',
    descriptionBg: ['Съветски настолен часовник „Янтар“ с кварцов механизъм, ръчно превърнат в лампа — класика от 70-те и 80-те години.', 'Римските цифри, винтидж стилът и характерната цветова комбинация носят неподражаема атмосфера от миналото.'],
    descriptionEn: ['A Soviet Yantar desk clock with a quartz movement, handmade into a lamp — a classic from the 1970s and 1980s.', 'Its Roman numerals, vintage style, and distinctive colors carry an unmistakable atmosphere from the past.'],
  },
  {
    slug: 'telephone-switchboard-lamp', category: 'retro-telephones', imagePrefix: 'telephone-switchboard-lamp',
    titleBg: 'Телефонна централа от 70-те години', titleEn: '1970s Telephone Switchboard Lamp',
    summaryBg: 'Ретро телефонна централа, получила нов живот като ръчно изработена лампа.',
    summaryEn: 'A retro telephone switchboard given a new life as a handmade lamp.',
    descriptionBg: ['От централа за разговори до център на вниманието — тази телефонна централа от 70-те години е преобразена в ръчно изработена лампа.', 'Запазени са въртящият диск, бутоните и индустриалният чар. Някога е свързвала хора, а днес създава топла светлина, атмосфера и характер.'],
    descriptionEn: ['From a conversation hub to the center of attention, this 1970s telephone switchboard was transformed into a handmade lamp.', 'Its rotary dial, buttons, and industrial charm were preserved. It once connected people; today it creates warm light, atmosphere, and character.'],
  },
  {
    slug: 'weathered-vintage-camera-lamp', category: 'cameras', imagePrefix: 'weathered-vintage-camera-lamp',
    titleBg: 'Фотоапарат с автентична патина', titleEn: 'Weathered Vintage Camera Lamp',
    summaryBg: 'Ретро фотоапарат с видими следи от времето, превърнат в уникална лампа с душа.',
    summaryEn: 'A retro camera with visible traces of time, transformed into a unique lamp with soul.',
    descriptionBg: ['Ръчно изработена лампа от автентичен ретро фотоапарат, която не просто осветява, а разказва история.', 'Белезите от годините са запазени и видими — част от истинската винтидж естетика. Изработката съчетава уникален дизайн, топла атмосфера и характер.'],
    descriptionEn: ['A handmade lamp created from an authentic retro camera that does more than provide light — it tells a story.', 'The marks left by time remain visible as part of its genuine vintage aesthetic. The piece combines unique design, warm atmosphere, and character.'],
  },
  {
    slug: 'smena-2-retro-camera-lamp', category: 'cameras', imagePrefix: 'smena-2-retro-camera-lamp',
    titleBg: 'Ретро фотоапарат „Смена-2“', titleEn: 'Retro Smena-2 Camera Lamp',
    summaryBg: 'Втора отделна изработка от автентичен фотоапарат „Смена-2“ с уютна топла светлина.',
    summaryEn: 'A second separate piece made from an authentic Smena-2 camera with cozy warm light.',
    descriptionBg: ['Ретро лампа, създадена на ръка от автентичен фотоапарат „Смена-2“. Класическият аналогов апарат е превърнат в стилен дизайнерски акцент.', 'Топлата светлина и единственият по рода си дизайн са подходящи за нощно шкафче, офис или подарък за фотограф и винтидж ентусиаст.'],
    descriptionEn: ['A retro lamp handmade from an authentic Smena-2 camera. The classic analog camera was transformed into a stylish designer accent.', 'Its warm light and one-of-a-kind design suit a bedside table, office, or a gift for a photographer and vintage enthusiast.'],
  },
  {
    slug: 'orange-telephone-1984-lamp', category: 'retro-telephones', imagePrefix: 'orange-telephone-1984-lamp',
    titleBg: 'Оранжев телефон от 1984 г.', titleEn: 'Orange 1984 Telephone Lamp',
    summaryBg: 'Оригинален оранжев телефон от 1984 г., запазен без пребоядисване и превърнат в лампа.',
    summaryEn: 'An original orange telephone from 1984, preserved without repainting and transformed into a lamp.',
    descriptionBg: ['Уникална ръчно изработена лампа от оригинален ретро телефон от 1984 г., запазен в автентичния си цвят без пребоядисване или имитации.', 'Топлата светлина и единственият по рода си дизайн носят истински винтидж характер за дом, офис или подарък. Разговор от миналото, превърнат в уют.'],
    descriptionEn: ['A unique handmade lamp created from an original 1984 retro telephone, preserved in its authentic color without repainting or imitation.', 'Its warm light and one-of-a-kind design bring genuine vintage character to a home, office, or gift. A conversation from the past transformed into comfort.'],
  },
  {
    slug: 'p-170-military-telephone-lamp', category: 'retro-telephones', imagePrefix: 'p-170-military-telephone-lamp',
    titleBg: 'Военен телефон П-170', titleEn: 'P-170 Military Telephone Lamp',
    summaryBg: 'Рядък военен телефон П-170 от СССР с оригинален паспорт, превърнат в лампа.',
    summaryEn: 'A rare Soviet P-170 military telephone with its original passport, transformed into a lamp.',
    descriptionBg: ['Уникална лампа от оригинален военен телефон П-170 — рядък колекционерски модел от 70-те/80-те години на СССР.', 'Телефонът е в оригиналния си цвят без пребоядисване и е запазен с оригиналния паспорт. Истинско парче история, ръчно превърнато в дизайнерска лампа за винтидж или индустриален интериор.'],
    descriptionEn: ['A unique lamp made from an original P-170 military telephone, a rare collectible Soviet model from the 1970s–1980s.', 'The telephone retains its original color without repainting and comes with its original passport. A genuine piece of history handmade into a designer lamp for vintage or industrial interiors.'],
  },
  {
    slug: 'blue-telephone-lamp', category: 'retro-telephones', imagePrefix: 'blue-telephone-lamp',
    titleBg: 'Син винтидж телефон-лампа', titleEn: 'Blue Vintage Telephone Lamp',
    summaryBg: 'Син ретро телефон, преобразен в лампа с Edison крушка и спокойна топла светлина.',
    summaryEn: 'A blue retro telephone transformed into a lamp with an Edison bulb and calm warm light.',
    descriptionBg: ['Син винтидж телефон, преобразен в оригинално осветление, което комбинира носталгия и модерен уют.', 'Топлата Edison светлина и меките сенки създават спокойна атмосфера за вечерно четене, нощно шкафче, офис или акцент в хола.'],
    descriptionEn: ['A blue vintage telephone transformed into original lighting that combines nostalgia with modern comfort.', 'The warm Edison light and soft shadows create a calm atmosphere for evening reading, a bedside table, office, or living-room accent.'],
  },
  {
    slug: 'pink-classic-telephone-lamp', category: 'retro-telephones', imagePrefix: 'pink-classic-telephone-lamp', images: ['/images/products/pink-classic-telephone-lamp-01.jpg'],
    titleBg: 'Розов класически телефон-лампа', titleEn: 'Classic Pink Telephone Lamp',
    summaryBg: 'Розов ретро телефон с топла Edison крушка, превърнат във функционален дизайнерски акцент.',
    summaryEn: 'A pink retro telephone with a warm Edison bulb transformed into a functional designer accent.',
    descriptionBg: ['Класически ретро телефон получава нов живот като ръчно изработена лампа, която привлича вниманието и създава уют.', 'Розовият дизайн и топлата Edison светлина съчетават винтидж стил, модерна визия и функционалност за хол, спалня, офис или заведение.'],
    descriptionEn: ['A classic retro telephone receives a new life as a handmade lamp that attracts attention and creates comfort.', 'Its pink design and warm Edison light combine vintage style, modern presence, and function for a living room, bedroom, office, or venue.'],
  },
  {
    slug: 'pink-jewel-telephone-lamp', category: 'retro-telephones', imagePrefix: 'pink-jewel-telephone-lamp', images: ['/images/products/pink-jewel-telephone-lamp-01.jpg'],
    titleBg: 'Розово телефонно бижу', titleEn: 'Pink Telephone Jewel Lamp',
    summaryBg: 'Автентичен розов телефон, трансформиран в забележим дизайнерски акцент с топла светлина.',
    summaryEn: 'An authentic pink telephone transformed into a striking designer accent with warm light.',
    descriptionBg: ['Розово бижу, създадено от автентичен ретро телефон и трансформирано в дизайнерска лампа, която не остава незабелязана.', 'Винтидж визията, модерната функционалност и топлата Edison светлина създават уют в дом, кафе, студио или офис.'],
    descriptionEn: ['A pink jewel created from an authentic retro telephone and transformed into a designer lamp that cannot go unnoticed.', 'Its vintage appearance, modern function, and warm Edison light create comfort in a home, café, studio, or office.'],
  },
  {
    slug: 'pink-jewel-first-edition-lamp', category: 'retro-telephones', imagePrefix: 'pink-jewel-first-edition-lamp', images: ['/images/products/pink-jewel-first-edition-lamp-01.jpg'],
    titleBg: 'Розова лампа-бижу — първа изработка', titleEn: 'Pink Jewel Telephone Lamp — First Piece',
    summaryBg: 'Отделна розова телефонна лампа с характерен ретро силует и уютна светлина.',
    summaryEn: 'A separate pink telephone lamp with a distinctive retro silhouette and cozy light.',
    descriptionBg: ['Розова лампа-бижу, ръчно създадена от автентичен ретро телефон.', 'Отделната изработка запазва характерния силует на телефона и го превръща в декоративен акцент с топла и приветлива светлина.'],
    descriptionEn: ['A pink jewel lamp handmade from an authentic retro telephone.', 'This separate piece preserves the telephone’s distinctive silhouette and transforms it into a decorative accent with warm, welcoming light.'],
  },
].map((product) =>
  createInstagramProduct({
    ...product,
    status: 'sold',
    featuresBg: ['Ръчна изработка', 'Автентичен винтидж предмет', 'Запазени оригинални детайли', 'Единствена по рода си'],
    featuresEn: ['Handmade', 'Authentic vintage object', 'Preserved original details', 'One of a kind'],
  }),
)

const soldProducts = [
  { ...unionSewingMachineLamp, status: 'sold' },
  ...soldInstagramProducts,
  mayakClockLamp,
  russianTelephoneLamp,
  pinkTelephoneLamp,
]

const productBySlug = Object.fromEntries(
  [...availableProducts, ...soldProducts].map((product) => [
    product.slug,
    product,
  ]),
)

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

  const marketGalleryEntry = Object.entries(marketGalleryRoutes).find(
    ([, urls]) => urls.bg === pathWithoutLanguage || urls.en === normalizedPath,
  )

  if (marketGalleryEntry) {
    return {
      language,
      page: 'marketGallery',
      marketGallerySlug: marketGalleryEntry[0],
      productSlug: null,
    }
  }

  const routeEntry = Object.entries(pages).find(
    ([, urls]) => urls.bg === pathWithoutLanguage || urls.en === normalizedPath,
  )
  const marketStatus = new URLSearchParams(window.location.search).get('status')

  return {
    language,
    page: routeEntry?.[0] || 'home',
    productSlug: null,
    marketGallerySlug: null,
    marketStatus:
      routeEntry?.[0] === 'markets' &&
      ['past', 'upcoming'].includes(marketStatus)
        ? marketStatus
        : 'all',
    category:
      ['available', 'sold'].includes(routeEntry?.[0]) &&
      productCategories.includes(
        new URLSearchParams(window.location.search).get('category'),
      )
        ? new URLSearchParams(window.location.search).get('category')
        : 'all',
  }
}

function App() {
  const initialRoute = getRouteFromPath(window.location.pathname)
  const [language, setLanguage] = useState(initialRoute.language)
  const [page, setPage] = useState(initialRoute.page)
  const [productSlug, setProductSlug] = useState(initialRoute.productSlug)
  const [marketGallerySlug, setMarketGallerySlug] = useState(
    initialRoute.marketGallerySlug,
  )
  const [category, setCategory] = useState(initialRoute.category || 'all')
  const [marketStatus, setMarketStatus] = useState(
    initialRoute.marketStatus || 'all',
  )
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
      setMarketGallerySlug(nextRoute.marketGallerySlug)
      setCategory(nextRoute.category || 'all')
      setMarketStatus(nextRoute.marketStatus || 'all')
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
    setMarketGallerySlug(nextRoute.marketGallerySlug)
    setCategory(nextRoute.category || 'all')
    setMarketStatus(nextRoute.marketStatus || 'all')
    setIsMenuOpen(false)
  }

  function handleLanguageChange(nextLanguage) {
    if (page === 'product' && activeProduct) {
      navigateTo(activeProduct.routes[nextLanguage])
      return
    }

    if (page === 'marketGallery' && marketGallerySlug) {
      navigateTo(marketGalleryRoutes[marketGallerySlug][nextLanguage])
      return
    }

    const destination = pages[page][nextLanguage]
    const categoryQuery =
      ['available', 'sold'].includes(page) && category !== 'all'
        ? `?category=${category}`
        : ''
    const marketStatusQuery =
      page === 'markets' && marketStatus !== 'all'
        ? `?status=${marketStatus}`
        : ''
    navigateTo(`${destination}${categoryQuery}${marketStatusQuery}`)
  }

  function isNavigationPageActive(navPage) {
    if (page === navPage) {
      return true
    }

    if (page === 'marketGallery') {
      return navPage === 'markets'
    }

    if (page !== 'product') {
      return false
    }

    return navPage === (activeProduct?.status === 'sold' ? 'sold' : 'available')
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
              className={isNavigationPageActive(navPage) ? 'active' : ''}
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

        <LanguageSwitcher
          className="language-switcher desktop-language-switcher"
          language={language}
          onChange={handleLanguageChange}
        />

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
                className={isNavigationPageActive(navPage) ? 'active' : ''}
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

          <LanguageSwitcher
            className="language-switcher mobile-language-switcher"
            language={language}
            onChange={handleLanguageChange}
          />
        </div>
      </header>

      <main>
        {page === 'home' && <HomePage copy={copy} language={language} navigateTo={navigateTo} />}
        {page === 'available' && (
          <AvailablePage
            category={category}
            copy={copy}
            language={language}
            navigateTo={navigateTo}
          />
        )}
        {page === 'sold' && (
          <SoldPage
            category={category}
            copy={copy}
            language={language}
            navigateTo={navigateTo}
          />
        )}
        {page === 'markets' && (
          <MarketsPage
            copy={copy}
            language={language}
            marketStatus={marketStatus}
            navigateTo={navigateTo}
          />
        )}
        {page === 'marketGallery' && (
          <MarketGalleryPage
            copy={copy}
            language={language}
            navigateTo={navigateTo}
          />
        )}
        {page === 'media' && <MediaPage copy={copy} />}
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
        productStatus={activeProduct?.status}
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
          <p className="hero-text">{copy.home.intro}</p>
          <p className="hero-text">{copy.home.story}</p>
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

      <HomeCounters counters={copy.home.counters} />

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

function HomeCounters({ counters }) {
  const sectionRef = useRef(null)
  const [isActive, setIsActive] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotionPreference = () => setReduceMotion(motionQuery.matches)

    updateMotionPreference()
    motionQuery.addEventListener('change', updateMotionPreference)

    return () => {
      motionQuery.removeEventListener('change', updateMotionPreference)
    }
  }, [])

  useEffect(() => {
    if (reduceMotion) {
      return undefined
    }

    const section = sectionRef.current

    if (!section || !('IntersectionObserver' in window)) {
      const animationFrame = requestAnimationFrame(() => setIsActive(true))
      return () => cancelAnimationFrame(animationFrame)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 },
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [reduceMotion])

  return (
    <div className="home-counter-grid" ref={sectionRef}>
      {counters.map((counter, index) => (
        <HomeCounter
          counter={counter}
          isActive={isActive || reduceMotion}
          key={counter.label}
          reduceMotion={reduceMotion}
          delay={index * 70}
        />
      ))}
    </div>
  )
}

function HomeCounter({ counter, isActive, reduceMotion, delay }) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isActive) {
      return undefined
    }

    if (reduceMotion) {
      return undefined
    }

    let animationFrame
    let startTime
    const duration = 900

    const animate = (timestamp) => {
      if (!startTime) {
        startTime = timestamp
      }

      const elapsed = Math.max(0, timestamp - startTime - delay)
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 3)

      setDisplayValue(Math.round(counter.value * easedProgress))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [counter.value, delay, isActive, reduceMotion])

  return (
    <article
      className={`home-counter-card${counter.wide ? ' wide' : ''}`}
      aria-label={`${counter.prefix ? `${counter.prefix} ` : ''}${counter.value}${counter.suffix} ${counter.label}`}
    >
      <strong className="home-counter-value" aria-hidden="true">
        {counter.prefix && (
          <span className="home-counter-prefix">{counter.prefix}</span>
        )}
        {reduceMotion ? counter.value : displayValue}
        <span className="home-counter-suffix">{counter.suffix}</span>
      </strong>
      <p>{counter.label}</p>
    </article>
  )
}

function AvailablePage({ category, copy, language, navigateTo }) {
  const visibleProducts =
    category === 'all'
      ? availableProducts
      : availableProducts.filter((product) => product.category === category)

  return (
    <section className="page">
      <PageHeader
        kicker={copy.available.kicker}
        title={copy.available.title}
        text={copy.available.text}
      />
      <CategoryFilters
        activeCategory={category}
        copy={copy.categories}
        language={language}
        navigateTo={navigateTo}
        page="available"
      />
      {visibleProducts.length > 0 ? (
        <div className="product-grid">
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
              copy={copy}
              language={language}
              navigateTo={navigateTo}
            />
          ))}
        </div>
      ) : (
        <EmptyCategory text={copy.categories.empty} />
      )}
    </section>
  )
}

function SoldPage({ category, copy, language, navigateTo }) {
  const visibleProducts =
    category === 'all'
      ? soldProducts
      : soldProducts.filter((product) => product.category === category)

  return (
    <section className="page">
      <PageHeader
        kicker={copy.sold.kicker}
        title={copy.sold.title}
        text={copy.sold.text}
      />
      <CategoryFilters
        activeCategory={category}
        copy={copy.categories}
        language={language}
        navigateTo={navigateTo}
        page="sold"
      />
      {visibleProducts.length > 0 ? (
        <div className="product-grid">
          {visibleProducts.map((product) => (
            <SoldProductCard
              copy={copy}
              key={product.slug}
              language={language}
              navigateTo={navigateTo}
              product={product}
            />
          ))}
        </div>
      ) : (
        <EmptyCategory text={copy.categories.empty} />
      )}
    </section>
  )
}

function CategoryFilters({
  activeCategory,
  copy,
  language,
  navigateTo,
  page,
}) {
  return (
    <nav className="category-filters" aria-label={copy.label}>
      {productCategories.map((category) => {
        const query = category === 'all' ? '' : `?category=${category}`
        const href = `${pages[page][language]}${query}`

        return (
          <a
            className={activeCategory === category ? 'active' : ''}
            href={href}
            key={category}
            aria-current={activeCategory === category ? 'page' : undefined}
            onClick={(event) => {
              event.preventDefault()
              navigateTo(href)
            }}
          >
            {copy.items[category]}
          </a>
        )
      })}
    </nav>
  )
}

function EmptyCategory({ text }) {
  return (
    <div className="empty-category" role="status">
      <p>{text}</p>
    </div>
  )
}

function MarketsPage({ copy, language, marketStatus, navigateTo }) {
  const galleryHref =
    marketGalleryRoutes['re-bazaar-mall-galeria-burgas-2026'][language]
  const showPast = marketStatus !== 'upcoming'

  return (
    <section className="page editorial-page markets-page">
      <PageHeader
        kicker={copy.markets.kicker}
        title={copy.markets.title}
        text={copy.markets.text}
      />
      <nav
        className="market-filters"
        aria-label={copy.markets.filters.label}
      >
        {['past', 'upcoming'].map((status) => {
          const href = `${pages.markets[language]}?status=${status}`

          return (
            <a
              className={marketStatus === status ? 'active' : ''}
              href={href}
              key={status}
              aria-current={marketStatus === status ? 'page' : undefined}
              onClick={(event) => {
                event.preventDefault()
                navigateTo(href)
              }}
            >
              {copy.markets.filters[status]}
            </a>
          )
        })}
      </nav>
      <div
        className={`editorial-grid ${marketStatus !== 'all' ? 'single-event' : ''}`}
      >
        {showPast && (
        <article className="editorial-card market-event-card">
          <span className="event-status-badge past">
            {copy.markets.gallery.status}
          </span>
          <a
            className="market-event-cover"
            href={galleryHref}
            onClick={(event) => {
              event.preventDefault()
              navigateTo(galleryHref)
            }}
          >
            <img
              src={reBazaarImages[0]}
              alt={copy.markets.gallery.title}
            />
          </a>
          <div className="editorial-copy">
            <div className="market-event-meta">
              <span>{copy.markets.gallery.date}</span>
              <span>{copy.markets.gallery.location}</span>
            </div>
            <h2>{copy.markets.gallery.title}</h2>
            <p>{copy.markets.gallery.text}</p>
            <a
              className="button secondary"
              href={galleryHref}
              onClick={(event) => {
                event.preventDefault()
                navigateTo(galleryHref)
              }}
            >
              {copy.markets.viewGallery}
            </a>
          </div>
        </article>
        )}

        {showPast && (
        <article className="editorial-card market-event-card upcoming-event-card">
          <span className="event-status-badge past">
            {copy.markets.upcomingEvent.status}
          </span>
          <div className="market-event-cover upcoming-event-cover">
            <img
              src={handmadeDesignMarketPoster}
              alt={`${copy.markets.upcomingEvent.title} - ${copy.markets.upcomingEvent.date}`}
            />
          </div>
          <div className="editorial-copy">
            <div className="market-event-meta">
              <span>{copy.markets.upcomingEvent.date}</span>
              <span>{copy.markets.upcomingEvent.location}</span>
            </div>
            <h2>{copy.markets.upcomingEvent.title}</h2>
            <p>{copy.markets.upcomingEvent.text}</p>
            <strong className="event-admission">
              {copy.markets.upcomingEvent.admission}
            </strong>
            <a
              className="button secondary"
              href={handmadeDesignMarketUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.markets.upcomingEvent.cta}
            </a>
          </div>
        </article>
        )}
      </div>
    </section>
  )
}

function MarketGalleryPage({ copy, language, navigateTo }) {
  const backHref = pages.markets[language]

  return (
    <section className="page market-gallery-page">
      <a
        className="back-link"
        href={backHref}
        onClick={(event) => {
          event.preventDefault()
          navigateTo(backHref)
        }}
      >
        {copy.markets.back}
      </a>

      <PageHeader
        kicker={copy.markets.kicker}
        title={copy.markets.gallery.title}
        text={copy.markets.gallery.text}
      />

      <div className="market-gallery-meta" aria-label={copy.markets.gallery.title}>
        <span>{copy.markets.gallery.date}</span>
        <span>{copy.markets.gallery.location}</span>
      </div>

      <ProductGallery
        images={reBazaarImages}
        title={copy.markets.gallery.title}
        copy={copy.product}
      />
    </section>
  )
}

function MediaPage({ copy }) {
  return (
    <section className="page editorial-page media-page">
      <PageHeader
        kicker={copy.media.kicker}
        title={copy.media.title}
        text={copy.media.text}
      />
      <div className="media-article-grid">
        {copy.media.cards.map((article) => (
          <article className="media-article-card" key={article.url}>
            <div className="media-article-cover">
              <img src={article.image} alt={`${article.publication} logo`} />
              <time>{article.date}</time>
            </div>
            <div className="media-article-copy">
              {copy.media.languageNote && (
                <span className="status-badge">{copy.media.languageNote}</span>
              )}
              <h2>{article.title}</h2>
              <p>{article.summary}</p>
              <a
                className="button secondary"
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {copy.media.cta}
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
      <ProductGallery
        allImages
        altTexts={copy.reviews.imageAlts}
        images={customerReviewImages}
        title={copy.reviews.galleryTitle}
        copy={copy.product}
      />
    </section>
  )
}

function AboutPage({ copy }) {
  return (
    <section className="page about-page">
      <PageHeader kicker={copy.about.kicker} title={copy.about.title} />
      <div className="text-panel about-story">
        <p>{copy.about.intro}</p>
        <p>
          {copy.about.origin} <strong>{copy.about.question}</strong>
        </p>
        <p>{copy.about.transformation}</p>
        <p>{copy.about.learning}</p>
        <p>{copy.about.today}</p>
        <p className="about-story-closing">
          <strong>{copy.about.closing}</strong>
        </p>
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
          valueClassName="email-value"
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
  const isSold = product.status === 'sold'
  const backHref = isSold ? pages.sold[language] : pages.available[language]

  return (
    <section className="page product-detail-page">
      <a
        className="back-link"
        href={backHref}
        onClick={(event) => {
          event.preventDefault()
          navigateTo(backHref)
        }}
      >
        {isSold ? copy.product.soldBack : copy.product.back}
      </a>
      <div className="product-detail">
        <ProductGallery
          images={product.images}
          title={title}
          copy={copy.product}
        />
        <div className="product-detail-copy">
          <span className={`status-badge ${isSold ? '' : 'available'}`}>
            {isSold ? copy.product.sold : copy.product.available}
          </span>
          <h1>{title}</h1>
          <p className="hero-lead">{summary}</p>
          {!isSold && (
            <div className="price-line">
              {formatPrice(product.priceEur, language)}
            </div>
          )}
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
          <p className="dm-hint">
            {isSold ? copy.product.soldHint : copy.product.dmHint}
          </p>
          <a
            className="button primary"
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
          >
            {isSold ? copy.product.soldCta : copy.product.cta}
          </a>
        </div>
      </div>
    </section>
  )
}

function ProductGallery({ images, title, copy, allImages = false, altTexts }) {
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

  const galleryImages = allImages ? images : images.slice(1)
  const galleryIndexOffset = allImages ? 0 : 1

  return (
    <>
      <div className={`product-gallery ${allImages ? 'all-images' : ''}`}>
        {!allImages && (
          <>
            <button
              className="gallery-image-button main"
              type="button"
              onClick={() => setActiveImageIndex(0)}
              aria-label={`${copy.openImage}: ${altTexts?.[0] || title}`}
            >
              <img
                className="main-product-image"
                src={images[0]}
                alt={altTexts?.[0] || title}
              />
            </button>
            <h2>{copy.gallery}</h2>
          </>
        )}
        <div className="gallery-grid">
          {galleryImages.map((image, index) => {
            const imageIndex = index + galleryIndexOffset
            const imageAlt =
              altTexts?.[imageIndex] || `${title} ${imageIndex + 1}`

            return (
              <button
                className="gallery-image-button"
                type="button"
                key={image}
                onClick={() => setActiveImageIndex(imageIndex)}
                aria-label={`${copy.openImage}: ${imageAlt}`}
              >
                <img src={image} alt={imageAlt} />
              </button>
            )
          })}
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
              alt={
                altTexts?.[activeImageIndex] ||
                `${title} ${activeImageIndex + 1}`
              }
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

function formatPrice(priceEur, language) {
  return language === 'bg' ? `${priceEur} €` : `€${priceEur}`
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
          <span>{formatPrice(product.priceEur, language)}</span>
          <ProductContactLinks copy={copy} />
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

function ProductContactLinks({ copy }) {
  return (
    <div className="product-contact-links" aria-label={copy.contacts.kicker}>
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={copy.contacts.instagram}
        title={copy.contacts.instagram}
      >
        <InstagramIcon />
      </a>
      <a
        href={`mailto:${emailAddress}`}
        aria-label={copy.contacts.email}
        title={copy.contacts.email}
      >
        <EmailIcon />
      </a>
      <a
        href={`tel:${viberPhone}`}
        aria-label={copy.contacts.viber}
        title={copy.contacts.viber}
      >
        <PhoneIcon />
      </a>
    </div>
  )
}

function SoldProductCard({ product, copy, language, navigateTo }) {
  const title = language === 'bg' ? product.titleBg : product.titleEn
  const summary = language === 'bg' ? product.summaryBg : product.summaryEn

  return (
    <article className="product-card sold-card">
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
        <span className="status-badge">{copy.sold.badge}</span>
        <h3>{title}</h3>
        <p>{summary}</p>
        <a
          className="button secondary"
          href={product.routes[language]}
          onClick={(event) => {
            event.preventDefault()
            navigateTo(product.routes[language])
          }}
        >
          {copy.sold.details}
        </a>
      </div>
    </article>
  )
}

function LanguageSwitcher({ className, language, onChange }) {
  const languages = [
    { code: 'bg', flag: '🇧🇬', label: 'Български' },
    { code: 'en', flag: '🇬🇧', label: 'English' },
  ]

  return (
    <div
      className={className}
      aria-label={language === 'bg' ? 'Избор на език' : 'Language selection'}
    >
      {languages.map((item) => (
        <button
          className={language === item.code ? 'active' : ''}
          key={item.code}
          type="button"
          title={item.label}
          aria-label={item.label}
          aria-pressed={language === item.code}
          onClick={() => onChange(item.code)}
        >
          <span aria-hidden="true">{item.flag}</span>
        </button>
      ))}
    </div>
  )
}

function SiteFooter({
  copy,
  language,
  navigateTo,
  page,
  productStatus,
}) {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <strong>E&K Vintara Studio</strong>
        <span>{copy.footer}</span>
      </div>

      <nav className="footer-nav" aria-label="Footer navigation">
        {navigationPages.map((navPage) => (
          <a
            className={
              page === navPage ||
              (page === 'marketGallery' && navPage === 'markets') ||
              (page === 'product' &&
                navPage === (productStatus === 'sold' ? 'sold' : 'available'))
                ? 'active'
                : ''
            }
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
      {text && <p>{text}</p>}
    </div>
  )
}

function ContactCard({ label, value, href, cta, valueClassName = '' }) {
  return (
    <article className="contact-card">
      <span>{label}</span>
      <strong className={valueClassName}>{value}</strong>
      <a className="button secondary" href={href} target="_blank" rel="noreferrer">
        {cta}
      </a>
    </article>
  )
}

export default App
