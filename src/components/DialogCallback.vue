<template>
  <div class="dialog-full callback tw-z-[910] tw-bg-dark" v-if="$store.state.dialogCallbackShowed">
    <Header />
    <FormCallBack class="tw-flex tw-w-full tw-items-center cover cover--screen">
      <button
        class="tw-absolute tw-right-30 tw-top-20"
        @click="$store.commit('callbackToggle')"
      >
        <AppIcon name="close" size="36px" fill="white" />
      </button>
    </FormCallBack>
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
