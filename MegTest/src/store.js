import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    /* requests: ['user','program', 'issue','task'],  
      cause server responce has no tasks - task is static*/ 
    requests: ['user','program', 'issue'],  
    origin: process.env.VUE_APP_SOURCE,  
    user: [],
    program: [],
    issue: [],
    task: [
        {
          id: 1,
          name: 'Task1',
          solution: 'foo',
          user: 1,
          price: 111000,
          requirement: 'Neque porro',
          description: 'elit. Distinctio, saepe.'
        },
        {
          id: 2,
          name: 'Task2',
          solution: 'bar',
          user: 2,
          price: 222000,
          requirement: 'sed quia',
          description: 'adipisicing, dolor.'
        },
        {
          id: 3,
          name: 'Task3',
          solution: 'baz',
          user: 3,
          price: 333000,
          requirement: 'adipisci velit',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, saepe.'
        }
      ],
  },
  mutations: {
    LOAD_user(state, user) {
      state.user = user;
    },
    LOAD_program(state, program) {
      state.program = program;
    },
    LOAD_issue(state, issue) {
      state.issue = issue;
    },
    LOAD_task(state, task) {
      state.task = task;
    },
  },
  actions: {
    loadData ({ commit, state }) {
      state.requests.forEach(function(req) { 
        //for development usage
        /* let restoredMega = JSON.parse(localStorage.getItem(`mega${req}`));
        let res = restoredMega.data.slice()
        commit(`LOAD_${req}`, res)  */
          
        axios
        .get(`${state.origin}/api/${req}`)
        .then(responce => {
          let res = responce.data.slice();
          commit(`LOAD_${req}`, res)
        });
        
      })
      
    },
  },
  getters: {
    getUsers(state) {
      return state.user
    },
  }
})
