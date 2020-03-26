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
      <div id="scroll2bottom" class="scroll">
        <a href="#" v-scroll-to="{el: '#scroll2top',
                            duration: 5500,
                            easing: 'easy-in',
                            offset: -200,
                            force: true,
                            cancelable: true,
                            x: false,
                            y: true}">НАВЕРХ</a>
      </div>
    </div>
    
    <app-footer v-blur="blurConfig"></app-footer>    
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
        filter: 'blur(1.2px)',
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
  overflow: hidden;
  box-sizing: border-box;
  //background: silver;
  //opacity: 0.95;
  //margin-left: 30%;
  //margin-right: 10%;
  min-height: 100px;
  .scroll>a {
    color: white;
    &:hover{
      color: goldenrod;
      text-decoration: underline;
      font-size: 17px;
      top: -2px;
      transition-duration: 0.3s;
    }
  }
}
.menu{
  margin-left: 30%;
  margin-right: 10%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 60%;
  margin-top: 1rem;
  a{
    color: white;
    text-decoration: none;
    transition: all 0.5s ease-in;
    &:hover{
      color: goldenrod;
      text-decoration: underline;
      font-size: 17px;
      top: -2px;
      transition-duration: all 0.3s;
    }
  }  
}
.promo{
  color: wheat;
  position: relative;
  top: 10rem;
  left: 1rem;
  h1{
    margin-bottom: 1rem;
    font-size: 3.5rem;
  }
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
  margin-top: 27%;
  padding: 1rem;
}


@media all and (max-width: 1580px){
  .content{
    color: blue;
    margin-top: 23%;
    transition: all 0.5s ease;
  }
  .promo{
  top: 7rem;
  transition: all 0.5s ease-out;
  h1{
    font-size: 3rem;
  transition: all 0.5s ease-out;
    }
  h3{
    font-size: 1rem;
    transition: all 0.5s ease-out;
  }  
  }
}

@media all and (max-width: 1080px){
  .content{
    color: red;
    margin-top: 20%;
    transition: all 0.5s ease;
  }
  .promo{
  top: 5rem;
  transition: all 0.5s ease-out;
  h1{
    font-size: 2rem;
  transition: all 0.5s ease-out;
    }
  h3{
    font-size: 1rem;
    transition: all 0.5s ease-out;
  }  
  }
}

@media all and (max-width: 860px){
  .content{
    color: green;
    margin-top: 3.5%;
    transition: all 0.01s ease-in;
  }
  .promo{
  top: 0.5rem;
  transition: all 0.5s ease-out;
  h1{
    font-size: 2rem;
  transition: all 0.5s ease-out;
    }
  h3{
    font-size: 1rem;
    transition: all 0.5s ease-out;
  }  
  }
  .menu{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  margin-top: 2rem auto;
  a{
    color: white;
    text-decoration: none;
    transition: all 0.5s ease-in;
    margin-bottom: 1rem;
    &:hover{
      color: goldenrod;
      text-decoration: underline;
      font-size: 17px;
      top: -2px;
      transition-duration: all 0.1s;
    }
  }  
}
}
@media all and (max-width: 700px){  
  .content{
    color: hotpink;
    margin-top: 25%;
    transition: all 1s ease-out;
  }
  .menu{
    width: 50%;
    margin: 0 auto;
    }
  .VoOneCode{
    left: 30%;
  }  
  .promo{
    left: 0;
    margin: 1rem auto;
    
    transition: all 0.5s ease-in;
    h1{
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      transition: all 0.5s ease-in;
      }
    h3{
      font-size: 0.8rem;
      transition: all 0.5s cubic-bezier(0.92,0,0.98,1);
    }  
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
