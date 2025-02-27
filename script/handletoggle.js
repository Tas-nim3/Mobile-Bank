
function handleToggle(id , status){
    document.getElementById(id).style.display=status;
}

document.getElementById('transfer-box').addEventListener('click',function(){
    handleToggle("add-money","none");
    handleToggle("cash-out","none");
    handleToggle("transfer-history","block");

})