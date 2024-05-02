<?php
// Establish database connection
$servername = "localhost:3306";
$username = "root";
$password = "Abhisek@1Abhi";
$dbname = "abhidb";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch holiday package data from POST request
$holidayName = $_POST['holidayName'];
$duration = $_POST['duration'];
$destination = $_POST['destination'];
$location = $_POST['location'];
$amenities = $_POST['amenities'];

// Insert holiday package data into the database
$sql = "INSERT INTO holiday_packages (holiday_name, duration, destination, location, amenities) 
        VALUES ('$holidayName', '$duration', '$destination', '$location', '$amenities')";

if ($conn->query($sql) === TRUE) {
    echo "Holiday package added successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
