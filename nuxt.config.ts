// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Yayasan Yohannes Gabriel',
      meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width-device-width, initial-scale-1' }, { hid: 'description', name: 'description', content: 'Paroki Santo Yusup Blitar' }],
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  css : [
    '~/assets/styles/variables.scss',
    '~/assets/styles/main.scss',
  ]
})