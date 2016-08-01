function Emp(ename){
   this.ename=ename;
  // return this
}
var emp1 = new Emp('Tom');
console.log(emp1.ename);

var emp2 = Emp('mary');
console.log(emp2.ename);