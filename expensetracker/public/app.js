let totalExpense = 0;

function addExpense() {
    const expenseDesc = document.getElementById('expenseDesc');
    const expenseInput = document.getElementById('expenseInput');
    const expenseTableBody = document.getElementById('expenseTableBody');
    const totalExpenseElement = document.getElementById('totalExpense');

    if (expenseInput.value !== '' && !isNaN(expenseInput.value)) {
        const expenseAmount = parseFloat(expenseInput.value);
        totalExpense += expenseAmount;

        const newRow = expenseTableBody.insertRow();
        const cellDesc = newRow.insertCell(0);
        const cellAmount = newRow.insertCell(1);

        cellDesc.textContent = expenseDesc.value || 'No description';
        cellAmount.textContent = `$${expenseAmount.toFixed(2)}`;

        totalExpenseElement.textContent = `$${totalExpense.toFixed(2)}`;
        expenseInput.value = ''; // Clear the description input
        expenseDesc.value = ''; // Clear the amount input
    }
}
