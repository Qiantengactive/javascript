var data='123abc';
var regexp=/\d+/g;
//console.log(data.match(regexp));
//console.log(regexp.exce(data));
//console.log(regexp.test(data));
console.log(regexp.exec(data));  //complie()  exec() test() 
console.log(regexp.exec(data));
console.log(regexp.exec(data));
console.log(regexp.exec(data));
console.log(regexp.exec(data));
console.log(regexp.exec(data));
//使用循环将123abcz字符串中转换为number
//求取第一个   1=>49-48 charcodeat()
var msg='123abc';
//var codem=msgCodeAt(i)   //取msg中的123   如果ce位于（48 到57中间）继续否则跳出循环
   var sum=0
	 for (var i=0;i<msg.length;i++)    
    { 
		var ce=msg.charCodeAt(i);      //获取nuicode码
		console.log(ce);
     if (48<=ce &&ce<=57)
     {
        var sum1=ce-48;  //1   0的unicode为48
     } 
		sun=(sum1+sum)*10        //10  
    }
	console.log(sun)
