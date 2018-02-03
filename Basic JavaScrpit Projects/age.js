var age = prompt("Your age");
var i = 0;

if(age<0){
  console.log("Error");
}
if(age==21){
  console.log("Happy birthday");
}
if(age%2!=0){
  console.log("Odd age");
  calculate1();
}


else{
  calculate1();
}


//loop method
function calculate(){
  for(;i<age;i++){
    if(age/i==i){
      console.log("Perfect Square");
      break;
    }
  }
}

//math.square method
function calculate1(){
  if(age%Math.floor(Math.sqrt(age))==0)
  console.log("Perfect Square");
}
