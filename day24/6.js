
for (var i=100; i<=999;i++)
{
   var a=parseInt(i/100);    //百位
   var b=parseInt(i/10)-a*10;   //十位
   var c=i%10;               //个位
   if (i==a*a*a+b*b*b+c*c*c)
	{
	   console.log(i +"="+a+'*'+a+'*'+a+'+'+b+'*'+b+'*'+b+'+'+c+'*'+c+'*'+c);
	   console.log(i);
	}
    
    
}
//==值等于
//=赋值