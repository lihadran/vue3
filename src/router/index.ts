import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Video from '../views/video/Index.vue';
import User from '../views/User.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Video',
		component: Video,
	},
	{
		path: '/user/:id',
		name: 'User',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: User,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
