import { i18n } from './configs/i18n'
import { image } from './configs/image'
import { stripe } from './configs/stripe'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  app: {
    // pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
    // baseURL: '.',
    // buildAssetsDir: './',
  },

  css: [
    'assets/css/fonts.css',
    'assets/css/common.css',
  ],

  // https://nuxt.com/modules
  modules: [
    '@nuxthub/core',
    '@nuxt/eslint',
    ['@pinia/nuxt', { autoImports: ['defineStore', 'storeToRefs'] }],
    ['@nuxtjs/i18n', i18n],
    ['@nuxt/image', image],
    ['@unlok-co/nuxt-stripe', stripe],
    '@nuxt/scripts',
  ],

  // https://devtools.nuxt.com
  devtools: { enabled: true },

  // Env variables - https://nuxt.com/docs/getting-started/configuration#environment-variables-and-private-tokens
  runtimeConfig: {
    public: {
      // Can be overridden by NUXT_PUBLIC_HELLO_TEXT environment variable
      helloText: 'Hello from the Edge 👋',
    },
  },
  // https://nuxt.com/docs/getting-started/upgrade#testing-nuxt-4
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-07-30',

  // https://hub.nuxt.com/docs/getting-started/installation#options
  hub: {
    database: true,
    kv: true,
    blob: true,
    cache: true,
  },

  // https://eslint.nuxt.com
  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
      },
    },
  },
})