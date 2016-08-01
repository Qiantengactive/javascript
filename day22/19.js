function recursiveAdd(num1){
 var sum=0;
 if(num1>=0){
      sum=num1+recursiveAdd(--num1)
    }
	  return sum;
}
var num2=3;
console.log(recursiveAdd(num2));



var sum3=1;
function recursiveX(num3){
 if(num3>=1){
    sum3=num3*recursiveX(--num3)
    }
    return sum3;
}
console.log(recursiveX(3));