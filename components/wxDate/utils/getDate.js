function getDate(){
   let today = new Date();
   let year = today.getFullYear();
   let month = today.getMonth() + 1;
}

/**
 * 获取当前时间年月日
 */
function getNowDate(year, month){
  let today = '';
  if(year && month){
    today = new Date(year, month-1,1);
  }else{
    today = new Date();
  }
  year = today.getFullYear();
  month = today.getMonth() + 1;
  let day = today.getDate();
  return {
    nowYear: year,
    nowMonth: month,
    nowDay: day
  }
}

function getshowDate(year,month){
  let date = getNowDate(year, month);
  // 获取当前月份第一天是星期几
  let firstWeek = new Date(date.nowYear, date.nowMonth - 1, 1).getDay();
  // 获取上一月最后一天
  let lastMontEndDay = new Date(date.nowYear, date.nowMonth - 1, 0).getDate();
  // 获取本月最后一天
  let endDay = new Date(date.nowYear,date.nowMonth,0).getDate();
  // 获取本月最后一天是周几
  let endDayWeek = new Date(date.nowYear, date.nowMonth, 0).getDay();
  //判断前面还有前一月的多少天
  let arr = [];
  for(let i = 0; i < firstWeek; i++){
    arr.push({
      date: lastMontEndDay - firstWeek+i+1,
      month: false
    })
  }
  for(let m = 0; m < endDay; m++){
    arr.push({
      date: m+1,
      month: true
    })
  }
  for (let y = 0; y < (42 - firstWeek - endDay); y++){
    arr.push({
      date: y+1,
      month: false
    })
  }
  console.log(arr);
  return {
    year: date.nowYear,
    month: date.nowMonth,
    date: arr
  };
}

module.exports = {
  getshowDate: getshowDate
}