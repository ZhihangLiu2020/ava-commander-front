<template>
  <!--顶部横向nav栏-->
  <v-app-bar
    id="default-app-bar"
    app
    absolute
    class="v-bar--underline"
    color="transparent"
    :clipped-left="$vuetify.rtl"
    :clipped-right="!$vuetify.rtl"
    height="70"
    flat
  >
    <!--图标-->
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="drawer = !drawer"
    />
    <!--抽屉栏开关按钮-->
    <default-drawer-toggle class="hidden-sm-and-down" />

    <v-spacer />

    <default-account />
  </v-app-bar>
</template>

<script>
  // Utilities
  import { get, sync } from 'vuex-pathify'

  export default {
    name: 'DefaultBar',

    components: {
      DefaultAccount: () => import(
        /* webpackChunkName: "default-account" */
        './widgets/Account'
      ),
      DefaultDrawerToggle: () => import(
        /* webpackChunkName: "default-drawer-toggle" */
        './widgets/DrawerToggle'
      ),
    },

    computed: {
      ...sync('app', [
        'drawer',
        'mini',
      ]),
      name: get('route/name'),
    },
  }
</script>
