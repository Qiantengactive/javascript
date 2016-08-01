var balance=10000; //账户余额
const WITHDRAW_LIMIT=20000;
//功能性需求 能从余额中减去待取得余额
//非功能性需求 性能 可用性 安全性

/**自定义的错误对象，表示取款金额大于取款上限**/
function WithdrawLimitError(nm,msg){
  this.name=nm;
  this.message=msg;

}

function withdraw(money){
   if(balance-=money!=="number"){
     //服务器访问。作日志 用户提示 —————冲断业务逻辑
	 throw  new Error('取款数额不能为非数字'); //抛出错误提示
   }
   if (money<=0)
   {
	   //throw new Error
	   throw '取款金额不能小于零';
   }
   if (money>WITHDRAW_LIMIT)
   {
	   //throw false;  //throw 9901
	   throw WithdrawLimitError('LimitError','取款金额不能大于取款限额');
   }
     balance-=money;
     console.log('待取金额已经从余额中减除了');
     return balance;
}
console.log(withdraw(100));
console.log(withdraw(200));