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

const handmadeDesignMarketPoster =
  '/images/markets/handmade-design-market-2026/handmade-design-market-poster.jpg'
const handmadeDesignMarketUrl =
  'https://www.instagram.com/p/DZTMBCqttSt/?igsh=dmt6MTJiN2dtbTZ4'

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
  'pink-rotary-telephone-lamp': {
    bg: '/sold-lamps/pink-rotary-telephone-lamp',
    en: '/en/sold-lamps/pink-rotary-telephone-lamp',
  },
  'russian-rotary-telephone-lamp': {
    bg: '/sold-lamps/russian-rotary-telephone-lamp',
    en: '/en/sold-lamps/russian-rotary-telephone-lamp',
  },
}

const content = {
  bg: {
    languageLabel: 'Език',
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
        status: 'Предстоящ',
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
          date: '4 май 2026 г.',
          title:
            'Ретрото може не само да е модерно, но и да блести – доказват го Ели и Калоян',
          summary:
            'Историята на Ели и Калоян, идеята да спасят старите предмети от забравата и превръщането им в лампи с характер.',
          url: 'https://www.regnews.net/news/17778929987450/retroto-mozhe-ne-samo-da-e-moderno-no-i-da-blesti-dokazvat-go-eli-i-kaloyan-',
        },
        {
          publication: 'България Днес',
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
      price: 'Попитай за цена',
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
      sold: 'Продадено',
      soldBack: 'Назад към продадените лампи',
      soldCta: 'Попитай за подобна лампа',
      soldHint:
        'Харесва ти този модел? Пиши ни в Instagram, за да обсъдим подобна лампа.',
    },
    footer: 'ръчно изработени винтидж лампи',
  },
  en: {
    languageLabel: 'Language',
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
        status: 'Upcoming',
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
          date: 'May 4, 2026',
          title:
            'Ретрото може не само да е модерно, но и да блести – доказват го Ели и Калоян',
          summary:
            'The story of Eli and Kaloyan, their idea to save old objects from being forgotten, and their transformation into lamps with character.',
          url: 'https://www.regnews.net/news/17778929987450/retroto-mozhe-ne-samo-da-e-moderno-no-i-da-blesti-dokazvat-go-eli-i-kaloyan-',
        },
        {
          publication: 'България Днес',
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
      price: 'Ask for price',
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
      sold: 'Sold',
      soldBack: 'Back to sold lamps',
      soldCta: 'Ask for a similar lamp',
      soldHint:
        'Like this piece? Message us on Instagram to discuss a similar lamp.',
    },
    footer: 'handmade vintage lights',
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
  images: [redTa900Lamp02, redTa900Lamp01],
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

const soldProducts = [
  russianTelephoneLamp,
  pinkTelephoneLamp,
  {
    slug: 'sold-retro-telephone-lamp',
    category: 'retro-telephones',
    titleBg: 'Ретро телефон лампа',
    titleEn: 'Retro Telephone Lamp',
    summaryBg:
      'Продаден проект от автентичен винтидж телефон, превърнат във функционална декоративна лампа.',
    summaryEn:
      'Sold project made from an authentic vintage telephone transformed into a functional decorative lamp.',
  },
  {
    slug: 'sold-retro-phone-decor-light',
    category: 'retro-telephones',
    titleBg: 'Ретро телефонна декор лампа',
    titleEn: 'Retro Phone Decor Light',
    summaryBg:
      'Продаден акцентен модел, съчетаващ ретро естетика и модерна топла светлина.',
    summaryEn:
      'Sold accent piece combining retro aesthetics with modern warm lighting.',
  },
]

const productBySlug = Object.fromEntries(
  [...availableProducts, russianTelephoneLamp, pinkTelephoneLamp].map(
    (product) => [product.slug, product],
  ),
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

  function handleLanguageChange(event) {
    if (page === 'product' && activeProduct) {
      navigateTo(activeProduct.routes[event.target.value])
      return
    }

    if (page === 'marketGallery' && marketGallerySlug) {
      navigateTo(marketGalleryRoutes[marketGallerySlug][event.target.value])
      return
    }

    const destination = pages[page][event.target.value]
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
          {visibleProducts.map((product) =>
            product.images ? (
              <SoldProductCard
                copy={copy}
                key={product.slug}
                language={language}
                navigateTo={navigateTo}
                product={product}
              />
            ) : (
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
            ),
          )}
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
  const showUpcoming = marketStatus !== 'past'

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

        {showUpcoming && (
        <article className="editorial-card market-event-card upcoming-event-card">
          <span className="event-status-badge upcoming">
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
            <div className="media-article-masthead">
              <span>{article.publication}</span>
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
          {!isSold && <div className="price-line">{copy.product.price}</div>}
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

function ProductPlaceholder({ label }) {
  return (
    <div className="product-placeholder">
      <span>{label}</span>
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
        <span>- {copy.footer}</span>
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
      <p>{text}</p>
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
