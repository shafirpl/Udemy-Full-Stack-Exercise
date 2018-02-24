//alert("Connected");
var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)",

]

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
//var pickedColor = colors[3];
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");

for(var i = 0; i<squares.length;i++){
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  //add click listeners to squares
  squares[i].addEventListener("click",function(){
    //testing if they work
    //alert("Hailooo");

    //grab color of picked squares
    var clickedColor = this.style.backgroundColor;
    //compare color to pickedColor for game logic
    if(clickedColor===pickedColor){
      //correct guess
      messageDisplay.textContent = "Correct";
      changeColors(pickedColor);
    }
    else{
      //wrong guess, we are fading this box, the way to do this is to match it with the background color of
      //our body to give it a fading effect
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";

    }
  });
}

colorDisplay.textContent = pickedColor;

/* this will change the colors of all the remaining squares to match the color of the right/correct square when
* the player guesses the correct square
* @Param: The color of the correct guess/square that the game determined
*/

function changeColors(color){
  //loop through all the squares
  for(var i = 0; i<colors.length;i++){
  //change the color
  squares[i].style.backgroundColor = color;

  }

}

/* This functions picks a randomized color from the color[] array as the correct guess
* @return: A random color from the color[] array.
*/

function pickColor(){
/* Math.random() returns a float from 0 to 1, not including 1.
* if we want a number between 1 to 6, we would do (math.random()*6)+1, and
* if we want from 0 to 5, we would just do math.random()*6. It will generate random
* numbers from 0 to 6 excluding 6. But we want an integer, not a float, so we do
* math.floor(math.random()*6). Math.floor will chop of any decimal points.
*/

/* Since we don't know the size of array(for example for hard there are 6 colors,
* For easy there will be 3 colors etc) we would be multiplying with array.length instead
* of a fixed number
*/
 var random = Math.floor(Math.random() * colors.length);
 return colors[random];
}
