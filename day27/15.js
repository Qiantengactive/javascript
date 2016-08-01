var d1=new Date();
console.log(d1);
var d2=new Date(100);
console.log(d2);
var d3=new Date(1000);
console.log(d3);
var d4=new Date(1000*3600);
console.log(d4);
var d5=new Date(1000*3600*365);
console.log(d5);
var d6=new Date(Number.MAX_VALUE);
console.log(d6);
var t=d1.getTime();
console.log(t);



var d8=new Date('2300-2-23 23:22:21:200');
console.log(d8.getYear());
console.log(d8.getFullYear());       //年
console.log(d8.getMonth());         //月
console.log(d8.getDay());           //日
console.log(d8.getHours());         //小时
console.log(d8.getMinutes());       //分
console.log(d8.getSeconds());       //秒
console.log(d8.getMilliseconds());  //毫秒


var d8=new Date('2300-2-23 23:22:21:200');
console.log(d8.toDateString());
console.log(d8.toTimeString());
console.log(d8.toLocaleDateString());
console.log(d8.toLocaleTimeString());
console.log(d8.toString());
console.log(d8.toTimeString());
console.log(d8.toUTCString());   //GMT UTC