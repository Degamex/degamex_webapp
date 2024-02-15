<script setup>
import { ref, toRefs, watch, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { createWeb3Modal, defaultConfig, useWeb3Modal, useWeb3ModalAccount } from '@web3modal/ethers5/vue'

import Connect from "@/components/Connect.vue"
import Button from "@/components/Button.vue"
import BWrapper from "@/components/BWrapper.vue"
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

const blast_testnet = {
    chainId: 168587773,
    name: 'Blast Sepolia',
    currency: 'ETH',
    explorerUrl: 'https://testnet.blastscan.io',
    rpcUrl: 'https://sepolia.blast.io'
}
const projectId = '1785faff74f19bfde1bd05f38cbaf69a'
const metadata = {
	name: 'Degamex',
    description: 'Degamex',
	url: 'https://degamex.com',
	icons: ['https://avatars.githubusercontent.com/u/37784886']
}
createWeb3Modal({
	ethersConfig: defaultConfig({ metadata }),
    chains: [blast_testnet],
    projectId,
	enableAnalytics: true
})

const modal = useWeb3Modal()
const { address, chainId, isConnected } = useWeb3ModalAccount()


const route = useRoute()
const isLoading = ref(false)

onMounted(async () => {
	console.log(address)
})


</script>

<template>

	<!--div v-if="!isConnected" class="wrapper-connect" :class="route.name">
		<img alt="DeGameX" class="main" src="@/assets/main.svg" />
		<Button text="Connect" @click="modal.open()"/>
	</div-->

	
	<div class="wrapper container" :class="route.name">
		<Header class="header" v-if="route.name != 'pvp'" />
		<RouterView class="content" />
		<Footer class="footer" v-if="route.name != 'pvp'" />
	</div>

</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;900&display=swap');
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Orbitron', sans-serif;
}

:root {
  --main-color: #FAFF00;
}

a, button{
	cursor: pointer;
}
button:hover{
	transform: scale(1.05);
}
button:active{
	transform: scale(0.95);
}
.disabled{
	opacity: 0.4;
	pointer-events: none;
}

body {
	background: #000000;
	color: #ffffff;
	font-size: 18px;
}
.wrapper-connect{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	min-height: 100vh;
	position: relative;
	max-width: 640px;
	margin: 0 auto;
	text-align: center;
}
.connect{ max-width: 400px; }
.connect .body{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.wrapper{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-items: stretch;
	width: 100%;
	min-height: 100vh;
	position: relative;
}
.content{
	width: 100%;
	margin-bottom: auto;
	padding-bottom: 50px;
}
.container{
	width: 100%;
	max-width: 1280px;
	margin: 0 auto;
}

.wrapper.pvp{ 
	width: 100%; 
	max-width: 100%;
	min-width: 920px; 
	height: 100vh;
	min-height: 600px;
}
.wrapper.pvp .header, .wrapper.pvp .footer{ display: none; }


/* -------- data items -------- */
.data-item{
	display: flex;
	flex-direction: column;
	margin-right: 40px;
}
.data-label{
	text-transform: uppercase;
	font-size: 14px;
}
.data-value{
	display: flex;
	align-items: center;
	color: var(--main-color);
	font-size: 24px;
	font-weight: bold;
	margin-top: 10px;
}
.data-value span{
	color: white;
	font-size: 18px;
	margin-left: 10px;
}
.data-value .icon{
	width: 16px;
	margin-left: 10px;
}


@media (max-width: 768px) {
	.wrapper{
		padding: 0 30px;
	}
}


</style>
