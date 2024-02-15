<script setup>

	import { defineProps, computed } from 'vue'
	import Icon from "@/components/Icon.vue"

	const props = defineProps({
        player: { type: Object, default: {} },
        inverse: { type: Boolean, default: false }
	})

    const fillImage = computed(() => {
		return props.player.profileImageUrl ? `url(#playerProfilePattern${props.inverse})` : '#111111';
	})

</script>

<template>

	<div v-if="props.player" class="player-bar" :class="{inverse: props.inverse}">

        <div class="player-profile-image">
            <svg v-if="props.player.isMove" class="is-move-indicator" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.492 74.4622L15.7381 74.4622L15.7381 84.9997L7.86903 84.9997L3.42461e-07 77.0966L-2.99618e-09 69.1934L10.492 69.1934L10.492 74.4622Z" fill="#FAFF00"/>
                <path d="M74.508 10.5374L69.2619 10.5374L69.2619 -7.16921e-05L77.131 -7.20361e-05L85 7.90304L85 15.8061L74.508 15.8061L74.508 10.5374Z" fill="#FAFF00"/>
                <path d="M10.492 10.537L10.492 15.8058L-3.02458e-06 15.8058L-3.02607e-06 7.90269L7.86903 -0.000213967L15.7381 -0.000214311L15.7381 10.537L10.492 10.537Z" fill="#FAFF00"/>
                <path d="M74.508 74.4625L74.508 69.1937L85 69.1937L85 77.0969L77.131 85L69.2619 85L69.2619 74.4625L74.508 74.4625Z" fill="#FAFF00"/>
            </svg>
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path d="M62 6.35088L58.067 2H5.93297L2 6.35088V57.6491L5.93297 62H58.067L62 57.6491V6.35088Z" :fill="fillImage" stroke="white" stroke-width="3"/>
                <defs>
                    <pattern :id="`playerProfilePattern${props.inverse}`" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use :xlink:href="`#playerProfileImage${props.inverse}`" transform="translate(0 -0.206751) scale(0.0021097)"/>
                    </pattern>
                    <image :id="`playerProfileImage${props.inverse}`" width="474" height="670" :xlink:href="props.player.profileImageUrl"/>
                </defs>
            </svg>
        </div>

        <div class="player-bar-data">
            <div class="player-bar-moves">
                <span v-for="(item, index) in props.player.moves.left" v-bind:key="index" :style="'width: ' + 92 / props.player.moves.total + '%;'"></span>
                <svg viewBox="0 0 304 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M302 6.55806L297.572 2H6.42784L2 6.55806V17.4419L6.42784 22H297.572L302 17.4419V6.55806Z" stroke="white" stroke-width="4"/>
                </svg>
            </div>
            <div class="player-bar-card-price">
                <span class="data-value">{{ props.player.cardPrice }} <Icon type="eth" class="icon" /></span>
                <span class="card-price-change" :class="{ up: props.player.cardPriceChange > 0, down: props.player.cardPriceChange < 0 }">{{ props.player.cardPriceChange }}%</span>
            </div>
        </div>

    </div>

</template>

<style scoped>
    .player-bar{
        margin: 30px;
        display: flex;
        align-items: center;
    }
    .inverse{
        flex-direction: row-reverse;
    }

    .player-profile-image{
        display: flex;
        align-items: center;
        justify-content: center;
		width: 100px;
        position: relative;
	}
    .is-move-indicator{
        position: absolute;
        width: 110%;
    }
    .player-bar-data{
        min-width: 300px;
        margin-left: 20px;
    }
    .inverse .player-bar-data{
        margin-left: 0px;
        margin-right: 20px;
    }
    .player-bar-moves{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-top: 15px;
    }
    .inverse .player-bar-moves{
        justify-content: flex-end;
    }
    .player-bar-moves svg{
        position: absolute;
        margin-left: -5px;
    }
    .inverse .player-bar-moves svg{
        margin-left: 0px;
        margin-right: -5px;
    }
    .player-bar-moves span{
        display: block;
        background-color: var(--main-color);
        height: 10px;
        margin: 2px;
    }
    .player-bar-card-price{
        display: flex;
        align-items: center;
        font-size: 24px;
        margin-top: 10px;
    }
    .inverse .player-bar-card-price {
        flex-direction: row-reverse;
    }
    .player-bar-card-price .data-value{
        margin: 0;
    }
    .card-price-change{
        margin: 10px;
        font-weight: bold;
    }
    .card-price-change.down{
        color: #ff1500;
    }
    .card-price-change.up{
        color: #62ff00;
    }
    .card-price-change.up::before{
        content: '+';
    }

</style>
