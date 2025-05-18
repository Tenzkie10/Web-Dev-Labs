//Add task function
function addTask() {
    // NewTaskInput gets the user input variable 
    var newTaskInput = document.getElementById("new-task");
    // todoList gets the class todo-list
    var todoList = document.getElementById("todo-list");

    // If condition if the input is not empty
    if (newTaskInput.value.trim() !== "") {
        // The new task will create a div element
        var newTask = document.createElement("div");
        // Will create a class name todo-item
        newTask.className = "todo-item";
        // It will create a list for inputs which adds everytime a task is inserted 
        newTask.textContent = todoList.childElementCount + 1 + ". " + newTaskInput.value + " ";

        // Creates a remove button element
        var removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = function() {
            removeTask(newTask);
        };

        // Add remove button
        newTask.appendChild(removeButton);

        // Appends to child and returns value
        todoList.appendChild(newTask);
        newTaskInput.value = "";
    }
}
//Remove task function
function removeTask(task) {
    if (confirm("Are you sure you want to remove this task?")) {
        // Remove a list of task
        task.parentNode.removeChild(task);
    }
}
