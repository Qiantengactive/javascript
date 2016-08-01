function Max(x,y,z){
	var a=x>y? x:y;
	var b=a>z ? a:z;
	return b;
}
var x=1;
var y=3;
var z=5;
console.log(Max(1,3,5));