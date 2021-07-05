import request from './request'

export function getResult(data){
  return request({
    url: '/api/avaCommander/getResultList',
    method: 'get',
    data,
  })
}