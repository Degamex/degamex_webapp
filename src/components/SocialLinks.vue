<script setup>
    import Icon from "@/components/Icon.vue";
</script>

<template>
	<div class="social-links">
        <a href="https://x.com/DeGameXcom" target="_blank" class="social-link"><Icon type="x" class="icon" /></a>
        <a href="https://discord.gg/qdtfBj7xtS"  target="_blank" class="social-link"><Icon type="discord" class="icon" /></a>
	</div>
</template>

<style scoped>
	.social-links{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: -10px;
    }
    .social-link{
        width: 32px;
        margin-left: 10px;
        margin-right: 10px;
        padding: 5px;
    }
    .social-link .icon{
        height: 24px;
    }
    .social-link:hover{
        transform: scale(1.05);
    }
</style>