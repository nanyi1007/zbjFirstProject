import request from '@/utils/request'

// '光储充控'一体化指挥控制系统界面
export function getDataChart1(data) {
  return request({
    url: '/shakoulu/equipDay',
    method: 'post',
    data
  })
}
// 月充放电量
export function getDataChart2(data) {
  return request({
    url: '/shakoulu/getMonthReport?type=' + data.type,
    method: 'post',
    data
  })
}
// 充电桩
export function getDataTable(data) {
  return request({
    url: '/shakoulu/getChongdianzhuang?page=' + data.page + '&pageSize=' + data.pageSize,
    method: 'post',
    data
  })
}

// 首页POST

export function getDataHome(data) {
  return request({
    url: '/shakoulu/homePage',
    method: 'post',
    data
  })
}
