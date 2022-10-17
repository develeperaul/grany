<template>
  <app-page class="page-pb">
    <div class="wrapper">
      <h1 class="h1 tw-max-w-[340px] tw-mb-20 md:tw-max-w-full md:tw-mb-40">ИПОТЕЧНЫЙ КАЛЬКУЛЯТОР</h1>
      <form class="tw-mb-30 lg:tw-flex" @submit="submit">
        <div class="md:tw-flex md:tw-flex-wrap md:-tw-ml-30 md:-tw-mt-10 md:tw-basis-full">
          <AppInput
            :class="[ inputClass ]"
            name="cost"
            label="Стоимость квартиры, руб"
            rules="required|integer"
            v-model="form.cost"
          />
          <AppInput
            :class="[ inputClass ]"
            name="start"
            label="Первоначальный взнос, руб."
            rules="required|integer"
            v-model="form.pay"
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
            rules="required|integer"
            v-model="form.period"
          />
          <AppInput
            :class="[ inputClass ]"
            name="bid"
            label="Ставка, %"
            rules="required|integer"
            type="number"
            v-model="form.percent"
          />
          <AppInput
            :class="[ inputClass ]"
            disabled
            name="month_cost"
            label="Ежемесячный платёж, руб"
            v-model="monthCost"
          />
          <AppInput
            :class="[ inputClass ]"
            disabled
            name="credit_sum"
            label="Сумма кредита, руб"
            v-model="creditSum"
          />
        </div>
        <AppButton
          class="tw-w-full tw-mt-10 md:tw-w-auto lg:tw-ml-30 lg:tw-basis-[200px] lg:tw-mb-20 tw-shrink-0 lg:tw-self-end"
        >
          Отправить заявку
        </AppButton>
      </form>
      <p class="tw-text-secondary tw-mb-40 md:tw-mb-80">{{ caption }}</p>
      <section>
        <div class="tw-inline-flex tw-items-center tw-mb-30 md:tw-mb-20 tw-relative">
          <h2 class="tw-text-lg tw-font-extrabold tw-text-secondary tw-leading-100">
            банки-партнёры
          </h2>
          <button class="tw-ml-10" @click="bankPopup = !bankPopup">
            <AppIcon
              name="attention"
              size="18px"
              iconClass="tw-stroke-secondary tw-fill-secondary" />
          </button>
          <div
            v-if="bankPopup"
            class="tw-absolute tw-w-full tw-leading-100 tw-top-full tw-left-0 tw-text-xs tw-text-[#C9CCCE] md:tw-top-auto md:tw-pl-20 md:tw-left-full md:tw-w-[400px]"
          >
            ООО «СЗ «Агидель-ИнвестСтрой» работает со всеми банками
          </div>
        </div>
        <div class="tw-flex tw-flex-wrap -tw-mt-16 -tw-ml-10 md:-tw-mt-20 lg:tw-max-w-[800px] 2xl:tw-max-w-full">
          <div
            class="tw-w-1/2 tw-pl-10 tw-pt-16 md:tw-w-1/3 md:tw-mt-20 2xl:tw-w-auto"
            v-for="item in partners"
            :key="item.alt"
          >
            <img class="md:tw-w-[200px]" width="160" height="40" v-bind="item" loading="lazy" />
          </div>
        </div>
      </section>
    </div>
    <teleport to="body">
      <DialogCreditOrder
        v-if="creditSum !== ''"
        v-model="showedDialog"
        v-bind="{ creditSum }"
      />
    </teleport>
  </app-page>
</template>

<script>
import DialogCreditOrder from '@/components/DialogCreditOrder.vue';
import { useForm } from 'vee-validate';
import { ref } from 'vue';
import { throttle } from 'throttle-debounce';

export default {
  setup() {
    const showedDialog = ref(false);
    const { handleSubmit, meta } = useForm();

    return {
      meta,
      showedDialog,
      submit: handleSubmit(() => showedDialog.value = true),
    }
  },
  data() {
    return {
      bankPopup: false,
      form: {
        cost: '',
        pay: '',
        period: '',
        percent: '',
      },
      monthCost: '',
      creditSum: '',
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
          alt: 'Альфа банк',
          src: require('@/assets/images/bank-partners/alfa.svg'),
        },
        {
          alt: 'Дом рф',
          src: require('@/assets/images/bank-partners/domrf.svg'),
        },
        {
          alt: 'Россельхоз банк',
          src: require('@/assets/images/bank-partners/rossel.svg'),
        },
        {
          alt: 'Газпромбанк',
          src: require('@/assets/images/bank-partners/gazp.svg'),
        }
      ]
    }
  },
  methods: {
    calculate(price, pay, percent, years) {
      const i = parseFloat( percent / 100 / 12 );
      const n = parseFloat( years * 12 );
      this.creditSum = price - pay;
      const r = this.creditSum * ( ( i * Math.pow( 1 + i, n ) ) / ( Math.pow( 1 + i, n ) - 1 ) );
      this.monthCost = r.toFixed(2);
    },
    showCaption() {
      this.showedCaption = !this.showedCaption;
    },
    tryCalc() {
      if(!this.meta.valid) return;
      const { cost, pay, percent, period } = this.form;
      this.calculate(+cost, +pay, +percent, +period)
    }
  },
  watch: {
    form: {
      handler: throttle(50, function () {
        setTimeout(() => this.tryCalc(), 0);
      }),
      deep: true
    },
  },
  components: {
    DialogCreditOrder
  }
};
</script>

<style>
</style>
