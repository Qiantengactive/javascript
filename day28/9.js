//使用for/in循环遍历对象中所有的属性
var b2={
      bookName:'水浒传',
	  price:40,
	  pubDate:new Date('2011-6-6'),
      count:4;
	  getAmount:getAmount,
      getPublishedDays:getpublishedDays,
};
for (var attr in b2)
{
	console.log(attr+'=>'+b2[attr]);
} 