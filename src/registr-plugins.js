import vClickOutside from "click-outside-vue3";
import YmapPlugin from 'vue-yandex-maps';

export default (app) => {
  const settings = {
    apiKey: 'ff37a483-416c-4661-8877-cc44eb1abf7b',
    lang: 'ru_RU',
    coordorder: 'latlong',
    enterprise: false,
    version: '2.1'
  }

  app.use(vClickOutside);
  app.use(YmapPlugin, settings)
}
