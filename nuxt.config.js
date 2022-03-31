// import colors from 'vuetify/es5/util/colors'

export default {
  ssr: true,
  target: 'server',
  head: {
    titleTemplate: '%s - Tiendamoda',
    title: 'HOME',
    htmlAttrs: {
      lang: "es",
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Tiendamoda' },
      { hid: 'og:url', property: 'og:url', content: "https://tiendamoda.trueques24.com/" },
      { hid: 'og:description', name: 'og:description', content: 'Tiendamoda' },
      {hid: 'og:image', property: 'og:image', content: `https://res.cloudinary.com/hnhnaig2j/image/upload/v1648594562/tiendamoda/icon_aficdj.png`},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://mitienda.moda/img/icons/favicon-32x32.png' },
    ]
  },
  css: [
    '@/assets/css/fonts.css',
    '@/assets/css/general-config.css',
    '@fortawesome/fontawesome-free/css/all.css',
    'material-design-icons-iconfont/dist/material-design-icons.css'
  ],
  plugins: [
    {src: '~/plugins/persistedstate.js', mode: 'client'},
    {src: '~/plugins/directives.js'}
  ],
  components: true,
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxt/image',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/image',
    'nuxt-webfontloader',
    '@luxdamore/nuxt-prune-html',
    ['nuxt-sweetalert2',
      {
        confirmButtonColor: '#ec618d',
        cancelButtonColor: '#000000'
      }
    ]
  ],
  webfontloader: {
    google: {
      families: [
        'Lobster',
        'Oswald:wght@200;300;400;500;600;700',
        'Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,900'
      ]
    }
  },
  pruneHtml: {
    enabled: false,
    hideGenericMessagesInConsole: false,
    hideErrorsInConsole: false,
    hookRenderRoute: true,
    hookGeneratePage: true,
    selectors: [
        'link[rel="preload"][as="script"]',
        'script:not([type="application/ld+json"])',
    ],
    classesSelectorsToKeep: [],
    link: [],
    script: [],
    htmlElementClass: null,
    cheerio: {
        xmlMode: false,
    },
    types: [
        'default-detect',
    ],
    headerNameForDefaultDetection: 'user-agent',
    auditUserAgent: 'lighthouse',
    isAudit: true,
    isBot: true,
    ignoreBotOrAudit: false,
    matchUserAgent: null,
    queryParametersToPrune: [
        {
            key: 'prune',
            value: 'true',
        },
    ],
    queryParametersToExcludePrune: [],
    headersToPrune: [],
    headersToExcludePrune: [],
    onBeforePrune: null,
    onAfterPrune: null,
  },
  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/hnhnaig2j/image/upload/",
    },
  },
  axios: {
    baseURL: 'https://v3.tissini.app/api/v3',
  },
  loading: { color: '#ec618d', height: '5px', throttle: 0 },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    },
    port: process.env.PORT
  },
  env: {
    baseURL: process.env.NODE_ENV === 'production' ? 'https://tiendamoda.trueques24.com' : 'http://localhost:3000',
    baseUrlSocket: process.env.NODE_ENV === 'production' ? 'wss://tiendamoda.trueques24.com' : 'http://localhost:3000',
    browserBaseURL: process.env.BROWSER_BASE_URL,
    PORT: process.env.PORT,
  },
  pwa: {
    manifest: {
      lang: 'es',
      name: 'Tiendamoda',
      theme_color: '#ec618d',
      background_color: '#ec618d'
    },
    icon: {
      source: `static/icon.png`,
      filename: 'icon.png'
    }
  },
  vuetify: {
    defaultAssets: true,
    treeShake: true,
    customVariables: [
      '~/assets/scss/vuetify.scss',
      '~/assets/scss/texts.scss',
      '~/assets/scss/general-config.scss'
    ],
    theme: {
      dark: false,
      options: {
        customProperties: true,
        variations: false
      },
      themes: {
        light: {
          primary: '#000000',
          important: '#ec618d',
          error: '#ec618d',
          background: '#f0f0f0',
          lighten1: '#78909C',
          lighten2: '#90A4AE',
          lighten3: '#B0BEC5',
          darken1: '#546E7A',
          darken2: '#455A64',
          darken3: '#37474F'
        },
      }
    },
    icons: {
      iconfont: 'fa',
    }
  },
  server: {
    host: '0'
  },
  build: {
    // analyze: true,
    extractCSS: {
      ignoreOrder: true
    },
    productionSourceMap: false,
    productionGzip: true,
    productionGzipExtensions: ['js', 'css', 'svg'],
    html:{
      minify:{
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyElements: true,
        preserveLineBreaks: false,
        collapseWhitespace: true
      }
    }
  }
}
