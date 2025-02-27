document.getElementById('cashOut-btn').addEventListener('click',function(event){
    event.preventDefault();
    const amount = document.getElementById('cashOut-amount').value;
    const convertedAmount = parseFloat(amount);
    const accountDigit= document.getElementById('cashOut-digit').value;
     const pin = parseInt(accountDigit);
     const mainBalance = document.getElementById('mainBalance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);
     
    const container = document.getElementsByClassName('trans-container')
    const p = document.createElement("p");
    p.innerText =  `
     cashOut ${amount} from {accountNumber}account 

    `




if(amount && accountDigit){
   if (accountNumber.length === 11 ){
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
   }
   else{
      alert('Invalid')
   }
})