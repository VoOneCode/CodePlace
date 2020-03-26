<template>
    <div class="restik">
        <p>Сочные стейки, ароматные шашлыки, божественная рыбка… <br>С грилем от Ресторана Приволье!!! </p>
        <div class="restik_section">
            <div @click="viewPic" class="restik_section_row-1">
                <div @click="viewPic" class="restik_section_row-1-item">
                    <img src="../../imgs/menu1.jpg" alt="">
                </div>
                <div @click="viewPic" class="restik_section_row-1-item">
                    <img src="../../imgs/menu2.jpg" alt="">
                </div>
                <div @click="viewPic" class="restik_section_row-1-item">
                    <img src="../../imgs/menu3.jpg" alt="">
                </div>
            </div>
            <div @click="viewPic" class="restik_section_row-2">
                <div @click="viewPic" class="restik_section_row-2-item">
                    <img src="../../imgs/restik1.jpg" alt="">
                </div>
                <div @click="viewPic" class="restik_section_row-2-item">
                    <img src="../../imgs/restik2.jpg" alt="">
                </div>
                <div @click="viewPic" class="restik_section_row-2-item">
                    <img src="../../imgs/restik3.jpg" alt="">
                </div>
                <div @click="viewPic" class="restik_section_row-2-item">
                    <img src="../../imgs/restik4.jpg" alt="">
                </div>
                <div @click="viewPic" class="restik_section_row-2-item">
                    <img src="../../imgs/restik5.jpg" alt="">
                </div>
                <div @click="viewPic" class="restik_section_row-2-item">
                    <img src="../../imgs/restik6.jpg" alt="">
                </div>
                <div @click="viewPic" class="restik_section_row-2-item">
                    <img src="../../imgs/restik7.jpg" alt="">
                </div>
                <div @click="viewPic" class="restik_section_row-2-item">
                    <img src="../../imgs/restik8.jpg" alt="">
                </div>
                <div @click="viewPic" class="restik_section_row-2-item">
                    <img src="../../imgs/restik9.jpg" alt="">
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
    .restik{
        width: 90%;
        max-width: 1000px;
        margin: 0 auto;
        padding: 10px;
        background: rgba(245, 222, 179, 0.55);
        color: white;
        padding-bottom: 15px;
        margin-bottom: 1rem; 
        >p{
                color: black;
                font-size: 1.5rem;
                text-align: left;
                margin: 1rem auto;
            }       
        &_section{      
            &_row-1{
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-around;
                
            &-item{
                width: 31.5%;
                margin: 5px 5px;
            img{
                width: 100%;
                    }
                }   
            }
            &_row-2{
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    
                &-item{
                    width: 31.5%;
                    margin: 5px 5px;                
                    overflow: hidden;
                img{
                    width: 400px;
                    height: 300px;
                }
            }
            }
            } 
    }
    @media all and (max-width: 770px){
                .restik{
                    width: 60%;
                    margin: 0 auto;
                    padding: 10px;
                    background: rgba(245, 222, 179, 0.55);
                    color: white;
                    padding-bottom: 15px;
                    margin-bottom: 1rem; 
                    &_section_row-1-item{
                        width: 90%;
                        margin: 5px auto;
                    }
                    &_section_row-2-item{
                        width: 90%;
                        margin: 5px auto;
                    }
                }
            }    
</style>        