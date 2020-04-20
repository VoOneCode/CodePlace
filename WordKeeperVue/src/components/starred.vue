<template>
	<div class="starredWrapper">
		<div class="starredWrapper__row">
			<div class="starredWrapper__row--search">
				<input 
					type="text"
					v-on:input='stword = $event.target.value'
                	v-bind:value="stword"
				>
			</div>
			<div class="starredWrapper__row--results">
				<p v-for="item in starreds" :key="item">
					{{item}}
				</p>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		data: () => ({
			stword: 'starred'			
		}),
		computed: {
			starreds(){
				if(localStorage['localStarred']){					
					return JSON.parse(localStorage['localStarred']);
				}else{
					localStorage.setItem('localStarred', JSON.stringify([]));					
					return JSON.parse(localStorage['localStarred']);					
				}
			}
		}
	}
	
	
</script>

<style lang='scss'>
	.starredWrapper{
		background: #F8F4F4;
		padding: 1%;
		&__row{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			&--search{
				width: 25%;
				padding: 1%;
			}
			&--results{
				width: 75%;
				background: white;
				text-align: left;
				display: flex;
				flex-direction: column;
			}
		}
	}
	@media all and (max-width: 600px){
		.starredWrapper{
		background: #F8F4F4;
		padding: 1%;
		&__row{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			&--search{
				width: 25%;
				padding: 1%;
			}
			&--results{
				width: 100%;
				background: white;
				text-align: left;
				display: flex;
				flex-direction: column;
			}
		}
	}
}
</style>