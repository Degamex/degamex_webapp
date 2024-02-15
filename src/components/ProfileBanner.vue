<script setup>
	import { defineProps, computed } from 'vue'
	const props = defineProps({
        imageUrl: {
			type: String,
			default: false
		}
	})

	const fillImage = computed(() => {
		return props.imageUrl ? `url(#bannerPattern)` : '#111111';
	})

</script>

<template>
	<div class="profile-banner">

		<svg viewBox="0 0 1500 500" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<path d="M1338.58 18.8385L1352.5 4.29581H1335.1L1321.18 18.8385H1338.58Z" :fill="'var(--main-color)'"/>
			<path d="M1314.22 18.8385L1328.14 4.29581H1286.38L1272.46 18.8385H1314.22Z" :fill="'var(--main-color)'"/>
			<path d="M1265.5 18.8385L1279.42 4.29581H1262.02L1248.1 18.8385H1265.5Z" :fill="'var(--main-color)'"/>
			<path d="M1241.14 18.8385L1255.06 4.29581H1237.66L1223.75 18.8385H1241.14Z" :fill="'var(--main-color)'"/>
			<path d="M1216.79 18.8385L1230.71 4.29581H1213.31L1199.39 18.8385H1216.79Z" :fill="'var(--main-color)'"/>
			<path d="M1192.43 18.8385L1206.35 4.29581H1188.95L1175.03 18.8385H1192.43Z" :fill="'var(--main-color)'"/>
			<path d="M1168.07 18.8385L1181.99 4.29581H1164.59L1150.67 18.8385H1168.07Z" :fill="'var(--main-color)'"/>
			<path d="M1500 24.2378V478.994L1479.18 500H20.823L0 478.994V48.4757L21.624 26.6616H1343.03L1369.46 0H1475.97L1500 24.2378Z" :fill="fillImage" />

			<defs>
				<pattern id="bannerPattern" patternContentUnits="objectBoundingBox" height="100%" width="100%">
					<use xlink:href="#bannerImage" transform="scale(0.000666667 0.002)" height="1" width="1" preserveAspectRatio="none" />
				</pattern>
				<image id="bannerImage" width="1500" height="500" :xlink:href="imageUrl" />
			</defs>
			
		</svg>

	</div>
</template>


<style scoped>
	.profile-banner{
		width: 100%;
	}
</style>