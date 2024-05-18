
// // Function to check if the user is logged in
function isLoggedIn() {
    const status = localStorage.getItem('user');
    return status;
}

// Check if an item is existed
function isExist(key) {
    const itemValue = localStorage.getItem(key);
    return itemValue !== null;
  }

// let user = {name: "User1234", password: "1234"}


// Function to handle logout
function logout() {
    // Clear the login status
    // localStorage.removeItem('user');
    // localStorage.removeItem('user-list');
    localStorage.clear();
}

// Function to get the global email
function get_global_email(){
    return JSON.parse(localStorage.getItem('user')).data.email;
}



// ------------------------OBSOLETE FUNCTIONS------------------------//

// // Function to handle sign up
// function signUp(name, email, password) {
//     // Check if the email already exists
//     if (!localStorage.getItem(email)) 
//     {
//         // Store the new user in local storage
//         const userData = { name, email, password };
//         localStorage.setItem(email, JSON.stringify(userData));
//         set_global_email(email);

//         return true; // Success
//     } 
//     else
//     {
//       return false; // Email already taken
//     }
// }
  
// // Function to handle login
// function login(email, password) {
//     const userDataString = localStorage.getItem(email);
//     if (userDataString) 
//     {
//         const userData = JSON.parse(userDataString);

//         if (userData.password === password) {
//             // Login successful, set the login status to true
//             localStorage.setItem('isLoggedIn', 'true');
//             set_global_email(email)
//             return true; // Login successful
//         }
//     }
//     return false; // Invalid credentials
// }




// Function to set the global email
// function set_global_email(email){
//     return localStorage.setItem(localStorage.getItem('email').data.email, email);

// }

// Handle form
// function ValidateEmail(email) 
// {
//     let email_regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     return email_regx.test(email);
// }

// function ValidatePassword(password){
//     const length = password.length;
//     return (2 <= length) && (length <= 30);
// }

// function ValidateName(name){
//     const length = name.length;
//     return (2 <= length) && (length <= 30);
// }

// //Sign in
// document.getElementsByClassName('sign-in-form')[0].addEventListener('submit', (event)=>{

//     event.preventDefault();
//     const email = document.getElementById('sign-in-email').value;
//     const password = document.getElementById('sign-in-password').value;

//     if(!ValidateEmail(email)){
//         alert("You have entered an invalid email address!");
//         return;
//     }
    
//     if (!ValidatePassword(password)){
//         alert("Password must be 2-30 characters!");
//         return;
//     }

//     const successful = login(email, password);
//     if(successful){
//         alert("Log in successfully");
//         window.location.href = '../index.php';
//         return;
//     }

//     alert('Wrong email or password!');

//     return;    
// })


// //Sign up
// document.getElementsByClassName('sign-up-form')[0].addEventListener('submit', (event)=>{

//     event.preventDefault();
//     const name = document.getElementById('sign-up-name').value;
//     const email = document.getElementById('sign-up-email').value;
//     const password = document.getElementById('sign-up-password').value;
//     const password_confirm = document.getElementById('sign-up-password-confirm').value;

//     if(!ValidateName(name)){
//         alert("Name must be 2-30 characters!");
//         return;
//     }

//     if(!ValidateEmail(email)){
//         alert("You have entered an invalid email address!");
//         return;
//     }
    
//     if (!ValidatePassword(password)){
//         alert("Password must be 2-30 characters!");
//         return;
//     }

//     if (password !== password_confirm){
//         alert("The confirmation password must be the same as the password above");
//         return
//     }

//     const successful = signUp(name, email, password);
//     if(successful){
//         alert("Sign up successfully, Login to the page!");
//         return;
//     }

//     alert('Email existed try another one!');

//     return;    
// })
// ------------------------OBSOLETE FUNCTIONS------------------------//


// Handle sign


// Handling header display information

document.addEventListener('DOMContentLoaded', ()=>{
    let user_name = document.getElementById('user');
    // let user_name_admin = document.getElementById('user-admin');
    let user_btn = document.getElementsByClassName('user-btn');
    let log = document.getElementById('log');
    // let log_admin = document.getElementById('log-admin');
    let logbtn = document.getElementsByClassName('logout-btn');

    if(!isLoggedIn()){
        user_btn[1].parentNode.style.display = 'none';
        
     
        let temp = logbtn[1].parentNode;
        temp.innerHTML = "<svg class=\"logout-btn\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#0000000\" width=\"20px\" height=\"25px\" viewBox=\"0 0 32 32\" version=\"1.1\"> <path d=\"M16.642 20.669c-0.391 0.39-0.391 1.023-0 1.414 0.195 0.195 0.451 0.293 0.707 0.293s0.512-0.098 0.707-0.293l5.907-6.063-5.907-6.063c-0.39-0.39-1.023-0.39-1.414 0s-0.391 1.024 0 1.414l3.617 3.617h-19.264c-0.552 0-1 0.448-1 1s0.448 1 1 1h19.326zM30.005 0h-18c-1.105 0-2.001 0.895-2.001 2v9h2.014v-7.78c0-0.668 0.542-1.21 1.21-1.21h15.522c0.669 0 1.21 0.542 1.21 1.21l0.032 25.572c0 0.668-0.541 1.21-1.21 1.21h-15.553c-0.668 0-1.21-0.542-1.21-1.21v-7.824l-2.014 0.003v9.030c0 1.105 0.896 2 2.001 2h18c1.105 0 2-0.895 2-2v-28c-0.001-1.105-0.896-2-2-2z\"/> </svg>";

        temp.style = "background-color: #95D240;";

        user_name.textContent = ''
        log.textContent = 'Log in'
        // user_name_admin = ''
        // log_admin = 'Log in'
        
        // log.href="./pages/sign.php"


    } else{
        user_btn[0].style.display = 'block';
        user_btn[1].parentNode.style.display = 'block';

        let temp = logbtn[1].parentNode;
        
        temp.innerHTML = "<svg class=\"logout-btn\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#0000000\" width=\"20px\" height=\"25px\" viewBox=\"0 0 24 26\" version=\"1.1\"> <path d=\"M15,24H0V2h15v8h-2V4H2v18h11v-6h2V24z M18.4,18.7L17,17.3l3.3-3.3H5v-2h15.3L17,8.7l1.4-1.4L24,13L18.4,18.7z\"/> </svg>";
        temp.style.backgroundColor = "red";

        const global_email = get_global_email();
        const userDataString = localStorage.getItem(global_email);
        const userData = JSON.parse(userDataString);
        user_btn[0].parentElement.style.display = 'block';
        user_btn[1].parentElement.style.display = 'block';
        user_name.textContent = "Xin chào, " +JSON.parse(localStorage.getItem('user')).data.name;
        log.textContent = 'Log out'
        // user_name_admin.textContent = "Xin chào, " +JSON.parse(localStorage.getItem('user')).data.name;
        // log_admin.textContent = 'Log out'
    }
});


const logInLink = document.getElementById('log');
const user_name = document.getElementById('user');
// const user_btn = document.getElementsByClassName('user-btn');
const log = document.getElementById('log');
const logbtnn = document.getElementsByClassName('logout-btn');


logInLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of navigating to the empty href
  
    if (isLoggedIn()){
        logout();
        user_name.textContent = ''
        log.textContent = 'Log in'
        
    }
    
    // Redirect to the new target page
    window.location.href = '/pages/sign.php';
  
});
logbtnn[1].parentElement.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of navigating to the empty href
  
    if (isLoggedIn()){
        logout();
        user_name.textContent = '';
        log.textContent = 'Log in';
        
    }
    
    // Redirect to the new target page
    window.location.href = '/pages/sign.php';
  
});



