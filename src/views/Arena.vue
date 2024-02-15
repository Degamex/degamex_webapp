<script setup>

	import { ref, reactive, onMounted } from 'vue'
	import { useRouter } from 'vue-router'
	import { useCookies } from "@vueuse/integrations/useCookies"
	import { ethers } from 'ethers'
	import { useWeb3ModalProvider } from '@web3modal/ethers5/vue'

	import Button from "@/components/Button.vue"
	import Tabs from "@/components/Tabs.vue"
	import BWrapper from "@/components/BWrapper.vue"
	import ArenaSessions from "@/components/ArenaSessions.vue"
	import ArenaDegamerStats from "@/components/ArenaDegamerStats.vue"
	import ProfileStats from "@/components/ProfileStats.vue"

	const { walletProvider } = useWeb3ModalProvider()
	
	async function onSignMessage() {
		const provider = new ethers.providers.Web3Provider(walletProvider)
		const signer = provider.getSigner()
		const signature = await signer?.signMessage('Hello Web3Modal Ethers')
		console.log(signature)
	}


	const cookies = useCookies()
	const router = useRouter()

	const activeTab = ref(0)
	
	const state = reactive({
		isLoading: true,
		stats: {
			plays: {
				title: 'Plays',
				value: 43,
			},
			wins: {
				title: 'Wins',
				value: 22,
			},
			losses: {
				title: 'Losses',
				value: 21,
			}
		},
		degamer: {}
	})

	onMounted(async () => {

		onSignMessage()


		const activeDegamerId = cookies.get("activeDegamerId")
		if ( activeDegamerId ){ 
			state.degamer = degamers[degamers.findIndex(item => item.id === activeDegamerId)]
		} else {
			cookies.set("activeDegamerId", degamers[0].id)
			state.degamer = degamers[0]
		}
		state.isLoading = false

	})


	const changeDegamer = (action) => {
		const activeDegamerId = cookies.get("activeDegamerId")
    	let index = degamers.findIndex(item => item.id === activeDegamerId)
		if (action == 'next') {
			index = (index + 1) % degamers.length;
		} else if (action == 'prev') {
			index = (index - 1 + degamers.length) % degamers.length;
		}
		state.degamer = degamers[index];
		cookies.set("activeDegamerId", degamers[index].id)
	}

	const startSession = async () => {

		/*await writeContract({
			abi,
			address: contract,
			functionName: 'startSession',
		})*/

		router.push('/arena/username')
	}

	/*watchContractEvent({
		abi,
		address: contract,
		eventName: 'OpenArena',
		onLogs(logs) {
			console.log('New logs!', logs)
		},
	})*/

	

	const degamers = [
		{
			id: 3409,
			attacks: 10,
			critical: 4.1,
			block: 2.77,
			keyPrice: 0.1189
		},
		{
			id: 1112,
			attacks: 12,
			critical: 5.2,
			block: 2.54,
			keyPrice: 0.2518
		},
		{
			id: 2234,
			attacks: 3,
			critical: 1.2,
			block: 2.33,
			keyPrice: 0.2509
		},
		{
			id: 4501,
			attacks: 10,
			critical: 4.1,
			block: 2.77,
			keyPrice: 0.1087
		},
		{
			id: 7777,
			attacks: 15,
			critical: 6.5,
			block: 3.63,
			keyPrice: 1.3451
		},
		{
			id: 3456,
			attacks: 14,
			critical: 4.5,
			keyPrice: 3.2447
		}
	]

</script>

<template>
	<div v-if="!state.isLoading" class="arena">

		<div class="arena-page-start">
			<ArenaDegamerStats :degamer="state.degamer" @start-session="startSession" @change-degamer="changeDegamer"/>
		</div>

		<div class="arena-page-content">
			
			<BWrapper class="arena-page-user-stats-wrapper">
				<div class="arena-page-top">
					<ProfileStats :stats="state.stats" class="arena-page-user-stats" />
					<Button @click="emit('start-session')" text="JOIN RANDOM BATTLE" :width="300" class="button" />
				</div>
			</BWrapper>
			
			<div class="arena-page-sessions">
				<BWrapper class="arena-page-sessions-wrapper">
					<ArenaSessions class="price-sessions"/>
				</BWrapper>
			</div>

		</div>

	</div>
	<div v-else class="arena-loading">Loading...</div>
</template>

<style scoped>
	.arena{
		display: flex;
		justify-content: flex-start;
		margin-top: 40px;
	}
	.arena-loading{
		display: flex;
		align-items: center;
		justify-content: center;
	}

	

	.arena-page-start{
		padding: 0 30px;
	}
	.arena-page-content{
		margin-left: 30px;
		width: 100%;
	}
	.arena-page-user-stats{
		padding: 10px;
		margin-right: auto;
	}

	.arena-page-top{
		display: flex;
		align-items: center;
	}
	

	.arena-page-sessions{
		margin-top: 50px;
	}
	.arena-page-sessions-wrapper{
		width: 100%;
	}
	.degmx-sessions{
		padding: 60px;
	}
	


	@media (max-width: 768px) {

	}
	
</style>