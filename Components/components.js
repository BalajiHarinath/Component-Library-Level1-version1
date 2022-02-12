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



//Modal
const showModal = document.querySelector(".show-modal");
const modalDemoBtn = document.querySelector("#modal-demo-btn");
const modalDemoBtnClose = document.querySelector(".modal-demo-btn-close");

modalDemoBtn.addEventListener("click", ()=>{
    showModal.style.display = "block";
})

modalDemoBtnClose.addEventListener("click", ()=>{
    showModal.style.display = "none";
})


//Snackbar
const showSuccessToast = document.querySelector(".show-success-toast");
const showWarningToast = document.querySelector(".show-warning-toast");
const showAlertToast = document.querySelector(".show-alert-toast");
const closeSuccessToast = document.querySelector(".close-success-toast");
const closeWarningToast = document.querySelector(".close-warning-toast");
const closeAlertToast = document.querySelector(".close-alert-toast");
const toastSuccessBtn = document.querySelector("#toast-success-btn");
const toastWarningBtn = document.querySelector("#toast-warning-btn");
const toastAlertBtn = document.querySelector("#toast-alert-btn");

toastSuccessBtn.addEventListener("click", ()=>{
    showSuccessToast.style.display = "block";
    setTimeout(() => {
        showSuccessToast.style.display = "none";
    }, 5000);
})

toastWarningBtn.addEventListener("click", ()=>{
    showWarningToast.style.display = "block";
    setTimeout(() => {
        showWarningToast.style.display = "none";
    }, 5000);
})

toastAlertBtn.addEventListener("click", ()=>{
    showAlertToast.style.display = "block";
    setTimeout(() => {
        showAlertToast.style.display = "none";
    }, 5000);
})

closeSuccessToast.addEventListener("click", ()=>{
    showSuccessToast.style.display = "none";
})

closeWarningToast.addEventListener("click", ()=>{
    showWarningToast.style.display = "none";
})

closeAlertToast.addEventListener("click", ()=>{
    showAlertToast.style.display = "none";
})
