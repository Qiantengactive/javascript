function add(n1,n2){
   //var sum=0;      //局部变量
   sum=0;        //全局变量 不建议使用 如果使用需要调用一次 再使用 因为比较麻烦容易产生错误所以不建议使用
   sum+=n1;
   sum+=n2;
   return sum;
}
//var result=add(1,2);
//console.log(result);
console.log(sum);
