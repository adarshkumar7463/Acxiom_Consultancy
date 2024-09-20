function updateStatus() {
    const status = document.getElementById("status").value;
    switch (status) {
    case "received":
        alert("The product has been marked as 'Received'.");
        break;
    case "ready":
        alert("The product is 'Ready for Shipment'.");
        break;
    case "out-for-delivery":
        alert("The product is 'Out for Delivery'.");
        break;
    default:
        alert("Invalid status.");
    }
}


