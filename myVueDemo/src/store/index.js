import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);



import menu from './modules/menu.js';
import services from './modules/services.js';

export const store = new Vuex.Store({
	state: {
		count: 0,
		headerer: 'База отдыха «Приволье»',
		subheaderer: 'Отдых в Бузулукском бору по доступным ценам',
		tel: '+7-999-777-5-444',
		baseName: 'База отдыха «Приволье»',
		address: 'Оренбургская область, Бузулукский р-н, п.Колтубановский, пер.Актюбинский 19'
	},
	modules: {
		menu,
		services
	},
	getters: {
		COUNT: state => {
			return state.count+2;
		}
	}
})
