<script setup>

	import { defineProps, ref, computed } from 'vue'
	import Icon from "@/components/Icon.vue"

	const props = defineProps({
        item: { type: Object, default: {} },
	})

    const itemImage = ref('')

    const fillImage = computed(() => {
        const url = `/inventory/${props.item.name}.svg`
		return props.item.name ? `url(#itemPattern)` : '#111111';
	})

</script>

<template>

	<div class="item" :class="{clickble: props.item.damage}">

        <div v-if="props.item.damage" class="item-damage">
            <span>{{props.item.damage}}</span>
            <svg viewBox="0 0 55 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M54.5627 4.23146L50.5 0H4.06272L0 4.23146V14.7685L4.06272 19H50.5L54.5627 14.7685V4.23146Z" fill="white"/>
            </svg>
        </div>

        <div v-if="props.item.qty" class="item-qty">
            <span>{{props.item.qty}}</span>
            <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 4.16667L20.9319 0H4.0681L0 4.16667V20.8333L4.0681 25H20.9319L25 20.8333V4.16667Z" fill="#FAFF00"/>
            </svg>
        </div>

        <svg v-if="props.item.name" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <path d="M82 7.80117L76.7561 2H7.24395L2 7.80117V76.1988L7.24395 82H76.7561L82 76.1988V7.80117Z" :fill="'url(#pattern' + props.item.name + ')'" stroke="white" stroke-width="3"/>
            <defs>
                <pattern :id="'pattern' + props.item.name" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use :xlink:href="'#' + props.item.name" transform="scale(0.004)"/>
                </pattern>
                <image :id="props.item.name" width="250" height="250" :xlink:href="`/inventory/${props.item.name}.svg`"/>
            </defs>
        </svg>

    </div>

</template>

<style scoped>
    .item{
        width: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: relative;
    }
    .item-damage{
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        bottom: -16px;
    }
    .item-damage span{
        position: absolute;
        color: black;
        font-weight: bold;
        font-size: 14px;
    }
    .item-qty{
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        top: -5px;
        left: -5px;
    }
    .item-qty span{
        position: absolute;
        color: black;
        font-weight: bold;
        font-size: 20px;
    }
    .item.clickble:hover{
        transform: scale(1.05);
        cursor: pointer;
    }
    .item.clickble:active{
         transform: scale(0.95);
    }   

</style>
