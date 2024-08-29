document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    const createTaskItem = (taskText) => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = taskText;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-button');
        editButton.addEventListener('click', () => {
            const newTaskText = prompt('Edit task:', span.textContent);
            if (newTaskText !== null && newTaskText.trim() !== '') {
                span.textContent = newTaskText.trim();
            }
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(deleteButton);

        return li;
    };

    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Bulok! pagtarung ug type dha ra man kag pungkol!');
            return;
        }
        const taskItem = createTaskItem(taskText);
        taskList.appendChild(taskItem);
        taskInput.value = '';
    };

    addTaskButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
