// document.getElementById('vendorSignupForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     alert("Vendor Signup submitted!");
//     // Implement form submission logic here
//     // Example: submit form data using Fetch API or similar method
// });

// function cancelSignup() {
//     window.history.back(); // Navigate to the previous page
// }


// Vendor Signup Form Validation
const signupForm = document.querySelector('.signup-form form');
if (signupForm) {
    signupForm.addEventListener('submit', function (e) {
        const name = document.getElementById('vendor-name').value.trim();
        const email = document.getElementById('vendor-email').value.trim();
        const password = document.getElementById('vendor-password').value.trim();
        const company = document.getElementById('vendor-company').value.trim();
        const phone = document.getElementById('vendor-phone').value.trim();

        if (name === '' || email === '' || password === '' || company === '' || phone === '') {
            e.preventDefault();
            alert('Please fill in all fields.');
        } else if (!validateEmail(email)) {
            e.preventDefault();
            alert('Please enter a valid email address.');
        } else if (password.length < 6) {
            e.preventDefault();
            alert('Password must be at least 6 characters long.');
        } else if (!validatePhone(phone)) {
            e.preventDefault();
            alert('Please enter a valid phone number.');
        }
    });
}

// Email Validation Function
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Phone Number Validation Function (Simple validation, modify as per your requirements)
function validatePhone(phone) {
    const phonePattern = /^[0-9]{10}$/; // Assumes 10-digit phone numbers
    return phonePattern.test(phone);
}




function SignUpAsVendor() {
    alert("New user submit...");
    window.location.href = "Vendor_Login.html";
        // Implement navigation logic for Vendor SignUp here
    }


