// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools totally broken, not sure why
  devtools: { enabled: false },

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg', href: '/logo.svg' }],

    },
  },

  runtimeConfig: {
    public: {
      siteUrl: '',
      umamiHost: '',
      umamiId: '',
      disableLogin: true,
    },
    github: {
      clientId: '',
      clientSecret: '',
    },
    session: {
      name: 'nuxt-session',
      password: 'nuxt-session-nuxt-session-123456',
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'shadcn-nuxt',
    '@nuxtjs/google-fonts',
    'nuxt-auth-utils',
    '@nuxtjs/seo',
    '@nuxt/content',
  ],

  //   extends: ['nuxt-umami'],
  //   appConfig: {
  //     umami: {
  //       version: 2,
  //       ignoreLocalhost: true,
  //     },
  //   },
  shadcn: {
    prefix: 'Ui',
  },

  tailwindcss: {
    viewer: false,
  },

  ogImage: {
    debug: true,
    compatibility: {
      prerender: {
        chromium: false,
      },
    },
  },

  hooks: {
    'vite:extendConfig': (config, { isClient }) => {
      if (isClient)
      // @ts-expect-error it has alias of vue
        config.resolve.alias.vue = 'vue/dist/vue.esm-bundler.js'
    },
  },

  nitro: {
    vercel: {
      functions: {
        maxDuration: 300, // 5mins maximum possible for Vercel Pro
      },
    },
  },

  googleFonts: {
    families: {
      Inter: '400..800',
    },
  },

  site: {
    name: 'vue0',
    description: 'Generate Component with simple text prompts.',
    defaultLocale: 'en',
  },

  compatibilityDate: '2024-09-14',
})