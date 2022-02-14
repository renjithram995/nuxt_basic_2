export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-app-2',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/datefilter.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      { path: '~/components/posts', extensions: ['vue'] },
      { path: '~/components/Navigation', extensions: ['vue'] },
      { path: '~/components/UI-Components', extensions: ['vue'] }
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.baseURL || 'https://nuxt-sample-11-02-default-rtdb.firebaseio.com'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  loading: {
    color: '#3B8070',
    height: '5px'
  },
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  },
  env: {
    baseURL: process.env.baseURL || 'https://nuxt-sample-11-02-default-rtdb.firebaseio.com/',
    fbApiKey: 'AIzaSyDKXuLqw2f5XM84-KAIAzv56ze__CfnTDA'
  },
  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'default',
        path: '*',
        component: resolve(__dirname, 'pages/index.vue'),
        redirect: '/'
      })
    },
    middleware: 'check-auth'
  },
  transition: {
    name: 'home',
    mode: 'out-in'
  },
  server: {
    port: 8000 // default: 3000
  },
  generate: {
    dir: 'docs'
  }
}
