let totalRecipeCost = 0;

function addIngredient() {
    const ingredientName = document.getElementById('ingredientName');
    const ingredientCost = document.getElementById('ingredientCost');
    const ingredientTableBody = document.getElementById('ingredientTableBody');
    const totalCostElement = document.getElementById('totalCost');

    if (ingredientCost.value !== '' && !isNaN(ingredientCost.value)) {
        const costPerUnit = parseFloat(ingredientCost.value);

        totalRecipeCost += costPerUnit;

        const newRow = ingredientTableBody.insertRow();
        const cellName = newRow.insertCell(0);
        const cellCostPerUnit = newRow.insertCell(1);

        cellName.textContent = ingredientName.value || 'Unnamed Ingredient';
        cellCostPerUnit.textContent = `₹${costPerUnit.toFixed(2)}`;

        totalCostElement.textContent = `₹${totalRecipeCost.toFixed(2)}`;

        ingredientName.value = '';
        ingredientCost.value = '';
    }
}
