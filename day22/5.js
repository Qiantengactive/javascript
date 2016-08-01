var i=10;
var j=5;


console.log(i>j);
console.log(i>=j);
console.log(i<j);
console.log(i<=j);
console.log(i==j);
//consloe.log(i===j);
console.log(i!=j);

var i=10;
var k=1.5;
var f=true;
console.log(i>=f);     //true

var s1='abc';
var s2='abd';
console.log(s1>s2);   //false
console.log(s1<s2);   //true   string（字符串）比较Unicode码


var num1=3;
var str1='3';
console.log(num1>str1);       //flase    
console.log(num1<str1);       //flase
console.log(num1==str1);      //  true   ==   转换成字符串
console.log(num1===str1);     //   false ===

var num2=4;
var str2='5';
console.log(num2=str2);        //5

var num3=300;
var  str3='31';
console.log(num3<str3);     //   false
console.log(num3>str3);     //true
console.log(num3==str3);    
console.log(num3===str3);
/**number 和string比较时 将string转化为数字进行比较**/ 

