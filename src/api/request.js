// 二次封装axios的另一种方法
import axios from 'axios'
// 创建一个新的axios实例
const service = axios.create({
  timeout: 30000 // 请求超时时间
})

service.interceptors.request.use(
  config=>{
    return config
  },
  error=>{
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response=>{
    return response
  },
  error=>{
    return Promise.reject(error.response)
  }
)

export default service