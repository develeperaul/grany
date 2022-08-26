import { createStore } from 'vuex'

export default createStore({
  state: {
    navShowed: false,
    navToolsShowed: false
  },
  getters: {
  },
  mutations: {
    navToggle(state, value) {
      if(typeof value === 'boolean') return state.navShowed = value;
      state.navShowed = !state.navShowed;
    }
  },
  actions: {
  },
  modules: {
  }
})
