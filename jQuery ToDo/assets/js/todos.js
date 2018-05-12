// for testing purpoe
// alert("Connected");

//Check off specific list item when clicked on

$("ul").on("click","li",function(){
  $(this).toggleClass("completed");
});

//click on trash can item to delete stuff
$("ul").on("click","span",function(event){
  //first fading out and then removing the parent/li
  $(this).parent().fadeOut(800,function(){
    $(this).remove();
  });
  //stopping event bubbling
  event.stopPropagation();
});

//adding event listener to the input box so that
//when the user hits enter. it adds a new to do to the
//list.

//enter key code is 13
$("input[type='text']").keypress(function(event){
  //if the user hits enter key
  if(event.which === 13){
    //retriving the value from the input box
    // console.log($(this).val());
    //grabbing the value
    var todoText = $(this).val();
    //adding that to the existing todo list
    $("ul").append("<li> <span> <i class='fa fa-trash'></i> </span>"+todoText+"</li>");
    //clearing the input box by setting the input to empty string
    $(this).val("");
  }
});

//toggling the input box
$("#heading").click(function(){
  $("input[type='text']").fadeToggle();
});
