<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Methods: *');
require_once("../connect.php");
$email = $_POST['email'];
$password = $_POST['password'];

// $email = 'admin@gmail.com';
// $password = 'admin1';

$query = "Select * from accounts where email = '$email' and password = '$password'";
$result = mysqli_query($conn, $query);
$num = mysqli_num_rows($result);
$row = mysqli_fetch_all($result, MYSQLI_ASSOC);
if ($num === 1) {
     echo json_encode($row);
} else {
     echo "Failed";
}