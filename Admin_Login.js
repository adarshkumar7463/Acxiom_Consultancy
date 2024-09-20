document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var userId = document.getElementById('userId').value;
    var password = document.getElementById('password').value;

    // Perform login validation here
    if (userId === "admin" && password === "admin123") {
        alert("Login successful!");
        // Redirect to admin dashboard or other actions
    } else {
        alert("Invalid User ID or Password.");
    }
});

function cancelLogin() {
    document.getElementById('userId').value = '';
    document.getElementById('password').value = '';
}
