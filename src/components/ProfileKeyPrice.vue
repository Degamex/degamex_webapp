<script setup>

	import { defineProps, defineEmits } from 'vue'
	import Icon from "@/components/Icon.vue";
	import Button from "@/components/Button.vue";

	const emit = defineEmits(['buy'])
	
	const props = defineProps({
        price: { type: Number, default: 0.453 },
	})

</script>

<template>
	<div class="profile-key-price">
		<span class="data-item">
			<span class="data-label">Key price</span>
			<span class="data-value">{{ props.price }} <Icon type="eth" class="icon" /></span>
		</span>
		<Button @click="emit('buy')" text="Buy" :width="100" class="button" />
		<svg viewBox="0 0 250 100" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M68.8466 8.62559L62.8879 2.08333H70.3362L76.2949 8.62559H68.8466Z" fill="#FAFF00"/>
			<path d="M79.2742 8.62559L73.3156 2.08333H91.1915L97.1501 8.62559H79.2742Z" fill="#FAFF00"/>
			<path d="M100.129 8.62559L94.1708 2.08333H101.619L107.578 8.62559H100.129Z" fill="#FAFF00"/>
			<path d="M110.557 8.62559L104.598 2.08333H112.047L118.005 8.62559H110.557Z" fill="#FAFF00"/>
			<path d="M66.4727 12.6803L66.7688 12.9942H67.2002H240.311L249 22.2048V37.7998V90.1528L240.654 99H9.3457L1 90.1528V37.7998V11.301L10.7171 1H55.4544L66.4727 12.6803Z" fill="black" stroke="white" stroke-width="2"/>
		</svg>
	</div>
</template>


<style scoped>
	.profile-key-price{
		display: flex;
		align-items: center;
		position: relative;
		width: 300px;
		height: 120px;
	}
	.profile-key-price svg{
		width: 100%;
		margin-bottom: 15px;
	}
	.data-item{
		position: absolute;
		left: 20px;
	}
	.button{
		position: absolute;
		right: 20px;
	}
</style>