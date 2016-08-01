/**创建画图应用中需要的“矩形对象”，
有长，宽，高，背景颜色三个属性，还有两个方法
getSize(),getPERimeter()
**/
var cfx=new Object();  //创建对象
cfx.width=3;
cfx.height=4;
cfx.bankground='#ffffff';
cfx['bankground']='#ffffff';
cfx.getSize=getsize;

function getsize(){
   return  this.width*this.height
}
cfx.getPerimeter=function (){
  return this.width*2+this.height*2;   
}
console.log(cfx);
console.log(cfx.width);
console.log(cfx['height']);
console.log(cfx.getSize());
console.log(cfx.getPerimeter());

var rect2=new Object();
rect2.width=6;
rect2['height']=8;
rect2.getSize=function(){
  return this.width*this.height;
}
rect2.getPerimeter=function(){
  return this.width*2+this.height*2;
}
console.log(rect2.getSize());
console.loh(rext2.getPerimeter())


