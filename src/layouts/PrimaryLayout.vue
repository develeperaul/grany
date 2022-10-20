<template>
  <div class="layout-base tw-bg-primary tw-min-h-screen" :class="{ 'decor-cropped': decor }">
    <Header />
    <router-view />
    <Footer />
  </div>
  <InlineSvg class="tw-hidden" :src="require('@/assets/sprites/sprite-icons.svg')" />
</template>

<script>
export default {
  props: {
    decor: {
      default: false,
      type: Boolean
    }
  }
}
</script>
<style scoped>
@screen 2xl {
  .decor-cropped {
    background: theme('colors.primary');
    background-image: url(@/assets/images/3d-gora-cropped.png);
    background-repeat: no-repeat;
    background-blend-mode: difference;
    background-size: 75%;
    background-position: -120px bottom;
  }
}
</style>
