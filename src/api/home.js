import request from '@/utils/request'

//临颍
export function getLinYingData(params) {
  return request({
    url: '/linyin/getIndexData',
    method: 'get',
    params
  })
}


