document.getElementById('login-btn').addEventListener('click',function(){

    //get user email
    const userFeild = document.getElementById('user-email');
    const userEmail =userFeild.value;
    //get user password
    const userPasswordFeild= document.getElementById('user-password');
    const userpassword = userPasswordFeild.value;
    
    //check email and password
if(userEmail=='abc@gmail.com' && userpassword == 'password'){
   window.location.href = 'banking.html';
}
else
{
    alert('Invalid user email or password!');
}
});