import { createStore } from 'vuex'

export default createStore({
  state: {
    navShowed: false,
    dialogCallbackShowed: false,
  },
  getters: {
  },
  mutations: {
    navToggle(state, value) {
      state.dialogCallbackShowed = false;
      if(typeof value === 'boolean') return state.navShowed = value;
      state.navShowed = !state.navShowed;
    },
    callbackToggle(state, value) {
      state.navShowed = false;
      if(typeof value === 'boolean') return state.dialogCallbackShowed = value;
      state.dialogCallbackShowed = !state.dialogCallbackShowed;
    }
  },
  actions: {
  },
  modules: {
    news: require('./news').default,
    loaders: require('./loaders').default,
  }
})
