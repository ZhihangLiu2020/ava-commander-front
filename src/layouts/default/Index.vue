<template>
  <!--布局首页，App先导航到这里-->
  <v-app>
    <!--顶部nav栏-->
    <default-bar />
    <!--左侧aside栏-->
    <default-drawer />
    <!--网页主题，views文件夹下的页面就是替换到这个组件中-->
    <default-view />
    <!--底部footer栏-->
    <default-footer />
  </v-app>
</template>

<script>
  export default {
    name: 'DefaultLayout',

    components: {
      DefaultBar: () => import(
        /* webpackChunkName: "default-app-bar" */
        './AppBar'
      ),
      DefaultDrawer: () => import(
        /* webpackChunkName: "default-drawer" */
        './Drawer'
      ),
      DefaultFooter: () => import(
        /* webpackChunkName: "default-footer" */
        './Footer'
      ),
      DefaultView: () => import(
        /* webpackChunkName: "default-view" */
        './View'
      ),
    },
  }
</script>
