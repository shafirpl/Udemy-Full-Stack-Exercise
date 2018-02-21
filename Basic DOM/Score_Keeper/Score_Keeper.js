//alert("Connected");
var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById('p2');
var p1Score = 0;
var p2Score = 0;
var first = document.querySelector("#first");
var second = document.querySelector("#second");
var gameOver = false;
var winningScore = 5;
var resetButton = document.querySelector("#reset");
var input = document.querySelector("input");
var paragraph = document.querySelector("p span");

p1Button.addEventListener("click",function(){
  if(!gameOver){
    p1Score++;
    if(p1Score===winningScore){
      gameOver = true;
      first.classList.add("winner");
    }
    first.textContent = p1Score;
  }
});

p2Button.addEventListener("click",function(){
  if(!gameOver){
    p2Score++;
    if(p2Score===winningScore){
      gameOver = true;
      second.classList.add("winner");
    }
    second.textContent = p2Score;
  }
});

resetButton.addEventListener("click",function(){
  //alert("clicked");
  p1Score = 0;
  p2Score = 0;
  first.textContent = 0;
  second.textContent = 0;
  first.classList.remove("winner");
  second.classList.remove("winner");
  gameOver = false;
});

input.addEventListener("change",function(){
  //alert("change the input");
  paragraph.textContent = Number(this.value);
  winningScore = Number(this.value);
  reset();

});

function reset(){
  p1Score = 0;
  p2Score = 0;
  first.textContent = 0;
  second.textContent = 0;
  first.classList.remove("winner");
  second.classList.remove("winner");
  gameOver = false;
}
