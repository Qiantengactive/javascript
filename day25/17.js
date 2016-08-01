/**解析一个邮箱地址，分别获取其中的用户名和服务器域名**/
var email='tom@sohu.com';
var i=email.indexOf('@');          //3
console.log(email.indexOf('@'));   //3
console.log('用户名:'+'\t\t'+email.substring(0,i)); //tom
console.log('服务器域名:'+'\t'+email.slice(i+1));

