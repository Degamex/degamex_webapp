<script setup>
import Button from "@/components/Button.vue"
import ProfileStats from "@/components/ProfileStats.vue"
import Tabs from "@/components/Tabs.vue"
import BWrapper from "@/components/BWrapper.vue"
import KeysActivity from "@/components/KeysActivity.vue"

const stats = {
	portfolio: {
		title: 'Portfolio',
		value: 0,
	},
	card_price: {
		title: 'Key price',
		value: 0,
	},
	holders: {
		title: 'Holders',
		value: 0,
	},
	holdings: {
		title: 'Holdings',
		value: 0,
	},
}
</script>

<template>
	<div class="keys">
		<div class="keys-page-stats">
			<ProfileStats :stats="stats" />
		</div>
		<div class="keys-page-activity">
			<Tabs :tabs="['You', 'Your', 'Global']" :activeTabIndex="0" class="keys-page-activity-tabs"/>
			<BWrapper class="keys-page-activity-wrapper">
				<KeysActivity />
			</BWrapper>
		</div>
	</div>
</template>

<style scoped>
	.keys-page-stats{
		padding: 0 30px;
		margin-top: 40px;
	}
	.keys-page-activity-tabs{
		padding: 0 30px;
		margin-top: 40px;
		justify-content: flex-end;
		margin-bottom: -15px;
	}
	@media (max-width: 768px) {

	}
	
</style>