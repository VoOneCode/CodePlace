<template>
  <div id="app">    
    <!--img src="./assets/logo.png"-->
    <!--app-header-- class="AppHeaderApp"></!--app-header-->
    <div class="VoOneCode">
      <h2>VoOneCode</h2>
    </div>
    <div class="content">
      <app-header class="AppHeaderApp"></app-header>
      <transition name="slide" mode="out-in">
          <router-view></router-view>
      </transition>
    </div>
    <div v-blur="blurConfig">
      Чтобы увидеть этот текст, Вам необходимо зарегистрироваться!
    </div>
    
    <app-footer></app-footer>    
  </div>  
</template>
<script>




import {mapGetters} from 'vuex';
import AppFooter from './components/footer';
import AppHeader from './components/header';

export default {
  data(){
    return{
      isBlurred: true,
      blurConfig: {
        isBlurred: true,
        opacity: 0.8,
        filter: 'blur(1.3px)',
        transition: 'all 1.3s linear'
      }
    }
  },
  components:{
    AppFooter,
    AppHeader
  }
    }

</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  //font-size: 16px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  //overflow: hidden;
  box-sizing: border-box;
  //background: silver;
  //opacity: 0.95;
  //margin-left: 30%;
  //margin-right: 10%;
  min-height: 100px;
}
.VoOneCode{
  position: fixed;
  top: 25%;
  left: 45%;
  opacity: 0.2;
  color: aliceblue;
}
.content{
  background-image: url('../imgs/wallj.jpg');
  height: 100%;
  min-height: 800px;
  margin-top: 33%;
  padding: 1rem;
}


@media all and (max-width: 1080px){
  .content{
    color: red;
    margin-top: 33.5%;
    transition: all 0.5s ease;
  }
}

@media all and (max-width: 860px){
  .content{
    color: green;
    margin-top: 32.5%;
    transition: all 0.01s ease-in;
  }
}
@media all and (max-width: 700px){  
  .content{
    color: hotpink;
    margin-top: 26%;
    transition: all 0.5s ease-out;
  }
  .VoOneCode{
    left: 30%;
  }  
}

.slide-enter-active{
    animation: slideIn 0.5s;
  }
.slide-leave-active{
  animation: slideOut 0.5s;
}
@keyframes slideIn{
  from{transform: rotateY(90deg);}
  to{transform: rotateY(0deg);}
}

@keyframes slideOut{
  from{transform: rotateY(0deg);}
  to{transform: rotateY(90deg);}
}



</style>
