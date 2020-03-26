

<template>
    <div class="gallery">
        
        <div>
            <div class="gallery_section" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="5">
                <h2>Фото Базы отдыха</h2>
                <div @click="viewPic" class="gallery_section_row">
                    <div @click="viewPic" class="gallery_section_row-item">
                        <img src="../../imgs/base1.jpg" alt="">
                    </div>
                    <div @click="viewPic" class="gallery_section_row-item">
                        <img src="../../imgs/base2.jpg" alt="">
                    </div>
                    <div @click="viewPic" class="gallery_section_row-item">
                        <img src="../../imgs/base3.jpg" alt="">
                    </div>
                    <div @click="viewPic" class="gallery_section_row-item">
                        <img src="../../imgs/base4.jpg" alt="">
                    </div>
                    <div @click="viewPic" class="gallery_section_row-item">
                        <img src="../../imgs/base5.jpg" alt="">
                    </div>
                    <div @click="viewPic" class="gallery_section_row-item">
                        <img src="../../imgs/base6.jpg" alt="">
                    </div>
                    <div @click="viewPic" class="gallery_section_row-item">
                        <img src="../../imgs/base7.jpg" alt="">
                    </div>
                    <div @click="viewPic" class="gallery_section_row-item">
                        <img src="../../imgs/base8.jpg" alt="">
                    </div>
                    <div @click="viewPic" class="gallery_section_row-item">
                        <img src="../../imgs/base9.jpg" alt="">
                    </div>
                    <div @click="viewPic" class="gallery_section_row-item">
                        <img src="../../imgs/base10.jpg" alt="">
                    </div>
                    <div @click="viewPic" class="gallery_section_row-item">
                        <img src="../../imgs/base11.jpg" alt="">
                    </div>
                    <div @click="viewPic" class="gallery_section_row-item">
                        <img src="../../imgs/base12.jpg" alt="">
                    </div>
                    <div @click="viewPic" class="gallery_section_row-item">
                        <img src="../../imgs/base13.jpg" alt="">
                    </div>
                    <div @click="viewPic" class="gallery_section_row-item">
                        <img src="../../imgs/base14.jpg" alt="">
                    </div>
                    <div @click="viewPic" class="gallery_section_row-item">
                        <img src="../../imgs/base15.jpg" alt="">
                    </div>
                    <div @click="viewPic" class="gallery_section_row-item">
                        <img src="../../imgs/base16.jpg" alt="">
                    </div>
                    <div @click="viewPic" class="gallery_section_row-item">
                        <img src="../../imgs/base17.jpg" alt="">
                    </div>
                    <div @click="viewPic" class="gallery_section_row-item">
                        <img src="../../imgs/base18.jpg" alt="">
                    </div>
                    <div @click="viewPic" class="gallery_section_row-item">
                        <img src="../../imgs/base19.jpg" alt="">
                    </div>
                </div>   
            </div>
    
            <div class="gallery_section">
                <h2>Фото Русской бани</h2>
                <div @click="viewPic" class="gallery_section_row">
                    <div @click="viewPic" class="gallery_section_row-item">
                        <img src="../../imgs/bathhouse1.jpg" alt="">
                    </div>
                    <div @click="viewPic" class="gallery_section_row-item">
                        <img src="../../imgs/bathhouse2.jpg" alt="">
                    </div>
                    <div @click="viewPic" class="gallery_section_row-item">
                        <img src="../../imgs/bathhouse3.jpg" alt="">
                    </div>
                    <div @click="viewPic" class="gallery_section_row-item">
                        <img src="../../imgs/bathhouse4.jpg" alt="">
                    </div>
                    <div @click="viewPic" class="gallery_section_row-item">
                        <img src="../../imgs/bathhouse5.jpg" alt="">
                    </div>
                    <div @click="viewPic" class="gallery_section_row-item">
                        <img src="../../imgs/bathhouse6.jpg" alt="">
                    </div>               
                </div>
            </div>
            <div class="gallery_section">
                <h2>Проведение свадеб и торжеств</h2>
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
                    <div @click="viewPic" class="gallery_section_row-item" v-on="click">
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
    import Vue from 'vue'
    import infiniteScroll from 'vue-infinite-scroll'

    new Vue({
    directives: {infiniteScroll}
    });

    import modal from './preview.vue';
    

	export default {
        components: {
            modal,
            },
            data () {
            return {
                isModalVisible: false,
                picPath: '',
                data: [],
                busy: false
            };
            },
		methods: {
            loadMore: function() {
                this.busy = true;

                setTimeout(() => {
                    for (var i = 0, j = 5; i < j; i++) {
                    this.data.push({ 'Item': this.nextItem++ });
                    }
                    this.busy = false;
                }, 1000);
                },
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
                justify-content: space-around;
                
            &-item{
                width: 31.5%;
                margin: 5px 5px;
            img{
                width: 100%;

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