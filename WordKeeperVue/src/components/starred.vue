<template>
	<div class="starredWrapper">
		<div class="starredWrapper__row">
			<h1>Starred Words</h1>	
			<input
				type="button"
				v-bind:value="eraseAllText"
				@click="eraseLocal"
				>
		</div>
		<div class="starredWrapper__row">
			<div class="starredWrapper__row--search">
				<input 
					type="text"
					v-on:input='stword = $event.target.value'
                	v-bind:value="stword"
				>
			</div>
			<div v-if='myWords' class="starredWrapper__row--results">
				<div v-for="(item,key) in myWords" :key="key">
					<p>
						{{item['word']}} - {{item['defs'][0]}}					
					<input 
						type="checkbox" 
						:id="key"
						class="checkbox"
						checked="checked"
						@click="eraseWord(key)"
						>
						<label 
						:for="key"						
						></label>
					</p>	
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		data: () => ({
			eraseAllText: "set settings for default",
			stword: ''	,
			showStarredResult: true,
			calcStarreds: true,
			selectedStarred: []
		}),
		computed: {
			starreds(){
				if(this.calcStarreds){
					if(localStorage['localStarred']){
						return JSON.parse(localStorage.getItem('localStarred'));
					}else{
						//alert('smth else...');					
					}					
				}
			},
			myWords(){
				let selectedStarred = [];
				/*** add this.stword tolowercase  	DONE */
				/*** tune indexOf for first letters	DONE */
				for (let item in this.starreds){				
					let ind = this.starreds[item]['word'].indexOf(this.stword.toLowerCase());
					if(ind==0){
						console.log(ind);
						
						selectedStarred.push(this.starreds[item])
					}
				}
				return selectedStarred;
			},			
		},
		methods: {
			eraseWord(key){				
				this.starreds.splice(key, 1);
				localStorage.setItem('localStarred', JSON.stringify(this.starreds));
				this.calcStarreds = false;
				this.calcStarreds = true;
			},
			eraseLocal(){
				if(localStorage['localStarred']){
					this.calcStarreds = false;
					localStorage.removeItem('localStarred');
					this.calcStarreds = true;
				}else{
					alert('no starred words yet');					
				}
			}
		}
	}
	
	
</script>

<style lang='scss'>
	.myWords{
		display: block;
	}
	.starredWrapper{
		background: #F8F4F4;
		padding: 1%;
		&__row{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			margin-bottom: 1rem;
			&--search{
				width: 25%;
				padding: 1%;
			}
			&--results{
				width: 75%;
				background: #F8F4F4;
				text-align: left;
				display: flex;
				flex-direction: column;
				p{
					background: white;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					padding: 0 1% 0 1%;
				}
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
					color: #6EC0FB;
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
				background: #F8F4F4;
				text-align: left;
				display: flex;
				flex-direction: column;
				p{
					background: white;
				}
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
					color: #6EC0FB;
				}
			}
		}
	}
}
</style>