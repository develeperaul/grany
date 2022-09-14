<template>
  <app-page class="2xl:tw-pt-[70px]">
    <div class="wrapper">
      <h1 class="h1 tw-mb-20 2xl:tw-absolute">контакты</h1>
      <div class="xl:tw-flex xl:tw-flex-wrap">
        <div class="tw-mb-20 xl:tw-w-1/2 2xl:tw-w-full 2xl:tw-pl-[50%] 2xl:tw-mb-40">
          <p class="tw-text-secondary tw-leading-120 tw-text-md tw-pb-20 md:tw-text-lg md:tw-font-extrabold md:tw-max-w-[600px]">
            Башкортостан, г. Уфа, ул. Магистральная, 36Б
          </p>
          <div class="-tw-mt-10 md:tw-flex md:-tw-mx-20 xl:tw-block">
            <div class="tw-pt-10 md:tw-px-20">
              <a class="tw-block" href="tel:+73472586677">
                +7 (347) 258-66-77
              </a>
              <a class="tw-block" href="mailto:belierosidomufa@yandex.ru">
                belierosidomufa@yandex.ru
              </a>
            </div>
            <div class="tw-pt-10 md:tw-px-20">
              <p>Пн. - Пт. 10:00 - 17:00 (без перерыва)</p>
              <p>Сб. - Вс. - выходные дни</p>
            </div>
          </div>
        </div>
        <div class="tw-mb-40 md:tw-mb-0 xl:tw-w-1/2 2xl:tw-order-2">
          <yandex-map
            class="tw-mix-blend-luminosity tw-h-[290px] md:tw-h-[390px] xl:tw-h-[580px] 2xl:tw-h-[440px]"
            :coords="[54.709725, 55.828768]"
            :zoom="15"
            :controls="[]"
          >
            <ymap-marker
              marker-id="place"
              :coords="[54.709725, 55.828768]"
              hint-content="офис - ул. Магистральная, 36Б"
            />
          </yandex-map>
        </div>
        <FormCallBack class="cover -tw-mx-16 md:tw-mx-0 xl:tw-w-1/2 xl:tw-ml-auto 2xl:tw-order-1"/>
      </div>
    </div>
  </app-page>
</template>

<script>
import FormCallBack from '@/components/FormCallBack.vue';

export default {
  components: {
    FormCallBack
  }
}
</script>

<style>

</style>
