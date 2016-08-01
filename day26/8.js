var regexp=/((\d)(\d))(\d)/g;
var data='123';
console.log(regexp.test(data));

console.log(RegExp.$1);     //静态属性
console.log(RegExp.$2);
console.log(RegExp.$3);
console.log(RegExp.$4);
console.log(RegExp.$5);
console.log(RegExp.$6);
console.log(RegExp.$7);