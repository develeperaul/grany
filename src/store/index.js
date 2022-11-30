import { createStore } from 'vuex';
import api from '@/api/utilities/service';

export default createStore({
  state: {
    navShowed: false,
    dialogCallbackShowed: false,
    contactPhone: '+7 (347) 258-66-99',
    headerPhone: '+7 (347) 258-66-99',
    domrf: 'https://xn--80az8a.xn--d1aqf.xn--p1ai/%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81%D1%8B/%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B0_%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B5%D0%BA/47543',
    homeSite: 'https://www.aisrb.ru'
  },
  getters: {
    unmaskedPhone() {
      return (phone) => '+' + phone.replace(/\D/g, '');
    },
    shortPhone(state) {
      return state.headerPhone.split(' ')[2];
    },
    prefixhone(state) {
      const parts = state.headerPhone.split(' ');
      return parts[0] + ' ' + parts[1];
    },
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
          client_id: process.env.VUE_APP_CLIENT_ID,
          client_secret: process.env.VUE_APP_CLIENT_SECRET,
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
    galleries: require('./galleries').default,
  }
})
