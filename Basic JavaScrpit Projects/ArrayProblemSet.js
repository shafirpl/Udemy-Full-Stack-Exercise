console.log("connected");

function printReverse(a){
var index = a.length-1;
for(;index>=0;index--){
  console.log(a[index]);
}
}

function isUniform(a){
  for(var i = 1; i<a.length;i++){
    if(a[0]!==a[i]){
      return false;
    }
    return true;
  }
}



function sumArray(a){
  var sum = 0;
  for(var i = 0;i<a.length;i++){
    sum += a[i];
  }
  return sum;
}

function max(a){
  var max = a[0];
  for(var i = 0; i<a.length;i++){
    if(a[i]>max){
      max = a[i];
    }
  }
  return max;

}

var a = [5,4,3,2,1];
var same = [5,5,5,5,5];
var b = [1,-1,2,-2];
printReverse(a);
console.log(isUniform(same));
console.log(isUniform(a));
console.log("sum is:"+sumArray(same));
console.log("sum is:"+sumArray(b));
console.log("max is:"+max(b));
console.log("max is:"+max(same));
