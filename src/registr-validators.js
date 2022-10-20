import { defineRule } from 'vee-validate';
import { required, email, size, integer } from '@vee-validate/rules';
import { configure } from 'vee-validate';
import { localize, setLocale } from '@vee-validate/i18n';
import ru from '@vee-validate/i18n/dist/locale/ru.json';

export default () => {
  configure({
    generateMessage: localize({
      ru: {
        code: 'ru',
        messages: {
          ...ru.messages,
          email: 'Поле {field} должно быть электронным адресом',
          cellphone: 'Поле {field} заполнено неправильно'
        }
      },
    }),
  });

  setLocale('ru');

  function decimal(value) {
    // паттерн для чисел со знаком, дробная часть опциональна
    const pattern = /^[\+,\-]?[\d\s]+(\.\d+)?$/;

    if (!pattern.test(value)) {
      return "Число должно быть целым или дробным";
    }

    return true;
  }

  defineRule('decimal', decimal);
  defineRule('required', required);
  defineRule('email', email);
  defineRule('size', size);
  defineRule('integer', integer);
  defineRule('cellphone', function (value) {
    if(!value) return true;
    return /^\+7 \(\d{3}\) \d{3}\-\d{2}\-\d{2}$/.test(value)
  });
}
