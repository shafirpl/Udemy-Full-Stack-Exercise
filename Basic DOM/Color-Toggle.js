var button = document.querySelector("button");
var isPurple = false;
button.addEventListener("click",function(){
  //we could do document.body.style.background instead of querySelector
  if(!isPurple){
    document.querySelector("body").style.background = "purple";
    isPurple = true;
    }
  else{
    document.querySelector("body").style.background = "white";
    isPurple = false;
    }
});

function hello(){
  console.log("clicked");
}
