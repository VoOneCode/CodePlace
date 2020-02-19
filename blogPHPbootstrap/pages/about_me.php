
<?php
  require "../includes/config.php"
 ?>
<!DOCTYPE html>
<html lang="ru" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="content-type" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/style.css">
    <title><?php echo $config['title']; ?></title>
  </head>
  <body>
    <div class="container">
      <?php require '../blocks/header.php' ?>
      <div class="container mt-5">
        <h3 class="mb-5"><?php echo $config['title']; ?></h3>
        <div class="d-flex flex-wrap">
          <div class="card mb-4 shadow-sm">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">Be HAPPY in IT</h4>
            </div>
            <div class="card-body">
              <img src="../imgs/scorpion.png" alt="about_pic" class="img-thumbnail">
                <ul class="list-unstyled mt-3 mb-4">
                  <li>Высокий уровень самоорганизации</li>
                  <li>Стремление изучать новое</li>
                  <li>Способность к самостоятельному обучению</li>
                  <li>Когда работа - в радость!</li>
                </ul>
              <button type="button" class="btn btn-lg btn-block btn-outline-primary">
                Подробнее</button>
            </div>
          </div>
        </div>
      </div>
      <?php require '../blocks/footer.php' ?>
    </div>
  </body>
</html>
