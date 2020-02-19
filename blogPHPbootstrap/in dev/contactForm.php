<?php
  require "../includes/config.php";
 ?>
<!DOCTYPE html>
<html lang="ru" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="content-type" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/style.css">
    <title>Send me Email</title>
  </head>
  <body>
    <div class="container">
      <?php require '../blocks/header.php' ?>
      <div class="container mt-5">
        <h3>Contact Form</h3>
        <form action="../check.php" method="post" class="form">
          <input type="email" name="email" placeholder="Enter Email" class="form-control"><br>
          <textarea name="message" class="form-control" placeholder='Enter Your message'></textarea><br>
          <button type="submit" name="send" class="btn btn-success">Send!</button>
        </form>
      </div>
      <?php require '../blocks/footer.php' ?>
    </div>
  </body>
</html>
