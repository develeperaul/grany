<template>
  <div class="dialog-full callback tw-z-[910] tw-bg-dark" v-if="showed">
    <Header />
    <FormBook class="tw-flex tw-w-full tw-items-center cover cover--screen" v-bind="{ flatNumber }">
      <button
        class="tw-absolute tw-right-30 tw-top-20"
        @click="$emit('update:showed', false)"
      >
        <AppIcon name="close" size="36px" fill="white" />
      </button>
    </FormBook>
  </div>
</template>

<script>
import FormBook from './FormBook.vue';

export default {
  props: {
    showed: {
      default: false,
      type: Boolean
    },
    flatNumber: {
      required: true,
      type: Number
    }
  },
  emits: ['update:showed'],
  components: {
    FormBook
  }
}
</script>

<style scoped>
.callback {
  display: grid;
  grid-template-rows: auto 1fr;
}
</style>
