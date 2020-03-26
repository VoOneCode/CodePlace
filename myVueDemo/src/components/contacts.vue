<template>
	<div class="contacts">
		<div class="contacts_left">
			<h2>Наш адрес:</h2>
			<p>Актюбинский переулок, 19, посёлок Колтубановский,
Бузулукский район, Оренбургская область</p>
			<h2>Наш телефон:</h2>
			<p>+7-922-555-7-999</p>
			<h2>Наш Email:</h2>
			<p>avpopov79@yandex.ru</p>
		</div>
		<div class="contacts_right">
			<h2>Напишите нам</h2>
			<input type="text" placeholder="Введите ваше имя"><br>
			<input type="text" placeholder="Введите ваш телефон"><br>
			<input type="text" placeholder="Введите ваше сообщение"><br>
			<button>Отправить</button>
		</div>
	</div>
</template>

<script>

	//import {mapGetters} from 'vuex';

	export default {
		components: {
		}
	}
</script>

<style lang="scss">
	.contacts{
		width: 70%;
		margin: 1rem auto;
		padding: 10px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		background: rgba(245, 222, 179, 0.55);
		&_left{
			text-align: left;
			max-width: 340px;
			:nth-child(n){
				margin-bottom: 1rem;
			}
		}
		&_right{
			text-align: left;
			max-width: 340px;
			:nth-child(n){
				margin-bottom: 1rem;
				width: 90%;
				padding: 5px;
			}
			:nth-child(2),:nth-child(3){
				background: green;
			}
			:nth-child(4){
				height: 3rem;
			}
			button{
				padding: 5px;
			}
		}
	}
</style>
