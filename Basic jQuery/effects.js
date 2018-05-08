// alert("Connected");

//the divs will fade out when we click the button
//the transition will take 1 second (1s = 1000ms) to complete/fade out
$("button").on("click",function(){
  $("div").fadeToggle(1000,function(){
    // $(this).remove();
  });
  // $("div").remove();
});
