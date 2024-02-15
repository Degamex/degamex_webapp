
<script setup>
	import axios from 'axios'
	import { ref, onUpdated, watch, defineProps, onMounted } from 'vue'
    import Icon from "@/components/Icon.vue";

	const props = defineProps({
        logs: { type: Array, default: [] },
    })

</script>

<template>

<div class="logs" >
	<div class="log" v-for="(log, index) in props.logs" v-bind:key="index">
        <div>
            <span v-if="!log.action">{{log}}</span>
            <span v-if="log.from">{{log.from}}</span>
            <img v-if="log.action" :src="`/inventory/${log.action}.svg`" />
            <span v-if="log.to">{{log.to}}</span>
             <a v-if="log.tx" :href="`https://testnet.blastscan.io/tx/${log.tx}`" target="_blank">Tx</a>
        </div>
        <div v-if="log.damage">
            <span v-if="log.damage" class="damage">{{log.damage}}</span>
            <span v-if="log.change" class="change">-{{log.change}}%</span>
            <Icon v-if="log.critical" type="critical" color="red" class="icon"/>
            <Icon v-if="log.block" type="block" color="#62ff00" class="icon"  />
        </div>
       
    </div>
</div>

</template>

<style scoped>
.logs{
	display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    text-align: left;
	width: 300px;
    height: 400px;
    overflow-y: scroll;
	position: relative;
}
.log{
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex-wrap: wrap;
    margin-top: 10px;
}
.log div{
    display: flex;
    align-items: center;
}
.log img{
    width: 26px;
}
.log a{
    color: var(--main-color);
    text-decoration: none;
    margin-left: 5px;
}
.damage{
    margin-left: 10px;
    color: var(--main-color);
}
.change{
    margin-left: 5px;
    color: red;
}
.icon{
    width: 16px;
    margin-left: 5px;
}

</style>
