function goHome() {
    window.location.href = "Home _Page.html";  // Redirect to Home Page
}

function logout() {
    alert("You have been logged out.");
    window.location.href = "User_Login.html";  // Redirect to Login Page
}

document.getElementById("order-status-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Order status updated successfully!");
});
