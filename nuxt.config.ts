// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: false,
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'], // specify main and custom routes here
    },
  },
  devtools: { enabled: true },

  css: [
    '@/assets/scss/layout.scss'
  ],

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui'
  ]
})