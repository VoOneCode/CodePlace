import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Body from './components/body.vue';
import Starred from './components/starred.vue';


const routes = [
	{
		path: '',
		redirect: {name: 'WordKeeper'}
	},
	{
		name: 'WordKeeper',	
		path: '/wordKeeper',
		component: Body
	},
	{
		name: 'Starred',
		path: '/starred',
		component: Starred
	}
];


export const router = new VueRouter({
	routes,
	mode: 'history'
});
