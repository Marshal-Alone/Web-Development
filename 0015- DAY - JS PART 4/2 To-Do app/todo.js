let todo = ["eat", "sleep", "drink"];
let req = prompt("Enter your request");

while (true) {
    if (req == "quit") {
        console.log("QUITING APP ....");
        break;
    }

    if (req == "list") {
        console.log("------------");
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i} : ${todo[i]}`);
        }
        // for (task of todo) {
        //     console.log(task);
        // }
        console.log("------------");
    } else if (req == "add") {
        let task = prompt("Enter task to add");
        todo.push(task);
        console.log(task, "was added successfully");

    } else if (req == "delete") {
        // let del = prompt("Enter task to delete").toLowerCase();
        // let idx = todo.indexOf(del);
        // todo.splice(idx, 1);

        let idx = prompt("Enter task index to delete : ");

        if (isNaN(idx)) {
            console.log("not number");
            delTask = idx.toLowerCase();
            console.log(`DELTE TASK + ${delTask}`);
            let delIdx = todo.indexOf(delTask);
            console.log(`DELTE idx + ${delIdx}`);

            console.log(todo[delIdx], "was deleted successfully");
            todo.splice(delIdx, 1);      

        } else {
            console.log("its a number");
            console.log(todo[idx], "was deleted successfully");
            todo.splice(idx, 1);
        }





    } else {
        alert("INVALID INPUT , TRY AGAIN ");
    }

    req = prompt("Enter your request ");
}









// const todo_list = [];

// function add(taskk) {
//     todo_list.push(taskk);
// }

// function done(task) {
//     taskIdx = todo_list.indexOf(task);
//     todo_list.splice(taskIdx,1);
// }

// function print_todo() {
//     console.log(todo_list);
// }

// //  userInput = prompt("Enter task to add");

// add("wake up");
// add("eat");
// add("run");
// add("swim");
// add("sleep");