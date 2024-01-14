<?php
$servername = "localhost"; // Change this to your servername
$username = "root"; // Change this to your username
$pas = ""; // Change this to your password
$dbname = "db_library"; // Change this to your database name

// Create connection
$conn = new mysqli($servername, $username, $pas, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// echo "Connected successfully";

?>