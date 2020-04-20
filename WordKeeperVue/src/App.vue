<template>
  <div class="mainWrapper">
    <app-header></app-header>
    <transition name="slide" mode="out-in">
          <router-view></router-view>
    </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import AppHeader from './components/header.vue';
  import AppBody from './components/body.vue';
  import AppFooter from './components/footer.vue';

export default {
  components: {
    AppHeader,
    AppBody,
    AppFooter
    }
  }
</script>

<style>
  .slide-enter-active{
      animation: slideIn 0.4s;
    }
  .slide-leave-active{
    animation: slideOut 0.4s;
  }
  @keyframes slideIn{
    from{transform: rotateX(90deg);}
    to{transform: rotateX(0deg);}
  }

  @keyframes slideOut{
    from{transform: rotateY(0deg);}
    to{transform: rotateY(90deg);}
  }
</style>