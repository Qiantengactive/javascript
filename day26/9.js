//var regexp=/a/;
var regexp=/^a/;
var regexp=/。$/;
var data='abc。';
console.log(regexp.test(data));
var cellphonePatt=/^1[35789]\d{9}$/;
var data2='13012345678';                      //ture
console.log(cellphonePatt.test(data2));
var data2='a13012345678';                     //false
console.log(cellphonePatt.test(data2));