import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Squilla from './components/body.vue';
import Editor from './components/editingPage.vue';
import Additor from './components/addingPage.vue';
import Auth from './components/auth.vue';


const routes = [
	{
		path: '',		
		redirect: { name: 'Squilla'}
	},
	{
		name: 'Squilla',	
		path: '/squilla',
		component: Squilla
	},
	{
		name: 'Editor',
		path: '/editor',
		component: Editor,
		props: true
	},
	{
		name: 'Additor',
		path: '/addOffer',
		component: Additor,
		props: true
	},
	{
		name: 'Auth',
		path: '/auth',
		component: Auth
	},
];


export const router = new VueRouter({
	routes,
	mode: 'history'
});
