<template>
  <v-container>
    <v-row
      align="center"
      justify="end"
    >
      <v-col
        cols="12"
        md="auto"
      >
        <span>{{ new Date() }}</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Links',

    data: () => ({}),
  }
</script>

<style lang="sass" scoped>
  a
    color: inherit !important
</style>
