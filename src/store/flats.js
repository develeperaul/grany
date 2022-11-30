import * as FlatsAPI from '@/api/flats';

const features = {
  has_wardrobe: 'Гардеробная',
  has_panoramic_view : 'Видовая квартира',
  has_loggia: 'Лоджия',
  has_two_bathrooms: '2 С/У',
  has_master_bedroom: 'Мастер-спальня',
  has_kitchen_united_with_lounge: 'Кухня-гостиная'
};

export default {
  namespaced: true,
  getters: {
    featuresHas() {
      return (flat) => {
        const filtred = Object.entries(features).filter(entry => flat[entry[0]] !== 0);
        return Object.fromEntries(filtred);
      }
    }
  },
  actions: {
    async getFlats(_c, filter = {}) {
      const { data } = await FlatsAPI.list(filter);
      return data;
    },
    async flatsOne(_c, { id }) {
      const { data } = await FlatsAPI.show(id);
      return data;
    },
    async createPDF({ rootGetters }, params) {
      return await FlatsAPI.pdf({
        client_id: process.env.VUE_APP_CLIENT_ID,
        client_secret: process.env.VUE_APP_CLIENT_SECRET,
        header_tel_prefix: rootGetters.prefixhone,
        header_tel: rootGetters.shortPhone,
        header_logo_image: 'https://2apps.ru/img/logograni.png',
        header_site: 'grani-ufa.ru',
        header_email: 'grany-ufa@yandex.ru',
        pdf_info_price: 'по запросу',
        ...params
      });
    },
  }
}
