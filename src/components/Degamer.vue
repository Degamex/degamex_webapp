<script setup>
	import axios from 'axios'
	import { ref, onUpdated, watch, defineProps, onMounted } from 'vue'
	import DegamerEffects from "@/components/DegamerEffects.vue"

	const isLoading = ref('')
	const svgBodyContent = ref('')
	const svgHeadContent = ref('')

	const props = defineProps({
        id: { type: Number, default: 0 },
        animation: { type: String, default: 'idle' },

    })

	onUpdated(() => {
		watch(() => props.id, (newValue, oldValue) => { loadSvgContent() })

	})

	const loadSvgContent = async () => {
		const response = await axios.get(`/degamers/${props.id}.svg`)
		const parser = new DOMParser()
		const svgDocument = parser.parseFromString(response.data, 'image/svg+xml')
		const svgBody = svgDocument.querySelector("#svgBody")
		const svgHead = svgDocument.querySelector("#svgHead")
		svgBodyContent.value = svgBody.innerHTML
		svgHeadContent.value = svgHead.innerHTML
	}

	onMounted(loadSvgContent)

</script>

<template>

<div class="degamer" :class="props.animation">
	<DegamerEffects class="degamer-effects" :type="props.animation"  />
	<div class="degamer-body">
		<div class="degamer-head">
			<svg viewBox="0 0 854 853" fill="none" xmlns="http://www.w3.org/2000/svg" v-html="svgHeadContent"></svg>
		</div>
		<svg viewBox="0 0 854 853" fill="none" xmlns="http://www.w3.org/2000/svg" v-html="svgBodyContent"></svg>
	</div>
</div>

</template>

<style scoped>
.degamer{
	display: flex;
	width: 480px;
	height: 480px;
	position: relative;
}
.degamer svg{
	width: 100%;
}
.degamer-body{
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	width: 100%;
}
.degamer-head{
	position: absolute;
	width: 100%;
}
.degamer-effects{
	position: absolute;
}

</style>
