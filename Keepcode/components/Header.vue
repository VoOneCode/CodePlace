<template>
  <div 
    class="header d-flex align-items-center justify-content-around">
    <span class="header_title">Great place!</span>
    <span class="header_logo">
      <img 
        class=""
        src="png/The_Great.png" 
        alt="logo">
    </span>
    <span class="header_link"><a href="https://myvuedemo.000webhostapp.com/">На главную</a></span>
  </div>
</template>

<style lang="scss">
  .header{
    color: aqua;
    height: 4rem;
    background: $corporate_bg;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    &_title{
      color: $corporate_first;
    }
    &_logo{
      height: 3.5rem;
      margin: auto 0;
      transform: scale(1);
      transition: all 0.8s;
      &:hover{
        transform: scale(-1);
        transition: all 0.8s;
      }
      img{
        height: 100%;
        width: auto;
      }
    }
    &_link{
      a{
        color: $corporate_link;
        &:hover{
          color: greenyellow;
          transition: all 1s;
        }
      }
    }
  }
</style>
