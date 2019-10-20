import Vue from 'vue'
import Vuex from 'vuex';

import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: [],
    pages: 0,
    actualPage: 0,
    pageDataArray: new Map(),
  },
  mutations,
  actions,
  getters,

});