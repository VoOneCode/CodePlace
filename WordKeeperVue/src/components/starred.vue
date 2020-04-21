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
			<div v-if='showresult' class="starredWrapper__row--results">
				<div v-for="(item,key) in starreds" :key="key">
					{{item[0]}}
					{{item[1]}}
					{{key}}
					<input 
						type="checkbox" 
						:id="key"
						class="checkbox"
						checked="checked"
						@input="eraseWord(key)"
						>
						<label 
						:for="key"						
						></label>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		data: () => ({
			stword: 'starred'	,
			showresult: true		
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
		},
		methods: {
			eraseWord(key){
				this.showresult = !this.showresult;
				console.log(key);
				console.log(this.starreds);
				this.starreds.splice(key, 1);
				console.log(this.starreds);
				localStorage.setItem('localStarred', JSON.stringify(this.starreds));
				this.showresult = !this.showresult;
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
				 .checkbox {
					display: none;
				}				
				.checkbox:checked + label:before {
					font-size: 1.5rem;
					content: "★";
					color: #6EC0FB;
				}				
				.checkbox + label:before {
					font-size: 1.5rem;
					content: "★";
					color: wheat;
				}
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
				 .checkbox {
					display: none;
				}				
				.checkbox:checked + label:before {
					font-size: 1.5rem;
					content: "★";
					color: #6EC0FB;
				}				
				.checkbox + label:before {
					font-size: 1.5rem;
					content: "★";
					color: wheat;
				}
			}
		}
	}
}
</style>