<template>
  <section class="2xl:tw-pt-80">
    <p class="tw-text-md tw-text-[#4F626D] tw-leading-120 tw-mb-20 tw-max-w-[343px] md:tw-text-lg md:tw-max-w-[480px] md:tw-font-extrabold lg:tw-max-w-[940px]">
      {{ content.name }}
    </p>
    <div class="tw-mb-10 md:tw-mb-30 tw-max-w-[343px] md:tw-max-w-[480px] lg:tw-max-w-[940px]" v-if="content.bodyImageUrl">
      <img width="300" height="300" class="tw-w-full" :src="content.bodyImageUrl" alt="картинка к новости" />
    </div>
    <div class="tw-mb-30 tw-max-w-[343px] md:tw-max-w-[480px] tw-space-y-10 2xl:tw-max-w-[680px]" v-html="content.body"></div>
  </section>
</template>

<script>
export default {
  props: {
    id: {
      required: true,
      type: [String, Number]
    },
    content: {
      required: true,
      type: Object
    }
  },
}
</script>

<style>

</style>
