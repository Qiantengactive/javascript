function add(){
//console.log(arguments.length);
   var sum=0;
   for ( var i=0;i<arguments.length;i++)
      {
	 sum+=arguments[i];
         }
console.log(sum);


}
add(10,20,23,333);