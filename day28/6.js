/**创建画图应用中需要的“矩形对象”，
有长，宽，高，背景颜色三个属性，还有两个方法
getSize(),getPERimeter()
**/
var cfx=new Object();  //创建对象
cfx.width=3;
cfx.height=4;
cfx.bankground='#ffffff';
cfx['bankground']='#ffffff';
cfx.getSize=getSize;
cfx.getPerimeter=getPerimeter;

var rect2=new Object();
rect2.width=6;
rect2['height']=8;
rect2.getSize=getSize;
rect2.getPerimeter=getPerimeter;

rect2.getSize();

function getSize(){
  return this.width*this.height;
}
function getPermeter(){
  return this.width*2+this.height*2;

}