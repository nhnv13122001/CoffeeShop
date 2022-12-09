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
                    $query = "DELETE FROM categories WHERE id = " . $path[5];
                    $result = mysqli_query($conn, $query);
                    echo json_encode(['message' => "Đã xóa danh mục"]);
               } else {
                    $query = "SELECT * FROM categories" . " WHERE id = " . $path[5];
                    $result = mysqli_query($conn, $query);
                    $category = mysqli_fetch_all($result, MYSQLI_ASSOC);
                    echo json_encode($category);
               }
          } else {
               $query = "SELECT * FROM categories";
               $result = mysqli_query($conn, $query);
               $category = mysqli_fetch_all($result, MYSQLI_ASSOC);
               echo json_encode($category);
          }
          break;
     case 'POST':
          $data = file_get_contents('php://input');
          $realdata = json_decode($data);
          $path = explode('/', $_SERVER['REQUEST_URI']);
          if (isset($path[5])) {
               $query = "UPDATE categories SET name='$realdata->name', photo='$realdata->src' where id = '$realdata->id'";
               mysqli_query($conn, $query);
               $asd = ['status' => 1, 'message' => "Sửa danh mục thành công"];
          } else {
               $query = "Select * from categories where name = '$realdata->name'";
               $result = mysqli_query($conn, $query);
               $num = mysqli_num_rows($result);
               if ($num == 1) {
                    $asd = ['status' => 0, 'message' => "Danh mục đã tồn tại"];
               } else {
                    $query1 = "Insert into categories(name,photo) values ('$realdata->name','$realdata->src')";
                    mysqli_query($conn, $query1);
                    $asd = ['status' => 1, 'message' => "Tạo danh mục thành công"];
               }
          }
          echo json_encode(['result' => $asd]);
          break;
     default:
          return;
}