
export const state = () => ({
  message_subjects: [
            'Вопрос',
            'Предложение',
            'Ошибка на сайте',
          ]
})

export const mutations = {
  SET_SUBJECTS(state, subjects) {
    state.message_subjects = subjects;
  },
}

export const getters = {
  get_message_subjects: state => {
    return state.message_subjects;   
  },
}

export const actions = {
  async loadSubjects({commit}) {
    /* here is the code to access the API to get message_subjects
    for is in middleware*/
    await this.$axios.$get('api/message_subjects')
      .then(response => {
        /* .. and write them to state */
        commit('setSubjects', response.subjects);
      })
      .catch(error => {
        console.log('error while loading message_subjects');
        console.log(error);
      })
  },
  setSubjects({ commit }, { subjects }) {
    commit("SET_SUBJECTS", subjects)
  }
}
