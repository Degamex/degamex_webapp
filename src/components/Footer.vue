<script setup>
	import SocialLinks from '@/components/SocialLinks.vue'
	const currentYear = new Date().getFullYear()
</script>

<template>

	<footer>

		<p>© {{currentYear}} degamex.com</p>
		<SocialLinks />
		<RouterLink to="/privacy">Privacy Policy</RouterLink>
		<RouterLink to="/terms">Terms of service</RouterLink>
		
	</footer>

</template>

<style scoped>
	footer{
		display: flex;
		align-items: center;
		justify-content: flex-start;
		padding: 0 30px;
		padding-top: 30px;
		padding-bottom: 30px;
		position: relative;
		font-size: 14px;
		width: 100%;
		
	}
	p{
		margin-right: 30px;
	}
	a{
		margin-left: 20px;
		color: var(--main-color);
	}

	@media (max-width: 768px) {
		footer{
			flex-direction: column;
			text-align: center;
		}
		p{
			margin: 0;
			margin-top: 20px;
			order: 4;
		}
		a{
			margin-left: 0px;
			margin-top: 10px;
		}
	}
</style>
