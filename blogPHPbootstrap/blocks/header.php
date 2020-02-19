<div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
  <h5 class="my-0 mr-md-auto font-weight-normal"><?php echo $config['title']; ?></h5>
  <nav class="mr-3">
    <a class="p-2 text-dark" href="/">Главная</a>
    <a class="p-2 text-dark" href="/pages/about_me.php">Обо мне</a>
    <a class="p-2 text-dark" href="<?php echo $config['vk_url']; ?>">Я ВКонтакте</a>
  </nav>
  <?php
    if($_COOKIE['user'] == 'Yes'):
      ?>
      <a class="btn btn-outline-primary" href="../pages/auth.php">Кабинет</a>
    <?php else: ?>
      <a class="btn btn-outline-primary" href="../pages/auth.php">Войти</a>
    <?php endif; ?>
</div>

<?php
  $categories = mysqli_query($connection, 'SELECT * FROM `articles_categories`');
?>
<div class="">
  <div class="mb-3 bg-white border-bottom shadow-sm">
      <ul class="nav justify-content-center">
        <?php
          while ($record = mysqli_fetch_assoc($categories))
          {
            ?>
            <li class="nav-item">
            <a class="nav-link" href="../pages/art_by_cat.php?
                categorie=<?php echo $record['id']; ?>
                .&name=<?php echo $record['title']; ?>">
              <?php echo $record['title']; ?></a></li>
              <?php
            }
            ?>
        </ul>
  </div>
</div>
