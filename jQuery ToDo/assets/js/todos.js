// for testing purpoe
// alert("Connected");

//Check off specific list item when clicked on

$("li").click(function(){
  $(this).css("color","gray");
  $(this).css("text-decoration","line-through");
});
