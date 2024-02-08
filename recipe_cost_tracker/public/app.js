let totalRecipeCost = 0;

function addIngredient() {
    const ingredientName = document.getElementById('ingredientName');
    const ingredientQuantity = document.getElementById('ingredientQuantity');
    const ingredientCost = document.getElementById('ingredientCost');
    const ingredientTableBody = document.getElementById('ingredientTableBody');
    const totalCostElement = document.getElementById('totalCost');

    if (ingredientQuantity.value !== '' && ingredientCost.value !== '' && !isNaN(ingredientQuantity.value) && !isNaN(ingredientCost.value)) {
        const quantity = parseFloat(ingredientQuantity.value);
        const costPerUnit = parseFloat(ingredientCost.value);
        const totalCost = quantity * costPerUnit;

        totalRecipeCost += totalCost;

        const newRow = ingredientTableBody.insertRow();
        const cellName = newRow.insertCell(0);
        const cellQuantity = newRow.insertCell(1);
        const cellCostPerUnit = newRow.insertCell(2);
        const cellTotalCost = newRow.insertCell(3);

        cellName.textContent = ingredientName.value || 'Unnamed Ingredient';
        cellQuantity.textContent = quantity;
        cellCostPerUnit.textContent = `$${costPerUnit.toFixed(2)}`;
        cellTotalCost.textContent = `$${totalCost.toFixed(2)}`;

        totalCostElement.textContent = `$${totalRecipeCost.toFixed(2)}`;

        ingredientName.value = '';
        ingredientQuantity.value = '';
        ingredientCost.value = '';
    }
}
