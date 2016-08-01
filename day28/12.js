/**
创建一个表示计算器的对象，其中有两个属性可以存储两个数字变量，
使用方法分别为这两个属性赋值。再创建加减乘除四个方法，分别返回这两个
操作数的对应数学运算的结果。
**/
var cal={};
cal.a=6;
cal.b=2;
//赋值
cal.seta=function(x){
          this.a=x;
//console.log(cal.a)
         }
cal.setb=function(y){
          this.b=y;
         }
//创建加减乘除
cal.add=add;
function add(){
return "加法"+(this.a+this.b);
}
cal.minus=minus;
function minus(){
return '减法'+(this.a+(-this.b));
}
cal.cheng=cheng;
function cheng(){
return "乘法"+(this.a*this.b);
}
cal.chu=chu;
function chu(){
return "除法"+(this.a/this.b);
}
cal.seta(6);
cal.setb(2);
console.log(cal.add());
console.log(cal.minus());
console.log(cal.cheng());
console.log(cal.chu());

/*
var cal={}
   cal.a=undefined;
   cal.b=undefined;
   cal.getadd=add;
cal.seta=function(x){
   this.a=x;
   //console.log(typeof this.a)
}
cal.setb=function(y){
  this.b=y;
}
function add(){
	//var c=this.a+this.b;
return  "加法"+(this.a+this.b);
}
cal.seta(6);
cal.setb(2);
console.log(cal.getadd());
*/