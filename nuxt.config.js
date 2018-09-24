const modules = [
  '@nuxtjs/axios'
]
const proxy = {}
if (process.env.NODE_ENV === 'production') {
  // modules.push(['@nuxtjs/google-analytics', {
  //   id: process.env.GOOGLE_ANALYTICS_TRACKING_ID
  // }])
} else {
  modules.push('@nuxtjs/proxy')

  proxy['/contact']       = 'http://localhost:9000'
  proxy['/products']      = 'http://localhost:9000'
  proxy['/product']       = 'http://localhost:9000'
  proxy['/skus']          = 'http://localhost:9000'
  proxy['/order_create']  = 'http://localhost:9000'
}

module.exports = {
  env: {
    API_URL: process.env.API_URL,
    BASE_URL: process.env.BASE_URL,
    STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
  },
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'ja',
    },
    title: 'メンター@なかむ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://js.stripe.com/v3/' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config) {
      if (process.server && process.browser) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    '~/plugins/buefy.js',
    '~/plugins/vue-scrollto.js',
    '~/plugins/vee-validate.js',
    { src: '~plugins/localStorage.js', ssr: false },
    { src: '~/plugins/token.js', ssr: false }
  ],
  css: [
    '~/assets/style/app.scss',
    '@fortawesome/fontawesome-free-webfonts',
    '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css',
    '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css',
    '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css',
  ],
  modules: modules,
  proxy: proxy,
  axios: {
    baseURL: process.env.API_URL,
  },
  generate: {
    routes (callback) {
      const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
      stripe.products.list(
        {},
        function(err, products) {
          const routes = products.data.map((product) => {
            return `/p/${product.id}`
          })
          callback(null, routes)
        }
      );
    }
  },
}

