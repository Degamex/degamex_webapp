<script setup>
	import { defineProps, computed } from 'vue'
	const props = defineProps({
        imageUrl: {
			type: String,
			default: false
		}
	})

	const fillImage = computed(() => {
		return props.imageUrl ? `url(#profilePattern)` : '#111111';
	})

</script>

<template>
	<div class="profile-image">

		<svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<path d="M73.4499 130.749L73.1563 130.451H72.7385L29.5323 130.451H29.1145L28.8209 130.749L20.6685 139L7.06404 139L1 133.032L1.00001 7.14589L7.07224 1L132.928 1.00001L139 7.1459V131.818L131.904 139L81.6024 139L73.4499 130.749Z" :fill="fillImage" stroke="white" stroke-width="2"/>
			<path d="M23 136L78 136L72.6774 130L28.6774 130L23 136Z" fill="white"/>
			<defs>
				<pattern id="profilePattern" patternContentUnits="objectBoundingBox" width="1" height="1">
					<use xlink:href="#profileImage" transform="scale(0.002)"/>
				</pattern>
				<image id="profileImage" width="500" height="500" :xlink:href="imageUrl"/>
			</defs>
		</svg>

	</div>
</template>


<style scoped>
	.profile-image{
		width: 100%;
		max-width: 200px;
	}
</style>