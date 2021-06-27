<template>
  <!--登陆页面-->
  <v-row>
    <v-spacer />
    <v-col>
      <v-card
        outlined
        shaped
        width="400px"
      >
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-card-title>
            <span>avalanche控制系统</span>
          </v-card-title>
          <v-card-text>
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
              required
              type="password"
            />
          </v-card-text>
          <v-card-actions>
            <app-btn
              :disabled="!valid"
              color="purple"
              @click="login"
            >
              登陆
            </app-btn>

            <v-btn
              color="green"
              @click="addUsers"
            >
              注册
            </v-btn>
            <v-btn
              @click="selectAllUsers"
            >
              查询用户
            </v-btn>
            <v-btn
              color="blue"
              @click="deleteUsers"
            >
              删除用户
            </v-btn>
            <v-btn
              color="orange"
              @click="updateUsers"
            >
              修改用户
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-col>
    <v-spacer />
  </v-row>
</template>

<script>
  import AppBtn from '@/components/app/Btn.vue'
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
      updateUserForm: {
        username: '',
        password: '',
      },
    }),
    methods: {
      validate () {
        this.$refs.form.validate()
        if (this.$refs.form.validate()) {
          if (this.name === 'admin' && this.password === '123') {
            this.$router.push('/')
          } else {
            alert('密码错误')
            this.$refs.form.reset()
          }
        }
      },
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
          };
          let data = await this.$axios.post("/api/avaCommander/selectUserByUsername", obj);
          console.log("data", data);
          if (data?.data[0]?.password === this.password){
            this.$store.state.username = data.data[0].username
            this.$router.push('/')
          } else {
            alert(`${data.statusText}`)
          }
        }  
      }
    },
    
  }
</script>
