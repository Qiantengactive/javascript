var s1='456.78wq3333';
var n1=Number(s1);
console.log(typeof(s1));
console.log(typeof(n1));
console.log(n1)
console.log(isNaN(n1)); 

if(isNaN(n1)){
   console.log('您输入的工资数非法');
}else{
   console.log('您输入的工资数是'+n1);   
}


var n2=123;
var s2=n2.toString();    //'123'
var s3=String(n2)       //'123'
console.log(s2);        // 123
console.log(s3);       //  123

var s4='345.123anc333';
var i3=parseInt(s4);    //345
var f3=parseFloat(s4);  //345.3
var n4=Number(s4);      //NaN
console.log(i3);
console.log(f3);
console.log(n4);