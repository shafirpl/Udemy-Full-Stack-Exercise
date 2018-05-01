//alert("Connected");
//This is the initial colors, but we don't want
//the squares to be the same color order all the time
//when the page loads, so we used a function so all the
//squares have different color when we load up the page every
//time
/*
var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)",

]
*/
//variable declarations

//this would generate random colors array
var numSquares = 6;
var pickedColor;
var colors;
var h1 = document.querySelector("h1");

var squares = document.querySelectorAll(".square");
//var pickedColor = colors[3];
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easy");
// var hardBtn = document.querySelector("#hard");
var mode = document.querySelectorAll(".mode");

init();

function init(){
  //mode buttons
  modeButtons();
  //reset button add event listener
  resetButton.addEventListener("click",function(){
    reset();
    // //resetting the whole game by
    // // Generate random new colors
    // colors = generateRandomColors(numSquares);
    // //This will put the message new colors when someone clicks the reset button
    // this.textContent = "NEW COLORS";
    // messageDisplay.textContent = "";
    // //pick a random color from array
    // pickedColor = pickColor();
    // colorDisplay.textContent = pickedColor;
    // //change colors of squares
    // for(var i = 0; i<squares.length;i++){
    //   //add initial colors to squares
    //   squares[i].style.backgroundColor = colors[i];
    // }
    // h1.style.background = "steelblue";
  });
gameLogic();
}




function reset(){
  //resetting the whole game by
  // Generate random new colors
  colors = generateRandomColors(numSquares);
  //This will put the message new colors when someone clicks the reset button
  resetButton.textContent = "NEW COLORS";
  messageDisplay.textContent = "";
  //pick a random color from array
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for(var i = 0; i<squares.length;i++){
    //add initial colors to squares
    //squares[i].style.backgroundColor = colors[i];
    /* If and only if we have a color at index i, then we will change it,
    for example, when i = 4, colors[i] = NULL or false, so it won't change the color
     */
       if(colors[i]){
         squares[i].style.backgroundColor = colors[i];
         squares[i].style.display = "block";
       }

       //hiding the colors
       else{
         squares[i].style.display = "none";
       }
  }
  h1.style.background = "steelblue";
  //reset button event listener
}

function modeButtons(){
  for(var i = 0; i<mode.length;i++){
    mode[i].addEventListener("click",function(){
      for(var j = 0; j<mode.length;j++){
        mode[j].classList.remove("selected");
      }
      this.classList.add("selected");
      //figure out how many squares to show
      //pick new colors
      //pick a new pickedColor
      //update page to reflect changes
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();
    });
  }
}
//chossing easy or hard mode
// easyBtn.addEventListener("click",function(){
//   hardBtn.classList.remove("selected");
//   easyBtn.classList.add("selected");
//   numSquares = 3;
//   //changing the colors and hiding the bottom 3 squares
//
//   // Generate random new colors
//   colors = generateRandomColors(numSquares);
//   //pick a random color from array
//   pickedColor = pickColor();
//   for(var i = 0; i<squares.length;i++){
//     /* If and only if we have a color at index i, then we will change it,
//     for example, when i = 4, colors[i] = NULL or false, so it won't change the color
//     */
//     if(colors[i]){
//       squares[i].style.backgroundColor = colors[i];
//     }
//
//     //hiding the colors
//     else{
//       squares[i].style.display = "none";
//     }
//   }
//    colorDisplay.textContent = pickedColor;
// });
//
// hardBtn.addEventListener("click",function(){
//   easyBtn.classList.remove("selected");
//   hardBtn.classList.add("selected");
//   numSquares = 6;
//   //changing the colors and hiding the bottom 3 squares
//
//   // Generate random new colors
//   colors = generateRandomColors(numSquares);
//   //pick a random color from array
//   pickedColor = pickColor();
//   for(var i = 0; i<squares.length;i++){
//     squares[i].style.backgroundColor = colors[i];
//     squares[i].style.display = "block";
//  }
//
//    colorDisplay.textContent = pickedColor;
// });


//resetting the game when the user presses the new game or play again button

function gameLogic(){
reset();
for(var i = 0; i<squares.length;i++){


  //add click listeners to squares
  squares[i].addEventListener("click",function(){
    //testing if they work
    //alert("Hailooo");

    //grab color of picked squares
    var clickedColor = this.style.backgroundColor;
    console.log(pickedColor,clickedColor);
    //compare color to pickedColor for game logic
    if(clickedColor===pickedColor){
      //correct guess
      messageDisplay.textContent = "Correct";
      changeColors(pickedColor);
      h1.style.background = pickedColor;
      resetButton.textContent = "Play Again?";
    }
    else{
      //wrong guess, we are fading this box, the way to do this is to match it with the background color of
      //our body to give it a fading effect
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";

    }
  });
}
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

/* This function would generate random colors for the squares,
* it basically generates an array of random colors and returns it
* @param: The length of the array
*/
function generateRandomColors(length){
  //make an array
  var arr = [];
  //add random colors to the array
  for(var i = 0; i<length; i++){
    //generate random color and push to the array
    //since we are basically imitating an array like colors = ["rgb(255, 0, 0)",], for
    //organizing our code we created a separate function to push the individual color to
    //our array
    arr.push(randomColor());
  }
  //return the array
  return arr;
}
/* This function generates a random rgb color
* to test the function, just type randomColor() in the chrome console to see
* the result
*/
function randomColor(){
  //pick a random red from 0-255
  //recall that in order to get a number between 0 to 255, we multiply math.random with n+1, or 256
  var red = Math.floor(Math.random()*256);
  //pick a random green from 0-255
  var green = Math.floor(Math.random()*256);
  //pick a random blue from 0-255
  var blue = Math.floor(Math.random()*256);

  //now since we are pushing "rgb(r, g, b)" format, we need string stuff
  return "rgb("+ red + ", "+ green + ", "+blue +")";
}
