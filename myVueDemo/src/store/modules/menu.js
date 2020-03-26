export default {
 namespaced: true,
 state: {
   items: [
     {
       url: '/main',
       text: 'ГЛАВНАЯ'
     },
     {
       url: '/living',
       text: 'ПРОЖИВАНИЕ'
     },
     {
       url: '/services',
       text: 'УСЛУГИ',
       test: '#test'
     },
     {
       url: '/gallery',
       text: 'ГАЛЕРЕЯ'
     },
     {
       url: '/contacts',
       text: 'КОНТАКТЫ'
     }
   ]
 },
 getters: {
   items(state){
     return state.items;
   }
 }
};
