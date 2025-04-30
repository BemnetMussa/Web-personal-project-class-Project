<?php
// 1. Connect to the database
$host = 'localhost/127.0.0.1';     // usually localhost
$dbname = 'portfolio_contact';
$username = 'admin';
$password = '';

$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// 2. Get data from form
$name = $_POST['name'];
$email = $_POST['email'];

// 3. Insert into database
$sql = "INSERT INTO users (name, email) VALUES ('$name', '$email')";

if ($conn->query($sql) === TRUE) {
    echo "Data saved successfully!";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>
