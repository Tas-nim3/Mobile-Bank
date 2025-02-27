document.getElementById('transfer-btn').addEventListener('click', function (event) {
    event.preventDefault();

   
    const accountNumber = document.getElementById('transfer-account-num').value;
    const transferAmount = document.getElementById('transfer-amount').value;
    const pinInput = document.getElementById('transfer-digit').value;

    
    const convertedAmount = parseFloat(transferAmount);
    const pin = parseInt(pinInput);

    
    const mainBalanceElement = document.getElementById('mainBalance');
    let mainBalance = parseFloat(mainBalanceElement.innerText);

    
    if (!accountNumber || !transferAmount || !pinInput) {
        alert('Please fill in all required fields.');
        return;
    }

    if (accountNumber.length !== 11) {
        alert('Enter a valid 11-digit account number.');
        return;
    }

    if (isNaN(pin) || pin !== 1234) {
        alert('Invalid PIN. Please try again.');
        return;
    }

    if (isNaN(convertedAmount) || convertedAmount <= 0) {
        alert('Enter a valid transfer amount.');
        return;
    }

    if (convertedAmount > mainBalance) {
        alert('Insufficient balance.');
        return;
    }

    
    mainBalance -= convertedAmount;
    mainBalanceElement.innerText = mainBalance.toFixed(2);

    alert('Money transfer is successful!');
});
