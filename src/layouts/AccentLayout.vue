<template>
  <div
    class="layout-base tw-bg-primary tw-min-h-screen"
    :class="{ 'decor-cropped': decor }">
    <div
      class="tw-border-b tw-border-dark tw-py-[13px] lg:tw-py-[23px] 2xl:tw-py-[17px] tw-bg-primary tw-backdrop-blur-[14px] tw-flex tw-justify-center">
      <router-link class="" to="/">
        <img
          width="146"
          height="60"
          src="@/assets/images/logo.svg"
          alt="логотип грани" />
      </router-link>
    </div>
    <router-view />
    <Footer />
  </div>
  <InlineSvg
    class="tw-hidden"
    :src="require('@/assets/sprites/sprite-icons.svg')" />
</template>

<script>
export default {
  props: {
    decor: {
      default: false,
      type: Boolean,
    },
  },
};
</script>
<style scoped>
@screen 2xl {
  .decor-cropped {
    background: theme("colors.primary");
    background-image: url(@/assets/images/3d-gora-cropped.png);
    background-repeat: no-repeat;
    background-blend-mode: difference;
    background-size: 75%;
    background-position: -120px bottom;
  }
}
</style>
