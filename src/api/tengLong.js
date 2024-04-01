import request from '@/utils/request'

// 腾龙充电站数据
export function getTLData(params) {
  return request({
    url: '/tenglong/getTLData',
    method: 'get',
    params
  })
}

// 腾龙充电站数据
export function getTLData1(params) {
  return request({
    url: '/tenglong/getRealData',
    method: 'get',
    params
  })
}