<template>
	<div class="bodyWrapper">
		<table class="table">
			<tr>
				<td>
					<button @click="monthMinus">&#9668;</button>
				</td>
				<td colspan="5">
					{{monthes[month]}} {{year}}
				</td>
				<td>
					<button @click="monthPlus">&#9658;</button>
				</td>
			</tr>
			<tr>
				<td v-for="d in days">
					{{d}}
				</td>
			</tr>
			<tr v-for="week in calendar()">
				<td v-for="(day, index) in week"
					@click="getIt([day.index,monthes[month],year])">
					{{day.index}}
				</td>
			</tr>
		</table>
		<section class="selectedDate">
			<input type="text" v-model="selectedDate">
		</section>
		<section>
			<button @click="setLang('ru')">РУС</button>
			<button @click="setLang('en')">EN</button>
		</section>
	</div>
</template>

<script>

	export default {
		data: () => ({
			month: new Date().getMonth(),
			year: new Date().getFullYear(),
			days: ['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС'],
			monthes: ['ЯНВ','ФЕВ','МАР','АПР','МАЙ','ИЮН','ИЮЛ','АВГ','СЕН','ОКТ','НОЯ','ДЕК'],
			selectedDate: ' ',
			firstDay: '1'
		}),
		computed:{
		},
        methods:{
			calendar: function(){
				let curdays = [];
				let week = 0;
				curdays[week] = [];
				let countDays = new Date(this.year, this.month +1, 0).getDate();
				for(let i = 1; i <= countDays; i++){
					if(new Date(this.year, this.month, i).getDay() != this.firstDay){
						let a = {index:i};
						curdays[week].push(a);
					}else{
						week++;
						curdays[week] = [];
						let a = {index:i};
						curdays[week].push(a);
					}
				}
				if(curdays[0].length > 0){
					for(let i = curdays[0].length; i < 7; i++){
						curdays[0].unshift(' ');
					}
				}
				return curdays;
			},
			monthMinus: function(){
				this.month--;
				if(this.month < 0){
					this.month = 11;
					this.year--;
				}
			},
			monthPlus: function(){
				this.month++;
				if(this.month > 11){
					this.month = 0;
					this.year++;
				}
			},
			getIt: function(date){
				this.selectedDate = date[0]+'-'+date[1]+'-'+date[2];
			},
			setLang: function(lang){
				if(lang == 'ru'){
					this.firstDay = '1';
					this.days = ['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС'];
					this.monthes = ['ЯНВ','ФЕВ','МАР','АПР','МАЙ','ИЮН','ИЮЛ','АВГ','СЕН','ОКТ','НОЯ','ДЕК'];
				}
				if(lang == 'en'){
					this.firstDay = '0';
					this.days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
					this.monthes = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OKT','NOV','DEC'];
				}
			}
		}		
	}	

</script>

<style lang='scss'>
	.bodyWrapper{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		.selectedDate{
			width: 25%;
		}
	}
	@media all and (max-width: 600px){
	}	
</style>