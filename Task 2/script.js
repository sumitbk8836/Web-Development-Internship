document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Add task function
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        
        const taskSpan = document.createElement('span');
        taskSpan.className = 'task-text';
        taskSpan.textContent = taskText;

        const taskActions = document.createElement('div');
        taskActions.className = 'task-actions';

        const completeBtn = document.createElement('button');
        completeBtn.className = 'complete-btn';
        completeBtn.textContent = 'Complete';
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';

        taskActions.appendChild(completeBtn);
        taskActions.appendChild(deleteBtn);

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskSpan);
        taskItem.appendChild(taskActions);

        taskList.appendChild(taskItem);

        // Clear input
        taskInput.value = '';

        // Add event listeners
        completeBtn.addEventListener('click', function() {
            taskItem.classList.toggle('completed');
            completeBtn.textContent = taskItem.classList.contains('completed') ? 'Undo' : 'Complete';
        });

        deleteBtn.addEventListener('click', function() {
            taskItem.remove();
        });

        // Allow task completion by clicking the checkbox
        checkbox.addEventListener('change', function() {
            taskItem.classList.toggle('completed', checkbox.checked);
            completeBtn.textContent = checkbox.checked ? 'Undo' : 'Complete';
        });
    }

    // Add task when button is clicked
    addTaskBtn.addEventListener('click', addTask);

    // Add task when Enter key is pressed
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});