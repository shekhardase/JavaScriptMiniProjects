const calculation = (principal, interestRate, tenure) => {
    const amount = principal + (principal * interestRate * tenure) / 100;
    return amount;
};

document.getElementById('calculateBtn').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('principal').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const tenure = parseFloat(document.getElementById('tenure').value);

    const amount = calculation(principal, interestRate, tenure);
    document.getElementById('result').innerHTML = `Maturity Amount: ${amount.toFixed(2)}`;
});
