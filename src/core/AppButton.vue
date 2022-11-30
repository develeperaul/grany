<template>
  <component
    :is="tag"
    class="
      tw-rounded-md tw-text-white tw-bg-orange tw-text-center tw-py-20 tw-px-20 lg:tw-py-15 lg:tw-px-30
      hover:tw-bg-orangeHover
      active:tw-bg-opacity-90
      disabled:tw-bg-dark disabled:tw-text-secondary
    "
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      default: 'button',
      type: String
    }
  }
};
</script>

<style>
</style>
