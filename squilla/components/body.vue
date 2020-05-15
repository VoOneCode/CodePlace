<template>
	<div class="bodyWrapper">
		<div class="bodyWrapper--authorised" v-if="auth">
			<div v-if="getOffers">
				<div class="btns">
					<router-link 
						:to="{ name: 'Additor'}"
						>Add new offer
					</router-link>
					<span @click="logOut()">
						Log Out
					</span>
				</div>			
				<div>
					<div>
						<table border="1">				
						<tr>
							<td @click="sort('min')">min</td>
							<td @click="sort('max')">max</td>
							<td @click="sort('percent')">%</td>
							<td @click="sort('frequent')">частота выплат</td>
						</tr>
						<tr v-for="(item,key) in pageOfItems" :key="key">
							<td>{{item['min']}}</td>
							<td>{{item['max']}}</td>
							<td>{{item['percent']}}</td>
							<td>{{item['frequent']}}</td>
							<td>
								<span @click="delOffer(key)">
									delete
								</span>						
							</td>
							<td>
								<router-link 
								:to="{ name: 'Editor', 
								params: {id: key}}"
								><h4>edit</h4>
								</router-link>
							</td>
						</tr>
						</table>
					</div>
					<div>
						<jw-pagination :items="offers.offers" :pageSize="10" @changePage="onChangePage"></jw-pagination>
					</div>
				</div>
			</div>
		</div>
		<div class="bodyWrapper--nonAuthorised" v-else>
			{{this.$router.push('/auth')}};
		</div>
	</div>
</template>

<script>
	const axios = require("axios");
	const MockAdapter = require("axios-mock-adapter");
	const mock = new MockAdapter(axios);	

	export default {
		data: () => ({
			showSearchResult: false,
			selectedFr: null,
			offers: [],
			sortedBy: null,
			pageOfItems: []
		}),
		created(){
			this.showSearchResult = false;				
			mock.onGet("/offers").reply(200, this.mockedResp);
			axios.get("/offers")
			.then((response) => {
			this.offers = response.data;
			this.showSearchResult = true;			
			});				
		},
		computed:{
			mockedResp(){
				//localStorage.removeItem('mockedResp');
				if(localStorage['mockedResp']){					
					return JSON.parse(localStorage['mockedResp']);
				}else{
					localStorage.setItem('mockedResp', JSON.stringify(
						{
						offers: [
						{ min: 100, max: 1000, percent: 49, frequent: 'dayly'},
						{ min: 200, max: 2000, percent: 39, frequent: 'weekly'},
						{ min: 300, max: 3000, percent: 29, frequent: 'monthly'},
						{ min: 400, max: 4000, percent: 19, frequent: 'dayly'},
						{ min: 500, max: 5000, percent: 50, frequent: 'weekly'},
						{ min: 600, max: 6000, percent: 15, frequent: 'weekly'},
						{ min: 700, max: 7000, percent: 25, frequent: 'monthly'},
						{ min: 800, max: 8000, percent: 35, frequent: 'dayly'},
						{ min: 900, max: 9000, percent: 45, frequent: 'weekly'},
						{ min: 1000, max: 10000, percent: 40, frequent: 'weekly'},
						{ min: 2000, max: 11000, percent: 30, frequent: 'monthly'},
						{ min: 3000, max: 12000, percent: 20, frequent: 'dayly'},
						{ min: 4000, max: 13000, percent: 10, frequent: 'weekly'}
						],
						}
					));					
					return JSON.parse(localStorage['mockedResp']);					
				}
			},
			auth(){
				if(localStorage['auth'] == 'true'){					
					return true;
				}else{
					return false
				}				
			}
		},
        methods:{
			getOffers(){				
				this.showSearchResult = false;				
				mock.onGet("/offers").reply(200, this.mockedResp);
				axios.get("/offers")
				.then((response) => {
				console.log('response: ',response);
				this.offers = response.data;
				console.log(this.offers.offers);
				this.showSearchResult = true;
				return true;				
				});				
			},
			delOffer(key){
				this.offers.offers.splice(key, 1);
				localStorage.setItem('mockedResp', JSON.stringify(this.offers));				
			},
			logOut(){
				console.log(localStorage['auth']);
				localStorage.setItem('auth', false);
				console.log(localStorage['auth']);
				this.$router.push('/auth')
			},
			sort(by){
				if(this.sortedBy == by){					
					this.offers.offers.sort(function(a, b){				
						let valA=a[by], valB=b[by];					
						if (valA > valB){
						return -1}
						if (valA < valB){
						return 1}
						else{return 0}
					});	
					this.sortedBy = ' ';
				}else{					
					this.offers.offers.sort(function(a, b){				
						let valA=a[by], valB=b[by];					
						if (valA < valB){
						return -1}
						if (valA > valB){
						return 1}
						else{return 0}
					});	
					this.sortedBy = by;
				}				
			},
			onChangePage(pageOfItems) {
            	this.pageOfItems = pageOfItems;
       		}
		}		
	}	

</script>

<style lang='scss'>
	.bodyWrapper{
		&--authorised{
			.btns{
				display: flex;
				flex-direction: row;
				justify-content: space-between;
			}
		}
	}
</style>