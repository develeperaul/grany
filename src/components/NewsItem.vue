<template>
  <article class="tw-pb-16 md:tw-pb-10 tw-border-b tw-border-dark tw-cursor-pointer lg:hover:tw-opacity-70" role="link">
    <div class="tw-text-secondary tw-mb-4">{{ created }}</div>
    <h2 class=" tw-text-md">{{ name }}</h2>
  </article>
</template>

<script>
export default {
  props: {
    id: {
      required: true,
      type: [Number, String]
    },
    name: {
      required: true,
      type: String
    },
    created: {
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
