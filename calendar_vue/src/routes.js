import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Body from './components/body.vue';


const routes = [
	{
		path: '',
		redirect: { name: 'Calendar'}
	},
	{
		name: 'Calendar',	
		path: '/calendar',
		component: Body
	}
];


export const router = new VueRouter({
	routes,
	mode: 'history'
});
