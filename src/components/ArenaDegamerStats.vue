<script setup>

	import { defineProps, defineEmits, onUpdated, watch } from 'vue'
	import BWrapper from "@/components/BWrapper.vue"
	import Degamer from "@/components/Degamer.vue"
	import Icon from "@/components/Icon.vue"
	import Button from "@/components/Button.vue"

	const emit = defineEmits(['start-session', 'change-degamer'])

	const props = defineProps({
        degamer: { type: Object, default: {} }
	})


</script>

<template>

	<div class="degamer-stats">
		<BWrapper type="type2" :color="'#ffffff'" class="degamer-stats-wrapper">
			
			<Button @click="emit('start-session')" text="Host Arena" :width="250" class="button" />
			
			<div class="degamer-token-id">
				<Icon @click="emit('change-degamer', 'prev')" type="prev" class="icon" :color="'#ffffff'" />
				<span class="degamer-token-id-value">#{{props.degamer.id}}</span>
				<Icon @click="emit('change-degamer', 'next')" type="next" class="icon" :color="'#ffffff'" />
			</div>
			
			<div class="degamer-stats-list">
				<span class="data-item degamer-stats-data-item">
					<span class="data-label">Attacks</span>
					<span class="data-value">{{ props.degamer.attacks }}</span>
				</span>
				<span class="data-item degamer-stats-data-item">
					<span class="data-label">Block chance</span>
					<span class="data-value">{{ props.degamer.block }}%</span>
				</span>
				<span class="data-item degamer-stats-data-item">
					<span class="data-label">Crit chance</span>
					<span class="data-value">{{ props.degamer.critical }}%</span>
				</span>
				<span class="data-item degamer-stats-data-item">
					<span class="data-label">Current price</span>
					<span class="data-value">{{ props.degamer.keyPrice }}<Icon type="eth" class="icon" /></span>
				</span>
			</div>

			<div class="degamer-preview">
				<Degamer :id="props.degamer.id" />
			</div>

		</BWrapper>
    </div>

</template>

<style scoped>
    .degamer-stats{
		width: 320px;
		user-select: none;
	}
	.button{
		margin: 0 auto;
		margin-top: 20px;
		margin-left: 10px;

	}
	.degamer-stats-wrapper{
		display: flex;
		flex-direction: column;
	}
	.degamer-stats-data-item{
		display: flex;
		align-items: center;
		flex-direction: row;
		width: auto;
		margin: 0 10px;
		margin-top: 10px;
	}
	.degamer-stats-data-item .data-value{
		margin: 0;
		font-size: 16px;
		margin-left: auto;
	}
	.degamer-stats-data-item .icon{
		width: 12px;
	}
	.arena-degamer{
		position: absolute;
		bottom: 0;
		transform-origin: 50% 100%;
	}
	.degamer-token-id{
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24px;
		font-weight: bold;
		color: var(--main-color);
		margin-top: 20px;
		margin-bottom: 20px;
	}
	.degamer-token-id-value{
		width: 100px;
		text-align: center;
	}
	.degamer-token-id .icon{
		margin: 10px 20px;
		cursor: pointer;
	}
	.degamer-token-id .icon:hover{
		transform: scale(1.05);
	}
	.degamer-token-id .icon:active{
		transform: scale(0.95);
	}
	.degamer-preview{
		overflow: hidden;
		margin-bottom: -20px;
	}
	.degamer-preview .degamer{
		width: 300px;
		height: 300px;
		transform: scaleX(-1);
		margin-bottom: -10px;
	}


</style>
