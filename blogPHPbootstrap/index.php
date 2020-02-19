
<?php
  require "includes/config.php";
 ?>
<!DOCTYPE html>
<html lang="ru" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="content-type" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
    <title><?php echo $config['title']; ?></title>
  </head>
  <body>
    <div class="container">
      <?php require 'blocks/header.php' ?>
      <section class="row">
        <div class="col-sm-8">
          <div class="container mt-5">
            <h3 class="mb-5 mark"><abbr title="Code to be!"><?php echo $config['title']; ?></abbr></h3>
              <i class="fas fa-coffee fa-xs"> Take coffee and enjoy reading</i>
            <hr>
            <div class="mt-3">
              <a href="/pages/articles.php">Все записи</a>
              <h3>ТОП по просмотрам</h3>
            </div>
            <div class="d-flex flex-wrap justify-content-start">
              <?php
                $articles = mysqli_query($connection,
                'SELECT * FROM `articles` ORDER BY `views` DESC LIMIT 5');
              ?>

              <?php
                while ($art = mysqli_fetch_assoc($articles))
                {
                  ?>
                    <article class="mb-3 mr-5">
                      <div class="image-parent">
                        <img src="imgs/<?php echo $art['image']; ?>" class="img-fluid" style="width: 150px">
                      </div>
                      <div class="">
                        <a href="/pages/article.php?id=<?php echo $art['id'] ?>">
                          <?php echo $art['title']; ?></a>
                        <div class="">
                          <?php
                            $art_cat = false;
                            foreach($categories as $cat)
                            {
                              if($cat['id'] == $art['categorie_id'])
                              {
                                $art_cat = $cat;
                                break;
                              }
                            }
                           ?>
                          <small>Категория: <a href="/pages/art_by_cat.php
                            ?categorie=<?php echo $art_cat['id']; ?>
                            .&name=<?php echo $art_cat['title']; ?>
                            ">
                            <?php echo $art_cat['title']; ?></a></small>
                        </div>
                        <div class="">
                          <?php echo mb_substr(strip_tags($art['text']), 0, 20, 'utf-8').'...' ?>
                        </div>
                      </div>
                    </article>
                  <?php
                }
              ?>
            </div>
            <hr>
            <div class="mt-3">
              <h3>Новейшее в блоге</h3>
            </div>
            <div class="d-flex flex-wrap justify-content-start">
                <?php
                  $articles = mysqli_query($connection, 'SELECT * FROM `articles` ORDER BY `id` DESC LIMIT 10');

                  while ($art = mysqli_fetch_assoc($articles))
                  {
                    ?>
                      <article class="mb-3 mr-5">
                        <div class="image-parent">
                          <img src="imgs/<?php echo $art['image']; ?>" class="img-fluid" style="width: 150px">
                        </div>
                        <div class="">
                          <a href="/pages/article.php?id=<?php echo $art['id'] ?>">
                            <?php echo $art['title']; ?></a>
                          <div class="">
                            <?php
                              $art_cat = false;
                              foreach($categories as $cat)
                              {
                                if($cat['id'] == $art['categorie_id'])
                                {
                                  $art_cat = $cat;
                                  break;
                                }
                              }
                             ?>
                            <small>Категория: <a href="/pages/art_by_cat.php
                              ?categorie=<?php echo $art_cat['id']; ?>
                              .&name=<?php echo $art_cat['title']; ?>
                              ">
                              <?php echo $art_cat['title']; ?></a></small>
                          </div>
                          <div class="">
                            <?php echo mb_substr(strip_tags($art['text']), 0, 20, 'utf-8').'...' ?>
                          </div>
                        </div>
                      </article>
                    <?php
                  }
                ?>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="container mt-5">
            <?php include 'blocks/sidebar.php' ?>
          </div>
        </div>
      </section>
      <?php require 'blocks/footer.php' ?>
    </div>
  </body>
</html>
