import axios from './axios'
// 权限管理，请求导航栏列表
export default function getNav(){
  return axios.get('/api/avaCommander/getNavList')
}
