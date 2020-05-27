<template>
	<header>
		<div class="headerWrapper">
			<div class="headerWrapper__row">
				<router-link :to="{ name: 'WordKeeper'}"><h4>Word Keeper</h4></router-link>			
				<router-link :to="{ name: 'Starred'}"><h3>Starred Words</h3></router-link>
			</div>
		</div>
	</header>
</template>


<style lang='scss'>
	a{
		text-decoration: none;
	}
	.headerWrapper{
		background: #6EC0FB;
		border-radius: 5px;
		&__row{
			padding: 0 1%;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			h4,h3{
				color: white;
				font-size: 1rem;
			}
			h3{			
				&:before{
        		content: "★ ";				
     			 }
			}
		}
	}
	/* *** HERE we can add styles for small screens ***  */
	@media all and (max-width: 600px){
		a{
		text-decoration: none;
	}
	.headerWrapper{
		width: 100%;
		background: #6EC0FB;
		&__row{
			padding: 0 1%;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			h4,h3{
				color: white;
				font-size: 1rem;
			}
			h3{			
				&:before{
        		content: "★ ";				
     			 }
			}
		}
	}
	}
</style>

