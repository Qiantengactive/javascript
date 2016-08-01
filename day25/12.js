/*
字符串中的转义字符
*/
var s1='AB\bCD';    //backspace
console.log(s1);


var s2='\X\Y\NZ';  //nextline 下一行的当前位置
//var s2='\X\Y\u000AZ';
console.log(s2);

var s3='MN\rOP';   //return 回到当前行的开头
console.log(s3);

//\r\n  enter 在打字机中可以看出效果来
var s4='ab\tcd';     //table 跳到下一个水平制表符位置
console.log(s4);    //一个水平制表符相当于八个标准的英文字符的宽度
console.log('姓名：'+123);
console.log('手机号：'+123);
console.log('个人签名：'+123);
console.log('姓名：\t\t'+123);
console.log('手机号：\t'+123);
console.log('个人签名：\t'+123);