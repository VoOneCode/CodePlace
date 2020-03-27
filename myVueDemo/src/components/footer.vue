<template>
	<footer>
		<div class="row">
			<div class="row_elem">
				<img src="../../imgs/logo_footer.png" alt="logo_footer">
			</div>
			<div class="row_elem">
				<a id="scroll2bottom" class="scroll" href="#" 
						v-scroll-to="{el: '#scroll2top',
                            duration: 2500,
                            easing: 'easy-in',
                            offset: -200,
                            force: true,
                            cancelable: true,
                            x: false,
                            y: true}">НАВЕРХ
      			</a>
				<router-link
                v-for='(item, index) in menuList'
                :key='index'
                :to='item.url'
                class='footer_item'
                active-class='footer_item-active'
            >
              <a> {{ item.text }} </a>
      </router-link>
			</div>
			<div class="row_elem">
				<p>{{$store.state.baseName}}</p>
				<p>{{$store.state.address}}</p>
				<p>{{$store.state.tel}}</p>
			</div>
		</div>
	</footer>
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
	footer{
		.row{
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			background: maroon;
			&_elem{
				color: wheat;
				width: 30%;
				margin: 1rem auto;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				img{
					width: 50%;
				}
				a{
					color: white;
					text-decoration: none;
					transition: all 0.5s ease-in;
					&:hover{
					color: silver;
					text-decoration: underline;
					font-size: 17px;
					top: -2px;
					transition-duration: 0.3s;
					}
				}
			}
		}
	}
	@media all and (max-width: 700px){
		footer{
			.row{
				display: flex;
				flex-direction: column;
				flex-wrap: nowrap;
				&_elem{
					width: 70%;
					img{
						width: 60%;
						margin: 0 auto;
					}
					a{
						margin-bottom: 0.7rem;
					}
				}
			}
			}
	}
</style>