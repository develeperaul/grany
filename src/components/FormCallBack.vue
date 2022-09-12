<template>
  <div class="tw-py-40 tw-px-16 md:tw-px-[98px] md:tw-py-80 lg:tw-px-60 lg:tw-py-40 2xl:tw-px-[150px] 2xl:tw-py-[50px] tw-bg-dark tw-relative cover">
    <div class="tw-max-w-[620px] tw-mx-auto tw-relative tw-z-10">
      <p class="tw-max-w-[280px] 2xl:tw-max-w-[465px] lg:tw-max-w-full tw-mb-10 tw-text-lg 2xl:tw-text-xl10 tw-leading-[84%] tw-font-extrabold">
        заказать звонок
      </p>
      <p class="tw-text-secondary tw-text-md tw-leading-120 tw-max-w-[500px] tw-mb-30">
        Оставьте завяку, и наши менеджеры свяжутся с вами в течение 30 мин
      </p>
      <Form @submit="1">
        <div class="tw-flex tw-flex-wrap -tw-ml-10">
          <AppInput
            class="tw-pl-10 tw-basis-full lg:tw-basis-1/2 2xl:tw-basis-[210px]"
            rules="required"
            name="name"
            label="Ваше имя"
          />
          <AppInput
            rules="required"
            class="tw-pl-10 tw-basis-full lg:tw-basis-1/2 2xl:tw-basis-[210px]"
            name="cellphone"
            label="Номер телефона"
          />
          <AppButton class="tw-ml-[10px] 2xl:tw-ml-15 tw-basis-full 2xl:tw-basis-[175px] tw-self-start" type="submit">
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

<style scoped>
  .cover {
    overflow: hidden;
  }

  .cover::before {
    content: "";
    width: 260px;
    height: 260px;
    z-index: 0;
    background-image: url(@/assets/images/cfera.png);
    background-repeat: no-repeat;
    mix-blend-mode: luminosity;
    background-size: cover;
    transform: rotate(90deg);
    position: absolute;
    top: -88px;
    right: -56px;
  }

  @screen lg {
    .cover::before {
      width: 574px;
      height: 546px;
      transform: rotate(-180deg);
      right: -313px;
    }
  }

  @screen 2xl {
    .cover::before {
      width: 600px;
      height: 600px;
    }
  }
</style>
