<script setup>
	import { defineProps, watch } from 'vue'
	import Icon from "@/components/Icon.vue";
	import Button from "@/components/Button.vue"
	import Img from "@/components/Img.vue";

	const now = Math.floor(new Date().getTime())

	const props = defineProps({
        sessions: {
			type: Array,
			default: [
				{
					address: '0x47B96F39522CAAF2014C89Bb04A26712d5fDc598',
					player2img: '/profiles/d2.svg',
					name: 'crypto234',
					card_price: 0.2523,
					expire_timestamp: 1707972712247,
					rank: 2,
					id: 6548
				},
				{
					address: '0x4eEcd446d12d9C0c60b563dB70268AAC62333416',
					player2img: '/profiles/d1.svg',
					name: null,
					card_price: 0.1205,
					expire_timestamp: 23423423423423,
					rank: 14,
					id: '0025'
				},
				{
					address: '0x47B96F39522CAAF2014C89Bb04A26712d5fDc598',
					player2img: '/profiles/d5.svg',
					name: 'Degamex',
					card_price: 0.0023,
					expire_timestamp: 151216126126,
					rank: 35,
					id: 3545
				},
				{
					address: '0xF8A56C81fC5286230C4F8856d8e4228BeAdCa966',
					player2img: '/profiles/d3.svg',
					name: null,
					card_price: 0.0015,
					expire_timestamp: 2343254235435,
					rank: 64,
					id: 9638
				},
				{
					address: '0xF4475Af85a484aA9A87705CF3a2F02F5BCBCdef5',
					player2img: '/profiles/d4.svg',
					name: null,
					card_price: 0.4563,
					expire_timestamp: 2342342343242342,
					rank: 109,
					id: 7789
				}
			]
		}
	})

	const name = (address, name) => { return name ? name : address.substr(0,4) + "..." + address.substr(-4) }

</script>

<template>
	<div class="sessions">
		
		<div class="sessions-header sessions-item">
			<span class="sessions-item-user">Player</span>
			<span class="sessions-item-price">Key price</span>
			<span class="sessions-item-time">Rank</span>
			<span class="sessions-item-rank">Expires in</span>
			<span class="sessions-item-play"></span>
		</div>
		<div class="sessions-list">
			<div class="sessions-item" v-for="(session, index) in props.sessions" v-bind:key="index" >
				<span class="sessions-item-user"><Img :imageUrl="session.player2img" :id="(index+1)*10" stroke="#fff" class="session-img" /><div>{{ name(session.address, session.name) }} #{{session.id}}</div></span>
				<span class="sessions-item-price">{{session.card_price}}<Icon type="eth" class="icon" /></span>
				<span class="sessions-item-rank">{{session.rank}}</span>
				<span class="sessions-item-time">
					<vue-countdown :time="session.expire_timestamp" v-slot="{ minutes, seconds }" class="countdown">
						{{ minutes }}:{{ seconds }}
					</vue-countdown>
				</span>
				<span class="sessions-item-play"><button>Join</button></span>
			</div>
		</div>
	</div>
</template>


<style scoped>

.asessions{
	padding-bottom: 30px;
	width: 100%;
}

.sessions-header{
	border-bottom: 1px solid #ffffff;
	padding-bottom: 30px;
}
.sessions-header span{
	color: #ffffff;
	font-weight: normal;
	font-size: 14px;
}


.sessions-list{
	margin-top: 30px;
	padding-bottom: 30px;
}

.sessions-item{
	display: flex;
	align-items: center;
	padding: 10px 0;
}
.sessions-list .sessions-item:hover{
	background: #00000015;
}

.sessions-item-user{
	display: flex;
	align-items: center;
	width: 200px;
}
.session-img{
	margin-right: 15px;
}
.sessions-item-price{
	display: flex;
	align-items: center;
	justify-content: flex-end;
	color: var(--main-color);
	width: 150px;
	font-weight: bold;
	margin-left: auto;
	margin-right: 30px;
}
.sessions-item-price .icon{
	width: 15px;
	margin-left: 6px;
}
.sessions-item-play{
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100px;
	margin-left: 40px;
}
.sessions-item-play button{
	font-weight: bold;
	color: var(--main-color);
	text-transform: uppercase;
	border: none;
	background: none;
	font-size: 16px;
}
.sessions-header .sessions-item-play button{
	font-size: 11px;
}
.sessions-item-rank{
	width: 120px;
	display: flex;
	justify-content: center;
}

.sessions-item-time{
	width: 120px;
	display: flex;
	justify-content: center;
}
.sessions-item-time .icon{
	margin: 0;
	width: 18px;
}

</style>