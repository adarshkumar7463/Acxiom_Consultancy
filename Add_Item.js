document.getElementById('addProductForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var productName = document.getElementById('productName').value;
    var productPrice = document.getElementById('productPrice').value;
    var productImage = document.getElementById('productImage').files[0];

    if (productName && productPrice && productImage) {
        alert("Product added successfully:\nName: " + productName + "\nPrice: $" + productPrice);
        // Perform further actions like storing the product information
    } else {
        alert("Please fill out all fields.");
    }
});

function updateProduct() {
    alert("Update product functionality is triggered!");
    window.location.href="Update.html";
    // Implement update functionality here
}

function deleteProduct() {
    alert("Delete product functionality is triggered!");
    // Implement delete functionality here
}

function viewProductStatus() {
    alert("Viewing product status...");
    window.location.href ="Product_Status.html";
    // Implement product status functionality here
}

function requestItem() {
    alert("Requesting an item...");
    // Implement request item functionality here
}

function viewProduct() {
    alert("Viewing products...");
    window.location.href = "Cart.html";
    // Implement view product functionality here
}

function logout() {
    alert("Logging out...");
    window.location.href = "Home_Page.html";
    // Implement logout functionality here, e.g., redirect to login page
}
