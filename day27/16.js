/*格式化输出当前系统时间
当前时间1小时后的时间
当前时间24小时后的时间
当前时间所在的24点的时间
当前时间3个工作日后的营业开始时间（9点）  //转换为number之后进行加运算
*/
function fromat(d){
  var year=d.getFullYear();
  var month=d.getMonth()+1;
  month=month<10?'0'+month:month;
  var date=d.getDate();
  date=date<10?'0'+date:date;
  var hour=d.getHours();
  hour=hour<10?'0'+hour:hour;
  var minute=d.getMinutes();
  minute=minute<10?'0'+minute:minute;
  var second=d.getSeconds();
  second=second<10?'0'+second:second;
  return year+'-'+month+'-'+date+' '+hour+':'+minute+':'+second;
}
var d1=new Date();
console.log(fromat(d1));