<template>
  <div class="tw-h-screen tw-overflow-hidden tw-relative tw-bg-[#E5E5E5]">
    <Header class="tw-absolute tw-inset-x-0 tw-top-0" />
    <div class="tw-absolute tw-inset-x-0 tw-bottom-0 tw-pt-[81px] lg:tw-pt-[101px] tw-h-full tw-z-[5]">
      <svg class="tw-w-full tw-h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
        <image width="100%" height="100%" :xlink:href="require('@/assets/images/house-render.jpg')" />
        <path
          class="tw-opacity-0 hover:tw-opacity-10 tw-cursor-pointer"
          :class="{ selected }"
          d="M609.476 326L529 398L603.5 741L664 881L730 794.5L684.966 465L609.476 326Z" fill="#FF8413"
          @click="onClick"
        />
      </svg>
    </div>
    <Footer class="tw-absolute tw-inset-x-0 tw-bottom-0 tw-z-10"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: false
    }
  },
  methods: {
    onClick() {
      if(!this.selected) return this.selected = true;
      this.$router.push({ name: 'facad.house' })
    }
  }
}
</script>

<style scoped>
  .selected {
    opacity: .5 !important;
  }
</style>
