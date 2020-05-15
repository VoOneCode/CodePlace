<template>
	<div class="bodyWrapper">
		<div class="bodyWrapper__row">
            <form 
                action="/squilla"
                @submit="saveChanges()">
                <table border="1" v-if="mockedResp">
                    <tr>
                        <td>min</td>
                        <td>max</td>
                        <td>%</td>
                        <td>частота выплат</td>
                    </tr>
                    <tr>
                        <td>
                            <input 
                            type="number" 
                            v-model="max"
                            min="1"
                            max="99999"
                            step="1"
                            required>
                        </td>
                        <td>
                            <input 
                            type="number"
                            v-model="min"
                            min="1"
                            max="99999"
                            step="1"
                            required>
                        </td>
                        <td>
                            <input 
                            type="number"
                            v-model="percent"
                            min="1"
                            max="99999"
                            step="1"
                            required>
                        </td>
                        <td>
                            <select v-model="selectedFr" required>
							<option 
								v-for="(fr, k) in frequent" 
								v-bind:value="fr" 
								:key="k">{{fr}}</option>
						</select>
                        </td>
                        <td>
                            <input type="submit" value="save">
                        </td>
                        <td>
                            <router-link :to="{ name: 'Squilla'}"><h4>Cancel</h4></router-link>
                        </td>
    				</tr>
    			</table>
            </form>
		</div>
	</div>
</template>

<script>

	export default {
        props: ['id'],
		data: () => ({
            max: null,
            min: null,
            percent: null,
            frequent: ['dayly', 'weekly', 'monthly'],
            selectedFr: null,
            showLineResult: false,
            offersbase: []
        }),
        created(){          
        },
		computed:{
            mockedResp(){
                this.showLineResult = false;				
                    this.offersbase = JSON.parse(localStorage['mockedResp']);
                    this.max = this.offersbase.offers[this.id]['max'];
                    this.min = this.offersbase.offers[this.id]['min'];
                    this.percent = this.offersbase.offers[this.id]['percent'];          
                this.showLineResult = true;
                return true;
			}
        },
        methods:{
            saveChanges(){
                (this.offersbase.offers[this.id]);
                this.offersbase.offers[this.id]['max'] = this.max;
                this.offersbase.offers[this.id]['min'] = this.min;
                this.offersbase.offers[this.id]['percent'] = this.percent;
                this.offersbase.offers[this.id]['frequent'] = this.selectedFr;
                localStorage.setItem('mockedResp', JSON.stringify(this.offersbase));                
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
			flex-direction: column;
			justify-content: space-between;
			.btns{
				display: flex;
				justify-content: space-between;
			}
		}
	}
</style>