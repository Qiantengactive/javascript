var calcl=(){
   getSum:function(num){
         var sum=0;
		 if (num>0){ 
		     sum=num+this(num-1);
		 }else{
		   return 0;
		 }
		 return sum;
   
   }

};
console.log(calcl.getSum(5));