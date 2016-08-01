var emp={ename:'tom'};

var coder1=Object.create(emp);
var coder2=Object.create(emp);

console.log(coder1.ename);   //原型属性
console.log(coder2.ename);   //原型属性

emp.ename="tommy";

Object.getPrototypeOf(coder1).ename='tomcruise';
console.log(coder1.ename);   //原型属性
console.log(coder2.ename);   //原型属性(prototypeproperty)
console.log();
console.log();
coder1.salary=5000;            //自有属性（own property）
console.log(coder1.salary);
console.log(coder2.salary);
console.log(emp.salary);

coder1.ename='mary';        //自有属性覆盖了原有属性
console.log(coder1.ename);
console.log(coder2.ename);
console.log(emp.ename);