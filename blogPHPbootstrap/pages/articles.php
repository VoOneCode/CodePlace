
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
    <title><?php echo $config['title']; ?></title>
  </head>
  <?php require '../blocks/header.php'; ?>
  <body>
    <div class="container">
      <div class="row">
        <section class="col-sm-8">
          <h3>Все статьи</h3>
          <div class="d-flex flex-wrap justify-content-start">
            <?php
              $per_page = 4;
              $page = 1;

              if(isset($_GET['page']))
              {
                $page = (int)$_GET['page'];
              }

              $total_count_q = mysqli_query($connection,
                "SELECT COUNT(`id`) AS `total_count` FROM `articles`");
              $total_count = mysqli_fetch_assoc($total_count_q);
              $total_count = $total_count['total_count'];

              $total_pages = ceil($total_count / $per_page);
              if($page <= 1 || $page > $total_pages)
              {
                $page = 1;
              }

              $myoffset = ($per_page * $page) - $per_page;

              $articles = mysqli_query($connection,
                "SELECT * FROM `articles` ORDER BY `id` DESC LIMIT $myoffset,$per_page");

              $articles_exist = true;
              if(mysqli_num_rows($articles) <= 0)
              {
                echo 'Статей нет';
                $articles_exist = false;
              }

              while ($art = mysqli_fetch_assoc($articles))
                {
            ?>
                <article class="mb-5 mr-5 p-1">
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
                      <small>Категория: <a href="art_by_cat.php
                        ?categorie=<?php echo $art_cat['id']; ?>
                        .&name=<?php echo $art_cat['title']; ?>
                        ">
                        <?php echo $art_cat['title']; ?></a></small>
                    </div>
                    <div class="">
                      <?php echo mb_substr(strip_tags($art['text']), 0, 130, 'utf-8').'...' ?>
                    </div>
                  </div>
                </article>
                <?php
                  }
                ?>
            </div>
            <?php
              if(mysqli_num_rows($articles) > 0)
              {
                echo '<div class="paginator">';
                  if($page > 1)
                  {
                    echo '<a href="articles.php?page='.($page - 1).'">&laquo; Прошлая страница</a>';
                  }
                  if($page < $total_pages)
                  {
                    echo '<a href="articles.php?page='.($page + 1).'">Следующая страница &raquo;</a>';
                  }
                echo '</div>';
              }
            ?>
          </section>
          <section class="col-sm-4">
            <div class="container mt-5">
            <?php include '../blocks/sidebar.php'; ?>
            </div>
          </section>
        </div>
    </div>
  </body>
  <?php require '../blocks/footer.php'; ?>
</html>
