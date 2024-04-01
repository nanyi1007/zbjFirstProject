import request from '@/utils/request'

// 充电数据及电站报表
export function getDataChart1(data) {
  return request({
    url: '/xinxinCharge/chargingData',
    method: 'post',
    data
  })
}
// 月度渠道电量排行
export function getDataChart2(data) {
  return request({
    url: '/xinxinCharge/chargingRank',
    method: 'post',
    data
  })
}
