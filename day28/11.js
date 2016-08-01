var emp={ename:'tom',salary:3500};
console.log(typeof emp);       //object
console.log(emp instanceof String);  //false
var jsonString=JSON.stringify(emp);
console.log(typeof jsonString);     //string
console.log(jsonString instanceof String)   //false
console.log(jsonString)