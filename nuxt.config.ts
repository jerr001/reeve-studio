export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
  ],
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Video Editor',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },

  // Ensure dark mode
  tailwindcss: {
    config: {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            'editor-black': '#000000',
            'editor-dark': '#1a1a1a',
            'editor-gray': '#333333',
          }
        }
      }
    }
  },

  compatibilityDate: '2025-01-30'
})