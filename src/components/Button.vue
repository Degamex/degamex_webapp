<script setup>
	import { defineProps } from 'vue'
	const props = defineProps({
		fill: {
			type: String,
			default: 'none'
		},
		stroke: {
			type: String,
			default: 'var(--main-color)'
		},
		width: {
			type: Number,
			default: 300
		},
		height: {
			type: Number,
			default: 60
		},
		text: String,
		href: String
	})

</script>

<template>
<div>

	<a v-if="props.href" :href="props.href" target="_blank">
		<span :style="`color:${stroke};`">{{props.text}}</span>
		<svg :height="props.height" :viewBox="`0 0 ${props.width+2} ${props.height+3}`" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path :d="`M${props.width} 10L${props.width-10} 2H10L2 10V${props.height-7}L10 ${props.height}H${props.width-10}L${props.width} ${props.height-7}V10Z`" :fill="props.fill" :stroke="props.stroke" stroke-width="5"/>
		</svg>
	</a>

	<button v-else>
		<span :style="`color:${stroke};`">{{props.text}}</span>
		<svg :height="props.height" :viewBox="`0 0 ${props.width+2} ${props.height+3}`" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path :d="`M${props.width} 10L${props.width-10} 2H10L2 10V${props.height-7}L10 ${props.height}H${props.width-10}L${props.width} ${props.height-7}V10Z`" :fill="props.fill" :stroke="props.stroke" stroke-width="5"/>
		</svg>
	</button>

</div>
</template>


<style scoped>
div{
	display: inline-block;
}
button, a{
	border: none;
	background: none;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	transition: all 0.2s;
	text-decoration: none;
}
button span, a span{
	position: absolute;
	font-weight: bold;
	font-size: 18px;
	text-transform: uppercase;
	text-decoration: none;
	transition: all 0.2s;
}
button:hover, a:hover{
	transform: scale(1.02);
}
button:hover span, a:hover span{
	transform: scale(1.05);
}
button:active, a:active{
	transform: scale(0.90);
}
</style>