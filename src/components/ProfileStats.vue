<script setup>
	import { defineProps, computed } from 'vue'
	import Icon from "@/components/Icon.vue";

	const props = defineProps({
        stats: {
			type: Object,
			default: {}
		}

	})

	const percent = (index, value) => { 
		const plays = props.stats.plays.value
		return (100 / plays * value).toFixed(2)
	}

</script>

<template>
	<div class="profile-stats">

		<span class="data-item" v-for="(item, index) in props.stats" v-bind:key="index">
			<span class="data-label">{{item.title}}</span>
			<span class="data-value">
				{{item.value}}
				<Icon v-if="index == 'portfolio' || index == 'kye_price'" type="eth" class="icon" />
				<span v-else-if="index == 'wins' || index == 'losses'">/ {{ percent(index, item.value) }}%</span>
			</span>
		</span>

	</div>
</template>


<style scoped>
	.profile-stats{
		display: flex;
		align-items: center;
	}
	.profile-portfolio{
		align-items: flex-end;
		margin-left: auto;
		margin-right: 0;
	}
</style>