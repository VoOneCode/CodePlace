import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Contacts from './components/contacts.vue';
import Main from './components/main.vue';
import Living from './components/living.vue';
import Gallery from './components/gallery.vue';
import Preview from './components/preview.vue';
import Services from './components/services.vue';
import Restik from './components/restik.vue';
import Bar from './components/bar.vue'; 
import Celebration from './components/celebration.vue';
import Bathhouse from './components/bathhouse.vue';
import Swimming from './components/swimming.vue'; 
import Playground from './components/playground.vue'; 
import Entertainment from './components/entertainment.vue';



const routes = [
	{
		path: '',
		redirect: { name: 'main'}
	},
	{
		name: 'main',
		path: '/main',
		component: Main
	},
	{
		name: 'living',
		path: '/living',
		component: Living
	},
	{
		name: 'services',
		path: '/services',
		component: Main
	},
	{
		name: 'gallery',
		path: '/gallery',
		component: Gallery
	},
	,
	{
		name: 'preview',
		path: '/preview',
		component: Preview
	},
	{
		name: 'contacts',
		path: '/contacts',
		component: Contacts
	},
	{
		name: 'restik',
		path: '/restik',
		component: Restik
	},
	{
		name: 'bar',
		path: '/bar',
		component: Bar
	},
	{
		name: 'celebration',
		path: '/celebration',
		component: Celebration
	},
	{
		name: 'bathhouse',
		path: '/bathhouse', 
		component: Bathhouse
	},
	{
		name: 'swimming',
		path: '/swimming', 
		component: Swimming
	},
	{
		name: 'playground',
		path: '/playground', 
		component: Playground
	},
	{
		name: 'entertainment',
		path: '/entertainment',
		component: Entertainment
	}
];


export const router = new VueRouter({
	routes,
	mode: 'history',
	scrollBehavior(to, from, savedPosition) {
		//https://router.vuejs.org/guide/advanced/scroll-behavior.html
		if (to.hash) {
			return { selector: to.hash }
		} else if (savedPosition) {
			return savedPosition;
		} else {
			return { x: 0, y: 0 }
		}
	}
})
