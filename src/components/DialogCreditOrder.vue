<template>
  <div class="dialog-full callback tw-z-[890] tw-bg-dark" v-if="modelValue">
    <Header />
    <FormCreditOrder class="tw-flex tw-w-full tw-items-center cover cover--screen">
       <button
          class="tw-absolute tw-right-30 tw-top-20"
          @click="$emit('update:modelValue', false)"
        >
        <AppIcon name="close" size="36px" fill="white" />
      </button>
    </FormCreditOrder>
  </div>
</template>

<script>
import FormCreditOrder from './FormCreditOrder.vue';

export default {
  props: {
    modelValue: {
      default: false,
      type: Boolean,
    }
  },
  emits: ['update:modelValue'],
  components: {
    FormCreditOrder
  }
}
</script>

<style scoped>
.callback {
  display: grid;
  grid-template-rows: auto 1fr;
}
</style>
