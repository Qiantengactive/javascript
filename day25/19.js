/**假设浏览器接收到服务器返回的如下格式的一段字符串，试将其解析出来**/
var data='Tom@95@88#Mary@79@65#John@91@98';
var studentArr=[];
var arr=data.split('#');
for (var i=0;i<arr.length;i++)
{
	var stu=arr[i];
	var stuArr=stu.split('@');
	//var stuArr=arr[i].split('@');
	studenArr.push(stuArr);
}















