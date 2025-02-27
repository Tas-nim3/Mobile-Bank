document.getElementById('cashOut-btn').addEventListener('click',function(event){
    event.preventDefault();
    const amount = document.getElementById('cashOut-amount').value;
    const convertedAmount = parseFloat(amount);
    const accountDigit= document.getElementById('cashOut-digit').value;
     const pin = parseInt(accountDigit);
     const mainBalance = document.getElementById('mainBalance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);
     
if(amount && accountDigit){
     if(pin === 1234 ){
        const subtract = convertedMainBalance - convertedAmount ;
        document.getElementById('mainBalance').innerText=subtract;
     }
     else{
        console.log('Invalid Pin');
     }}
     else{
        alert('Enter required information.')
     }
})