function zh(a,b){
    var stack=[];
	while (a>0)
	{   
		var yushu=(a%b);    //余数
		a=parseInt(a/b);    //商
		stack.push(yushu);  //推进栈中
	}
	console.log(stack);
	stack.reverse();
	console.log(stack);
	var str=stack.join('');
	console.log(str);
}
zh(19,2);