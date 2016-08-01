/*收银程序2.0*/

/*定义输入*/
var price1=15;  //商品1单价
var count1=40;   //商品1的购买数量
var price2=10;  //商品2的单价
var count2=2;   //商品2的购买数量
var money=100;  //顾客付款的钱数
/*执行计算*/
  var total=price1*count1+price2*count2;
  if(total>=500){
       total=0.8*total;
	   console.log('恭喜您的总价已经打八折');
  }
  var  change=money-total; 
/*程序输出*/
console.log('商品总价'+total);
console.log('找零'+change);