<template>
  <!--登陆页面，包裹在v-app中，才能使用vuetify的样式和布局-->
  <v-app>
    <v-spacer></v-spacer>
      <v-row>
        <v-col align="center">
          <v-card
            outlined
            max-width="400"
          >
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-card-title>
                <span class="text-h5">Avalanche控制系统</span>
              </v-card-title>
              <v-card-text @keydown.enter="login">
                <v-text-field
                  v-model="name"
                  :counter="10"
                  :rules="nameRules"
                  label="用户名"
                  required
                />
                <v-text-field
                  v-model="password"
                  label="密码"
                  :rules="passwordRules"
                  required
                  type="password"
                  
                />
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <app-btn
                  :disabled="!valid"
                  color="blue"
                  @click="login"
                  
                >
                  登陆
                </app-btn>
                <v-btn
                  color="orange"
                  @click="addUsers"
                >
                  注册
                </v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    <v-spacer></v-spacer>
  </v-app>
</template>

<script>
  import AppBtn from '@/components/app/Btn.vue'
  import { login } from '@/api/users.js'
  import store from '../store'
  export default {
    name: 'LoginView',
    components: { AppBtn },
    data: () => ({
      valid: true,
      name: '',
      password: '',
      nameRules: [
        v => !!v || '用户名不得为空',
        v => (v && v.length <= 10) || '用户名不得超过10个字符',
      ],
      passwordRules: [
        v => !!v || '密码不得为空',
      ],
      updateUserForm: {
        username: '',
        password: '',
      },
    }),
    methods: {
      //查询所有用户
      async selectAllUsers() {
        let data = await this.$axios.get("/api/avaCommander/selectAllUsers");
        console.log("data", data);
      },
      //删除用户
      async deleteUsers() {
        let id = prompt("请输入需要删除的用户ID: ");
        let obj = {
          id: id
        };
        let data = await this.$axios.post("/api/avaCommander/deleteUsers", obj);
        console.log("data", data);
        if (data.status === 200) {
          alert("删除成功")
        } else {
          alert(`删除失败: ${data.statusText}`)
        }
      },
      //添加用户
      async addUsers() {
        let obj = {
          username: this.name,
          password: this.password,
        };
        let data = await this.$axios.post("/api/avaCommander/addUsers", obj);
        console.log("data", data);
        if (data.status === 200) {
          alert("注册成功")
        } else {
          alert(`注册失败: ${data.statusText}`)
        }
      },
      //修改用户
      async updateUsers() {
        let obj = this.addUserForm;
        let data = await this.$axios.post("/api/avaCommander/updateUsers", obj);
        console.log("data", data);
      },
      // 登陆
      async login() {
        this.$refs.form.validate()
        if (this.$refs.form.validate()) {
          let obj = {
            username: this.name,
            password: this.password
          };
          let res = await login(obj);
          console.log("登陆",res)
          if(res.data.code === 2){
            alert("账号不存在！")
          }else if(res.data.code === 0){
            alert("密码错误！")
          }else if(res.data.code === 1) {
            localStorage.setItem('token', res.data.data.token)
            // vuex 存储 userInfo 和登陆状态
            // 先把字符串转换为json格式
            //console.log("userstatus:",JSON.parse(res.config.data))
            const userInfo = JSON.parse(res.config.data).username
            // 固化用户信息，页面刷新后vuex数据丢失，从localStorage中获取该信息
            localStorage.setItem('username',userInfo)
            store.dispatch('user/SET_USERINFO', {userInfo: userInfo, status: true})
            console.log("userStatus:",userInfo,store.state.user.userStatus.userInfo)
            this.$router.push('/dashboard')
          }
        }  
      }
    },
    
  }
</script>
