<template>
	<header>
		<div class="menu">      
      		<router-link
                v-for='(item, index) in menuList'
                :key='index'
                :to='item.url'
                class=''
                active-class=''
                v-scroll-to="{el: item.test,
                            duration: 1500,
                            easing: 'linear',
                            offset: -200,
                            force: true,
                            cancelable: true,
                            x: false,
                            y: true}"                
			>
			<a> {{ item.text }} </a>
			</router-link>    
			<div id="scroll2top" class="scroll">
				<a href="#" v-scroll-to="'#scroll2bottom'">ВНИЗ</a>
			</div>
			</div>
			<div class="promo">
			<div>
				<h1>{{$store.state.headerer}}</h1>
				<h3>{{$store.state.subheaderer}}</h3>
			</div>
			<!--p>
				{{$store.state.count}}
				{{$store.getters.COUNT}}fghnj
			</p-->
			</div>
	</header>
</template>

<script>
	import {mapGetters} from 'vuex';

	export default {
		computed: {
    ...mapGetters('menu', {
      menuList: 'items'
    })  
    }		
	}
</script>

<style lang="scss">
</style>