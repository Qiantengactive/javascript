/*
采用面向对象的方式，
裁剪掉衣一个字符串对象的前导、后导的所有空白字符
*/

var s1=new String(' A B ');
s1.trim=function (){
  var regexp=/^\s*/;
};
console.log('||'+s1.ltrim()+'||');