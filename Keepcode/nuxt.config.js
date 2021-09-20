export default {
  target: 'static',
  head: {
    title: 't_nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '~assets/css/main.css'
  ],
  plugins: [
  ],
  components: true,
  buildModules: [
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
      '~assets/scss/mixins.scss',
      '~assets/scss/variables.scss'
    ]
  },
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
  ],
  build: {
  },
  env: {
    BASE_URL: process.env.BASE_URL  
  }
}
