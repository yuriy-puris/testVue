import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state : {
    userInfo: {
      firstName: '',
      lastName: '',
      login: '',
      email: ''
    },
    coutry: [
      {
        name: 'UK',
        cities: ['Liverpool', 'London', 'Manchester']
      },
      {
        name: 'USA',
        cities: ['San Francisco', 'New York', 'Seattle']
      },
      {
        name: 'Spain',
        cities: ['Barcelona', 'Real Madrid', 'Levante']
      }
    ],
    activeCountry: null,
  },
  actions: {
    CHANGE_LOGIN: ({commit}, value) => {
      commit('SET_LOGIN', { updateInfo: value })
    },
    CHANGE_FIRSTNAME: ({commit}, value) => {
      commit('SET_FIRSTNAME', { updateInfo: value })
    },
    CHANGE_LASTNAME: ({commit}, value) => {
      commit('SET_LASTNAME', { updateInfo: value })
    },
    CHANGE_EMAIL: ({commit}, value) => {
      commit('SET_EMAIL', { updateInfo: value })
    }
  },
  mutations: {
    SET_LOGIN: (state, { updateInfo }) => {
      state.userInfo.login = updateInfo
    },
    SET_FIRSTNAME: (state, { updateInfo }) => {
      state.userInfo.firstName = updateInfo
    },
    SET_LASTNAME: (state, { updateInfo }) => {
      state.userInfo.lastName = updateInfo
    },
    SET_EMAIL: (state, { updateInfo }) => {
      state.userInfo.email = updateInfo
    },
    SET_ACTIVE_COUNTRY(state, country) {
      state.activeCountry = country
    },
  }
})

export default store
