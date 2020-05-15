<template>
	<div class="authWrapper">
		<form 
		action="/squilla" 
		@submit="logIn()">
			<h2>to auth please enter login&password</h2>
			<h3>admin-admin</h3>
			<input type="text" v-model="login" required>
			<input type="password" v-model="password" required>
			<input type="submit" value="enter">
		</form>
	</div>
</template>

<script>
	export default {
		data: () => ({
			auth: false,
			login: '',
			password: ''
		}),
		computed:{},
        methods:{
			logIn(){
				if(this.login == 'admin' & this.password == 'admin'){
					console.log('DONE!');
					this.auth = true;
				}else{
					this.auth = false;
				}
				localStorage.setItem('auth', this.auth);			
			}
		}		
	}	

</script>

<style lang='scss'>
</style>