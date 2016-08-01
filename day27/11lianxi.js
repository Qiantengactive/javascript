var msg='123abc';
//var codem=msgCodeAt(i)   //取msg中的123   如果ce位于（48 到57中间）继续否则跳出循环
   var sun=0
	 for (var i=0;i<msg.length;i++)    
    { 
		var ce=msg.charCodeAt(i);      //获取nuicode码
		console.log(msg.charCodeAt(i));
     if (48<=ce && ce<=57)
     {
        var sum1=ce-48;  //1   0的unicode为48
		sun=(sum1+sun)*10        //10   
     } 
    }
	sun=(sun/10);
	console.log(sun)
