// *****************************************************Hamburger Menu***************************************************************************
let hamburger_Button = document.querySelector(".hamburger");
let bars = document.querySelector("#bars");
let cross = document.querySelector("#cross");
let submenu = document.querySelector(".submenu")

hamburger_Button.addEventListener("click" , () => {
    if(submenu.style.display === "none"){
        bars.style.display = "none"
        submenu.style.display = "block";
        cross.style.display = "block";
    }
    else{
        submenu.style.display = "none";
        cross.style.display = "none";
        bars.style.display = "block"
    }
})

//*************************************************************************************************************************************************

// *****************************************************Login/Signup*****************************************************************************


let login_signup_button = document.querySelector(".navbar");

let sign_up_form = document.querySelector(".sign-up-form");

let sign_up_form_close = document.querySelector("#Signup-cross");

let form_Submit_Button = document.querySelector("#form-submit-button");

let firstName = "";
let lastName = "";
let email = "";
let phoneNumber = "";
let logged_In = false;

login_signup_button.addEventListener("click" , (e) => {
    if(e.target.innerText === "Login/Signup"){
        document.querySelector("#firstName").value = "";
        document.querySelector("#lastName").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#phoneNumber").value = "";
        sign_up_form.style.display = "flex";
    }


    if(e.target.innerText === firstName){
        let account_button = login_signup_button.childNodes[5].childNodes[3].childNodes[3];
        if(account_button.style.display === "flex"){
            account_button.style.display = "none";
        }
        else{
            account_button.style.display = "flex";
        }
    }


    if(e.target.innerText === firstName + " "){
        let account_button_small = login_signup_button.childNodes[7].childNodes[5].childNodes[7].childNodes[3].childNodes[3];
        
        if(account_button_small.style.display === "flex"){
            account_button_small.style.display = "none";
        }
        else{
            account_button_small.style.display = "flex";
        }
    }


    if(e.target.innerText === "Logout" || e.target.innerText === "Logout " ){
        logged_In = false;
        let login_button_main =  login_signup_button.childNodes[5].childNodes[1];
        login_button_main.style.display = "block";

        let account_button_main = login_signup_button.childNodes[5].childNodes[3];
        account_button_main.style.display = "none";

        let login_button_smalls = login_signup_button.childNodes[7].childNodes[5].childNodes[7].childNodes[1];
        login_button_smalls.style.display = "block";
        // console.log(login_button_smalls.style.display);

        let account_button_smalls = login_signup_button.childNodes[7].childNodes[5].childNodes[7].childNodes[3].childNodes[1];
        // hamburger-menu-logout-button
        login_signup_button.childNodes[7].childNodes[5].childNodes[7].childNodes[3].childNodes[3].style.display = "none";
        account_button_smalls.style.display = "none";
        

        firstName = "";
        lastName = "";
        email = "";
        phoneNumber = "";
    }

   
});

sign_up_form_close.addEventListener("click" , () => {
     sign_up_form.style.display = "none";
});



form_Submit_Button.addEventListener("click" , () => {
    logged_In = true;

    firstName = document.querySelector("#firstName").value;
    lastName = document.querySelector("#lastName").value;
    email = document.querySelector("#email").value;
    phoneNumber = document.querySelector("#phoneNumber").value;
    
    if(firstName !== "" &&  lastName !== "" && email !== "" && phoneNumber !== "" ){
        sign_up_form.style.display = "none";
    }

    let login_button = login_signup_button.childNodes[5].childNodes[1]; // main-login-button
    login_button.style.display = "none";
    


    let account_button = login_signup_button.childNodes[5].childNodes[3]; // main-userAccount-button
    login_signup_button.childNodes[5].childNodes[3].childNodes[3].style.display = "none"; // main-logout button
    account_button.childNodes[1].childNodes[3].innerText = firstName;
    account_button.style.display = "flex";


    let login_button_small = login_signup_button.childNodes[7].childNodes[5].childNodes[7].childNodes[1]; // hamburger-menu-login-button
    login_button_small.style.display = "none";


    // hamburger-menu-userAccount-button
    let account_button_small = login_signup_button.childNodes[7].childNodes[5].childNodes[7].childNodes[3].childNodes[1]; 
    account_button_small.style.display = "flex";
    account_button_small.childNodes[3].innerText = firstName + " ";
    // console.log(login_signup_button.childNodes[7].childNodes[5].childNodes[7].childNodes[3].childNodes[1]);
    // console.log(account_button_small); 
});

// **********************************************************************************************************************************************


// *************************************************************Donation section*****************************************************************

let donation_boxes = document.querySelector(".donation-boxes");
let donate_page = document.querySelector(".donate-page");
let donate_page_close = document.querySelector("#donate-page-cross")
let donate_page_heading = document.querySelector(".donate-heading")
let amount_input = document.querySelector("#amount");
let amount_to_pay = 0;

donation_boxes.addEventListener("click" , (e) => {
    if(e.target.innerText === "Donate" && logged_In === true){
        donate_page.style.display = "flex"; 
        donate_page_heading.innerText =  e.target.parentNode.childNodes[3].innerText;     
    }
    else{
        alert("Login First");
    }
});


let close_and_clear = () => {
    donate_page.style.display = "none";
    amount_input.value = "";
    donate_page.childNodes[1].childNodes[5].childNodes[3].style.display = "none";
    donate_page.childNodes[1].childNodes[7].childNodes[1].innerText = "₹ 0.00";
}
donate_page_close.addEventListener("click" , close_and_clear);

amount_input.addEventListener("keyup" , (e) => {
    let greet = donate_page.childNodes[1].childNodes[5].childNodes[3];
    let donation_amount_box = donate_page.childNodes[1].childNodes[7].childNodes[1];
    amount_to_pay = Number(e.target.value)*100;
    if(e.target.value === ""){
        greet.style.display = "none";
        donation_amount_box.innerText = "₹ 0.00";
    }
    else{
        donation_amount_box.innerText = "₹" + e.target.value + ".00";
        greet.style.display = "flex";
    }
 });

 

// ********************************************************************RazorPay******************************************************************
let rzpButton = document.querySelector(".pay-now-button");


var options = {
    key: 'rzp_test_GZifSg0ezBTSyb', 
    amount: 100, 
    currency: 'INR',
    name: "Ayush",
    description: 'Test Payment',
    image: 'https://i.vimeocdn.com/portrait/45437250_640x640?subrect=19%2C19%2C490%2C490&r=cover',
    handler: function(response) {
        alert('Payment successful: ' + response.razorpay_payment_id);
    },
    prefill: { 
        "name": "", 
        "email": "",
        "contact": "" 
    }
}



rzpButton.addEventListener("click" , function(e) {
    close_and_clear();
    options.amount = amount_to_pay;
    options.name = firstName + " " + lastName;
    options.prefill.name = firstName + " " + lastName;
    options.prefill.email = email;
    options.prefill.contact = phoneNumber;
    var rzp = new Razorpay(options);
    rzp.open();
    e.preventDefault();
});









 

    
            








