import * as NewsAPI from '@/api/news';

export default {
  namespaced: true,
  state: {},
  actions: {
    async getNews() {
      const { data } = await NewsAPI.list();
      return data;
    },
    async newsOne(_c, { id }) {
      const { data } = await NewsAPI.show(id);
      return data;
    }
  }
}
