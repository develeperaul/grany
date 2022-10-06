<template>
  <div class="dialog-full callback tw-z-[910] tw-bg-primary dialog-news tw-overflow-x-hidden" v-if="showedId.value">
    <Header />
    <div class="wrapper tw-w-full tw-pt-20 page-pb">
      <div class="tw-pt-48 tw-relative">
        <button class="tw-absolute tw-top-0 tw-right-0" type="button" @click="show(null)">
          <AppIcon name="close" size="36px" fill="white" />
        </button>
      </div>

      <div class="tw-absolute">
        <Spinner v-if="$store.getters['loaders/is']('news one')" />
      </div>
      <NewsShow v-if="content" :content="content" :id="showedId.value" />

      <div class="btn-group">
        <button
          :disabled="closestIds().prev === null"
          type="button"
          @click="prev"
        >
          <AppIcon
            class="tw-mr-10 tw-rotate-180"
            size="24px"
            name="arrow-next"
            fill="white"
            iconClass="tw-stroke-white"
          />
          предыдущая
        </button>
        <button
          :disabled="closestIds().next === null"
          type="button"
          @click="next"
        >
          следующая
          <AppIcon
            class="tw-ml-10"
            size="24px"
            name="arrow-next"
            fill="white"
            iconClass="tw-stroke-white"
          />
        </button>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import NewsShow from './NewsShow.vue';

export default {
  props: {
    content: {
      required: true,
      type: [Object, null]
    }
  },
  inject: ['showedId', 'show', 'prev', 'next', 'closestIds'],
  emits: ['update:showedId'],
  components: {
    NewsShow
  }
}
</script>

<style scoped>
.dialog-news {
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 100%;
}

.btn-group button {
  max-width: 144px;
  @apply tw-bg-orange tw-px-16 tw-py-12 lg:hover:tw-opacity-90 tw-w-full tw-cursor-pointer tw-inline-flex tw-items-center tw-justify-center tw-leading-100 tw-align-top;
}

.btn-group button:disabled {
  opacity: 0.6;
  @apply tw-bg-dark;
}

.btn-group button:first-child {
  border-radius: 6px 0px 0px 6px;
  border-right: 1px solid #DB5C00;
}

.btn-group button:last-child {
  border-radius: 0px 6px 6px 0px;
}
</style>
