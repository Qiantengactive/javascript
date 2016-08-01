var emp1=null;
var emp2=[];
var emp3={ ename:'john',
           salary:3500,
	       "for":'搞研发',
           "job title":'副总工程师',
	       work:function(){
              return this.ename+'在搞研究';
            },
		   getSalary:gs
	     };
function gs(){
   return this.ename+'在领工资:'+this.salary;

}
var emp4=new Object();

console.log(emp3.ename);
console.log(emp3['salary']);
console.log(emp3["for"]);
console.log(emp3["job title"]);
console.log(emp3.work());
console.log(emp3.getSalary());



console.log();
console.log(emp1);
console.log(emp2);
console.log(emp3);
console.log(emp4);
console.log("我要学习");