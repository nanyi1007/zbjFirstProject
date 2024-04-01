import dayjs from 'dayjs'
import rTime from 'dayjs/plugin/relativeTime'

// 全局使用中文
dayjs.locale('zh-cn')

// 对时间进行格式化
export function formatTime(data = new Date(), type = 'YYYY-MM-DD') {
  const customParseFormat = require('dayjs/plugin/customParseFormat')
  dayjs.extend(customParseFormat)
  return dayjs(data).format(type)
}

// 其它例如相对时间，需要单独配置它自己的插件才可以使用
dayjs.extend(rTime)

export const relativeTime = (value) => {
  return dayjs().to(dayjs(value))
}
export default {
  formatTime,
  relativeTime
}

/*
 * 算时间轴
 * step：时间间隔(5, 10, 15...)
 * return: ['00:00'. '00:15', '00:30'...,'23:45']
 * */
export function timeSlot(step) {
  //  step = 间隔的分钟
  const date = new Date()
  date.setHours(0) // 时分秒设置从零点开始
  date.setSeconds(0)
  date.setUTCMinutes(0)

  const arr = []; const timeArr = []
  const slotNum = (24 * 60) / step // 算出多少个间隔
  for (let f = 0; f < slotNum; f++) {
    const time = new Date(Number(date.getTime()) + Number(step * 60 * 1000 * f)) // 获取：零点的时间 + 每次递增的时间
    let hour = ''
    let sec = ''
    time.getHours() < 10 ? (hour = '0' + time.getHours()) : (hour = time.getHours()) // 获取小时
    time.getMinutes() < 10 ? (sec = '0' + time.getMinutes()) : (sec = time.getMinutes()) // 获取分钟
    timeArr.push(hour + ':' + sec)
  }
  return timeArr
}
