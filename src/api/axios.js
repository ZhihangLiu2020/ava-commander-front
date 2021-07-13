// 二次封装axios
import axios from 'axios'
// 使用qs库编码数据
import qs from 'qs'
 
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
 
//请求拦截器
axios.interceptors.request.use(
    config => {
        let token = localStorage.getItem('token')
        if(token){
            config.headers.common.Authorization = token
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
//响应拦截器即异常处理
axios.interceptors.response.use(response => {
    return response
}, err => {
    return Promise.resolve(err.response)
})
 
export default {
    get(url, params = {}) {
        return new Promise((resolve, reject) => {
            axios.get(url, {
                params: params
            }).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
 
    post(url, params = {}) {
        return new Promise((resolve, reject) => {
            axios.post(url, qs.stringify(params))
                .then(response => {
                    resolve(response)
                }).catch(err => {
                    reject(err)
                })
        })
    }
}