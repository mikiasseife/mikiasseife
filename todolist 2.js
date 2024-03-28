var todo = [];

var input = prompt("what do you want to do?  \n new - add new task \n list - view all items \n delete - to delete item \n quit - to exit the app");

while (input != 'quit'){

    if(input === 'new') {
        var task = prompt("Enter a task");
        todo.push(task);
       }else if(input === 'list'){
        console.log("______________");

         viewtodo();

        console.log("______________");
       }else if(input ==='delete'){
        deletetask();
       }
       var input = prompt("what do you want to do?  \n new - add new task \n list - view all items \n delete - to delete item \n quit - to exit the app");
}
alert('You Quitted the app!!!');

function viewtodo() {
    todo.forEach(function(task, index){
        console.log(index + ': ' + task);
    })
} function deletetask() {
    var index = prompt('Enter an Index');

    todo.splice(index , 1);

    console.log('successfully Removed!');
}

