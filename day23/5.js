var uri='http://127.0.0.1/资源/abc xyz/花.png'; 
var result=encodeURI(uri);
var uri2=decodeURI(result)
var uri3=encodeURIComponent(uri);    //强行编码
var uri4=decodeURIComponent(uri3);    //强行解码
console.log(uri);
console.log(result);
console.log(uri2);
console.log(uri3);
console.log(uri4);
//window.open(uri);  //打开新页面失败
//window.open(result);  /打开新页面成功
