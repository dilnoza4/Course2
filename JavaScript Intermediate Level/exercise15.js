class ToDoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push({ task, completed: false });
    }

    completeTask(index) {
        if (this.tasks[index]) {
            this.tasks[index].completed = true;
        }
    }

    showTasks() {
        this.tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task.task} [${task.completed ? "Completed" : "Pending"}]`);
        });
    }
}

const myToDoList = new ToDoList();
myToDoList.addTask("Learn JavaScript");
myToDoList.addTask("Build a To-Do List");
myToDoList.completeTask(0);
myToDoList.showTasks();
