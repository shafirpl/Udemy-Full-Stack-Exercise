//Checking to see if the file is properly connected
setTimeout(function(){console.log("connected");

var todos = [];

var input = prompt("What whould you like to do");

while(input !== "quit"){
if(input === "list"){
	console.log(todos);
}
else if(input === "new"){
	var newTodo = prompt("Enter new todo");
	todos.push(newTodo);
}

var input = prompt("What whould you like to do");

}

console.log("User quitted");
},250)