/*
var arr1 = [10, 20, 30, 40, 50];
var arr2 = arr1.splice(2, 0, 21,22,23);
console.log( arr2 );
*/
function compareNumbers(a,b){
  return a-b;
}
var numArray=[13,23,4,5,67,89];
console.log(numArray.sort(compareNumbers));