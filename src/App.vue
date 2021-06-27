<template>
  <v-fade-transition>
    <router-view />
  </v-fade-transition>
</template>

<script>
  // Styles
  import '@/styles/overrides.sass'

  export default {
    name: 'App',
    metaInfo: {
      title: 'Avalanche控制系统',
      titleTemplate: '%s',
      htmlAttrs: { lang: 'zh' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  }
</script>
