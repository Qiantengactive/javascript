/*
创建一个函数，接受一个十进制的整数，
返回其对应的n进制数表示
num:十进制整数
other:待转换为的进制，如 10 进制 8进制，16进制
*/
function decimalToOther(num,other){
var stack=[];
    while (num>0){
	   var yuShu=num%other;     //余数
	   num=parseInt(num/other);  //商
	   stack.push(yuShu);
                 }
	   stack.reverse();
	   return stack.join('');
}
console.log(decimalToOther(19,2));