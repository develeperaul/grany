<template>
  <button
    class="tw-p-10 tw-flex tw-items-center tw-bg-dark tw-rounded"
    :class="{
      'tw-text-white tw-bg-opacity-100': active,
      'tw-text-secondary tw-bg-opacity-0': !active
    }"
  >
    <AppIcon
      class="tw-mr-10"
      :name="icon"
      fill="secondary"
      :fillHex="active ? fill : ''"
      size="30px"
    />
    <span class="tw-text-sm tw-leading-100">{{ label }}</span>
  </button>
</template>

<script>
export default {
  props: {
    label: {
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
    },
    fill: {
      required: true,
      type: String
    }
  }
}
</script>

<style>

</style>
