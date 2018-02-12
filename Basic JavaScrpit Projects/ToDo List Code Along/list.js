
var todos = [];
//Checking to see if the file is properly connected
setTimeout(function(){console.log("connected");



var input = prompt("What whould you like to do");

while(input !== "quit"){
if(input === "list"){
	list();
}
else if(input === "new"){
	newtodo();
}

else if(input ==="delete"){
 deleteToDo();
}

var input = prompt("What whould you like to do");

}

console.log("User quitted");
},250)

function list(){

		console.log("**********");
		todos.forEach(function(todo,i){
			console.log(i+": "+todo);
		})
		console.log("**********");
}

function newtodo(){
	var newTodo = prompt("Enter new todo");
	todos.push(newTodo);
}

function deleteToDo(){
	var index = prompt("Enter the index to delete");
	todos.splice(index,1);
	console.log("Todo deleted");
}
