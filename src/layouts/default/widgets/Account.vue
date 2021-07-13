<template>
  <!--nav栏右侧的用户信息-->
  <v-menu
    bottom
    left
    min-width="150"
    offset-y
    origin="top right"
    transition="scale-transition"
  >
    <template v-slot:activator="{ attrs, on }">
      <v-btn
        class="ml-2"
        min-width="0"
        text
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>mdi-account</v-icon>
        <span>{{ username }}</span>
      </v-btn>
    </template>

    <v-list>
      <v-list-item @click="logout">
        <v-list-item-title class="text-h5">退出</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
  import { mapState } from 'vuex'
  import store from '@/store'
  export default {
    name: 'DefaultAccount',
    computed: {
      ...mapState(['user'])
    },

    data: () => ({
      profile: [
        { title: 'Log out' },
        { title: 'help'}
      ],
    }),
    computed:{
      username(){
        return localStorage.getItem('username')
      }
    },
    methods: {
      async logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        // vuex 清除登陆信息
        store.dispatch('user/SET_USERINFO', {userInfo: {}, status: false})
        //console.log("退出",store.state.user.userStatus)
        //console.log("token",localStorage.getItem('token'))
        if (this.$route.path !== '/') {
          this.$router.push('/')
        }
      },
    }
  }
</script>
