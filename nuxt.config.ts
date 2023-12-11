// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Escoles en joc - Compromís',
      htmlAttrs: {
        lang: 'ca',
      },
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: 'https://compromis.net/sub/icons/favicon.ico',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: 'https://compromis.net/sub/icons/favicon32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '192x192',
          href: 'https://compromis.net/sub/icons/favicon192.png',
        },
        {
          rel: 'stylesheet',
          href: 'https://compromis.net/sub/fonts/manrope.css?variable',
        },
      ],
    }
  },

  css: [
    '@compromis/blobby/scss/blobby.scss',
    '~/assets/scss/main.scss'
  ],

  modules: [
    '@vueuse/motion/nuxt',
    '@vueuse/nuxt',
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import '@compromis/blobby/scss/variables';
            @import 'bootstrap/scss/functions';
            @import 'bootstrap/scss/variables';
            @import 'bootstrap/scss/mixins';
          `
        }
      }
    }
  },
})
