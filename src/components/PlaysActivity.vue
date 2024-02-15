<script setup>
	import { defineProps } from 'vue'
	import Icon from "@/components/Icon.vue";
	import Img from "@/components/Img.vue";
	const props = defineProps({
        plays: {
			type: String,
			default: [
				{ player1: '0xDoomer', player2: '0xF44...Bef5',  change: -3.39, time: '1m ago', player2img: '/profiles/d1.svg'},
				{ player1: '0xDoomer', player2: '0x560...601', change: 4.02, time: '2m ago', player2img: '/profiles/d3.svg'},
				{ player1: '0xDoomer', player2: '0x8AE...b23', change: -3.05, time: '46m ago', player2img: '/profiles/d4.svg'},
				{ player1: '0xDoomer', player2: '0xA92...39F', change: 10.87, time: '1h ago', player2img: '/profiles/d2.svg'},
				{ player1: '0xDoomer', player2: '0x560...601', change: 1.07, time: '2h ago', player2img: '/profiles/d3.svg'},
			]
		},
	})


	const img = '/profiles/d5.svg'

</script>

<template>
	<div class="activity-plays">
		<div class="activity-play-item" v-for="(play, index) in plays" v-bind:key="index" :class="{ win: play.change > 0, losse: play.change < 0 }">
			<div class="item-imgs">
				<Img :imageUrl="img" :id="(index+1)*10" stroke="#fff" />
				<Icon type="vs" class="vs"  />
				<Img class="item-img2" :id="index" :imageUrl="play.player2img" stroke="#fff" />
			</div>
			<div class="item-body" >
				<span class="item-top" ><RouterLink to="">{{play.player1}}</RouterLink> <span class="item-result">{{ play.change > 0 ? 'win' : 'losse' }}</span> <RouterLink to="" class="item-play">{{play.player2}}</RouterLink></span>
				<span class="item-bottom" ><span class="item-change">{{play.change}}%</span> <span class="item-time">{{play.time}}</span></span>
			</div>
		</div>

		<RouterLink to="" class="link-view-all" >View all</RouterLink>

	</div>
</template>


<style scoped>

.activity-plays{
	padding-bottom: 30px;
}

.activity-play-item{
	display: flex;
	align-items: center;
	margin-bottom: 20px;
}
.item-imgs{
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
	position: relative;
}
.item-img2{
	margin-left: 10px;
}
.item-imgs .vs{
	position: absolute;
	width: 26px;
}

.item-top{
	display: flex;
	align-items: center;
}
.item-top a{
	margin-right: 10px;
	color: #ffffff;
	text-decoration: none;
	display: flex;
	align-items: center;
}
.item-top a div{
	margin-right: 10px;
}
.item-result{
	margin-right: 10px;
	text-transform: uppercase;
	font-weight: bold;
}

.item-bottom{
	display: flex;
	align-items: center;
	margin-top: 10px;
}
.item-change{
	display: flex;
	color: var(--main-color);
	align-items: center;
	font-size: 20px;
	font-weight: bold;
	margin-right: 10px;
}
.win .item-change{
	content: 'WIN';
	color: #aaff00;
}
.losse .item-change{
	content: 'LOSSE';
	color: #ff1e00;
}

.link-view-all{
	color: var(--main-color);
	text-decoration: none;
	text-transform: uppercase;
}


@media (max-width: 768px) {

}

</style>