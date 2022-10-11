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
    featuresHave() {
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
    }
  }
}
