<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Methods: *');
require_once("../connect.php");
$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
     case 'GET':
          $path = explode('/', $_SERVER['REQUEST_URI']);
          if (isset($path[5]) && is_numeric($path[5])) {
               if (isset($path[6])) {
                    $query = "DELETE FROM accounts WHERE id = " . $path[5];
                    $result = mysqli_query($conn, $query);
                    echo json_encode(['message' => "Đã xóa tài khoản"]);
               } else {
                    $query = "SELECT * FROM accounts" . " WHERE id = " . $path[5];
                    $result = mysqli_query($conn, $query);
                    $account = mysqli_fetch_all($result, MYSQLI_ASSOC);
                    echo json_encode($account);
               }
          } else {
               $query = "SELECT * FROM accounts";
               $result = mysqli_query($conn, $query);
               $account = mysqli_fetch_all($result, MYSQLI_ASSOC);
               echo json_encode($account);
          }
          break;
     case 'POST':
          $data = file_get_contents('php://input');
          $realdata = json_decode($data);
          $path = explode('/', $_SERVER['REQUEST_URI']);
          if (isset($path[5])) {
               $query = "UPDATE accounts SET email = '$realdata->email', name='$realdata->name', phone='$realdata->phone', address='$realdata->address' where id = '$realdata->id'";
               mysqli_query($conn, $query);
               $asd = ['status' => 1, 'message' => "Sửa tài khoản thành công"];
          } else {
               $query = "Select * from accounts where email = '$realdata->email'";
               $result = mysqli_query($conn, $query);
               $num = mysqli_num_rows($result);
               if ($num == 1) {
                    $asd = ['status' => 0, 'message' => "Tài khoản đã tồn tại"];
               } else {
                    $query1 = "Insert into accounts(type,email,password,name,phone,address,photo) values ('$realdata->type','$realdata->email','$realdata->password','$realdata->name',' ',' ','$realdata->photo')";
                    mysqli_query($conn, $query1);
                    $asd = ['status' => 1, 'message' => "Tạo tài khoản thành công"];
               }
          }
          echo json_encode(['result' => $asd]);
          break;
     default:
          return;
}