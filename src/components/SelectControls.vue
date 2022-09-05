<template>
  <div class="tw-mt-22 tw-flex tw-items-center">
    <button @click="handleChange(null)" class="tw-flex">
      <AppIcon class="tw-mr-10" name="reset" size="18px" fill="secondary" />
      <span class="tw-text-secondary tw-text-sm tw-leading-100 tw-mt-4">Сбросить</span>
    </button>
    <div class="tw-grow tw-px-8"></div>
    <button @click="close">
      <AppIcon size="48px" name="next" />
    </button>
  </div>
</template>

<script>
export default {
  props: ['handleChange', 'close']
}
</script>

<style>

</style>
