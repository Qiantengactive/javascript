var product ={price:1000,sell:function (){} };

var tv =Object.create(product);
var dc =Object.create(product);

tv.size='56寸';
dc.pixels='1000万';

//delete tv.size;
//delete dc.pixels;
//delete dc.price;
//delete product.price;

console.log(tv.size);   //undefined
console.log(tv.price);  //无效  删除原型无效
console.log(dc.pixels);
console.log(dc.price);
console.log();
//使用for ..in 遍历对象中的成员
for (var propertyName in tv)
{
console.log(propertyName);
}