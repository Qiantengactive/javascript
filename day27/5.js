/*
生成count个min-max之间的随机整数，保存在一个数组中
*/
function shuzu(max,min,count){
var arr=[];
for (var i=1;i<=5;i++)
{
	var r=parseInt(Math.random()*(20-5))+5;   //获取max min之间的随机整数;
	arr.push(r);                               //推进数组  
}
  console.log(arr);
}
shuzu(20,5,5);