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
			<!--p>SORRY TESTING now</!--p><br-->
			<div v-if='showSearchResult' class="bodyWrapper__row--results">				
				<div v-for="(item,key) in museResponse" :key="key">
					<p>
						{{item.word}} - {{item['defs'][0]}}
						<input 
							type="checkbox" 
							:id="key"
							class="checkbox"
							@click='saveWord(key)'
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
			showSearchResult: false,
			word: 'axe',
			translate: [],
			errorsTr: [],
			definitions: [],
			firstDefinition: [],
			firstPartOfSpeech: [],
			errorsOwl: [],
			museResponse: []
		}),
		computed:{
			starred(){
				if(localStorage['localStarred']){					
					return JSON.parse(localStorage.getItem('localStarred'));
				}else{
					localStorage.setItem('localStarred', JSON.stringify([]));		
					return JSON.parse(localStorage.getItem('localStarred'));		
				}
			}
		},
        methods:{
			findWord(){
				this.showSearchResult = false;	
	/* *** Here we find a word,part of speech and definition for the word *** */
				const axios = require("axios");	
				axios.get(`https://api.datamuse.com/words?sp=${encodeURIComponent(this.word)}?*&max=10&md=dr&ipa=1`)
					.then((json) => {
						let requestResult = json.data;														
						let preResult = [];
						for (let i in requestResult){
							if(requestResult[i]['defs']){
								/*** finding part of speech *** */
								//let testString = requestResult[i]['defs'][0];
								//console.log(testString);						
								//console.log(testString.slice(testString.indexOf('	'), testString.length));
								/*for(let i in requestResult[i]['defs']){
								}*/
								/*** finding part of speech *** */							
								preResult.push(requestResult[i]);
							};
						};					
						this.museResponse = preResult;
						this.museResponse.sort(function(a, b){					
							var nameA=a.word.toLowerCase(), nameB=b.word.toLowerCase()
							if (nameA < nameB)
								{return -1}
							if (nameA > nameB)
								{return 1}
							return 0 
							});							
						})
					.catch((e)=>{
						this.errorsTr.push(e)
						});	
					
	/* *** Here we find a translation for the word *** */				
				/*axios({
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
					})*/
				this.showSearchResult = true;
			},
	/* *** Here we save the word to starred*** */			
			saveWord(key){
				if (localStorage){
					this.starred.push(this.museResponse[parseInt(key)]);					
					localStorage.setItem('localStarred', JSON.stringify(this.starred))
				}else{
					alert('Your browser doesn support localStorage');
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
					color: wheat;
				}
			}
		}
	}
}
</style>