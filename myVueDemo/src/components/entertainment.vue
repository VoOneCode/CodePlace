<template>
    <div class="gallery">
        
        <div class="gallery_section">
            <h2>Развлечения</h2>
            <h4>База отдыха «Приволье» может предложить своим гостям:</h4>
            <pre>
1) Прогулки по лесу, сбор 
   ягод и грибов, целебных трав.
2) Катание на лыжах.
3) Катание на снегоходах,квадроциклах.
4) Детская игровая площадка.
5) Волейбольная площадка.
6) Настольный теннис.
7) Минифутбол.
8) Русская баня на дровах.
9) Корпоративный отдых
10) Открытый бассейн.
11) Настольные игры.
12)Прокат велосипедов
                </pre>
            <div class="gallery_section_row">
                <div @click="viewPic" class="gallery_section_row-item">
                    <img src="../../imgs/entertainment1.jpg" alt="">
                </div>
                <div @click="viewPic" class="gallery_section_row-item">
                    <img src="../../imgs/entertainment2.jpg" alt="">
                </div>
                <div @click="viewPic" class="gallery_section_row-item">
                    <img src="../../imgs/entertainment3.jpg" alt="">
                </div>
                <div @click="viewPic" class="gallery_section_row-item">
                    <img src="../../imgs/entertainment4.jpg" alt="">
                </div>
                <div @click="viewPic" class="gallery_section_row-item">
                    <img src="../../imgs/entertainment5.jpg" alt="">
                </div>
                <div @click="viewPic" class="gallery_section_row-item">
                    <img src="../../imgs/entertainment6.jpg" alt="">
                </div>
                <div @click="viewPic" class="gallery_section_row-item">
                    <img src="../../imgs/entertainment7.jpg" alt="">
                </div>
                <div @click="viewPic" class="gallery_section_row-item">
                    <img src="../../imgs/entertainment8.jpg" alt="">
                </div>
                <div @click="viewPic" class="gallery_section_row-item">
                    <img src="../../imgs/entertainment9.jpg" alt="">
                </div>
                <div @click="viewPic" class="gallery_section_row-item">
                    <img src="../../imgs/entertainment10.jpg" alt="">
                </div>
                <div @click="viewPic" class="gallery_section_row-item">
                    <img src="../../imgs/entertainment11.jpg" alt="">
                </div>
            </div>      
        </div>      
         <modal
            v-show="isModalVisible"
            @close="closeModal"
        >            
            <img :src=picPath alt="view picture" slot="picture">           
        </modal>
    </div>    
</template>

<script>

    import modal from './preview.vue';
    

	export default {
        components: {
            modal,
            },
            data () {
            return {
                isModalVisible: false,
                picPath: '',
            };
            },
		methods: {
            showModal() {
                this.isModalVisible = true;
            },
            closeModal() {
                this.isModalVisible = false;
            },
            viewPic(e){
                //this.$router.push('preview');
                //console.log(e.target.src),                
                this.picPath = e.target.src,
                this.isModalVisible = true
            }
        }
    }
</script>

<style lang="scss">
    .gallery{
        width: 90%;
        max-width: 1000px;
        margin: 0 auto;
        padding: 10px;
        background: rgba(245, 222, 179, 0.75);
        color: white;
        padding-bottom: 15px;
        margin-bottom: 1rem;        
        &_section{  
            >h2,h4{
                color: black;
                font-size: 1.5rem;
                text-align: left;
                margin: 1rem auto;
            }
            >h4{
                color: black;
                text-align: left;
                margin: 1rem auto;
            }
            >pre{
                color: black;
                text-align: left;
            }          
            &_row{
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: start;
                
            &-item{
                width: 31.5%;
                min-height: 12rem;
                margin: 5px 5px;
            img{
                width: 100%;

            }
        }
        }
        }    
    }

    @media all and (max-width: 700px){
                    .gallery{                        
                        width: 95%;
                        &_section_row-item{
                            width: 95%;
                        }    
                        &_section{ 
                            >pre{
                                margin-left: -10px;
                            }
                        }
                    }
                }
</style>