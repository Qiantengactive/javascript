var i=2000;
for (var counter=1;counter<=5; )
{
        i++;
	if (  (i%4==0&&i%100!=0)||i%400==0 ){
		console.log(i);
        counter++;
       }
}