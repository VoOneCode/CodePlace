<template>
	<div class="AppHeader">
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
			<a id="scroll2top" class="scroll" href="#" v-scroll-to="'#scroll2bottom'">ВНИЗ</a>
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
	</div>
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
	.menu{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		width: 60%;
		margin: 1rem auto;
		a{
			color: white;
			text-decoration: none;
			transition: all 0.5s ease-in;
			margin: 5px;
			&:hover{
				color: goldenrod;
				text-decoration: underline;
				font-size: 17px;
				top: -2px;
				transition-duration: all 0.3s;
			}
		}
		.scroll>a {
			color: white;
			margin: 5px;
			&:hover{
				color: goldenrod;
				text-decoration: underline;
				font-size: 17px;
				top: -2px;
				transition-duration: 0.3s;
			}
		}  
	}
	.promo{
		color: wheat;
		position: relative;
		top: 10%;
		margin-bottom: 1rem;
		h1{
			margin-bottom: 1rem;
			font-size: 3.5rem;
		}
	}
	@media all and (max-width: 700px){  
		.menu{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			width: 50%;
			margin: 0 auto;
			a{
				color: white;
				text-decoration: none;
				transition: all 0.5s ease-in;
				margin-bottom: 1rem;
				&:hover{
					color: goldenrod;
					text-decoration: underline;
					font-size: 17px;
					top: -2px;
					transition-duration: all 0.1s;
				}
			}
		}  
		.promo{
			left: 0;
			margin: 1rem auto;    
			transition: all 0.5s ease-in;
			h1{
				font-size: 1.8rem;
				margin-bottom: 0.5rem;
				transition: all 0.5s ease-in;
			}
			h3{
				font-size: 1.3rem;
				transition: all 0.5s cubic-bezier(0.92,0,0.98,1);
			}  
		}
	
	}
</style>