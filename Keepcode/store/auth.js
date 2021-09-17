
export const state = () => ({
  token: null,
  greetings: 'Рады приветствовать гостя!'
})

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
    state.greetings = 'Приятно, что Вы снова зашли ))'
  },
  CLEAR_TOKEN(state) {
    state.token = null
    state.greetings = 'Рады приветствовать гостя!'
  }
}

export const getters = {
  token: state => {
    return state.token;   
  },
  greetings: state => {
    return state.greetings;   
  },
}

export const actions = {
  logout({ commit }) {
    commit("CLEAR_TOKEN")
  },

  setToken({ commit }, { token }) {
    commit("SET_TOKEN", 'token')
  }
}
