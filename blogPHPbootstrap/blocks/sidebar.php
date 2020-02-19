
<div class="sidebar_wrapper d-flex flex-column">
  <h3 class="mb-3"> Свежие комментарии</h3>
  <div class="d-flex flex-wrap justify-content-between">
    <?php
      $comments = mysqli_query($connection,
      'SELECT * FROM `comments` ORDER BY `id` DESC LIMIT 5');

      while ($comment = mysqli_fetch_assoc($comments))
        {
          ?>
          <article class="mb-3">
            <div class="image-parent">
              <img src="https://www.gravatar.com/avatar/<?php echo md5($comment['email']); ?>"
                style="width: 100px; height: 100px"
                alt="user_logo">
            </div>
            <div class="">
              <a href="../pages/article.php?id=<?php echo $comment['article_id'] ?>">
              <?php echo $comment['author']; ?></a>
              <div class="">написал:</div>
              <div class="">
                <?php echo mb_substr(strip_tags($comment['text']), 0, 50, 'utf-8').'...' ?>
              </div>
            </div>
          </article>
          <?php
          }
          ?>
  </div>
  <h3> Публикации по категориям</h3>
  <div class="d-flex flex-column align-items-start">
    <a class="mb-2" href="/pages/art_by_cat.php?categorie=1&name=Спорт">Спорт</a>
    <a class="mb-2" href="/pages/art_by_cat.php?categorie=2&name=RC entertainment">RC entertainment</a>
    <a class="mb-2" href="/pages/art_by_cat.php?categorie=3&name=Bicycle">Bicycle</a>
    <a class="mb-2" href="/pages/art_by_cat.php?categorie=4&name=Программирование">Программирование</a>
    <a class="mb-2" href="/pages/art_by_cat.php?categorie=5&name=Природа">Природа</a>
    <a class="mb-2" href="/pages/art_by_cat.php?categorie=6&name=Безопасность">Безопасность</a>
  </div>
</div>
