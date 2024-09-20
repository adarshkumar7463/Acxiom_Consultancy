document.getElementById('userLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var userId = document.getElementById('userId').value;
    var password = document.getElementById('password').value;

    // Perform login validation here
    if (userId && password) {
        alert("Login successful!\nUser ID: " + userId);
        // Add further actions here, e.g., sending data to the server
    } else {
        alert("Please fill out both fields.");
    }
});

function submitLogin(){
    alert("Navigating to User User_Portal...");
    window.location.href = "User_Portal.html";
}

function cancelLogin() {
    document.getElementById('userId').value = '';
    document.getElementById('password').value = '';
}
