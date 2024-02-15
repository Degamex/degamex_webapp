<script setup>
	import { defineProps, computed } from 'vue'
	import Icon from "@/components/Icon.vue";

	const props = defineProps({
        userData: {
			type: Object,
			default: {
				name: 'Doomer',
				username: '0x_doomer',
				rank: 41,
				address: '0x36243adE16d74eedbB3f2b8B2ECf286F538Ef5fD',
				links:[
					{ url: 'https://x.com', icon: 'x' },
					{ url: 'https://t.me', icon: 'telegram' },
					{ url: 'https://discord.com', icon: 'discord' },
				]
			}
		}
	})

	const shortAddress = computed(() => { return props.userData.address ? props.userData.address.substr(0,4) + "..." + props.userData.address.substr(-4) : false })

</script>

<template>
	<div class="profile-data">
		
		<div class="profile-data-top">
			<div>
				<p class="profile-name">{{userData.name}}</p>
				<span class="profile-username">@{{userData.username}}</span>
			</div>
			<div class="profile-links">
				<a v-for="(link, index) in props.userData.links" v-bind:key="index" :href="link.url" target="_blank"><Icon :type="link.icon" class="icon"/></a>
			</div>
			<div class="profile-data-bottom">
				<span class="profile-rank">#{{userData.rank}}</span>
				<span class="profile-address">{{shortAddress}}</span>
			</div>
		</div>

	</div>
</template>


<style scoped>

	.profile-data-top{
		display: flex;
		align-items: center;
	}
	.profile-name{
		font-size: 28px;
		font-weight: bold;
		margin-right: 30px;
	}
	.profile-links{
		display: flex;
		align-items: center;
	}
	.profile-links a{
		display: block;
		margin-left: 20px;
	}
	.profile-links a:hover{
		transform: scale(1.05);
	}
	.profile-links .icon{
		width: auto;
		height: 24px;
	}

	.profile-data-bottom{
		display: flex;
		align-items: center;
	}
	.profile-data-bottom span{
		margin-left: 30px;
	}
	.profile-rank{
		font-size: 20px;
		font-weight: bold;
		color: var(--main-color);
	}
	

</style>