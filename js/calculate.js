document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeInput = getInput('income-input');
    const foodInput = getInput('food-input');
    const rentInput = getInput('rent-input');
    const ClothesInput = getInput('Clothes-input');
    const expenseTotal = foodInput + rentInput + ClothesInput;
    const currentBalance = incomeInput - expenseTotal;
    if (incomeInput <= 0 || foodInput <= 0 || rentInput <= 0 || ClothesInput <= 0 || expenseTotal > incomeInput || currentBalance > incomeInput) {
        alert('This Sum can not be solved. Please, put the valid amount');
    }
    else {
        const totalExpenses = setTextValueElementId('total-expenses-amount', expenseTotal);
        const balance = setTextValueElementId('balance-total', currentBalance);
    }

});

document.getElementById('saving-btn').addEventListener('click', function () {
    const savingInputNumber = getInput('saving-input');
    const savingInputPercent = savingInputNumber * 1 / 100;
    const incomeInput = getInput('income-input');
    const savingInputTotal = incomeInput * savingInputPercent;
    const foodInput = getInput('food-input');
    const rentInput = getInput('rent-input');
    const ClothesInput = getInput('Clothes-input');
    const expenseTotal = foodInput + rentInput + ClothesInput;

    const currentBalance = incomeInput - expenseTotal;
    const remainingBalance = parseInt(currentBalance) - parseInt(savingInputTotal);
    if (savingInputTotal < 0 || remainingBalance < 0) {
        alert('This Sum can not be solved. Please, put the valid amount');
    }
    else {
        const savingAmount = setTextValueElementId('saving-amount', savingInputTotal);
        setTextValueElementId('remaining-balance', remainingBalance);
    }
});