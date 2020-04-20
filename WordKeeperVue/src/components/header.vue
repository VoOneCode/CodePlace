<template>
	<header>
		<div class="headerWrapper">
			<div class="headerWrapper__row">
				<router-link :to="{ name: 'WordKeeper'}"><h4>Word Keeper</h4></router-link>			
				<router-link :to="{ name: 'Starred'}"><h4>Starred Words</h4></router-link>
			</div>
		</div>
	</header>
</template>

<script>
	
</script>

<style lang='scss'>
	a{
		text-decoration: none;
	}
	.headerWrapper{
		background: #6EC0FB;
		&__row{
			padding: 0 1%;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			h4:nth-child(n){
				color: white;
			}
			h4:nth-last-child(1){
				&:before{
        		content: "★ ";
      }
			}
		}
	}
</style>

