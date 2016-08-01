/*
正则表达式中的————量词————匹配字符出现的频次
*/
/*
var regexp=/a/;
var data='abcdef';
console.log(regexp.test(data));   ///ture
var regexp=/a?/;
var data='bcdef';
console.log(regexp.test(data));   ///ture
var regexp=/ab?/;
var data='abcdef';
console.log(regexp.test(data));   ///ture
var regexp=/(ab)?/;
var data='abcdef';
console.log(regexp.test(data));   ///ture
var regexp=/\(ab\)?/;
var data='(ab)cdef';
console.log(regexp.test(data));   ///ture
*/
var regexp=/ab{2,4}/;
var data='abbbbbbcdef';
console.log(regexp.test(data));   ///ture