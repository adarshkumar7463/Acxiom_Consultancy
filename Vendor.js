// Function to view the vendor's items
function viewItems() {
    var content = document.getElementById('content');
    content.innerHTML = `
        <h3>Your Items</h3>
        <ul>
            <li>Item 1: $10</li>
            <li>Item 2: $20</li>
            <li>Item 3: $15</li>
        </ul>
    `;
    window.location.href = "Your_Item.html";
}

// Function to add a new item
function addItem() {
    var content = document.getElementById('content');
    content.innerHTML = `
        <h3>Add New Item</h3>
        <form id="addItemForm">
            <div class="input-group">
                <label for="itemName">Item Name</label>
                <input type="text" id="itemName" name="itemName" required>
            </div>
            <div class="input-group">
                <label for="itemPrice">Item Price</label>
                <input type="number" id="itemPrice" name="itemPrice" required>
            </div>
            <button type="submit" class="menu-btn">Add Item</button>
        </form>
    `;
    window.location.href = "Add_Item.html";

    document.getElementById('addItemForm').addEventListener('submit', function(event) {
        event.preventDefault();
        var itemName = document.getElementById('itemName').value;
        var itemPrice = document.getElementById('itemPrice').value;
        alert("Item added successfully: " + itemName + " - $" + itemPrice);
        viewItems(); // Optionally, you can update the item list after adding a new one
    });
}

// Function to view the transaction history
function viewTransactions() {
    var content = document.getElementById('content');
    content.innerHTML = `
        <h3>Transactions</h3>
        <ul>
            <li>Transaction 1: $100 on 01/01/2024</li>
            <li>Transaction 2: $150 on 02/01/2024</li>
            <li>Transaction 3: $200 on 03/01/2024</li>
        </ul>
    `;

    window.location.href = "Transaction.html";
}




// Function to handle logout
function logout() {
    alert("Logged out successfully!");
    // You can redirect the user to the login page or home page
}
