//变量名 引用名
var emp1=null; 

console.log(emp1); //null
//console.log(emp2); //no defined
/*
var emp3=null;
emp3.name = "tom";
console.log(emp3.name);  //typeerror
*/
emp1=new Object();
emp1.ename='tom';   //为对象新添一个属性
emp1.ename='tommary'; //修改已有属性的值
emp1.salary=3500;   //新添加一个新的属性
emp1['salary']=4500; //修改已有属性的值
console.log(emp1.ename); 
console.log(emp1['ename']); 
console.log(emp1.salary);
console.log(emp1['salary']);

emp1.work=function (){   //为对象新添加一个方法
	console.log('xxxxx')
}   
emp1['work']=function (){   //为对象新添加一个方法
	console.log(emp1.ename+'xxxxx');
	console.log(this.ename+'xxxxx');  //指向当前正在处理的对象
}   
emp1.work();        //调用对象的方法 

emp1.getSalary=gs;   //gs() 调用的是地址 不是函数

function gs(){
  console.log(this.ename+"领工资");
	  return 5000;
}
emp1.getSalary();