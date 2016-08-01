var square={};

Object.defineProperty(
   square,
   'width',
    {
		value:10,
	    writable:true,
		enumerable:true,
		configurable:true
    }

)
Object.defineProperty(
   square,
   'size',
    {
		get:function(){	
		   return this.width*this.width;
		},
		set:function(value){
		  this.width=Math.sqrt(value)
		},
		enumerable:true,
		configurable:true
    }

)
Object.defineProperty(
   square,
   'perimeter',
    {
		get:function(){
		 return this.width*4;
		},
	    enumerable:false,
		configurable:false
    }

)
square.width=2;
console.log(square.width);
console.log(square.size);
console.log(square.perimeter);