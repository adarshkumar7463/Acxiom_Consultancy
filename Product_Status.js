function updateProduct() {
    const status = document.getElementById("status").value;
    alert("Product status updated to: " + status);
  }
  
  function deleteProduct() {
    const confirmDelete = confirm("Are you sure you want to delete this product?");
    if (confirmDelete) {
      alert("Product deleted!");
      // Add further logic to delete the product
    }
  }
  