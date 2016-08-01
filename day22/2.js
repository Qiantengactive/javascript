/**除非运算**/
var num10=10; //number
var num11=4; //number
console.log(num10/num11);     //2.5 
var num12=3;
console.log(num10/num12);     //3.33333335
var num13=0;
console.log(10/0);          //infinity
console.log(0/10);          //0
/**取余数、取模运算**/
console.log(10 % 3);        //1
console.log(10.1 % 3);        //1.1
console.log(10 % 4);        //2
console.log(-10 % 4);        //-2
console.log(-10 % -4);        //-2
console.log();
var i=0;
var j=i++;                 //先取值，再自加
console.log(i);            //1
console.log(j);            //0
var a=0;
var b=++a;               //先自加，再取值
console.log(a);            //1
console.log(b);            //1