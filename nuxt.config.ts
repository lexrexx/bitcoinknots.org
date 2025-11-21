// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  devtools: { enabled: false },
  // ssr: false,
  app: {
    // baseURL: '/',
    baseURL: '/bitcoinknots.org/',
  },
  compatibilityDate: '2025-07-15',
  nitro: {
    preset: 'static',
    serveStatic: true,
    prerender: {
      crawlLinks: true,
      // failOnError: false,
      // routes: [
      //   // '/sitemap.xml',
      //   ...routes
      // ]
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  fonts: {
    families: [
      {
        name: 'Inter',
        provider: 'google',
      },
    ],
    defaults: {
      weights: [400, 700],
      styles: ['normal'],
      subsets: [
        // 'cyrillic-ext',
        // 'cyrillic',
        // 'greek-ext',
        // 'greek',
        // 'vietnamese',
        'latin-ext',
        // 'latin',
      ],
    },
  },
  tailwindcss: {
    // Options
  },
})
