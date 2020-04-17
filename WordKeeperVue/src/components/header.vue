<template>
	<header>
		<div class="headerWrapper">
			<div class="headerWrapper__row">
				<h4>Word Keeper</h4>					
				<h4>Starred Words</h4>			
			</div>
		</div>
	</header>
</template>

<script>
	
</script>

<style lang='scss'>
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

