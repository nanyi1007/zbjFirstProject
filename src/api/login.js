import request from '@/utils/request'


export function login(params) {
  return request({
    url: 'https://api.ghfz.1000rui.cn/nx-data-govern/user/login',
    method: 'post',
    data: params
  })
}


// export function login(params) {
//   return request({
//     path: '/api-gateway/iso-server/common/auth/doLogin',
//     method: 'post',
//     data: params
//   })
// }
