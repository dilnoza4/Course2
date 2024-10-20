function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();
    if (taskValue === "") return;

    const li = document.createElement('li');
    li.textContent = taskValue;
    li.classList.add('list-group-item');

    li.onclick = function() {
        this.classList.toggle('list-group-item-success');
    };

    document.getElementById('taskList').appendChild(li);
    taskInput.value = "";
}
