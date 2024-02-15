<script setup>

	import { defineProps, computed } from 'vue'
	import Icon from "@/components/Icon.vue"

	const props = defineProps({
        status: { type: String },
        expires: { type: Number, default: 0 }
	})

    const fillImage = computed(() => {
		return props.player.profileImageUrl ? `url(#playerProfilePattern${props.inverse})` : '#111111';
	})

</script>

<template>

	<div class="pvp-countdown">
        <span class="pvp-countdown-time">
            <vue-countdown :time="props.expires" v-slot="{ minutes, seconds }" class="countdown">
                {{ minutes }}:{{ seconds }}
            </vue-countdown>
        </span>
        <span class="pvp-status">{{ props.status }}</span>
        <svg  viewBox="0 0 321 141" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.000183105 0.5V129.024L11.976 141H99.5L112.5 128H205.476L218.476 141H256.5L266.151 131.349H310.5L321 120.849V0.5H0.000183105Z" fill="#19191a"/>
            <path d="M204.207 132L210 138L202.759 138L196.966 132L204.207 132Z" fill="#FAFF00"/>
            <path d="M194.069 132L199.862 138L192.621 138L186.828 132L194.069 132Z" fill="#FAFF00"/>
            <path d="M183.931 132L189.724 138L150.481 138L144.688 132L183.931 132Z" fill="#FAFF00"/>
            <path d="M141.791 132L147.584 138L140.343 138L134.55 132L141.791 132Z" fill="#FAFF00"/>
            <path d="M131.653 132L137.446 138L130.205 138L124.412 132L131.653 132Z" fill="#FAFF00"/>
            <path d="M121.331 132L127.124 138L107.998 138L114.09 132L121.331 132Z" fill="#FAFF00"/>
        </svg>
    </div>

</template>

<style scoped>
    .pvp-countdown{
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
        padding-top: 15px;
	}
	.pvp-countdown svg{
		position: absolute;
		width: 300px;
		top: 0;
	}
	.pvp-countdown-time{
		font-size: 48px;
		position: relative;
		z-index: 1;	
	}
	.pvp-status{
		position: relative;
		z-index: 1;
		width: 280px;
		text-align: center;
		font-size: 14px;
		text-transform: uppercase;
	}

</style>
