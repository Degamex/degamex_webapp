<script setup>
import { ref, computed, onMounted } from 'vue'
import { useWeb3ModalAccount } from '@web3modal/ethers5/vue'
import { useRoute } from 'vue-router'
import Icon from "@/components/Icon.vue"

const route = useRoute()
const { address, chainId, isConnected } = useWeb3ModalAccount()

const shortAddress = computed(() => { 
	return address.value ? address.value.substr(0,4) + "..." + address.value.substr(-4) : false 
})

onMounted(async () => {
	
})

</script>

<template>
<header>
	<RouterLink to="/" class="logo"><img alt="DeGameX" src="@/assets/logo.svg" /></RouterLink>
	<div class="menu" :class="{active : isMenuVisible}">
		<nav>
			<!--RouterLink to="/">Home</RouterLink-->
			<RouterLink to="/keys">Keys</RouterLink>
			<RouterLink to="/arena">Arena</RouterLink>
		</nav>
	</div>
	<div>0x36...f5fD</div>
	<Icon v-on:click="isMenuVisible = !isMenuVisible" class="menu-toggle" :class="{close : isMenuVisible}" type="x" />
</header>
</template>

<style scoped>
header{
	width: 100%;
	z-index: 1000;
	height: 100px;
	display: flex;
	align-items: center;
	padding: 0 30px;
}

.menu{
	display: flex;
	align-items: center;
	width: 100%;
}

.menu nav{
	display: flex;
	width: 100%;
}

a{
	margin-left: 10px;
	cursor: pointer;
	text-decoration: none;
	text-transform: uppercase;
	font-weight: bold;
	color: #ffffff;
	padding: 5px 10px;
	text-align: center;
}
a:hover{
	background: url('@/assets/active-bottom-left.svg') no-repeat bottom left, url('@/assets/active-bottom-right.svg') no-repeat bottom right, url('@/assets/active-top-left.svg') no-repeat top left, url('@/assets/active-top-right.svg') no-repeat top right;
}
a.router-link-active{
	color: var(--main-color);
	text-shadow: var(--main-color) 0px 0px 16px;
	pointer-events: none;
}
a.router-link-active span{
	color: #ffffff;
}
a.logo{
	opacity: 1;
	padding: 0;
	width: 120px;
	margin: 0;
	margin-right: 50px;
}
a.logo:hover{
	margin-top: 0px;
	border-top: none;
	transform: scale(1.1);
	background: none;
}
a.logo.router-link-active{
	background: none;
}
a.logo img{
	width: 100%;
}

.menu-toggle{
	display: none;
}

.connect{
	margin-left: auto;
}

@media (max-width: 768px) {

	a.logo img{
		margin-left: 0;
		opacity: 1;
		height: 15px;
		margin-right: auto;
	}
	
	.menu-toggle{
		margin-left: auto;
		display: block;
		position: relative;
		z-index: 1200;
	}
	.menu{
		display: none;
	}
	.menu a.logo{
		display: block;
		margin: 0;
	}
	.menu a.logo img{
		width: 100%;
	}
	.menu.active{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: fixed;
		width: 100%;
		min-height: 100vh;
		height: 100vh;
		top: 0;
		left: 0;
		background: black;
		z-index: 1100;
	}
	.menu nav{
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.menu.active a{
		margin-left: 0;
		margin-bottom: 30px;
		font-size: 20px;
	}
	.social-links{
		margin-left: 0px;
		display: none;
	}
	.social-m-links{
		display: flex;
		margin-left: 30px;
	}
	.connect{
		margin: 0 auto;
	}

}
</style>
