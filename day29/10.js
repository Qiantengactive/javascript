var person1={
   name:'无名',
   work:function(){
        console.log(this.name+'在工作');
   }
};
var emp1={
      /**name:'暂定',
	  work:function(){
	  console.log(this.name+'在工作');  
	  },**/
	  salary:5000
};
var coder1={
	      name:'老张',
		  work:function(){
		      console.log(this.name+'在工作');
		 },
		  salary:8000,
		  debug:function(){
		      console.log(this.name+'在调试程序');
		 }
	  }
var account1={
        ename:'小王',
		work:function(){
		    console.log(this.name+'在工作');
		},
		salary:6000,
		cal:function(){
		console.log(this.name+'在算账');
		}
};
//更改对象原型，即修改对象的父对象
Object.setPrototypeOf(emp1,person1); 
console.log(emp1.salary);
console.log(emp1.name);
//console.log(emp1.name);
console.log(emp1.work());
