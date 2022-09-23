<template>
  <article class="tw-flex tw-flex-wrap tw-cursor-pointer">
    <div class="tw-w-full tw-mb-10 tw-h-[95px] md:tw-max-w-[60px] md:tw-h-[40px] md:tw-mb-0">
      <img width="1" height="95" class="tw-h-full tw-w-full tw-object-cover tw-rounded" :src="picSrc" :alt="title" />
    </div>
    <div class="tw-w-full md:tw-max-w-[100px] md:tw-ml-14">
      <h2 class="tw-mb-2">{{ title }}</h2>
      <p class="tw-text-xs tw-leading-100 tw-text-secondary">
        {{ picCount }} фото
      </p>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String
    },
    picCount: {
      default: 0,
      type: [String, Number]
    },
    picSrc: {
      required: true,
      type: String
    }
  }
}
</script>

<style>

</style>
