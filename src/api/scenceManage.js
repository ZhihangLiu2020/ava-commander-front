import request from './request'

export function getScence(){
  return request({
    url:'/api/avaCommander/getScenceList',
    method: 'get'
  })
}

export function downLoad(data){
  return request({
    url: '/api/avaCommander/download',
    method: 'post',
    data,
    responseType: 'blob'
  })
}