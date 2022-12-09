<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Methods: *');
require_once("../connect.php");
$email = $_POST['email'];
$password = $_POST['password'];

$query = "Select * from accounts where email = '$email'";
$res = mysqli_query($conn, $query);
$num = mysqli_num_rows($res);
if ($num == 1) {
     echo "Tài khoản đã tồn tại";
} else {
     $reg = "insert into accounts(type,email,password,name,phone,address,photo) values ('3','$email','$password',' ',' ',' ','/images/customer_profile.png')";
     mysqli_query($conn, $reg);
     echo "Success";
}