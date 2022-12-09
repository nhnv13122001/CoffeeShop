<?php
    include "connect.php";

    $sql = "SELECT MAX(`id_order`) AS `OID` FROM `orders` WHERE `complete_pay` = 0;";
    $OID = mysqli_query($conn, $sql);
    $OID = mysqli_fetch_assoc($OID);
    $OID = $OID["OID"];

    $sql = "SELECT * FROM `product_in_order` WHERE `product_id` = '$PID' AND `id_order` = '$OID';";
    $res = mysqli_query($conn, $sql);
    if (mysqli_num_rows($res) > 0) {
        $sql = "UPDATE `product_in_order` SET `quantity` = '$qty', `total` = '$total' WHERE `product_id` = '$PID' AND `id_order` = '$OID';";
            $res = mysqli_query($conn, $sql);
    } 
    else {
        $sql = "INSERT INTO `product_in_order`(`id_order`, `product_id`, `quantity`, `total`) VALUES('$OID','$PID','$qty','$total');";
        $res = mysqli_query($conn, $sql);
    }

    $sql = "SELECT SUM(`total`) AS `Final_price` FROM `product_in_order` WHERE `id_order` = '$OID';";
    $Final_price = mysqli_query($conn, $sql);
    $Final_price = mysqli_fetch_assoc($Final_price);
    $Final_price = $Final_price['Final_price'];
    $sql = "UPDATE `orders` SET `Total` = '$Final_price' WHERE `id_order` = '$OID';";
    $res = mysqli_query($conn, $sql);

    mysqli_close($conn);
?>