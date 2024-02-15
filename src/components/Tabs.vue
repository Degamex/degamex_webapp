<script setup>
	import { defineProps, computed } from 'vue'

	const emit = defineEmits(['change-tab'])
	const props = defineProps({
        tabs: {
			type: Array,
			default: []
		},
		activeTabIndex: {
			type: Number,
			default: 0
		}
	})

</script>

<template>
	<div class="tabs">
		<span v-for="(tab, index) in props.tabs" v-bind:key="index" :class="{ 'active': index == props.activeTabIndex }" @click="emit('change-tab', index)" >{{ tab }}</span>
	</div>
</template>


<style scoped>

	.tabs{
		display: flex;
		margin-left: -30px;
	}
	.tabs span{
		margin-left: 30px;
		text-transform: uppercase;
		font-weight: bold;
		cursor: pointer;
		padding-bottom: 10px;
	}
	.tabs span:hover{
		color: var(--main-color);
	}
	.tabs span.active{
		color: var(--main-color);
		position: relative;
	}
	.tabs span.active::after{
		content: '';
		width: 100%;
		height: 5px;
		position: absolute;
		background: var(--main-color);
		bottom: 0;
		left: 0;
	}
	

</style>