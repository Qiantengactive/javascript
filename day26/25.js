/*
lastIndex 使用方法
*/
var regexp=/is/g;   //全局匹配 regexp.lastIndex

var data='his history is long';

console.log(regexp.lastIndex);    //下一次搜索从
console.log(regexp.test(data));
console.log(regexp.lastIndex);
console.log(regexp.test(data));
console.log(regexp.lastIndex);
console.log(regexp.test(data));
console.log(regexp.lastIndex);
console.log(regexp.test(data));
console.log(regexp.lastIndex);
console.log(regexp.test(data));
console.log(regexp.lastIndex);
console.log(regexp.test(data));
console.log(regexp.lastIndex);
console.log(regexp.test(data));
console.log(regexp.lastIndex);
console.log(regexp.test(data));

