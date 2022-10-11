import * as EntrancesAPI from '@/api/entrances';

export default {
  namespaced: true,
  actions: {
    async entrancesOne(_c, { id }) {
      const { data } = await EntrancesAPI.show(id);
      return data;
    }
  }
}
