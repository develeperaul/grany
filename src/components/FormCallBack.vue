<template>
  <div class="tw-bg-dark tw-py-[50px]">
    <div class="tw-max-w-[620px] tw-mx-auto">
      <p class="tw-max-w-[465px] tw-mb-10 tw-text-xl10 tw-leading-[84%] tw-font-extrabold">
        заказать звонок
      </p>
      <p class="tw-text-secondary tw-text-md tw-leading-120 tw-max-w-[500px] tw-mb-30">
        Оставьте завяку, и наши менеджеры свяжутся с вами в течение 30 мин
      </p>
      <Form @submit="1">
        <div class="tw-flex -tw-ml-10">
          <AppInput class="tw-ml-10 tw-basis-[210px]" name="name" />
          <AppInput class="tw-ml-10 tw-basis-[210px]" name="cellphone" />
          <AppButton class="tw-ml-15 tw-basis-[175px]" type="submit">
            Отправить
          </AppButton>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
