/**
网上书城“书籍列表”页面中，客户端接收到服务器返回的一段JSON字符串数据，
其中描述了三本书籍的信息，每本书包含书名、价格、出版日期、作者列表等属性，
试把这个JSON字符串解析为JavaScript数组，并输出每个书籍对象的属性值
**/
//创建json字符串数据

var jsontxt='[{"书名":"js1","价格":31,"出版日期":"2011/1/21","作者":"贝多芬1"},{"书名":"js2","价格":32,"出版日期":"2012/2/22","作者":"贝多芬2"},\n{"书名":"js3","价格":33,"出版日期":"2013/3/23","作者":"贝多芬3"}]';
//json 转化为js数组
var jsobj=eval('('+jsontxt+')');
//var jsobj=JSON.parse(jsontxt);
console.log(jsobj);



//console.log(jsobj[1]);
//console.log(jsobj[2]);

/**
var jsonTxt4 =' [
		        {"ename":"Tom", "salary": 3500},
		        {"ename":"Mary", "salary": 3600},
		        {"ename":"Joe", "salary": 3800}
		   ] ';
var jsonj=JSON.parse(jsonTxt4);
console.log(jsonj);
**/