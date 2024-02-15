<script setup>

</script>

<template>
	<div class="loading_circle">
		<!--img class="loading_circle1" src="@/assets/loading_circle1.svg" />
		<img class="loading_circle2" src="@/assets/loading_circle2.svg" /-->
	</div>
</template>

<style scoped>
	.loading_circle {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 30px;
	}
	.loading_circle .loading_circle1{
		animation: rotate 1s linear infinite;
		position: absolute;
	}
	.loading_circle .loading_circle2{
		animation: rotate 1.8s linear infinite alternate;
	}
</style>
