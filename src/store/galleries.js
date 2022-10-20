import * as GalleriesAPI from '@/api/galleries';

export default {
  namespaced: true,
  actions: {
    async galleriesOne(_c, { id }) {
      const { data } = await GalleriesAPI.show(id);
      return data;
    },
    async getMixed() {
      const { data } = await GalleriesAPI.mixedList();
      return data;
    },
    async mixedOne(_c, { id }) {
      const { data } = await GalleriesAPI.showMixed(id);
      return data;
    }
  }
}
