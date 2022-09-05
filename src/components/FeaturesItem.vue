<template>
  <button
    class="tw-rounded tw-border tw-py-10 tw-pr-20 tw-pl-10 tw-flex tw-items-center"
    :class="{
      'tw-bg-orange tw-text-white tw-border-orange': active,
      'tw-text-secondary tw-border-gray  lg:hover:tw-opacity-70': !active
    }"
  >
    <AppIcon
      class="tw-mr-10"
      :name="icon"
      size="30px"
      :fill="active ? 'white' : 'secondary'"
    />
    <span class="tw-text-sm tw-leading-100">{{ name }}</span>
  </button>
</template>

<script>
export default {
  props: {
    name: {
      required: true,
      type: String
    },
    icon: {
      required: true,
      type: String
    },
    active: {
      default: false,
      type: Boolean
    }
  },
}
</script>

<style>

</style>
