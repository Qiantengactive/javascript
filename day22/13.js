function add1(a,b){
  var sum=a+b;
  return sum;
}
  var f=add1(3,5);
  console.log(f);


function isLeapYear(year){
 var ret =(year%4== 0&& year%100!=0)||(
	           year%400==0
              );

        return ret;
}
var i=2004;
var e=isLeapYear(i);
console.log(e);