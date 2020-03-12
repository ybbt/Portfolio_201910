import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions';
import * as mutations from './mutations';
// import * as getters from './getters';

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    searchId: '',
    tickets: [],
    tempTickets: {},
    stop: false,
  },
  mutations,
  actions,
  // getters,


  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  // modules: {
  // }
})
