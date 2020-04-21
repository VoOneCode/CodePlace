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
			<div v-if='showSearchResult' class="bodyWrapper__row--results">
				<p>
					<!--b>{{word}}</!--b> - {{firstPartOfSpeech}} - {{firstDefinition}}	-->				
					
				</p>
				<div v-for="(item,key) in museResponse" :key="key">
					{{item['word']}} - {{item['defs'][0]}}
					<input 
						type="checkbox" 
						:id="key"
						class="checkbox"
						@input="saveWord(key)"
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
			showSearchResult: true,
			word: 'exam',
			translate: [],
			errorsTr: [],
			definitions: [],
			firstDefinition: [],
			firstPartOfSpeech: [],
			errorsOwl: [],
			museResponse: []
		}),
		created(){
			//localStorage.clear();
			
		},
		computed:{
			result(){			
				// it was deprecated since new logic	
				//return this.word + " " + this.firstPartOfSpeech + " " + this.firstDefinition; 
				//return [this.word, this.firstPartOfSpeech + " " + this.firstDefinition]; 
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
				this.showSearchResult = !this.showSearchResult;
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
				/* ** code below no need anymore since new logic ** */	
				var Owlbot = require('owlbot-js');  
				var client = Owlbot('7148efa434d781513aa0fcc01ed0a74c9c82b3c7');
				
				client.define(this.word)
				.then((resp)=>{
					this.definitions = resp.definitions
					this.firstDefinition = resp.definitions[0]['definition']
					this.firstPartOfSpeech = resp.definitions[0]['type']
					})
					.catch((err)=>{
					this.errorsOwl.push(err)
					localStorage.setItem('errstore', JSON.stringify(this.errorsOwl));
					this.definition = []
					});
				/* ** code above no need anymore since new logic ** */	
				const datamuse = require('datamuse'); 
				datamuse.request('/words?sp='+this.word+'*&max=10&md=dr&ipa=1')
				.then((response) => {
				let preResult = [];
				for (let i in response){
					if(response[i]['defs']){
						//console.log('preResult filtering...');
						preResult.push(response[i])	
					}
				}
				this.museResponse = preResult;			
				this.showSearchResult = !this.showSearchResult
				});
			},
	/* *** Here we save the word to starred*** */			
			saveWord(key){
				//console.log('entering save word func');				
				if (localStorage) {					
					this.starred.push(this.museResponse[key]);					
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