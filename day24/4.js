var i=0;
var str=5
while(i<40){
i+=5;
str=str+'*'+i;
}
console.log(str);

var i=5;
var str=0;
while (i<=40)
{
	if (i==40)
	{str=str+i
		break;
	}else{
     str=str+i+'*';
     i=i+5;
	}
}
 console.log(str);