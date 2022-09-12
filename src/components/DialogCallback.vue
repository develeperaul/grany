<template>
  <div class="dialog-full callback tw-z-[910] tw-bg-dark" v-if="$store.state.dialogCallbackShowed">
    <Header />
    <FormCallBack class="tw-flex tw-w-full tw-items-center cover cover--screen" />
  </div>
</template>

<script>
import FormCallBack from './FormCallBack.vue';

export default {
  components: {
    FormCallBack
  }
}
</script>

<style scoped>
.callback {
  display: grid;
  grid-template-rows: auto 1fr;
}
</style>
