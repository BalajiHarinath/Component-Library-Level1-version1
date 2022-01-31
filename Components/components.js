//Inputs

//input-email
const emailInput = document.querySelector(".input-email-text");
const emailMsg = document.querySelector(".input-email-msg");
const emailSubmit = document.querySelector(".email-submit");

emailSubmit.addEventListener("click",()=>{
    if(!emailInput.value.includes("@")){
        emailMsg.innerText = "Enter a valid Email ID(must contain @)!!!";
        emailInput.style.border = "1px solid red";
        emailMsg.style.color = "red";
    }
    else{
        emailMsg.innerText = "Email verified successfully";
        emailInput.style.border = "1px solid green";
        emailMsg.style.color = "green";
    }
    setTimeout(() => {
        emailMsg.innerText = "";
        emailInput.style.border = "1px solid black";
        emailInput.value = "";
    }, 7000);
})

//input-password
const pwdInput = document.querySelector(".input-pwd-text");
const pwdMsg = document.querySelector(".input-pwd-msg");

pwdInput.addEventListener("input",()=>{
    if(pwdInput.value.length<=8){
        pwdMsg.innerText = "Should contain a minimum of 8 characters";
    }
    else{
        pwdMsg.innerText = "";
    }
    setTimeout(() => {
        pwdMsg.innerText = "";
        emailInput.style.border = "1px solid black";
        pwdInput.value = "";
    }, 7000);
})