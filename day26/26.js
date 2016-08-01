var phonePatt=/1[35789]\d{9}/g;
phonePatt.compile(phonePatt);
var msg='这是我的电话13012345678这是tom的电话13801234567';
//摘取上述字符串中所有的手机号码

console.log();
/*
var retVal1 = phonePatt.exec(msg); 
  console.log(retVal1[0]);
  console.log(retVal1[1]);
  console.log(retVal1[2]);
*/  
console.log(phonePatt.exec(msg));
console.log(phonePatt.exec(msg));
console.log(phonePatt.exec(msg));
console.log(phonePatt.exec(msg));
console.log(phonePatt.exec(msg));
console.log(phonePatt.exec(msg));
console.log(phonePatt.exec(msg));
console.log(phonePatt.exec(msg));

/*
var result=null;
while((result=phonePatt.exec(msg))!=null){

console.log(result[0]);
console.log(typeof result[0]);
}
*/