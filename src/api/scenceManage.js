import request from './request'

export function getScence(){
  return request({
    url:'/api/avaCommander/getScenceList',
    method: 'get'
  })
}