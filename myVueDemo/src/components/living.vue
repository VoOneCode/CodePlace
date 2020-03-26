<template>
	<div class="living">
		<div class="living_toptext">
            <h2>Четыре коттеджа</h2>
            <p>4 дома вместимостью 2-5 человек</p>
            <p>Двуспальные кровати</p>
            <p>Спутниковое телевидение</p>
            <p>Микроволновая печь</p>
            <p>Холодильник</p>
            <p>Чайник</p>
            <p>Комплект посуды</p>
            <p>Возле каждого домика установлен мангал</p>
        </div>
        <div class="living_row1_pic">
            <img src="../../imgs/r1p1.jpg" alt="r1p1">
            <img src="../../imgs/r1p2.jpg" alt="r1p2">
            <img src="../../imgs/r1p3.jpg" alt="r1p3">
        </div>

        <div class="living_toptext">
            <h2>Большой домик вместимостью до 8 человек</h2>
            <p>Двуспальные кровати</p>
            <p>Спутниковое телевидение</p>
            <p>Микроволновая печь</p>
            <p>Холодильник</p>
            <p>Чайник</p>
            <p>Комплект посуды</p>
            <p>Возле каждого домика установлен мангал</p>
        </div>
        <div class="living_row1_pic">
            <img src="../../imgs/r2p1.jpg" alt="r2p1">
            <img src="../../imgs/r2p2.jpg" alt="r2p2">
            <img src="../../imgs/r2p3.jpg" alt="r2p3">
        </div>
	</div>
</template>

<script>

	//import {mapGetters} from 'vuex';

	export default {
		components: {
		}
	}
</script>

<style lang="scss">
	.living{
        width: 70%;
        max-width: 1000px;
        margin: 0 auto;
        padding: 10px;
        background: rgba(245, 222, 179, 0.75);
        &_toptext{
            color: black;
        }
        &_row1_pic{
            display: inline-flex;
            justify-content: space-between;
            img{
                width: 33%;
            }
        }
    }
    @media all and (max-width: 700px){
        .living{
        width: 90%;
        &_toptext{
            color: black;
        }
        &_row1_pic{
            display: inline-flex;
            justify-content: space-between;
            img{
                width: 33%;
            }
        }
    }
    }
</style>
