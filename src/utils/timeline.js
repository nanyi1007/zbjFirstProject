/*
 * 算时间轴
 * step：时间间隔(5, 10, 15...)
 * return: ['00:00'. '00:15', '00:30'...,'23:45']
 * */
export function timeSlot(step) {
  //  step = 间隔的分钟
  const date = new Date()
  date.setHours(0o0) // 时分秒设置从零点开始
  date.setSeconds(0o0)
  date.setUTCMinutes(0o0)
  const timeArr = []
  const slotNum = (24 * 60) / step // 算出多少个间隔
  for (let f = 0; f < slotNum; f++) {
    const time = new Date(Number(date.getTime()) + Number(step * 60 * 1000 * f)) // 获取：零点的时间 + 每次递增的时间
    let hour = ''
    let sec = ''
    time.getHours() < 10
      ? (hour = '0' + time.getHours())
      : (hour = time.getHours()) // 获取小时
    time.getMinutes() < 10
      ? (sec = '0' + time.getMinutes())
      : (sec = time.getMinutes()) // 获取分钟
    timeArr.push(hour + ':' + sec)
  }
  return timeArr
}
