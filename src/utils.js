export function formatDate(number, format) {    //日期格式转换
  let formateArr = ['Y', 'M', 'D', 'h', 'm', 's']
  let returnArr = []
  let date = new Date(number)
  returnArr.push(date.getFullYear())
  returnArr.push(addZero(date.getMonth() + 1))
  returnArr.push(addZero(date.getDate()))
  returnArr.push(addZero(date.getHours()))
  returnArr.push(addZero(date.getMinutes()))
  returnArr.push(addZero(date.getSeconds()))
  for (let i in returnArr) {
    format = format.replace(formateArr[i], returnArr[i])
  }
  return format
}

export function addZero(number){
  if(number < 10) return '0' + number
  else return number
}

export function formatMoney(num, decimal) {
  //decimal = decimal > 0 && decimal <= 20 ? decimal : 2;
  if(decimal) num = parseFloat((num + "").replace(/[^\d.-]/g, "")).toFixed(decimal) + ""
  else num = parseFloat((num + "").replace(/[^\d.-]/g, "")) + ""
  let l = num.split(".")[0].split("").reverse()
  let r = num.split(".")[1]
  let t = ""
  for (let i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "")
  }
  let data = t.split("").reverse().join("")
  return r ? data + "." + r : data
}


