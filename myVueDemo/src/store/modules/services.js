export default {
 namespaced: true,
 state: {
   items: [
     {
       url: '/living',
       text: 'Комфортабельные и уютные коттеджи',
       pic: './dist/servicesr1p1.jpg'
     },
     {
       url: '/restik',
       text: 'Ресторан с разнообразным меню',
       pic: './dist/servicesr1p2.jpg'
     },
     {
       url: '/bar',
       text: 'Бар с импортными напитками',
       pic: './dist/servicesr1p3.jpg'
     },
     {
       url: '/celebration',
       text: 'Проведение Свадеб и Торжеств',
       pic: './dist/servicesr1p4.jpg'
     },
     {
       url: '/bathhouse',
       text: 'Русская баня',
       pic: './dist/servicesr2p1.jpg'
     },
     {
       url: '/swimming',
       text: 'Открытый бассейн',
       pic: './dist/servicesr2p2.jpg'
     },
     {
       url: '/playground',
       text: 'Детская площадка',
       pic: './dist/servicesr1p3.jpg'
     },
     {
       url: '/entertainment',
       text: 'Развлечения',
       pic: './dist/servicesr1p4.jpg'
     }
   ]
 },
 getters: {
   items(state){
     return state.items;
   }
 }
};
