

function isEven(number){
  if(number%2!=0)
    return false;
  return true;
}

function factorial(number){
  if (number==0)
    return 1
  var counter = number;
  var result = 1;
  for(;counter>0;counter--){
    result = result*counter;
  }
  return result;
}

function factorial1(number){
  if(number==1)
    return 1;
  if(number==0)
    return 1;

  return number*factorial1(number-1);
}

function kebabToSnake(str){
  return str.replace("-","_");

}

var hello = prompt("enter a number");
var result = isEven(hello);
console.log(result);

hello = prompt("enter a number for factorial");
var result1 = factorial1(hello);
console.log(result1);

hello = prompt("enter a string");
var result2 = kebabToSnake(hello);
console.log(result2);
