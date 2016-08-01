 var n1=123;//值类型
var n2=new Number(123);//引用类型对象；
var n4=new Number('123.45ab');
console.log(typeof n1);
console.log(typeof n2);
console.log();
console.log(n1 instanceof Number );
console.log(n1 instanceof Object );
console.log(n2 instanceof Number );
console.log(n2 instanceof Object );
var n3=new Number('123.45');
console.log(n3);
console.log(n1);

