document.getElementById('addMoney-btn').addEventListener('click',function(event){
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    const convertedAmount = parseFloat(amount);
    const accountDigit= document.getElementById('input-digit').value;
     const pin = parseInt(accountDigit);
     const mainBalance = document.getElementById('mainBalance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);
     
const container = document.getElementsByClassName('trans-container')
    const p = document.createElement("p");
    p.innerText =  `
     added ${amount} from {accountNumber}account 

    `
    






if(amount && accountDigit){
   if (accountNumber.length === 11 ){
     if(pin === 1234 ){
        const sum = convertedMainBalance + convertedAmount ;
        document.getElementById('mainBalance').innerText=sum;
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