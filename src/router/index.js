import { createRouter, createWebHistory } from 'vue-router'
import Profile from '../views/Profile.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	scrollBehavior(to, from, savedPosition) {
		return { top: 0 }
	},
	routes: [
		{
			path: '/',
			name: 'home',
			component: Profile
		},
		{
			path: '/keys',
			name: 'keys',
			component: () => import('../views/Keys.vue')
		},
		{
			path: '/arena',
			name: 'arena',
			component: () => import('../views/Arena.vue')
		},
		{
			path: '/arena/:user',
			name: 'pvp',
			component: () => import('../views/PvP.vue')
		},
		{
			path: '/:user',
			name: 'profile',
			component: Profile
		}
	]
})

export default router
