<script setup>

	import { onMounted, reactive, computed } from 'vue'
	import { useRoute } from 'vue-router'
	import { useCookies } from "@vueuse/integrations/useCookies"
	import Button from "@/components/Button.vue"
	import BWrapper from "@/components/BWrapper.vue"
	import ArenaSessions from "@/components/ArenaSessions.vue"
	import ArenaDegamerStats from "@/components/ArenaDegamerStats.vue"
	import PvpPlayerBar from "@/components/PvpPlayerBar.vue"
	import PvpCountdown from "@/components/PvpCountdown.vue"
	import PvpItem from "@/components/PvpItem.vue"
	import PvpChat from "@/components/PvpChat.vue"
	import PvpLogs from "@/components/PvpLogs.vue"
	import PvpDamage from "@/components/PvpDamage.vue"
	import Degamer from "@/components/Degamer.vue"
	import DegamerEffects from "@/components/DegamerEffects.vue"
	
	const route = useRoute()	//console.log(route.params.user)
	const cookies = useCookies() 
	const now = new Date()

	const activeDegamerId = cookies.get("activeDegamerId")

	const bgs = [
		'https://www.shutterstock.com/image-illustration/3d-rendering-neon-mega-city-600nw-2194644871.jpg',
		'https://e1.pxfuel.com/desktop-wallpaper/585/487/desktop-wallpaper-cyber-city-concept-art-cybercity.jpg',
		'https://images5.alphacoders.com/475/475525.jpg',
		'https://w0.peakpx.com/wallpaper/285/379/HD-wallpaper-cyberpunk-city-cyberpunk-artist-city-digital-art-artwork-artstation.jpg'
	]

	onMounted(async () => {

		state.logs.push('Start session')
		setTimeout(() => { 
			state.statusText = 'The enemy joins the session...' 
		}, 2000)
		setTimeout(() => { 
			state.statusText = 'Your move!'
			state.status = 'your_enemy'
			state.logs.push('0x345..34d connected')
			state.player2 = {
				profileImageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsBL4CsYkv0D_iHC1jRl90pc7lbGb7U9v3wQ&usqp=CAU",
				isMove: false,
				moves: {
					total: 5,
					left: 5
				},
				cardPrice: 0.2703,
				cardPriceChange: 0,
				currentAnimation: false,
				currentEffect: false
			}
		}, 4000)

	})

	const state = reactive({
		isLoading: false,
		isAnimation: false,
		isSending: false,
		statusText: 'Waiting for the enemy...',
		status: 'wait_enemy',
		player1: {
			profileImageUrl: "https://pbs.twimg.com/profile_images/1748044072151838720/m7CQeXPG_400x400.jpg",
			isMove: true,
			moves: {
				total: 5,
				left: 5
			},
			cardPrice: 0.2475,
			cardPriceChange: 0,
			currentAnimation: false,
			currentEffect: false,
		},
		player2: false,
		items: [
			{
				id: 1,
				name: 'lightning',
				animation: 'lightning_damage',
				damage: 100,
				qty: 1,
			},
			{
				id: 2,
				name: 'katana',
				animation: 'katana_damage',
				damage: 114,
				qty: 1,
			},
			{
				id: 3,
				name: 'red',
				animation: 'red_damage',
				damage: 155,
				qty: 1,
			},
			{
				id: 6,
				name: '2katana',
				animation: 'red_damage',
				damage: 155,
				qty: 1,
			},
			{
				id: 7,
				name: 'flame',
				animation: 'lightning_damage',
				damage: 321,
				qty: 1,
			},
			{
				id: 8,
				name: 'shuriken',
				animation: 'red_damage',
				damage: 155,
				qty: 3,
			},
			{
				id: 5,
				name: 'grenade',
				animation: 'grenade_damage',
				damage: 120,
				qty: 1,
			},
			{
				id: 9 ,
				name: 'scull',
				animation: 'red_damage',
				damage: 445,
				qty: 1,
			},
			{
				id: 4,
				name: 'poison',
				animation: 'poison_damage',
				damage: 55,
				qty: 2,
			},
			
		],
		attack: {},
		logs: [],
		chat: []
	})

	let isPlayer1 = true

	const useItem = async (item) => {

		if (!state.isAnimation){
			
			state.player1.currentAnimation = 'idle'
			state.player2.currentAnimation = 'idle'

			const cr = getRandomNumber(0, 10) > 6
			const block = getRandomNumber(0, 10) > 2 && !cr
			let dmg = getRandomNumber(445, 6544)
			if (cr){
				dmg = dmg * 1.5
			}
			if (block){
				dmg = dmg * 0.12
			}
			const ch = parseFloat(getRandomNumber(1024, 5004) / 1000)
	
			await new Promise(r => setTimeout(r, 1000))

			const to = !isPlayer1 ? '0x345..34d' : 'You'
			const from = !isPlayer1 ? 'You' : '0x345..34d'

			const resultAttack = {
				from: from, 
				to: to,
				action: item.name,
				damage: parseInt(dmg),
				change: ch,
				critical: cr,
				block: block,
				tx: '0x4b076cf4bcac00f36339b83547124d193a8f4387cc3b5e73c61e738e0a65c788'
			}

			state.logs.push(resultAttack)
			animateAttack(resultAttack)

		}
		
	}

	const animateAttack = (attack) => {

		const to = isPlayer1 ? state.player1 : state.player2
		const from = isPlayer1 ? state.player2 : state.player1
		
		state.isAnimation = true

		to.currentAnimation = getAnimationByName(state.items, attack.action)
		
		setTimeout(() => { 
			state.attack = attack
			to.cardPriceChange = parseFloat((to.cardPriceChange - attack.change).toFixed(3))
			to.cardPrice = parseFloat((parseFloat(to.cardPrice) - parseFloat(to.cardPrice / 100 * attack.change)).toFixed(4))
			from.cardPriceChange = parseFloat((from.cardPriceChange + attack.change).toFixed(3))
			from.cardPrice = parseFloat((parseFloat(from.cardPrice) + parseFloat(from.cardPrice / 100 * attack.change)).toFixed(4))
			from.moves.left -= 1

			/*const claimAnimation = setInterval(() => {
				
				to.cardPriceChange = (to.cardPriceChange -= 0.01).toFixed(4)
				if (to.cardPriceChange + attack.change <= 0){
					clearInterval(claimAnimation)
				}
			
			}, 20)*/
			
		}, 1000)
		setTimeout(() => { to.currentAnimation = 'idle' }, 2000)
		setTimeout(() => {
			state.attack = {}
			state.isAnimation = false
		}, 5000)
		
		isPlayer1 = !isPlayer1

	}

	const getRandomNumber = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	const getAnimationByName = (items, name) => {
		console.log(name)
		for (let i = 0; i < items.length; i++) {
			if (items[i].name === name) {
			return items[i].animation;
			}
		}
		return null;
	}

	const shortAddress = computed(() => { return props.userData.address ? props.userData.address.substr(0,4) + "..." + props.userData.address.substr(-4) : false })

</script>

<template>
	<div class="pvp" :style="`background-image: url(${bgs[1]})`">

		<div class="pvp-top">

			<RouterLink to="/arena" class="pvp-exit"><Button text="← Exit" :width="100" :height="50" /></RouterLink>
			<div class="pvp-player1-bar">
				<PvpPlayerBar :player="state.player1" />
			</div>
			<PvpCountdown :status="state.statusText" :expires="34254323454" />
			<div class="pvp-player2-bar">
				<PvpPlayerBar :player="state.player2" inverse :class="{invisible: !state.player2}" />
			</div>
			
		</div>

		<div class="pvp-center">
			<PvpChat class="pvp-chat" :chat="state.chat" />
			<Degamer class="degamer-player1" :id="activeDegamerId" :animation="state.player1.currentAnimation" :class="{invisible: !state.player1}"/>
			<PvpDamage class="pvp-damage" :class="{ player2: !isPlayer1, show: state.attack.damage > 0}" :damage="state.attack" />
			<Degamer class="degamer-player2" :id="3409" :animation="state.player2.currentAnimation" :class="{invisible: !state.player2}" />
			<PvpLogs class="pvp-logs" :logs="state.logs"/>
		</div>

		<div class="pvp-bottom">
			<BWrapper>
				<div class="pvp-bottom-panel">
					<div class="pvp-inventory" :class="{disabled: state.isAnimation}">
						<PvpItem v-for="(item, index) in state.items" v-bind:key="index" :item="item" @click="useItem(item)"/>
					</div>
				</div>
			</BWrapper>
		</div>
		
	</div>
</template>

<style scoped>
	.pvp{
		display: flex;
		flex-direction: column;
		height: 100vh;
		min-height: 640px;
		overflow: hidden;
		background-position: center center;
		background-size: contain;
	}

	.pvp-top{
		display: flex;
		justify-content: center;
		position: relative;
	}
	.pvp-exit{
		color: var(--main-color);
		font-size: 24px;
		position: absolute;
		z-index: 2;
		bottom: -60px;
		left: 30px;
	}
	.pvp-player1-bar{
		width: 480px;
	}
	.pvp-player2-bar{
		width: 480px;
	}

	.pvp-center{
		display: flex;
		align-items: flex-end;
		justify-content: center;
		margin-top: auto;
		position: relative;
	}
	.degamer-player1{
		transform: scaleX(-1);
		margin-bottom: -40px;
	}
	.degamer-player2{
		margin-bottom: -40px;
	}
	.pvp-chat{
		position: absolute;
		left: 30px;
		z-index: 1;
		margin-bottom: 20px;
	}
	.pvp-logs{
		position: absolute;
		right: 30px;
		z-index: 1;
		margin-bottom: 20px;
	}
	.pvp-damage{
		position: absolute;
		z-index: 2;
		top: 0;
		margin-left: 300px;
		margin-right: 0;
		opacity: 0;
	}
	.pvp-damage.player2{
		margin-left: 0;
		margin-right: 300px;
	}

	.pvp-damage.show{
		opacity: 1;
	}
	
	.pvp-bottom{
		position: relative;
		z-index: 15;
		padding: 0 30px;
	}
	.pvp-bottom-panel{
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 20px 0;
	}
	.pvp-inventory{
		display: flex;
		align-items: center;
	}
	.pvp-inventory .item{
		margin: 10px;
	}

	.invisible{
		opacity: 0;
	}

	@media (max-width: 768px) {

	}
	
</style>