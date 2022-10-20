<template>
  <app-page class="2xl:tw-pt-[70px]">
    <div class="wrapper tw-relative">
      <h1 class="h1 tw-mb-20 2xl:tw-absolute">контакты</h1>
      <div class="xl:tw-flex xl:tw-flex-wrap">
        <div class="tw-mb-20 xl:tw-w-1/2 2xl:tw-w-full 2xl:tw-pl-[50%] 2xl:tw-mb-40 2xl:tw-pt-24">
          <p class="tw-text-secondary tw-leading-120 tw-text-md tw-pb-20 md:tw-text-lg md:tw-font-extrabold md:tw-max-w-[600px]">
            г. Уфа, ул. Обская, 7
          </p>
          <div class="-tw-mt-10 md:tw-flex md:-tw-mx-20 xl:tw-block">
            <div class="tw-pt-10 md:tw-px-20">
              <a class="tw-block" :href="`tel:${$store.getters.unmaskedPhone($store.state.contactPhone)}`">
                {{ $store.state.contactPhone }}
              </a>
              <a class="tw-block" href="mailto:grany-ufa@yandex.ru">
                grani-ufa@yandex.ru
              </a>
            </div>
            <div class="tw-pt-10 md:tw-px-20">
              <p>Пн. - Пт. 09:00 - 18:00 (перерыв с 13:00 до 14:00)</p>
              <p>Сб. - Вс. - выходные дни</p>
            </div>
          </div>
        </div>
        <div class="tw-mb-40 md:tw-mb-0 xl:tw-w-1/2 xl:-tw-mt-[100px] 2xl:tw-mt-0 2xl:tw-order-2">
          <yandex-map
            class="tw-mix-blend-luminosity tw-relative tw-z-10 tw-h-[290px] md:tw-h-[390px] xl-h"
            :coords="[54.716570, 55.999484]"
            :zoom="15"
            :controls="[]"
          >
            <ymap-marker
              marker-id="place"
              :coords="[54.716570, 55.999484]"
              hint-content="офис - ул. Магистральная, 36Б"
            />
          </yandex-map>
        </div>
        <FormCallBack class="cover -tw-mx-16 md:tw-mx-0 xl:tw-hidden 2xl:tw-block 2xl:tw-order-1"/>
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

<style scoped>
@screen xl {
  .xl-h {
    height: calc(100vh - 180px)
  }
}

@screen 2xl {
  .xl-h {
    height: 100%;
  }
}
</style>
