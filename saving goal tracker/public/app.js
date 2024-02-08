let totalSavings = 0;

function addGoal() {
    const goalName = document.getElementById('goalName');
    const goalAmount = document.getElementById('goalAmount');
    const goalTableBody = document.getElementById('goalTableBody');
    const totalSavingsElement = document.getElementById('totalSavings');

    if (goalAmount.value !== '' && !isNaN(goalAmount.value)) {
        const goalAmountValue = parseFloat(goalAmount.value);
        totalSavings += goalAmountValue;

        const newRow = goalTableBody.insertRow();
        const cellName = newRow.insertCell(0);
        const cellAmount = newRow.insertCell(1);
        // const cellAction = newRow.insertCell(2);

        cellName.textContent = goalName.value || 'Unnamed Goal';
        cellAmount.textContent = `₹${goalAmountValue.toFixed(2)}`;
        // cellAction.innerHTML = `<button onclick="removeGoal(this, ${goalAmountValue})">Remove</button>`;

        totalSavingsElement.textContent = `₹${totalSavings.toFixed(2)}`;
        goalName.value = ''; // Clear the goal name input
        goalAmount.value = ''; // Clear the goal amount input
    }
}

// function removeGoal(button, goalAmountValue) {
//     const rowToRemove = button.parentNode.parentNode;
//     const goalTableBody = document.getElementById('goalTableBody');
//     goalTableBody.removeChild(rowToRemove);

//     totalSavings -= goalAmountValue;
//     const totalSavingsElement = document.getElementById('totalSavings');
//     totalSavingsElement.textContent = `$${totalSavings.toFixed(2)}`;
// }
