function addTask() {
    const taskName = document.getElementById('taskName');
    const taskTableBody = document.getElementById('taskTableBody');

    if (taskName.value.trim() !== '') {
        const newTask = document.createElement('tr');
        newTask.innerHTML = `
            <td>${taskName.value}</td>
            <td><input type="checkbox" onchange="updateStatus(this)"> Completed</td>
        `;
        taskTableBody.appendChild(newTask);
        taskName.value = ''; // Clear the input field
    }
}

function updateStatus(checkbox) {
    const taskRow = checkbox.parentNode.parentNode;
    const taskName = taskRow.getElementsByTagName('td')[0].textContent;

    if (checkbox.checked) {
        taskRow.classList.add('completed');
    } else {
        taskRow.classList.remove('completed');
    }
}
