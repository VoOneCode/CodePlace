
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
    <title><?php echo $config['title']; ?></title>
  </head>
  <body>
    <div class="container">
      <?php
        require '../blocks/header.php';
        $article = mysqli_query($connection, 'SELECT * FROM `articles` WHERE `id` =' .(int) $_GET['id']);
        if( mysqli_num_rows($article) <= 0)
          {
      ?>
        <div class="container">
          <div class="row">
            <section class="col-sm-8">
              <div class="container mt-5">
                <h3>статья не найдена!</h3>
                <div class="">
                  Запрашиваемая страница нe существует
                </div>
              </div>
            </section>
            <section class="col-sm-4">
              <?php include '../blocks/sidebar.php'; ?>
            </section>
          </div>
        </div>
    <?php
  } else
  {
    $art = mysqli_fetch_assoc($article);
    mysqli_query($connection, "UPDATE `articles` SET `views` = `views` + 1 WHERE `id` =" .(int) $art['id']);
    ?>
      <div class="container">
        <div class="row">
          <section class="col-sm-8">
            <div class="">
              <h4><?php echo $art['views']; ?> просмотров</h3>
              <h3><?php echo $art['title']; ?></h3>
              <div class="">
                <img src="../imgs/<?php echo $art['image']; ?>" style="max-width: 100%;" alt="img">
                <div class="">
                  <?php echo $art['text']; ?>
                </div>
              </div>
            </div>
            <div class="mt-3">
              <a href="#comment-add-form">Добавить комментарий</a>
              <h3>Комментарии</h3>
            <div class="">
                <?php
                  $comments = mysqli_query($connection,
                  "SELECT * FROM `comments` WHERE `article_id`=" .(int)$art['id']." ORDER BY `id` DESC");

                  if(mysqli_num_rows($comments) <= 0)
                  {
                    echo 'Нет комментариев';
                  }

                  while ($comment = mysqli_fetch_assoc($comments))
                  {
                    ?>
                      <article class="">
                        <div class="image-parent">
                          <img src="https://www.gravatar.com/avatar/<?php echo md5($comment['email']); ?>"
                            style="width: 100px; height: 100px"
                            alt="user_logo">
                        </div>
                        <div class="">
                          <a href="/article.php?id=<?php echo $comment['article_id']; ?>">
                            <?php echo $comment['author']; ?></a>
                          <div class="">
                            <?php echo $comment['text']; ?>
                          </div>
                        </div>
                      </article>
                    <?php
                  }
                ?>
            </div>
            </div>
            <div id="comment-add-form" class="container">
              <h3>Добавить комментарий</h3>
              <div class="">
                <form class="form" method="POST" action="article.php?id=<?php echo $art['id']; ?>#comment-add-form">
                  <?php
                    if( isset($_POST['do_post']) )
                    {
                      $errors = array();

                      echo $_POST['name'];
                      if($_POST['name'] == '')
                      {
                        $errors[] = 'Введите имя!';
                      }
                      if($_POST['nickname'] == '')
                      {
                        $errors[] = 'Введите nickname!';
                      }
                      if($_POST['email'] == '')
                      {
                        $errors[] = 'Введите email!';
                      }
                      if($_POST['text'] == '')
                      {
                        $errors[] = 'Введите текст комента!';
                      }

                      if(empty($errors))
                      {
                          mysqli_query($connection,
                          "INSERT INTO `comments` (`author`, `nickname`, `email`, `text`, `pubdate`, `article_id`)
                          VALUES (
                            '".$_POST['name']."',
                            '".$_POST['nickname']."',
                            '".$_POST['email']."',
                            '".$_POST['text']."',
                            NOW(),
                            '".$art['id']."'
                          )");

                        echo '<span style="color: green;font-weight:bold;display:block">Комент добавлен</span>';
                      } else
                      {
                        echo '<span style="color: red;font-weight:bold;display:block">'.$errors['0'] .'</span>';
                      }
                    }
                   ?>
                  <div class="form-group">
                    <div class="row">
                      <div class="col-md-4">
                        <input type="text" name="name" class="form-control" placeholder="Имя" value="<?php echo $_POST['name']; ?>">
                      </div>
                      <div class="col-md-4">
                        <input type="text" name="nickname" class="form-control" placeholder="Никнейм" value="<?php echo $_POST['nickname']; ?>">
                      </div>
                      <div class="col-md-4">
                        <input type="email" name="email" class="form-control" placeholder="email(не будет показан)" value="<?php echo $_POST['email']; ?>">
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <textarea class="form-control" name="text" placeholder="текст комента"><?php echo $_POST['text']; ?></textarea>
                  </div>
                  <div class="form-group">
                    <input type="submit" name="do_post" value="Добавить комент" class="form-control">
                  </div>
                </form>
              </div>
            </div>
          </section>
          <section class="content_right col-md-4">
            <?php include '../blocks/sidebar.php'; ?>
          </section>
        </div>
      </div>
    <?php
  }
    require '../blocks/footer.php'
    ?>
    </div>
  </body>
</html>
