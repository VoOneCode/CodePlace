<template>
	<div class="starredWrapper">
		<h1>Starred Words</h1>
		<div v-for="item in myWords" :key="item" class="myWords">
				<p>
					
				</p>
			</div>
		<input
			type="button"
			v-bind:value="eraseAllText"
			@click="eraseLocal"
			>
		<div class="starredWrapper__row">
			<div class="starredWrapper__row--search">
				<input 
					type="text"
					v-on:input='stword = $event.target.value'
                	v-bind:value="stword"
					@input='findInStarred'
				>
			</div>
			
			<div v-if='starreds' class="starredWrapper__row--results">
				your starreds
				<div v-for="(item,key) in starreds" :key="key">
					{{item['word']}} - {{item['defs'][0]}}
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
			eraseAllText: "set settings for default",
			stword: 's'	,
			showStarredResult: true,
			calcStarreds: true	
		}),
		computed: {
			starreds(){
				if(this.calcStarreds){
					if(localStorage['localStarred']){
						//console.log(JSON.parse(localStorage.getItem('localStarred')));
						return JSON.parse(localStorage.getItem('localStarred'));
					}else{
						//alert('smth else...');					
					}					
				}
			},
			myWords(){
				let allStWords = [];
				for (let item in this.starreds){
					console.log(item);					
					allStWords.push(this.starreds[item]['word']);
				}
				return allStWords;
			}
		},
		methods: {
			findInStarred(){},
			eraseWord(key){
				this.showStarredResult = !this.showStarredResult;
				this.starreds.splice(key, 1);
				localStorage.setItem('localStarred', JSON.stringify(this.starreds));
				this.showStarredResult = !this.showStarredResult;
			},
			eraseLocal(){
				if(localStorage['localStarred']){
					this.calcStarreds = false;
					localStorage.removeItem('localStarred');
					this.calcStarreds = true;
				}else{
					alert('no localStarred yet');					
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
					color: #6EC0FB;
				}
			}
		}
	}
}
</style>