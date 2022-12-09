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
                    $query = "DELETE FROM drinks WHERE id = " . $path[5];
                    $result = mysqli_query($conn, $query);
                    echo json_encode(['message' => "Đã xóa nước uống"]);
               } else {
                    $query = "SELECT * FROM drinks" . " WHERE id = " . $path[5];
                    $result = mysqli_query($conn, $query);
                    $drink = mysqli_fetch_all($result, MYSQLI_ASSOC);
                    echo json_encode($drink);
               }
          } else {
               $query = "SELECT * FROM drinks";
               $result = mysqli_query($conn, $query);
               $drink = mysqli_fetch_all($result, MYSQLI_ASSOC);
               echo json_encode($drink);
          }
          break;
     case 'POST':
          $data = file_get_contents('php://input');
          $realdata = json_decode($data);
          $path = explode('/', $_SERVER['REQUEST_URI']);
          if (isset($path[5])) {
               $query = "UPDATE drinks SET name='$realdata->name', photo='$realdata->src', category='$realdata->category',price='$realdata->price' where id = '$realdata->id'";
               mysqli_query($conn, $query);
               $asd = ['status' => 1, 'message' => "Sửa nước uống thành công"];
          } else {
               $query = "Select * from drinks where name = '$realdata->name'";
               $result = mysqli_query($conn, $query);
               $num = mysqli_num_rows($result);
               if ($num == 1) {
                    $asd = ['status' => 0, 'message' => "Nước uống đã tồn tại"];
               } else {
                    $query1 = "Insert into drinks(category,name,price,photo) values ('$realdata->category','$realdata->name','$realdata->price','$realdata->src')";
                    mysqli_query($conn, $query1);
                    $asd = ['status' => 1, 'message' => "Thêm nước uống thành công"];
               }
          }
          echo json_encode(['result' => $asd]);
          break;
     default:
          return;
}