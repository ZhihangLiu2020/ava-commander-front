import request from './request'

// 用户登陆
export function login(data){
  return request({
    url: '/api/users/login',
    method: 'post',
    data,
  })
};
