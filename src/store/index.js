import { createStore } from 'vuex';
import api from '@/api/utilities/service';
const client_id = 1;
const client_secret = 'WNTfhwextCXKVTYOHoD4ZDflGKOTlnqiL0jjMFBW';

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
    async getFeedback(_c, { theme, name, cellphone }) {
      return await api.swot.post('feedback', {
        json: {
          client_id,
          client_secret,
          email_ids: [2],
          theme: theme,
          user_name: name,
          user_phone: cellphone,
          crm_lead: 0,
          _dictionary: {
            user_name: "Имя пользователя",
          }
        }
      }).json();
    }
  },
  modules: {
    news: require('./news').default,
    flats: require('./flats').default,
    storeys: require('./storeys').default,
    entrances: require('./entrances').default,
    loaders: require('./loaders').default,
  }
})
