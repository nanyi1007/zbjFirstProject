import request from '@/utils/request'

// 供电所大屏发电趋势图
export function queryPowerTrendData(data) {
  return request({
    url: '/gdsPv/queryPowerTrendData',
    method: 'post',
    data
  })
}

// 供电所大屏地区统计图
export function queryOrgData(data) {
  return request({
    url: '/gdsPv/queryOrgData',
    method: 'post',
    data
  })
}

// 供电所大屏日发电量图
export function queryDayPowerData(data) {
  return request({
    url: '/gdsPv/queryDayPowerData',
    method: 'post',
    data
  })
}

// 供电所大屏光伏监控、节能减排
export function queryPvMonitoringData(data) {
  return request({
    url: '/gdsPv/queryPvMonitoringData',
    method: 'post',
    data
  })
}
