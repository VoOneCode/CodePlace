<template>
	<div class="starredWrapper">
		<p v-for="item in starreds" :key="item">
			{{item}}</p>
	</div>
</template>

<script>

	export default {
		computed: {
			starreds(){
			return window.localStorage('my');
		}
		}
	}
	console.log(window.localStorage('my'));
	
	
</script>

<style>
	.starredWrapper{
		background: #F8F4F4;
		text-align: left;
		padding-left: 10rem;
	}
</style>