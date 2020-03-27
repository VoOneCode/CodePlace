<template id='home'>
    <div class="wrapper">
        <div class="main main_text">
            <h2>Добро пожаловать!</h2>
            <p>База отдыха «Приволье» — это лучшее место для активного и семейного отдыха. Отвлекитесь от ежедневных проблем и забот в самом живописном месте Оренбургской области!</p>
            <p>Мы находимся в Бузулукском бору, где вы сможете насладиться свежим воздухом и ароматом хвои. Гостям предлагаем комфортное размещение: 4 домика вместимостью до 5 человек или большой дом — до 8 человек. Все дома оборудованы кухнями и санузлами. Есть спутниковое телевидение, холодильник, микроволновая печь, барная стойка и все необходимое для проживания. После увлекательного дня расслабиться поможет русская баня на дровах. Из развлечений — незабываемые прогулки по красотам Бузулукского бора на снегоходах, либо квадроциклах.</p>
        </div>
        <div class="main main_benefits">
            <h2>Наши преимущества</h2>
            <div class="main_benefits_row">
                <div class="main_benefits_row-item">
                    <img src="../../imgs/benefit1.png" alt="">
                    <p>Комфортное размещение</p>
                </div>
                <div class="main_benefits_row-item">
                    <img src="../../imgs/benefit2.png" alt="">
                    <p>Чистый хвойный воздух</p>
                </div>
                <div class="main_benefits_row-item">
                    <img src="../../imgs/benefit3.png" alt="">
                    <p>Развлечения</p>
                </div>
                <div class="main_benefits_row-item">
                    <img src="../../imgs/benefit4.png" alt="">
                    <p>Доступные цены</p>
                </div>
            </div>   
        </div>
        <div id="main_services" class="main main_services"><h2>К вашим услугам</h2>
            <div class="main_services_row">
                <router-link
                    v-for='(item, index) in servList'
                    :key='index'
                    :to='item.url'
                    class='serv_item'
                    active-class='serv_item-active'>
                    <div class="main_services_row-item">
                        <img :src="item.pic" alt="pic">
                        <p> {{ item.text }} </p>
                    </div>
                </router-link>  
            </div>
        </div>   
    </div>  
</template>

<script>
	import {mapGetters} from 'vuex';

	export default {
		computed: {
    ...mapGetters('services', {
      servList: 'items'
    })
    }
    }
</script>

<style lang="scss">
    .serv_item{
        text-decoration: none;
        color: white;
        min-width: 10rem;
        min-height: 11rem;
        width: 24%;
    }
    .main{
        width: 90%;
        max-width: 1000px;
        margin: 0 auto;
        padding: 10px;
        //background: wheat);
		//opacity: 0.7;
        background: rgba(245, 222, 179, 0.55);
        color: white;
        padding-bottom: 15px;
        margin-bottom: 1rem;
        &_text{
            color: black;
        }
        &_benefits{  
            >h2{
                color: black;
                font-size: 1.5rem;
            }          
            &_row{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
            &-item{
            background: maroon;
            min-width: 10rem;
            min-height: 12rem;
            width: 20%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            margin: 5px 5px;
            p{
                font-size: 1rem;
                margin: 10px;
            }
            img{
                width: 90%;
                margin-bottom: 1rem;
                margin-left: 8px;

            }
        }
        }
        }
        &_services{
            >h2{
                color: black;
                font-size: 1.5rem;
            }
            &_row{
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-around;
                margin-bottom: 2rem;
                &-item{
                    background: maroon;  
                    min-height: 11rem;                  
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    margin: 5px 5px;
                    p{
                        font-size: 1rem;
                        margin: 10px;
                    }
                    img{
                        width: 100%;
                    }
                }
            }
        }
        
    }
    @media all and (max-width: 700px){
        .serv_item{
        text-decoration: underline;
        color: white;
        min-width: 10rem;
        min-height: 11rem;
        width: 95%;
        }
    .main{
        width: 90%;
        max-width: 700px;
        margin: 0 auto;
        padding: 10px;
        //background: wheat);
		//opacity: 0.7;
        background: rgba(245, 222, 179, 0.75);
        color: white;
        padding-bottom: 15px;
        margin-bottom: 1rem;
        &_text{
            color: black;
        }
        &_benefits{  
            >h2{
                color: black;
                font-size: 2rem;
            }          
            &_row{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
            &-item{
            background: maroon;
            min-height: 12rem;
            width: 95%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            padding-top: 1rem;
            p{
                font-size: 2rem;
                margin: 10px;
            }
            img{
                width: 60%;
                margin-bottom: 1rem;
                margin: 0 auto;

            }
        }
        }
        }
        &_services{
            >h2{
                color: black;
                font-size: 2rem;
            }
            &_row{
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-around;
                margin-bottom: 2rem;
                &-item{
                    background: maroon;  
                    min-height: 11rem;                  
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    margin-bottom: 2rem;
                    p{
                        font-size: 1.5rem;
                        margin: 10px;
                    }
                    img{
                        width: 100%;
                    }
                }
            }
        }
        
    }
    }
</style>