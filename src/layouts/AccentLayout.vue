<template>
  <div
    class="layout-base  tw-border-t tw-border-[#D7D7D7] tw-min-h-screen"
    >
    <div
      class="tw-border-b tw-border-[#D7D7D7] tw-py-[13px] lg:tw-py-[23px] 2xl:tw-py-[17px]  tw-flex tw-justify-center">
      <a class="" href="https://chernikadom.ru">
        <img
          width="146"
          height="60"
          src="@/assets/images/logo.svg"
          alt="логотип грани" />
      </a>
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
    
    background-repeat: no-repeat;
    background-blend-mode: difference;
    background-size: 75%;
    background-position: -120px bottom;
  }
}
</style>
