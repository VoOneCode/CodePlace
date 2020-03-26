<template>
    <div class="gallery">
        
        <div class="gallery_section">
            <h2>Мы поможем вам провести корпоратив, красивую свадьбу, тихое семейное торжество или весёлый детский день рождения</h2>
            <div @click="viewPic" class="gallery_section_row">
                <div @click="viewPic" class="gallery_section_row-item">
                    <img src="../../imgs/celebration1.jpg" alt="">
                </div>
                <div @click="viewPic" class="gallery_section_row-item">
                    <img src="../../imgs/celebration2.jpg" alt="">
                </div>
                <div @click="viewPic" class="gallery_section_row-item">
                    <img src="../../imgs/celebration3.jpg" alt="">
                </div>
                <div @click="viewPic" class="gallery_section_row-item">
                    <img src="../../imgs/celebration4.jpg" alt="">
                </div>
                <div @click="viewPic" class="gallery_section_row-item">
                    <img src="../../imgs/celebration5.jpg" alt="">
                </div>
                <div @click="viewPic" class="gallery_section_row-item">
                    <img src="../../imgs/celebration6.jpg" alt="">
                </div>
                <div @click="viewPic" class="gallery_section_row-item">
                    <img src="../../imgs/celebration7.jpg" alt="">
                </div>
                <div @click="viewPic" class="gallery_section_row-item">
                    <img src="../../imgs/celebration8.jpg" alt="">
                </div>
                <div @click="viewPic" class="gallery_section_row-item">
                    <img src="../../imgs/celebration9.jpg" alt="">
                </div>
                <div @click="viewPic" class="gallery_section_row-item">
                    <img src="../../imgs/celebration10.jpg" alt="">
                </div>
                <div @click="viewPic" class="gallery_section_row-item">
                    <img src="../../imgs/celebration11.jpg" alt="">
                </div>
                <div @click="viewPic" class="gallery_section_row-item">
                    <img src="../../imgs/celebration12.jpg" alt="">
                </div>
                <div @click="viewPic" class="gallery_section_row-item">
                    <img src="../../imgs/celebration13.jpg" alt="">
                </div>
                <div @click="viewPic" class="gallery_section_row-item">
                    <img src="../../imgs/celebration14.jpg" alt="">
                </div>
                <div @click="viewPic" class="gallery_section_row-item">
                    <img src="../../imgs/celebration15.jpg" alt="">
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
            >h2{
                color: black;
                font-size: 1.5rem;
                text-align: left;
                margin: 1rem auto;
            }          
            &_row{
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-around;
                
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
                        width: 90%;
                        &_section_row-item{
                            width: 95%;
                    }
                    }
                }
</style>