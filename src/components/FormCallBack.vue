<template>
  <div class="tw-py-40 tw-px-16 md:tw-px-[98px] md:tw-py-80 lg:tw-px-[50px] lg:tw-py-40 2xl:tw-px-[150px] 2xl:tw-py-[50px] tw-bg-dark tw-relative">
    <div class="tw-max-w-[343px] lg:tw-max-w-[430px] 2xl:tw-max-w-[620px] tw-w-full tw-mx-auto tw-relative tw-z-10">
      <p class="tw-max-w-[280px] 2xl:tw-max-w-[465px] lg:tw-max-w-full tw-mb-10 tw-text-lg 2xl:tw-text-xl10 tw-leading-[84%] tw-font-extrabold">
        заказать звонок
      </p>
      <p class="tw-text-secondary tw-text-md tw-leading-120 tw-mb-30 2xl:tw-max-w-[430px]">
        Оставьте заявку, и наши менеджеры свяжутся с вами в&nbsp;течение 30 мин
      </p>
      <Form v-slot="{ isSubmitting }" @submit="submit">
        <div class="tw-flex tw-flex-wrap -tw-ml-10">
          <AppInput
            class="tw-pl-10 tw-basis-full lg:tw-basis-1/2 2xl:tw-basis-[210px]"
            rules="required"
            name="name"
            label="Ваше имя"
          />
          <AppInput
            rules="required|cellphone"
            class="tw-pl-10 tw-basis-full lg:tw-basis-1/2 2xl:tw-basis-[210px]"
            name="cellphone"
            label="Номер телефона"
            type="tel"
          />
          <AppButton
            class="tw-ml-[10px] tw-mt-12 2xl:tw-ml-15 tw-basis-full 2xl:tw-basis-[175px] tw-self-start"
            type="submit"
            :disabled="isSubmitting"
          >
            Отправить
          </AppButton>
        </div>
        <AppCheckbox class="tw-mt-24" name="agreement" label="Условия" rules="required">
          Я согласен с <AppLink native to="https://ya.ru" target="_blank">условиями передачи информации</AppLink>
        </AppCheckbox>
      </Form>
    </div>
    <slot />
  </div>
</template>
<script>
export default {
  methods: {
    async submit({ name, cellphone }) {
      await this.$store.dispatch('getFeedback', { name, cellphone, theme: 'Обратный звонок' });
      this.$notify({ type: 'success', text: 'Ваша заявка успешно отправлена!' });
    }
  }
}
</script>
