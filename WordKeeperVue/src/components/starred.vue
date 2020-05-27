<template>
	<div class="starredWrapper">
		<!--div class="starredWrapper__row">
			<h1>Starred Words</h1>	
			<input
				type="button"
				v-bind:value="eraseAllText"
				@click="eraseLocal"
				>
		</div-->
		<div class="starredWrapper__row">
			<div class="starredWrapper__row--search">
				<input 
					type="text"
					v-on:input='stword = $event.target.value'
                	v-bind:value="stword"
				>
				<label>
					<input 
						type="checkbox" 
						name="noun" 
						id="noun"
						class="checkboxPart"
						@click='filterPart($event.target)'
						>
						noun
				</label>
				<label>
					<input 
						type="checkbox" 
						name="verb" 
						id="verb"
						class="checkboxPart"
						@click='filterPart($event.target)'
						>
						verb
				</label>
				<label>
					<input 
						type="checkbox" 
						name="adjective" 
						id="adjective"
						class="checkboxPart"
						@click='filterPart($event.target)'
						>
						adjective
				</label>
			</div>
			
			<draggable v-if='myWords' class="starredWrapper__row--results" handle=".fa-bars">				
				<div v-for="(item,key) in myWords" :key="key">						
					<div class="resWrapper">
						<p @click='fullText(key)'>
							<i class="fa fa-bars"></i>
							{{item['word']}} - {{item['defs'][0]}}	
						</p>									
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
					</div>
					<div v-if="show == key" class="fullResWrapper">
						<div v-for="(def,key) in item.defs" :key="key">
							<p>
								{{def}}
							</p>
						</div>
						<p>
							transcription: {{item.tags[1].slice(item.tags[1].indexOf(':')+1)}}
						</p>	
					</div>	
				</div>				
			</draggable>
		</div>
	</div>
</template>

<script>
	import draggable from 'vuedraggable';
	export default {
		components: {
            draggable,
        },
		data: () => ({
			eraseAllText: "delete all starred words!",
			stword: ''	,
			calcStarreds: true,
			checkedPart: '',
			show: 'no'
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
				for (let item in this.starreds){				
					let ind = this.starreds[item]['word'].indexOf(this.stword.toLowerCase());
					if(ind==0){
						let currentPart = this.starreds[item]['defs'][0].slice(0, this.starreds[item]['defs'][0].indexOf('	'));								
						if(this.checkedPart != ''){
							switch(currentPart) {
								case this.checkedPart:
									selectedStarred.push(this.starreds[item]);
									break;
							}
						}else{
							selectedStarred.push(this.starreds[item]);
						}
					}
				}				
				return selectedStarred;
			},			
		},
		methods: {
			fullText(key){						
				this.show = this.show == key ? 'no' : key;
			},
			filterPart(part){
				if(this.checkedPart == part.id){
					this.checkedPart = ''
				}else{
					this.checkedPart = part.id;
				}
				let checkboxes = document.getElementsByClassName('checkboxPart');
				[...checkboxes].forEach(box => {
					box.checked = box === part ? box.checked : false;				
					});
			},
			eraseWord(key){			
				let victim = this.myWords[key]['word'];
				let positionToRemove = this.starreds.findIndex(element => element.word == victim);		
				this.starreds.splice(positionToRemove, 1);
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
				display: flex;
				flex-direction: column;
				width: 25%;
				padding: 1%;
				background: #EFEFEF;
				margin-right: 2rem;
			}
			&--results{
				width: 75%;
				background: #F8F4F4;
				text-align: left;
				display: flex;
				flex-direction: column;
				.resWrapper{
					background: white;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					padding: 0 1% 0 1%;
					margin-bottom: 2%;
					border-radius: 5px;
					i{
						margin-right: 1rem;
					}
				}
				.fullResWrapper{
					background: white;
					padding: 5px;
					margin-bottom: 2%;
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
				display: flex;
				flex-direction: column;
				width: 25%;
				padding: 1%;
			}
			&--results{
				width: 100%;
				background: #F8F4F4;
				text-align: left;
				display: flex;
				flex-direction: column;
				.resWrapper{
					background: white;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					padding: 0 1% 0 1%;
					margin-bottom: 2%;
					border-radius: 5px;
					i{
						margin-right: 1rem;
					}
				}
				.fullResWrapper{
					background: white;
					padding: 5px;
					margin-bottom: 2%;
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