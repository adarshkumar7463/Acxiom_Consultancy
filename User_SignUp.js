document.getElementById('vendorLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (name && email && password) {
        alert("Sign up successful!\nName: " + name + "\nEmail: " + email);
        // Perform further actions like form submission or server communication
    } else {
        alert("Please fill out all fields.");
    }
});

function cancelLogin() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
}

function goBack() {
    alert("Going back to the previous page.");
    // Logic to navigate back can be added here
}
