//print all numbers between -10 and 19

var index = -10
console.log("Printing all numbers between -10 and 19");
while(index<20){
  console.log(index);
  index++;
}

index = 10;

//print all even numbers between 10 and 40
console.log("Print all even numbers between 10 and 40");

while(index<41){
  if(index%2==0)
  console.log(index);
  index++;
}

index = 300;

//print all odd numbers between 300 and 333
console.log("Print all odd numbers between 300 and 333");

while(index<334){
  if(index%2!=0)
  console.log(index);
  index++;
}

index = 5;
//print all  numbers divisible by 5 and 3, ranges from 5 to 50
console.log("Print all  numbers divisible by 5 and 3, ranges from 5 to 50");

while(index<51){
  if(index%15==0)
  console.log(index);
  index++;
}
