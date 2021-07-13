import axios from './axios'
import request from './request'

// 用户登陆
export function login(data){
  return request({
    url: '/api/users/login',
    method: 'post',
    data,
  })
  /* return axios.post('/api/users/login', data).then(res => {
    if (res.data.code === 1) {
      localStorage.setItem('token', res.data.data.token)
      // vuex 存储 userInfo 和登陆状态
      //store.commit('SET_USERINFO', {userInfo: res.data.data.userInfo, status: true})
      //this.$router.push('/dashboard')
    }
  }) */
}