/*
创建一个emp对象，其中有两个属性：月薪，年薪，恰当的使用数据属性和访问器属性
*/
var emp={
    monthsalary:5000,
	
	get yearsalary(){
		console.log('我是年薪')
			return this.yearsalary=monthsalary*12;
	},
	set yearsalary(value){
		console.log('我是年薪')
			this.yearsalary=value;
	}
};

var stu={
   chinese:95,
   math:85,
   get total(){
	return this.chinese+this.math;	
   }
}
console.log(stu.total);
stu.total=255;