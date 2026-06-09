document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('tasks__form');
    const input = document.getElementById('task__input');
    const tasksList = document.getElementById('tasks__list');

    function createTask(title) {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';

        const titleDiv = document.createElement('div');
        titleDiv.className = 'task__title';
        titleDiv.textContent = title;

        const removeLink = document.createElement('a');
        removeLink.href = '#';
        removeLink.className = 'task__remove';
        removeLink.innerHTML = '&times;';

        removeLink.addEventListener('click', (event) => {
            event.preventDefault();
            taskDiv.remove();
        });

        taskDiv.appendChild(titleDiv);
        taskDiv.appendChild(removeLink);

        return taskDiv;
    }

    function addTask() {
        const title = input.value.trim();
        if (title === '') return;

        const newTask = createTask(title);
        tasksList.appendChild(newTask);

        input.value = '';
        input.focus();
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        addTask();
    });

    input.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            addTask();
        }
    });
});
