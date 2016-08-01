var s1="\'abc\'\n\u4e00一二三\\";
console.log(s1);
console.log(typeof(s1));   //string

var n1=123;     //number
var n2=0123;
var n3=0x123;
var n4=123.45;
var n5=1.2345e2;
console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);
console.log(n5);
console.log(typeof(n1));

var b1=true;               //boolean
console.log(typeof(b1))
var  c1=10;
var  c2=true;
console.log(c1+true);