<template>
    <div class="gallery">
        
        <div class="gallery_section">
            <h2>Открытый бассейн. Ароматы леса под открытым небом круглый год!</h2>
            <div class="gallery_section_row">
                <div class="gallery_section_row-item">
                    <img @click="viewPic" src="../../imgs/swimming1.jpg" alt="">
                </div>
                <div @click="viewPic" class="gallery_section_row-item">
                    <img src="../../imgs/swimming2.jpg" alt="">
                </div>
                <div @click="viewPic" class="gallery_section_row-item">
                    <img src="../../imgs/swimming3.jpg" alt="">
                </div>
                <div @click="viewPic" class="gallery_section_row-item">
                    <img src="../../imgs/swimming4.jpg" alt="">
                </div>
                <div @click="viewPic" class="gallery_section_row-item">
                    <img src="../../imgs/swimming5.jpg" alt="">
                </div>
                <div @click="viewPic" class="gallery_section_row-item">
                    <img src="../../imgs/swimming6.jpg" alt="">
                </div>
                <div @click="viewPic" class="gallery_section_row-item">
                    <img src="../../imgs/swimming7.jpg" alt="">
                </div>
                <div @click="viewPic" class="gallery_section_row-item">
                    <img src="../../imgs/swimming8.jpg" alt="">
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
        background: rgba(245, 222, 179, 0.55);
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
                justify-content: start;            
            &-item{
                width: 31.5%;
                max-height: 400px;
                overflow: hidden;
                margin: 5px 5px;

            img{
                height: 100%;
                
        }
        }
        }    
        }
    }    

    @media all and (max-width: 770px){
                    .gallery{
                        width: 60%;
                        margin: 0 auto;
                        padding: 10px;
                        background: rgba(245, 222, 179, 0.55);
                        color: white;
                        padding-bottom: 15px;
                        margin-bottom: 1rem; 
                        &_section_row-item{
                            width: 90%;
                            margin: 5px auto;
                    }
                    }
                }
</style>