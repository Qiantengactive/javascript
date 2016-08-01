function printNumber(num){
    if(num>0){
	    console.log(num);
	    printNumber(--num);
	}
}
var num=5
printNumber(num);