<script setup>
	import { defineProps } from 'vue'
	import Icon from "@/components/Icon.vue";
	import Img from "@/components/Img.vue";
	const props = defineProps({
        trades: {
			type: String,
			default: [
				{ key: '0xDoomer', action: 'sold', maker: '0x35d...fe1', qty: 1, total: 0.453, time: '1m ago', makerImg: '/profiles/p1.png'},
				{ key: '0xDoomer', action: 'bought', maker: '0x560...601', qty: 3, total: 1.471, time: '2m ago', makerImg: '/profiles/p2.png'},
				{ key: '0xDoomer', action: 'bought', maker: '0x8c2...45c', qty: 1, total: 0.361, time: '46m ago', makerImg: '/profiles/p3.png'},
				{ key: '0xDoomer', action: 'sold', maker: '0x1c3...e31', qty: 1, total: 0.345, time: '1h ago', makerImg: '/profiles/p4.png'},
				{ key: '0xDoomer', action: 'bought', maker: '0x8aE...b23', qty: 1, total: 0.299, time: '2h ago', makerImg: '/profiles/p5.png'},
			]
		},
	})

	const img = 'https://i.seadn.io/gae/ecdofgZBcNrvo_EUvFO0zehUyMpMGRjoc8vz3ma5mXqDubqnr0sqpyLq9SRBSd-SnRw-J4dkDWia19O2d81sLIrQIgy9iB5FWtF-SA?auto=format&dpr=1&w=750'

</script>

<template>
	<div class="activity-keys">
		<div class="activity-key-item" v-for="(trade, index) in trades" v-bind:key="index">
			<div class="item-imgs">
				<Img :imageUrl="trade.makerImg" :id="'d'+index" stroke="#fff" />
				<Img class="item-img2" :imageUrl="img" stroke="#fff" />
				
			</div>
			<div class="item-body">
				<span class="item-top" ><RouterLink to="">{{trade.maker}}</RouterLink> {{trade.action}} <span class="item-qty">{{trade.qty}} x</span><RouterLink to="" class="item-key">{{trade.key}}</RouterLink></span>
				<span class="item-bottom" ><span class="item-total">{{trade.total}}<Icon type="eth" class="icon" /></span> <span class="item-time">{{trade.time}}</span></span>
			</div>
		</div>

		<RouterLink to="" class="link-view-all" >View all</RouterLink>

	</div>
</template>


<style scoped>

.activity-keys{
	padding-bottom: 30px;
}

.activity-key-item{
	display: flex;
	align-items: center;
	margin-bottom: 20px;
}
.item-imgs{
	margin-right: 20px;
}
.item-img2{
	margin-left: -10px;
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
.item-key{
	margin-left: 10px;
}

.item-bottom{
	display: flex;
	align-items: center;
	margin-top: 10px;
}

.item-qty{
	margin-left: 10px;
	font-weight: bold;
	color: var(--main-color);
}
.item-total{
	display: flex;
	color: var(--main-color);
	align-items: center;
	font-size: 20px;
	font-weight: bold;
	margin-right: 10px;
}
.item-total .icon{
	margin: 0;
	width: 14px;
	margin-left: 5px;
}

.link-view-all{
	color: var(--main-color);
	text-decoration: none;
	text-transform: uppercase;
}


@media (max-width: 768px) {

}

</style>