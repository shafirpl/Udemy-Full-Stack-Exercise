//alert("Connected");
var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById('p2');
var p1Score = 0;
var p2Score = 0;
var first = document.querySelector("#first");
var second = document.querySelector("#second");
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click",function(){
  if(!gameOver){
    p1Score++;
    if(p1Score===winningScore)
      gameOver = true;
    first.textContent = p1Score;
  }
});

p2Button.addEventListener("click",function(){
  if(!gameOver){
    p2Score++;
    if(p2Score===winningScore)
      gameOver = true;
    second.textContent = p2Score;
  }
});
