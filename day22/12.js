function add1(num1,num2){
  var sum=num1+num2;
  return sum;       //没有return时 返回值返回的是undefined；
}
var r=add1('aba','abd');
console.log(r);

function add1(){
  var a=1+2;
  //return sum;       //没有return时 返回值返回的是undefined；
}
//var r=add1('aba','abd');
//console.log(r);
console.log(a);