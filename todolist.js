var todo = [];

var input = prompt("what do you want to do?  \n new - add new task \n list - view all items \n quit - to exit the app");

while (input != 'quit'){

    if(input === 'new') {
        var task = prompt("Enter a task");
        todo.push(task);
       }else if(input === 'list'){
        console.log(task);
       }
       var input = prompt("what do you want to do?  \n new - add new task \n list - view all items \n quit - to exit the app");
}
alert('quit the app');