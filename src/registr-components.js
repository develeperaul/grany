import InlineSvg from 'vue-inline-svg';
import { Field } from 'vee-validate';
import { Form } from 'vee-validate';

export default (app) => {
  app.component('InlineSvg', InlineSvg);
  app.component('Field', Field);
  app.component('Form', Form);
  app.component('AppLink', require('@/core/AppLink.vue').default);
  app.component('AppIcon', require('@/core/AppIcon.vue').default);
  app.component('AppButton', require('@/core/AppButton.vue').default);
  app.component('AppInput', require('@/core/AppInput.vue').default);
  app.component('AppCheckbox', require('@/core/AppCheckbox.vue').default);
  app.component('AppSelect', require('@/core/AppSelect.vue').default);
  app.component('AppPage', require('@/core/AppPage.vue').default);
  app.component('Header', require('@/components/Header.vue').default);
  app.component('Footer', require('@/components/Footer.vue').default);
  app.component('TabsContent', require('@/components/TabsContent.vue').default);
  app.component('TabsContentItem', require('@/components/TabsContentItem.vue').default);
};
