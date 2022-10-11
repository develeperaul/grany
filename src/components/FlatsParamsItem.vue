<template>
  <router-link
    class="tw-text-secondary tw-py-20 tw-px-16 tw-border-b md:tw-border-r tw-border-gray md:tw-w-1/2 tw-flex tw-flex-wrap xl:hover:tw-bg-[#f1f1f1] xl:tw-transition-colors"
    :to="{ name: 'flats.one', params: { id: item.id } }"
  >
    <div class="xl:tw-w-1/2 2xl:tw-w-1/3">
      <p class="tw-text-dark tw-text-lg tw-font-extrabold tw-leading-100 tw-mb-10">
        {{ item.total_area }} <span>м<sup>2</sup></span>
      </p>
      <div class="tw-mb-6">
        <p>Литер {{ item.house_name }}  •  Этаж {{ item.storey_number }} •  {{ item.rooms_number }} комнаты</p>
      </div>
    </div>

    <div class="tw-mb-20 tw-w-full xl:tw-w-1/2 xl:tw-pr-30 xl:tw-pl-10 2xl:tw-w-1/3">
      <img
        v-if="item.images"
        class="tw-w-auto tw-h-[160px]"
        :src="item.images[0]"
        width="160"
        height="160"
        loading="lazy"
        alt="квартира 99.5 м2">
    </div>

    <div class="tw-w-full tw-self-start tw-flex tw-flex-wrap -tw-mt-10 -tw-mx-8 tw-max-w-[450px] 2xl:tw-w-1/3">
      <div
        class="xl:tw-w-1/3 tw-w-1/2 2xl:tw-w-1/2 tw-px-8 tw-pt-10"
        v-for="(value, key) in $store.getters['flats/featuresHave'](item)"
        :key="key"
      >
        {{ value }}
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    item: {
      required: true,
      type: Object
    }
  }
}
</script>
<style scoped>
.item:hover > div:first-child {
  opacity: 0.7;
}
</style>
