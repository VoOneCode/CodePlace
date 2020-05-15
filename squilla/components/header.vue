<template>
	<header>
		<div class="headerWrapper">
			<div class="headerWrapper__row">
				<h2>
					<router-link 
							:to="{ name: 'Squilla'}"
							>Get started
					</router-link>
				</h2>
				<h2>Best terms you can find</h2>	
				<h4>Let your cryptocurrency work for you</h4>
			</div>
		</div>
	</header>
</template>

<style lang='scss'>
	a{
		text-decoration: none;
	}
	.headerWrapper{
		background: #339FA6;
		&__row{
			padding: 0 1%;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			h4,h2{
				color: white;
			}
			h4:nth-last-child(1){
				&:before{
					color: #FD8B55;
        			content: "₿ ";
      			}
			}
		}
	}
</style>

