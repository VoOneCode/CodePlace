<template>
	<div class="bodyWrapper">
		<div class="bodyWrapper__row">
			<div class="bodyWrapper__row--search">
				<input 
					type="text"
					v-on:input='word = $event.target.value'
                	v-bind:value="word"
					@input='findWord'>
			</div>
			<div class="bodyWrapper__row--results">
				<p v-if='showInfo'>
					<b>{{word}}</b> - {{partOfSpeech}} - {{firstDefinition}}					
					<input 
						type="checkbox" 
						id="checkbox"
						@change="saveWord"
						>
						<label 
						for="checkbox"						
						></label>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data: () => ({
			showInfo: false,
			word: 'example',
			translate: [],
			errorsTr: [],
			definitions: [],
			firstDefinition: [],
			partOfSpeech: [],
			errorsOwl: []			
		}),
		created(){
			//localStorage.clear();
		},
		computed:{
			result(){				
				//return this.word + " " + this.partOfSpeech + " " + this.firstDefinition; 
				return [this.word, this.partOfSpeech + " " + this.firstDefinition]; 

			},
			starred(){
				if(localStorage['localStarred']){					
					return JSON.parse(localStorage['localStarred']);
				}else{
					localStorage.setItem('localStarred', JSON.stringify([]));					
					return JSON.parse(localStorage['localStarred']);					
				}
			}
		},
        methods:{
			findWord(){
				this.showInfo = !this.showInfo
	/* *** Here we find a translate for the word *** */	
				const axios = require("axios");			
				axios({
					"method":"GET",
					"url":"https://systran-systran-platform-for-language-processing-v1.p.rapidapi.com/translation/text/translate",
					"headers":{
					"content-type":"application/octet-stream",
					"x-rapidapi-host":"systran-systran-platform-for-language-processing-v1.p.rapidapi.com",
					"x-rapidapi-key":"8351a57d7cmshc6c7b161ab31c4cp14f3b8jsn167bf24a1045"
					},"params":{
					"source":"en",
					"target":"ru",
					"input": this.word,
					"withAnnotations": true,
					}
					})
					.then((response)=>{
					this.translate = response.data.outputs[0]['output']
					})
					.catch((e)=>{
					this.errorsTr.push(e)
					})
	/* *** Here we find a part of speech and definition for the word *** */	
			var Owlbot = require('owlbot-js');  
			var client = Owlbot('7148efa434d781513aa0fcc01ed0a74c9c82b3c7');
			
			client.define(this.word)
			.then((resp)=>{
				this.definitions = resp.definitions
				this.firstDefinition = resp.definitions[0]['definition']
				this.partOfSpeech = resp.definitions[0]['type']
				})
				.catch((err)=>{
				this.showInfo = !this.showInfo
				this.errorsOwl.push(err)
				localStorage.setItem('errstore', JSON.stringify(this.errorsOwl));
				this.definition = []
				})
			},
	/* *** Here we save the word to starred*** */			
			saveWord(){
				if (localStorage) {
					this.starred.push(this.result);
					localStorage.setItem('localStarred', JSON.stringify(this.starred));
					//window.localStorage.setItem([this.word], this.result);
				} else {
					console.log('Your browser doesn support sessionStorage');
				}
			}
		}
		
	}	

</script>

<style lang='scss'>
	.bodyWrapper{
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
				 #checkbox {
					display: none;
				}				
				#checkbox:checked + label:before {
					font-size: 1.5rem;
					content: "★";
					color: #6EC0FB;
				}				
				#checkbox + label:before {
					font-size: 1.5rem;
					content: "★";
					color: wheat;
				}
			}
		}
	}
	@media all and (max-width: 600px){
		.bodyWrapper{
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
				 #checkbox {
					display: none;
				}
				
				#checkbox:checked + label:before {
					font-size: 1.5rem;
					content: "★";
					color: #6EC0FB;
				}
				
				#checkbox + label:before {
					font-size: 1.5rem;
					content: "★";
					color: wheat;
				}
			}
		}
	}
}
</style>