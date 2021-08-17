function getInputValue(inputId){
    const inputFeild = document.getElementById(inputId);
    const inputAmountText = inputFeild.value;
    const amountValue = parseFloat(inputAmountText);
     //clear input
     inputFeild.value ='';
    return amountValue;
}
function updateTotalFeild(totalFeildId,amount){
    // debugger;
    const totalElement = document.getElementById(totalFeildId);
    const totalText = totalElement.innerText;
    const previousTotal = parseInt(totalText);
    totalElement.innerText = previousTotal + amount ;
    
}
function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const balanceAmout = parseFloat(balanceText); 
    return balanceAmout;
}
function updateBalance(amount,isadd){

    const balanceTotal = document.getElementById('balance-total');
    const balanceAmout = getCurrentBalance();
   /*  const balanceText = balanceTotal.innerText;
    const balanceAmout = parseFloat(balanceText); */
   if(isadd==true){
    balanceTotal.innerText = balanceAmout + amount; 
   }
   else{
    balanceTotal.innerText = balanceAmout - amount; 
   }
}

//deposit handeler
document.getElementById('deposit-btn').addEventListener('click',function(){
     const amount = getInputValue('deposit-input');
    //deposit  update and set banlace with validation
     if(amount>0){
        updateTotalFeild('deposit-total',amount);
        updateBalance(amount,true);
     }else{
         alert('Please type valid amount')
     }
     
});

//withdraw handeler
document.getElementById('withdraw-btn').addEventListener('click',function(){
    const amount = getInputValue('withdraw-input');
    const balanceAmout = getCurrentBalance();
    // withdraw update and validation
    if(amount > 0 && amount < balanceAmout){
        updateTotalFeild('withdraw-total',amount);
        updateBalance(amount,false);
    }else if(amount>balanceAmout){
        alert('You cannt withdraw more than what you have in your account')
    }
    else{
        alert('Please type valid amount')
    }
});
