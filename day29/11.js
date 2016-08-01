/*
常见的对象的原型 父对象
*/

var obj1 = new Object();
console.log( obj1.__proto__);
console.log(Object.getPrototypeOf(obj1));
console.log(obj1.__proto__=== Object.getPrototypeOf(obj1));