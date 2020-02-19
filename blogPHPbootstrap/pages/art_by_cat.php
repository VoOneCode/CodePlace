
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
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
    <title><?php echo $config['title']; ?></title>
  </head>
  <body>
    <div class="container">
      <?php require '../blocks/header.php' ?>
      <section class="row">
        <div class="col-sm-8">
          <div class="container mt-5">
            <h3 class="mb-5 mark"><abbr title="Code to be!"><?php echo $config['title']; ?></abbr></h3>
              <i class="fas fa-coffee fa-xs"> Take coffee and enjoy reading</i>
            <hr>
            <h3>Категория: <?php echo $_GET['name']; ?></small></h3>
            <div class="d-flex flex-wrap justify-content-between">
              <?php
                $articles = mysqli_query($connection,
                "SELECT * FROM `articles` WHERE `categorie_id` =" .(int) $_GET['categorie']." ORDER BY `id` DESC LIMIT 10");

                while ($art = mysqli_fetch_assoc($articles))
                  {
                    ?>
                      <article class="mb-3">
                        <div class="image-parent">
                          <img src="../imgs/<?php echo $art['image']; ?>" class="img-fluid" style="width: 150px">
                        </div>
                        <div class="">
                          <a href="article.php?id=<?php echo $art['id'] ?>">
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
                          </div>
                          <div class="">
                            <?php echo mb_substr(strip_tags($art['text']), 0, 50, 'utf-8').'...' ?>
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
            <?php include '../blocks/sidebar.php' ?>
          </div>
        </div>
      </section>
      <?php require '../blocks/footer.php' ?>
    </div>
  </body>
</html>
