<script setup>
	import { defineProps } from 'vue'

	const props = defineProps({
        type: {
			type: String,
			default: 'none'
		},
		color: {
			type: String,
			default: 'var(--main-color)'
		},
		damage: {
			type: Object
		}
	})

</script>

<template>
	<span class="effect" :class="type">

		<svg v-if="type == 'x'"  viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M11.9047 8.46962L19.3513 0H17.5873L11.1187 7.35254L5.956 0H0L7.80867 11.1194L0 20H1.764L8.59067 12.2338L14.044 20H20" :fill="color"/>
		</svg>

		<div v-else-if="type == 'lightning_damage'" class="lightning_attack">
			
			<svg class="svg1" width="398" height="303" viewBox="0 0 398 303" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M88.1477 221.593L0 302.232L39.9158 302.232L106.449 237.52L125.81 195.012L165.001 167.02L192.501 249.52L309.698 177.542L343.774 224.319L302.99 285.696L363.164 229.22L315.457 154.759L198.246 226.73L173.482 143.112L124.665 168.936L148.355 105.817L178.559 102.621L207.986 71.8957L315.314 116.559L397.442 11.9967L309.698 102.621L202.501 53.0196L162.501 90.5196L106.449 39.0105L255.467 0.349609L88.0283 34.3544L135.001 87.5196L88.1477 221.593Z" fill="#FAFF00"/>
			</svg>

			<svg class="svg2" width="548" height="213" viewBox="0 0 548 213" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M157.5 138.5L0 213H37.5L277 109.5L346 157L411 92.5L547.5 122L411 78.5L340.5 144L283 92.5L170 138.5L153 61.5L363.5 0L140.5 54.5L157.5 138.5Z" fill="#FFFFFF"/>
			</svg>

			<svg class="svg3" width="217" height="427" viewBox="0 0 217 427" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0 322.5L26 426.5H45.5L15.5 331L94.5 297L147.5 322.5L210 241L142.5 309L106.5 289L142.5 260L103 213L147.5 138C168.667 128.167 212.1 108.4 216.5 108C220.9 107.6 152.667 35.8333 118 0L192 101.5L134.5 130.5L88 206.5L15.5 146.5L77.5 66L0 146.5L125.5 260L0 322.5Z" fill="#FAFF00"/>
			</svg>

		</div>

		<div v-else-if="type == 'katana_damage'" class="katana_attack">
			
			<svg class="svg1" width="359" height="259" viewBox="0 0 359 259" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M359 0L0 255L95 259L335.5 84L359 0Z" fill="white" fill-opacity="1"/>
				<path d="M335.5 84L359 0L321.5 77.5L62.5 259H95L335.5 84Z" fill="#FAFF00"/>
			</svg>


			<svg class="svg4" width="470" height="251" viewBox="0 0 470 251" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M37 82L411 114L0 206.5L416.5 118L255 250.5L441.5 107.5L219 0L423.5 107.5L37 82Z" fill="white"/>
				<path d="M463 101L423.5 34L470 101L406.5 202.5L463 101Z" fill="white"/>
			</svg>

			<svg class="svg2" width="938" height="278" viewBox="0 0 938 278" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M302.511 0L937.448 30.4166L569.638 270.19L385.762 277.066L597.36 207.837L356.854 186.738L732.343 136.639L233.337 154.268L799.618 92.783L0 67.4185L856.833 55.485L302.511 0Z" fill="url(#paint0_linear_329_205)"/>
				<defs>
				<linearGradient id="paint0_linear_329_205" x1="355.325" y1="-34.4289" x2="558.596" y2="277.388" gradientUnits="userSpaceOnUse">
				<stop stop-color="white"/>
				<stop offset="1" stop-color="white" stop-opacity="0"/>
				</linearGradient>
				</defs>
			</svg>


		</div>

		<div v-else-if="type == 'red_damage'" class="red_attack">
			
			<svg class="svg1" width="405" height="220" viewBox="0 0 405 220" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M132.5 18L0 219.5H292.5L405 74L244.5 190.5L292.5 97.5L147 201.5L363.5 0L93.5 201.5L255.5 0L48 201.5L132.5 18Z" fill="url(#paint0_linear_251_104)"/>
				<defs>
					<linearGradient id="paint0_linear_251_104" x1="202.5" y1="-71.5" x2="202.5" y2="219.5" gradientUnits="userSpaceOnUse">
						<stop stop-color="#FF0500"/>
						<stop offset="1" stop-color="#FF0000" stop-opacity="0"/>
					</linearGradient>
				</defs>
			</svg>

			<svg class="svg2" width="409" height="376" viewBox="0 0 409 376" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M244.5 85L0 376H292.5L372.5 302L244.5 347L331.5 230.5L147 358L363.5 156.5L93.5 358L409 0L48 358L244.5 85Z" fill="url(#paint0_linear_251_103)"/>
				<defs>
					<linearGradient id="paint0_linear_251_103" x1="202.5" y1="85" x2="202.5" y2="376" gradientUnits="userSpaceOnUse">
						<stop stop-color="#FF0500"/>
						<stop offset="1" stop-color="#FF0000" stop-opacity="0"/>
					</linearGradient>
				</defs>
			</svg>

		</div>

		<div v-else-if="type == 'poison_damage'" class="poison_attack">
			
			<svg class="svg1" width="509" height="420" viewBox="0 0 509 420" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M108.893 396.644L116.885 335.034L67.9333 285.503L116.885 295.168L67.9333 204.966L108.893 165.101L102.399 202.953L157.345 211.409V95.0336L247.757 64.4295V0L310.695 64.4295L318.687 128.054L398.608 142.953L385.621 219.866L448.559 252.886L408.099 279.06L489.02 370.067L457.551 396.644L509 420H77.4239L108.893 396.644Z" fill="#ADFF00" fill-opacity="0.5"/>
				<path d="M41.9588 351.141L0 386.175L67.9333 376.51L60.4406 335.034L41.9588 351.141Z" fill="#ADFF00" fill-opacity="0.5"/>
			</svg>

			<svg class="svg2" width="421" height="494" viewBox="0 0 421 494" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0 416.5L30 494H268L276 359.5L217.5 244.5L312 120L178 0L235 148.5L101 244.5L178 397.5L118 432.5L142 359.5L39 262L101 374L0 416.5Z" fill="#ADFF00" fill-opacity="0.5"/>
				<path d="M421 139L361 235L421 244.5V139Z" fill="#ADFF00" fill-opacity="0.5"/>
			</svg>

			<svg class="svg3" width="410" height="442" viewBox="0 0 410 442" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M410 240L324.5 441.5H49L0 289L82.5 383.5L134 367.5V240L221.5 345L291 289L192.5 219.5L266.5 0L246.5 204L410 240Z" fill="#ADFF00" fill-opacity="0.5"/>
			</svg>



		</div>

		<div v-else-if="type == 'grenade_damage'" class="grenade_attack">
			
			<svg class="svg1" width="814" height="374" viewBox="0 0 814 374" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0 298L155.5 360L121.5 313.5L227 286.5L213 233L265.5 245.5L319.5 157.5L335 281L449.5 217L387.5 321.5H530L471 373.5L813.5 265L500.5 258L626.5 75.5L387.5 181.5L335 0.5L233 181.5L108 75.5L162.5 265L0 298Z" fill="#FE9701"/>
			</svg>

		</div>
		

	</span>
</template>


<style>
.effect{
	display: flex;
	justify-content: flex-end;
	position: absolute;
	width: 480px;
	height: 480px;
}

.effect svg{
	position: absolute;
}

.degamer-body{
	position: relative;
	transform-origin: 50% 100%;
	animation: degamer 0.8s ease-in-out infinite alternate;
}
.degamer-head{
	position: relative;
	transform-origin: 60% 60%;
	animation: degamer_head 0.6s ease-in-out infinite alternate;
}

/* --------------------------------- lightning_attack ---------------------------------*/

.lightning_attack .svg1{
	position: absolute;
	top: 100px;
	left: -150px;
	z-index: 10;
	animation: lightning_attack 0.1s ease-in-out infinite alternate;
}
.lightning_attack .svg2{
	position: absolute;
	top: 100px;
	left: -150px;
	animation: lightning_attack 0.154s ease-in-out infinite alternate;
	
}
.lightning_attack .svg3{
	position: absolute;
	top: 100px;
	left: -150px;
	animation: lightning_attack 0.14s ease-in-out infinite alternate;
	z-index: 10;
}

@keyframes lightning_attack {
	0%{
		left: -150px;
		opacity: 0;
	}
	70%{
		left: -10px;
		opacity: 0.5;
	}
	95%{
		left: -150px;
		opacity: 1;
	}
	100%{
		left: -10px;
		opacity: 1;
	}
}

/* --------------------------------- katana_attack ---------------------------------*/

.katana_attack{
	position: absolute;
}

.katana_attack .svg1{
	z-index: 10;
	top: 200px;
	position: absolute;
	animation: katana_attack 0.5s ease-in-out;
}
.katana_attack .svg2{
	top: 200px;
	opacity: 0;
	animation: katana_attack1 0.5s ease-in-out;
	animation-delay: 0.1s;
}
.katana_attack .svg3{
	top: 200px;
	opacity: 0;
	animation: katana_attack1 0.14s ease-in-out;
	animation-delay: 0.1s;
	z-index: 10;
}
.katana_attack .svg4{
	top: 200px;
	opacity: 0;
	animation: katana_attack1 0.5s ease-in-out;
}

@keyframes katana_attack {
	0%{
		right: 500px;
		opacity: 1;
	}
	95%{
		right: 550px;
		opacity: 1;
	}
	100%{
		right: 0;
		opacity: 1;
	}
}
@keyframes katana_attack1 {
	0%{
		right: 150px;
		opacity: 0;
	}
	95%{
		right: 550px;
		opacity: 1;
	}
	99%{
		right: 100px;
		opacity: 1;
	}
	100%{
		right: 100px;
		opacity: 0;
	}
}

.katana_damage .degamer-body{
	transform-origin: 0% 100%;
	animation: katana_damage 2s ease-in-out alternate;
}
.katana_damage .degamer-head{
	animation: degamer_head 0.8s ease-in-out alternate infinite;
}

@keyframes katana_damage {
	0%{
		right: 0;
	}
	31.5%{
		right: 0;
	}
	35.5%{
		right: -550px;
	}
	37.5%{
		right: -230px;
	}
	55.5%{
		right: 0px;
	}
}


/* --------------------------------- red_attack ---------------------------------*/

.red_attack .svg1{
	position: absolute;
	left: -150px;
	top: 150px;
	animation: red_attack 0.08s  infinite alternate;
}
.red_attack .svg2{
	position: absolute;
	left: -150px;
	top: 150px;
	animation: red_attack 0.1s ease-in-out infinite alternate;
	z-index: 10;
}

@keyframes red_attack {
	0%{
		left: -150px;
	}
	100%{
		left: -10px;
	}
}	

.red_damage .degamer-body{
	transform-origin: 0% 100%;
	animation: red_damage 0.1s ease-in-out alternate infinite;
}
.red_damage .degamer-head{
	animation: red_damage 0.16s ease-in-out alternate infinite;
}

@keyframes red_damage {
	0%{
		bottom: 0;
	}
	20%{
		bottom: -15px;
	}
	50%{
		bottom: -5px;
	}
	100%{
		bottom: -25px;
	}
}


/* --------------------------------- poison_attack ---------------------------------*/

.poison_attack .svg1{
	position: absolute;
	bottom: 0;
	left: 0;
	animation: poison_attack 0.5s  infinite alternate alternate;
	z-index: 10;
}
.poison_attack .svg2{
	position: absolute;
	bottom: 40px;
	left: 30px;
	animation: poison_attack 0.6s ease-in-out infinite alternate;
	animation-delay: 0.5s;
	z-index: 10;
}
.poison_attack .svg3{
	position: absolute;
	bottom: 0;
	left: 0;
	animation: poison_attack 2s ease-in-out infinite alternate;
	animation-delay: 0.2s;
	z-index: 10;
}

@keyframes poison_attack {
	0%{
		opacity: 0;
		left: 20px;
	}
	10%{
		opacity: 1;
		left: 20px;
	}
	15%{
		opacity: 1;
		left: 70px;
	}
	75%{
		opacity: 0;
		left: 20px;
	}
	100%{
		opacity: 1;
		left: 50px;
	}
}	

.poison_damage .degamer-body{
	transform-origin: 0% 100%;
	animation: poison_damage 0.3s ease-in-out alternate infinite;
}
.poison_damage .degamer-head{
	animation: poison_damage 0.36s ease-in-out alternate infinite;
}

@keyframes poison_damage {
	0%{
		bottom: 0;
	}
	20%{
		bottom: -35px;
		transform: rotate(-10deg);
	}
	50%{
		bottom: -25px;
		transform: rotate(10deg);
	}
	100%{
		bottom: -25px;
	}
}

/* --------------------------------- grenade_attack ---------------------------------*/

.grenade_attack .svg1{
	position: absolute;
	bottom: 0;
	left: 0;
	animation: grenade_attack 1s ease-in ;
	opacity: 0;
	z-index: 10;
	transform: scale(0.1);
}

@keyframes grenade_attack {
	0%{
		opacity: 0;
	}
	80%{
		opacity: 0;
		transform: scale(0.1);
	}
	92%{
		opacity: 1;
	}
	95%{
		opacity: 1;
	}
	100%{
		opacity: 0;
		transform: scale(1.5);
	}
}	

.grenade_damage .degamer-body{
	transform-origin: 0% 100%;
	animation: grenade_damage 0.3s ease-in-out alternate;
	animation-delay: 1s;
}
.grenade_damage .degamer-head{
	animation: grenade_damage 0.36s ease-in-out alternate;
	animation-delay: 1s;
}

@keyframes grenade_damage {
	0%{
		bottom: 0;
		right: -100px;
	}
	20%{
		bottom: -35px;
		right: -100px;
		transform: rotate(40deg);
	}
	50%{
		bottom: -25px;
		transform: rotate(10deg);
	}
	100%{
		bottom: -25px;
	}
}







.lightning_damage .degamer-body{
	transform-origin: 0% 100%;
	animation: lightning_damage 0.1s ease-in-out alternate infinite;
}
.lightning_damage .degamer-head{
	animation: lightning_damage 0.16s ease-in-out alternate infinite;
}

@keyframes lightning_damage {
	0%{
		transform: rotate(0.5deg);
	}
	20%{
		transform: rotate(15deg);
	}
	50%{
		transform: rotate(-5deg);
	}
	100%{
		transform: rotate(0.5deg);
	}
}


@keyframes degamer {
	0%{
		transform: rotate(0.5deg);
		margin-bottom: -10px;
	}
	100%{
		transform: rotate(-0.5deg);
		margin-bottom: -15px;
	}
}

@keyframes degamer_head {
	0%{
		transform: rotate(1deg);
	}
	100%{
		transform: rotate(-1deg);
	}
}

	


</style>