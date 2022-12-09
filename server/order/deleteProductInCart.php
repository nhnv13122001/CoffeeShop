<?php
    $sql = "SELECT MAX(`id_order`) AS `ID` FROM `orders` WHERE `complete_pay` = 0;";
    $OID = mysqli_query($conn, $sql);
    $OID = mysqli_fetch_assoc($OID);
    $OID = $OID['ID'];
    $sql = "DELETE FROM `product_in_order` WHERE `PID` = '$PID' AND `id_order` = '$OID';";
    $res = mysqli_query($conn, $sql);

    $sql = "SELECT SUM(`total`) AS `Final_price` FROM `product_in_order` WHERE `id_order` = '$OID';";
    $Final_price = mysqli_query($conn, $sql);
    $Final_price = mysqli_fetch_assoc($Final_price);
    $Final_price = $Final_price['Final_price'];
    $sql = "UPDATE `orders` SET `total` = '$Final_price' WHERE `id_order` = '$OID';";
    $res = mysqli_query($conn, $sql);

    mysqli_close($conn);
?>