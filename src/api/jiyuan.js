import request from '@/utils/request'

//日功率曲线
export function getDayPowerLine(params) {
  return request({
    url: '/jinma/getPowerLine',
    method: 'get',
    params
  })
}

//发电量曲线
export function getMonthPowerLine(params) {
  return request({
    url: '/jinma/getMonthLine',
    method: 'get',
    params
  })
}

//统计数据
export function getTotal(params) {
  return request({
    url: '/jinma/getJinMaTotal',
    method: 'get',
    params
  })
}
