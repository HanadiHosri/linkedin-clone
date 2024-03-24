<?php
include("../connection.php");

$request_method = $_SERVER["REQUEST_METHOD"];

$email = $_POST['email'];
$password = $_POST['password'];
$type = $_POST['type'];

$check_email = $mysqli->prepare('select email from users where email=?');
$check_email->bind_param('s', $email);
$check_email->execute();
$check_email->store_result();
$email_exists = $check_email->num_rows();

if ($email_exists == 0) {
    if (empty($email) || empty($password)) {
        $response['error'] = "email or password cannot be empty";
    } else {
        $hashed_password = password_hash($password, PASSWORD_BCRYPT);
        $query = $mysqli->prepare('insert into users(email, password, type) values(?,?,?);');
        $query->bind_param('sss', $email, $hashed_password, $type);
        $query->execute();
        $response['status'] = "success";
    }
} else {
    $response['status'] = "user already exists";
}

echo json_encode($response);