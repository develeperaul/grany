<template>
  <app-page class="page-pb">
    <div class="wrapper">
      <h1 class="h1 tw-max-w-[340px] tw-mb-20 md:tw-max-w-full md:tw-mb-40">ИПОТЕЧНЫЙ КАЛЬКУЛЯТОР</h1>
      <Form class="tw-mb-30 lg:tw-flex" @submit="submit">
        <div class="md:tw-flex md:tw-flex-wrap md:-tw-ml-30 md:-tw-mt-10 md:tw-basis-full">
          <AppInput
            :class="[ inputClass ]"
            name="cost"
            label="Стоимость квартиры, руб"
            rules="required"
          />
          <AppInput
            :class="[ inputClass ]"
            name="start"
            label="Первоначальный взнос, руб."
            rules="required"
          >
            <template #append>
              <button type="button" class="tw-p-4" @click="showCaption">
                <AppIcon
                  name="attention"
                  size="18px"
                  :iconClass="showedCaption ? 'tw-stroke-orange tw-fill-orange' : 'tw-stroke-secondary tw-fill-secondary'"
                />
              </button>
            </template>
            <template v-if="showedCaption" #caption>
              <p class="tw-text-orange">не менее 15% от стоимости квартиры</p>
            </template>
          </AppInput>
          <AppInput
            :class="[ inputClass ]"
            name="term"
            label="Срок кредита, лет"
            rules="required"
          />
          <AppInput
            :class="[ inputClass ]"
            name="bid"
            label="Ставка, %"
            rules="required"
            type="number"
          />
          <AppInput
            :class="[ inputClass ]"
            name="month_cost"
            label="Ежемесячный платёж, руб"
            rules="required"
          />
          <AppInput
            :class="[ inputClass ]"
            name="credit_sum"
            label="Сумма кредита, руб"
            rules="required"
          />
        </div>
        <AppButton
          class="tw-w-full tw-mt-10 md:tw-w-auto lg:tw-ml-30 lg:tw-basis-[200px] lg:tw-mb-20 tw-shrink-0 lg:tw-self-end"
        >
          Отправить заявку
        </AppButton>
      </Form>
      <p class="tw-text-secondary tw-mb-40 md:tw-mb-80">{{ caption }}</p>
      <section>
        <h2 class="tw-text-lg tw-font-extrabold tw-text-secondary tw-leading-100 tw-mb-20">
          банки-партнёры
        </h2>
        <div class="tw-flex tw-flex-wrap -tw-mt-10 -tw-ml-10">
          <div
            class="tw-w-1/2 tw-pl-10 tw-pt-10 md:tw-w-auto"
            v-for="item in partners"
            :key="item.alt"
          >
            <img width="160" height="40" v-bind="item" loading="lazy" />
          </div>
        </div>
      </section>
    </div>
    <teleport to="body">
      <DialogCreditOrder v-model="showedDialog" />
    </teleport>
  </app-page>
</template>

<script>
import DialogCreditOrder from '@/components/DialogCreditOrder.vue';

export default {
  data() {
    return {
      showedDialog: false,
      showedCaption: false,
      inputClass: 'md:tw-w-1/3 md:tw-pl-30 md:tw-pt-10 2xl:tw-w-1/6',
      caption: 'Расчет кредита является предварительным, не является публичной офертой. Получите подробную информацию у специалиста отдела продаж.',
      partners: [
        {
          alt: 'Сбер',
          src: require('@/assets/images/bank-partners/sber.svg'),
        },
        {
          alt: 'ВТБ',
          src: require('@/assets/images/bank-partners/vtb.svg'),
        },
        {
          alt: 'Абсолют банк',
          src: require('@/assets/images/bank-partners/absolute.svg'),
        },
        {
          alt: 'Райффайзен банк',
          src: require('@/assets/images/bank-partners/raif.svg'),
        }
      ]
    }
  },
  methods: {
    showCaption() {
      this.showedCaption = !this.showedCaption;
    },
    submit() {
      this.showedDialog = true;
    }
  },
  components: {
    DialogCreditOrder
  }
};
</script>

<style>
</style>
