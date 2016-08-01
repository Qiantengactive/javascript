var i=10;
function f1(){
 i++;
 return i;
}
f1();
f1();
f1();

console.log(i);

var sum= 10;
function f2(){
   var sum =20;
   sum++;
   console.log(sum);
}
f2();
f2();
f2();
console.log( sum );