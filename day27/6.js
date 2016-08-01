/*
从Tom、Mary、John这三个姓名中随机取出一个姓名
*/
var arr1=['tom','mary','john'];
var i=parseInt(Math.random()*3);
if (0<=i<=1)
{
var arr2=arr1.slice(i,i+1)
}else{
var arr2=arr1.slice(i);
}
console.log(arr2)