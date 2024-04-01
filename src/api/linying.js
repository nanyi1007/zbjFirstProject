import request from '@/utils/request'

// 获取发电曲线
export function getDayEnergyData(params) {
  return request({
    url: '/linyin/getDayEnergyData',
    method: 'get',
    params
  })
}

// 获取功率曲线
export function getDayPowerData(params) {
  return request({
    url: '/linyin/getDayPowerData',
    method: 'get',
    params
  })
}

// 临颖建泰光伏详情统计
export function getStationInfo(params) {
  return request({
    url: '/linyin/getStationInfo',
    method: 'get',
    params
  })
}