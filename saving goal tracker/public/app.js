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
        totalSavingsElement.textContent = `Total Savings Goal: ₹${totalSavings.toFixed(2)}`;

        goalName.value = ''; // Clear the goal name input
        goalAmount.value = ''; // Clear the goal amount input
    }
}

