import request from '@/utils/request'


// 兰考大屏数据
export function queryScreenData(data) {
  return request({
    url: '/hnlk/queryScreenData',
    method: 'post',
    data
  })
}

export function getRealData(params) {
  return request({
    url: '/tenglong/getRealData',
    method: 'get',
    params
  })
}

// 兰考大屏充电桩
export function queryScreenChargingData(data) {
  return request({
    url: '/hnlk/queryScreenChargingData',
    method: 'post',
    data
  })
}

// 兰考近七日光伏数据
export function xcnbqActiveTrend(data) {
  return request({
    url: '/hnlk/xcnbqActiveTrend',
    method: 'post',
    data
  })
}

// 兰考源网荷储
export function ywhcDianliang(params) {
  return request({
    url: '/hnlk/ywhcDianliang',
    method: 'get',
    params
  })
}
