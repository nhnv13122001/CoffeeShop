<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    require_once("../connect.php");
    $method = $_SERVER['REQUEST_METHOD'];
    switch ($method) {
        case 'GET':
            $sql = "SELECT * FROM orders";
            $result = mysqli_query($conn, $sql);
            $order = mysqli_fetch_all($result, MYSQLI_ASSOC);
            echo json_encode($order);   
            break;
        case 'POST':
            $data = file_get_contents('php://input');
            $realdata = json_decode($data);
            $path = explode('/', $_SERVER['REQUEST_URI']);
            if (isset($path[5])) {
                $query = "UPDATE orders SET status = '$realdata->status' where id_order = '$realdata->id_order'";
                mysqli_query($conn, $query);
                $asd = ['status' => 1, 'message' => "Cập nhập thành công"];
            } else {
                $query1 = "Insert into orders(name_customer,phone_number,address,status,total) values ('$realdata->name_customer','$realdata->phone_number','$realdata->address','Chờ xác nhận','$realdata->total')";
                mysqli_query($conn, $query1);
                $asd = ['status' => 1, 'message' => "Thanh toán thành công"];
            }
            echo json_encode(['result' => $asd]);
          break;
        default:
            return;
}
