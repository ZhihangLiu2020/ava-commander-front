<template>
  <!--左侧Aside栏的头部-->
  <v-list-item class="mb-0 justify-space-between pl-3">
    <v-list-item-content class="pl-2">
      <v-list-item-title class="text-h3">
        <span class="mr-1">Avalanche操控系统</span>
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
  // Utilities
  import { get } from 'vuex-pathify'

  export default {
    name: 'DefaultDrawerHeader',

    computed: { version: get('app/version') },
  }
</script>
