<template>
    <div class="gallery">
        
        <div class="gallery_section">
            <h2>Русская Баня</h2>
            <p>Ценители отдыха в парилке часто выбирают жадеит для бани (русской, или сауны) для получения сухого или влажного пара. Польза периодического посещения парной для организма человека не подвергается сомнению. Именно под действием пара достигается максимальный эффект оздоровления и очищения. Баня оказывает положительное воздействие на дыхательную и нервную систему человека, на кожу и общее эмоциональное состояние. После банных процедур наступает ощущение расслабления и легкости во всем теле.</p>
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
            >p{
                color: black;
                text-align: left;
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