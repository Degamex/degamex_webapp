
<script setup>
	import axios from 'axios'
	import { ref, watch, onMounted } from 'vue'
    import Icon from "@/components/Icon.vue";

    const chat = ref([])
    const msg = ref()

    const sendMsg = () => {
        const text = msg.value
        if (text.length > 0){
            chat.value.push({from: 'YOU', text: msg.value})
            msg.value = null
        }
    }

    setTimeout(() => { chat.value.push({from: '0x345..34d', text: 'hey!'}) }, 8000)
    setTimeout(() => { chat.value.push({from: '0x345..34d', text: 'are you ready to get rekt? XD'}) }, 12000)
    setTimeout(() => { chat.value.push({from: '0x345..34d', text: 'hahaha'}) }, 14000)

</script>

<template>

<div class="chat" >
	<span v-for="(msg, index) in chat" v-bind:key="index" class="msg" :class="{my: msg.from == 'YOU'}">
        <span class="from">{{msg.from}}</span>
        {{msg.text}}
    </span>
    <div class="input">
        <input type="text" placeholder="Your message" v-model="msg" @keydown.enter="sendMsg">
        <Icon type="enter" class="icon" @click="sendMsg" :class="{ disabled: !msg }"/>
    </div>
</div>

</template>
 
<style scoped>
.chat{
	display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    text-align: left;
	width: 300px;
    height: 320px;
    overflow-y: scroll;
	position: relative;
}
.msg{
    margin-top: 5px;
}
.msg.my{
    color: var(--main-color);
}
.msg .from{
    font-size: 14px;
    font-weight: bold;
}
.msg .from::after{
    content: ':';
}
.input{
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 20px;
}
.input .icon{
    cursor: pointer;
    margin-left: -35px;
}
.input .icon:hover{
    transform: scale(1.05);
}
.input .icon:active{
    transform: scale(0.95);
}
input{
    width: 100%;
    background: no-repeat;
    border: 1px solid #FFFFFF40;
    padding: 10px;
    border-radius: 3px;
    font-size: 20px;
    color: white;
    outline: none;
    padding-right: 50px;
}

</style>
