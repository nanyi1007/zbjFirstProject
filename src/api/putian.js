import request from '@/utils/request'


// 兰考大屏数据
export function queryScreenData(data) {
  return request({
    url: '/hnpt/queryScreenData',
    method: 'post',
    data
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
export function xcnbqActiveTrend(params) {
  return request({
    url: '/hnpt/sevenDayPowerGen',
    method: 'get',
    params
  })
}

// 兰考源网荷储
export function ywhcDianliang(params) {
  return request({
    url: '/hnpt/ywhcTrend',
    method: 'get',
    params
  })
}
// 近七日空调数据
export function getAirData(params) {
  return request({
    url: '/hnpt/sevenDayPowerConsum',
    method: 'get',
    params
  })
}
