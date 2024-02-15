<script setup>

import { reactive } from 'vue'

import ProfileBanner from "@/components/ProfileBanner.vue"
import ProfileImage from "@/components/ProfileImage.vue"
import ProfileKeyPrice from "@/components/ProfileKeyPrice.vue"
import ProfileData from "@/components/ProfileData.vue"
import ProfileStats from "@/components/ProfileStats.vue"
import Tabs from "@/components/Tabs.vue"
import BWrapper from "@/components/BWrapper.vue"
import KeysActivity from "@/components/KeysActivity.vue"
import PlaysActivity from "@/components/PlaysActivity.vue"

const stats = {
	portfolio: {
		title: 'Portfolio',
		value: 21.057,
	},
	holders: {
		title: 'Holders',
		value: 131,
	},
	holdings: {
		title: 'Holdings',
		value: 224,
	},
	plays: {
		title: 'Plays',
		value: 192,
	},
	wins: {
		title: 'Wins',
		value: 101,
	},
	losses: {
		title: 'Losses',
		value: 91,
	}
}


</script>

<template>

	<div class="profile">
		<div class="profile-page-header">
			<ProfileBanner imageUrl="https://pbs.twimg.com/profile_banners/1575815410766663680/1703263070/1500x500" class="profile-banner" />
			<ProfileImage imageUrl="https://i.seadn.io/gae/ecdofgZBcNrvo_EUvFO0zehUyMpMGRjoc8vz3ma5mXqDubqnr0sqpyLq9SRBSd-SnRw-J4dkDWia19O2d81sLIrQIgy9iB5FWtF-SA?auto=format&dpr=1&w=750" class="profile-image" />
			<ProfileKeyPrice class="profile-key-price"/>
		</div>
		<div class="profile-page-data">
			<ProfileData />
		</div>
		<div class="profile-page-stats">
			<ProfileStats :stats="stats" />
		</div>
		<div class="profile-page-activity">

			<div class="profile-page-key-activity">
				<Tabs :tabs="['Keys', 'Trades']" :activeTabIndex="0" class="profile-page-activity-tabs"/>
				<BWrapper class="profile-page-activity-wrapper">
					<KeysActivity class="profile-page-activity-body"/>
				</BWrapper>
			</div>

			<div class="profile-page-play-activity">
				<Tabs :tabs="['Plays']" :activeTabIndex="0" class="profile-page-activity-tabs"/>
				<BWrapper class="profile-page-activity-wrapper">
					<PlaysActivity class="profile-page-activity-body"/>
				</BWrapper>
			</div>

		</div>

		<!--div class="profile-page-hold">
			<Tabs :tabs="['Holders', 'Holdings']" :activeTabIndex="0" class="profile-page-activity-tabs"/>
			<BWrapper class="profile-page-activity-wrapper">
				<KeysActivity />
			</BWrapper>
		</div-->
		
	</div>

</template>

<style scoped>

	.profile-page-header{
		display: flex;
		flex-direction: column;
		position: relative;
	}
	.profile-image{
		position: absolute;
		left: 30px;
		bottom: -20px;
	}
	.profile-key-price{
		position: absolute;
		right: 30px;
		bottom: -20px;
	}
	.profile-page-data{
		margin-top: 60px;
		padding: 0 30px;
	}
	.profile-page-stats{
		margin-top: 40px;
		padding: 0 30px;
	}

	.profile-page-activity{
		display: flex;
	}
	.profile-page-activity-tabs{
		padding: 0 30px;
		margin-top: 60px;
		justify-content: flex-end;
		margin-bottom: -15px;
	}

	.profile-page-key-activity{
		width: 50%;
		margin-right: 20px;
	}
	.profile-page-play-activity{
		margin-left: 20px;
		width: 50%;
	}
	.profile-page-activity-body{
		padding: 30px;
	}

	.profile-page-hold{
		width: 100%;
	}


	@media (max-width: 768px) {

	}
	
</style>