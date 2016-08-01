/**假设浏览器接收到服务器返回的如下格式的一段字符串，试将其解析出来**/
var data='Tom@95@88#Mary@79@65#John@91@98';
var stu=[];
var arr=data.split("#");
for (var i=0;i<arr.length;i++)
{
	var stud=arr[i].split("@");
	stu.push(stud);
}
console.log(stu);