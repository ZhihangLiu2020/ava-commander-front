import request from './request'

export function getProtocolList(){
  return request({
    url: '/api/avaCommander/getProtocolList',
    methods: 'get'
  })
}

export function getTrafficList(){
  return request({
    url: '/api/avaCommander/getTrafficList',
    methods: 'get'
  })
}