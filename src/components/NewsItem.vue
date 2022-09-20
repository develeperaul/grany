<template>
  <article class="tw-pb-16 md:tw-pb-10 tw-border-b tw-border-dark tw-cursor-pointer lg:hover:tw-opacity-70" role="link">
    <div class="tw-text-secondary tw-mb-4">{{ createdAt }}</div>
    <h2 class=" tw-text-md">{{ title }}</h2>
  </article>
</template>

<script>
export default {
  props: {
    id: {
      required: true,
      type: [Number, String]
    },
    title: {
      required: true,
      type: String
    },
    createdAt: {
      required: true,
      type: String
    },
    active: {
      default: false,
      type: Boolean
    }
  }
}
</script>

<style>

</style>
