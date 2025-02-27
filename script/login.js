// alert()

document.getElementById('login-btn').addEventListener('click',function(event){
     event.preventDefault();
     console.log('hello');
     const accountNumber= document.getElementById('input-num').value;
     const accountDigit= document.getElementById('input-digit').value;
     const pin = parseInt(accountDigit)
     if (accountNumber.length === 11 ){
        if(pin===1234){
            window.location.href="./main.html"
        }
        else{
            alert('Invalid Pin')
        }
     }
     else{
        alert('Invalid Account Number')
     }
     
})