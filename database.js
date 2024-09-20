const mysql = require('mysql');

const connection = mysql.createConnection({

    host: "127.0.0.1", 

    user: "root", 

    password: "adarsh_sql_7463", 

    database: "Acxiom"

})

connection.connect(err => { if (err) throw err;
    console.log("Connected to database"); });
    
    
    const express = require('express');
    
    const app = express();
    
    const connection = require('c:/Users/krada/Desktop/Acxiom/database'); 
    
    // Import your database connection
    
    
    
    app.get('/getData', (req, res) => {
    
        connection.query('SELECT * FROM vendor_login', (err, results) => {
    
            if (err) throw err;
    
            res.send(results); // Send data back to the client as JSON
    
        });
    
    });

    <script>

    fetch('/getData') // Fetch data from your API endpoint

    .then(response => response.json())

    .then(data => {

        // Display fetched data on the page 

        // (e.g., using JavaScript DOM manipulation)

    })

    .catch(error => console.error('Error fetching data:', error));

</script>