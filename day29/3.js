//创建一个飞行物的模板
function FlyingObject(nm,sd){
	//声明的方法必须使用this
   this.name=nm;
   this.speed=sd;
   this.fly=fly;
   this.land=land;
}
   function fly(){
   return this.name+'在飞，时速为：'+this.speed;
   }

   function land (){
   return this.name+'着陆了：';
   }
   var bird1 = new FlyingObject('海鸥1',30);
   var bird2 = new FlyingObject('海鸥2',40);
   var bird3 = new FlyingObject('海鸥3',50);

   console.log(bird1);
   console.log(bird2);
   console.log(bird3);
   console.log(bird1.fly());
   console.log(bird2.fly());
   console.log(bird3.fly());

