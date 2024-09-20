// Vendor Login Form Validation
const loginForm = document.querySelector('.login-form form');
if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        const email = document.getElementById('vendor-email').value.trim();
        const password = document.getElementById('vendor-password').value.trim();

        if (email === '' || password === '') {
            e.preventDefault();
            alert('Please fill in all fields.');
        } else if (!validateEmail(email)) {
            e.preventDefault();
            alert('Please enter a valid email address.');
        }
    });
}

function submitLogin() {
    alert("Navigating to vendor...");
    window.location.href = "Vendor.html";
         // Implement navigation logic for Vendor SignUp here
    }













// document.getElementById('vendorLoginForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     var userId = document.getElementById('userId').value;
//     var password = document.getElementById('password').value;

//     // Perform login validation here
//     if (userId === "vendor" && password === "vendor123") {
//         alert("Login successful!");
//         // Redirect to vendor dashboard or other actions
//     } else {
//         alert("Invalid User ID or Password.");
//     }
// });

// function submitLogin() {
//     alert("Navigating to User SignUp...");
//     window.location.href = "Vendor.html";
//     // Implement navigation logic for Vendor SignUp here
// }


// function cancelLogin() {
//     document.getElementById('userId').value = '';
//     document.getElementById('password').value = '';
// }

// function goBack() {
//     // Implement back action (e.g., go to the previous page)
//     window.history.back();
// }
