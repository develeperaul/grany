import * as StoreysAPI from '@/api/storeys';

export default {
  namespaced: true,
  actions: {
    async storeysOne(_c, { id }) {
      const { data } = await StoreysAPI.show(id);
      return data;
    }
  }
}
