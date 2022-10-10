import * as FlatsAPI from '@/api/flats';

export default {
  namespaced: true,
  state: {},
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
