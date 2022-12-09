<?php
    include "connect.php";
    $name = "";
    $phone_number = "";
    $address = "";
    $date = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if(isset($_POST["name"])) { $name = $_POST['name']; }
        if(isset($_POST["phonenumber"])) { $phone_number = $_POST['phonenumber']; }
        if(isset($_POST["address"])) { $address = $_POST['address']; }

        //Code xử lý, insert dữ liệu vào table
        $sql = "INSERT INTO orders (name_customer, phone_number, address)
        VALUES ('$name', '$phonenumber', '$address')";

        if (mysqli_query($connect, $sql)) {
            echo "Thêm dữ liệu thành công";
        } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($connect);
        }
    }
    mysqli_close($connect);
?>