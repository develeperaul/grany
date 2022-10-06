import vClickOutside from "click-outside-vue3";
import YmapPlugin from 'vue-yandex-maps';
import VueScreen from 'vue-screen';
import Maska from 'maska';
import Notifications from '@kyvg/vue3-notification'

export default (app) => {
  const settings = {
    apiKey: 'ff37a483-416c-4661-8877-cc44eb1abf7b',
    lang: 'ru_RU',
    coordorder: 'latlong',
    enterprise: false,
    version: '2.1'
  }

  app.use(vClickOutside);
  app.use(YmapPlugin, settings);
  app.use(Notifications);
  app.use(Maska);

  app.use(VueScreen, {
    grid: {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1200,
      '2xl': 1920,
    }
  });
}
