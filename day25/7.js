/**栈操作
典型的栈是操作———后进先出，
新元素添加时要放到栈顶————数组的尾部 push
出栈时要从栈顶删除一个元素——数组的尾部 pop
**/
var stack=[];
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40,50);
console.log(stack);
/*
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);
*/
while(stack.length>0){
  var top=stack.pop();
  console.log(top);
  console.log(stack);
 
}
