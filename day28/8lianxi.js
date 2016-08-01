/**
在线书城中需要两个BOOK对象，分别是书名，单价，
出版日期，是否特价，购买数量等属性，
还有价格小计，获取该书至今为止的出版天数 这两个方法
**/
var emp1={
        name:'javascript技术指南',
		price:139,
		fdate:'2/23/2015',
		issale:'no',
		sum:5,
		getAmont:getAmontt,    //获取价格小计;
	    getDay:publishday  //获取该书至今为止的出版天数; 
}
var emp1={};
        emp1.name='javascript技术指南';
		emp1.price=139;
		emp1.fdate='2/23/2015';
		emp1.issale='no';
		emp1.sum=5;
		emp1.getAmont=getAmontt;    //获取价格小计;
	    emp1.getDay=publishday  //获取该书至今为止的出版天数; 



function getAmontt(){    //价格小计
  return '价格小计'+this.price*this.sum
}

function publishday(){    //距离天数
var d1=new Date(this.fdate);
var d2=new Date();
var d3=d2.getTime()-d1.getTime();
return Math.round(d3/(1000*3600*24));
}
console.log(emp1.getDay());
console.log(emp1.getAmont());
/*
var d1=new Date(emp1.fdate);
console.log(d1.getTime());
var d2=new Date();
console.log(d2.getTime());
var d3=d2.getTime()-d1.getTime();
var d4=Math.round(d3/(1000*3600*24));
console.log(d4)
*/
for (var atter in emp1)
{
	console.log(atter);
}
for (var atter in emp1)
{
	console.log(atter+"=>"+emp1[atter]);
}
console.log(emp1.toString());
console.log();
console.log('price' in emp1);
console.log('price2' in emp1);
console.log();
console.log(emp1.hasOwnProperty('count'));
console.log(emp1.hasOwnProperty('sum'));