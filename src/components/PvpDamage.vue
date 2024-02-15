
<script setup>
	import axios from 'axios'
	import { ref, onUpdated, watch, defineProps, onMounted } from 'vue'
    import Icon from "@/components/Icon.vue"

	const props = defineProps({
        damage: { type: Object, default: {} },
    })

</script>

<template>

<div class="damage">
    <div class="damage-effect">
        <p v-if="props.damage.block" class="damage-block"><Icon type="block" color="#62ff00" class="icon"/>Block</p>
        <p v-if="props.damage.critical" class="damage-critical"><Icon type="critical" color="red" class="icon"/>Critical damage</p>
    </div>
    <p v-if="props.damage.damage > 0" class="damage-value" :class="{critical: props.damage.critical}">{{props.damage.damage}}</p>
    <p v-if="props.damage.change > 0" class="damage-price-change">-{{props.damage.change}}%</p>
</div>

</template>

<style scoped>
.damage{
	display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}
.damage-effect{
    position: absolute;
    top: -2px;
}
.damage-critical{
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    line-height: 1;
    text-transform: uppercase;
    color: red;
    animation: damage 0.2s ease-in-out;
}

.damage-critical .icon{
    width: 30px;
    height: 30px;
    margin-right: 6px;
}
.damage-block{
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    line-height: 1;
    text-transform: uppercase;
    color: #62ff00;
    animation: damage 0.2s ease-in-out;
}
.damage-block .icon{
    width: 30px;
    height: 30px;
    margin-right: 6px;
}
.damage-value{
    font-size: 64px;
    font-weight: bold;
    color: #ffffff;
    position: absolute;
    top: 28px;
    animation: damage 0.3s ease-in-out;
}
.damage-value.critical{
    color: var(--main-color);
}
.damage-price-change{
    font-size: 30px;
    font-weight: bold;
    color: red;
    position: absolute;
    top: 80px;
    animation: damage 0.5s ease-in-out;
}

@keyframes damage {
    0%{
        opacity: 0;
        top: 400px;
    }
    100%{
        opacity: 1;
    } 
}

</style>
