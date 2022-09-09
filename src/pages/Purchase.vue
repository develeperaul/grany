<template>
  <app-page class="xl-separator tw-relative">
    <div class="wrapper">
      <h1 class="h1 tw-mb-20 2xl:tw-mb-40">условия покупки</h1>

      <div class="2xl:tw-flex tw-items-start">
        <div class="2xl:tw-w-1/2 2xl:tw-pr-[78px]">
          <div
            class="tw-flex tw-pb-20 tw-overflow-x-auto tw-mb-30 md:tw-mb-10 app-scroll-x 2xl:tw-flex-wrap 2xl:tw-max-w-[460px] 2xl:-tw-mx-10 2xl:-tw-mt-10"
          >
            <TabsItem
              class="tw-shrink-0 tw-mr-20 last:tw-mr-0 2xl:tw-mx-10 2xl:tw-mt-10"
              v-for="(tab, key) in tabs"
              :key="tab.label"
              :class="[ tab.class ]"
              :active="tabValue === key"
              v-bind="tab"
              @click="tabValue = tab.icon"
            />
          </div>
        </div>

        <TabsContent v-model="tabValue" class="md:tw-max-w-[680px] lg:tw-max-w-[840px] 2xl:tw-w-1/2">
          <TabsContentItem
            v-for="(section, key) in content"
            :key="key"
            :name="key"
          >
            <section>
              <h2 class="tw-text-lg tw-text-secondary tw-font-extrabold tw-mb-20 2xl:tw-text-xl">
                {{ tabs[key].label }}
              </h2>
              <ul class="2xl:tw-flex 2xl:tw-flex-wrap 2xl:-tw-ml-48 -tw-mt-10">
                <li
                  class="tw-text-sm tw-text-white tw-flex li 2xl:tw-w-1/2 2xl:tw-pl-48 tw-pt-10"
                  v-for="(li, i) in content[key]"
                  :key="i"
                  :style="{ '--color': tabs[key].fill }"
                >
                    {{ li.text }}
                  </li>
              </ul>
            </section>
          </TabsContentItem>
        </TabsContent>
      </div>
    </div>
  </app-page>
</template>

<script>
import TabsItem from '@/components/TabsItem.vue';

export default {
  data() {
    return {
      tabValue: 'calc',
      tabs: {
        calc: {
          label: 'Ипотека',
          icon: 'calc',
          fill: '#23CF49',
          class: '2xl:-tw-order-4 2xl:tw-basis-[160px]'
        },
        bank: {
          label: 'Рассрочка',
          icon: 'bank',
          fill: '#3AB2ED',
          class: '2xl:tw-basis-[160px]'
        },
        rub: {
          label: 'Наличный расчёт',
          icon: 'rub',
          fill: '#FFBC6B',
          class: '2xl:-tw-order-3 2xl:tw-basis-[210px]'
        },
        mat: {
          label: 'Материнский капитал',
          icon: 'mat',
          fill: '#FE8DEE',
          class: '2xl:tw-basis-[210px]'
        },
      },
      content: {
        calc: [
          {
            text: 'Подбор квартиры (с менеджером в офисе продаж)',
          },
          {
            text: 'Согласование порядка расчетов и бронирование квартиры cрок бронирования — не более двух недель)',
          },
          {
            text: 'Подача в банк заявления на предоставление кредита',
          },
          {
            text: 'Подписание кредитного договора',
          },
          {
            text: 'Подписание договора долевого участия и регистрация его в Росреестре с сопровождением представителя застройщика',
          },
          {
            text: 'Открытие эскроу счета в банке (на этом счете ваши средства хранятся до сдачи дома и только затем перечисляются застройщику)',
          },
          {
            text: 'Передача зарегистрированного договора в банк для перечисления денежных средств',
          },
          {
            text: 'Ожидание ввода дома в эксплуатацию',
          },
        ],
        bank: [
          {
            text: 'Подбор квартиры (с менеджером в офисе продаж)',
          },
          {
            text: 'Согласование порядка расчетов и бронирование квартиры (срок бронирования — не более двух недель)',
          },
          {
            text: 'Согласование графика платежей по рассрочке (рассрочка беспроцентная, предоставляется до завершения строительства при обязательном первоначальном взносе 50%)',
          },
          {
            text: 'Подписание договора долевого участия и регистрация его в Росреестре с сопровождением представителя застройщика',
          },
          {
            text: 'Открытие эскроу счета в банке (на этом счете ваши средства хранятся до сдачи дома и только затем перечисляются застройщику)',
          },
          {
            text: 'Перечисление денежных средств на эскроу-счет в соответствии с графиком',
          },
          {
            text: 'Ожидание ввода дома в эксплуатацию',
          },
        ],
        rub: [
          {
            text: 'Подбор квартиры (с менеджером в офисе продаж)',
          },
          {
            text: 'Согласование порядка расчетов и бронирование квартиры (срок бронирования — не более двух недель)',
          },
          {
            text: 'Подписание договора долевого участия и регистрация его в Росреестре с сопровождением представителя застройщика',
          },
          {
            text: 'Открытие эскроу счета в банке (на этом счете ваши средства хранятся до сдачи дома и только затем перечисляются застройщику)',
          },
          {
            text: 'Перечисление денежных средств на эскроу-счет',
          },
          {
            text: 'Ожидание ввода дома в эксплуатацию',
          },
        ],
        mat: [
          {
            text: 'Подбор квартиры (с менеджером в офисе продаж)',
          },
          {
            text: 'Предоставление необходимого пакета документов: паспорт, государственный сертификат на материнский (семейный) капитал, справка об остатке средств материнского капитала',
          },
          {
            text: 'Согласование порядка расчетов и бронирование квартиры (срок бронирования — не более двух недель)',
          },
          {
            text: 'Подписание договора долевого участия и регистрация его в Росреестре с сопровождением представителя застройщика',
          },
          {
            text: 'Открытие эскроу счета в банке (на этом счете ваши средства хранятся до сдачи дома и только затем перечисляются застройщику)',
          },
          {
            text: 'Предоставление в территориальный орган Пенсионного фонда пакета документов для перечисления средств материнского капитала на эскроу-счет застройщика',
          },
          {
            text: 'Ожидание ввода дома в эксплуатацию',
          },
        ],
      },
    };
  },
  components: {
    TabsItem,
  },
};
</script>

<style scoped>
.li::before {
  content: '';
  width: 14px;
  height: 14px;
  margin-right: 13px;
  border: 4px solid var(--color);
  border-radius: 4px;
  flex-shrink: 0;
  transform: rotate(-45deg);
}

@screen 2xl {
  .xl-separator::after {
    content: "";
    position: absolute;
    width: 1px;
    background: theme('colors.dark');
    height: 100%;
    left: calc(50% - 78px);
    top: 0;
  }
}
</style>
