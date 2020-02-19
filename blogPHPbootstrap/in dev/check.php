<?php
  //print_r($_POST);
  $email = $_POST['email'];
  $message = $_POST['message'];

  $error = '';
  if(trim($email) == '')
    $error = 'Enter email';
  else if(trim($message) == '')
    $error = 'Enter text';
  else if(strlen($message) < 10)
    $error = 'text is too short';

  if($error != ''){
    echo $error;
    exit;
  }

  $subject = '=?utf-8??B?'.base64_encode('Test msg').'?=';
  $headers = 'From: $email\r\nReply-to: $email\r\nContent-type: text/html;charset=utf-8\r\n';

  mail('admin@some.com', $subject, $message, $headers);

  header('Location: /about.php')

?>
