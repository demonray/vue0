// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxtjs/google-fonts', 'nuxt-auth-utils'],
  runtimeConfig: {
    github: {
      clientId: '',
      clientSecret: '',
    },
    session: {
      name: 'nuxt-session',
      password: '',
    },
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: 'Ui',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
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
})
