<template>
  <!--只有使用v-app，vuetify的样式，布局才会生效-->
  <v-app>

    <default-view />

  </v-app>
</template>

<script>
  export default {
    name: 'LoginContainer',

    components: {
      DefaultView: () => import(
        /* webpackChunkName: "default-view" */
        './View'
      ),
    },
  }
</script>
