var counter=0;
for (var i=1;i<100;i++ )
{  if (i%3==0||i%4==0)
   {
	   console.log(i);
	   counter++;
   }
   if (counter>=20)
   {break;
   }
}