<template>
  <div class="carousel tw-w-[1000px]">
    <div class="inner tw-w-[2500px] tw-flex" :style="{ '--track': track }">
      <div class="tw-w-[500px] tw-h-[500px]"><div class="tw-mx-10 item clone tw-h-full">5 clone</div></div>
      <div class="tw-w-[500px] tw-h-[500px]"><div class="tw-mx-10 item tw-h-full">1</div></div>
      <div class="tw-w-[500px] tw-h-[500px]"><div class="tw-mx-10 item tw-h-full">2</div></div>
      <div class="tw-w-[500px] tw-h-[500px]"><div class="tw-mx-10 item tw-h-full">3</div></div>
      <div class="tw-w-[500px] tw-h-[500px]"><div class="tw-mx-10 item tw-h-full">4</div></div>
      <div class="tw-w-[500px] tw-h-[500px]"><div class="tw-mx-10 item tw-h-full">5</div></div>
      <div class="tw-w-[500px] tw-h-[500px]"><div class="tw-mx-10 item clone tw-h-full">1 clone</div></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.next = this.next
  },
  data() {
    return {
      current: 0
    }
  },
  computed: {
    track() {
      const fullSlide = 1000 / 2;
      const part = (1000 - fullSlide) / 2;
      return fullSlide * this.current * -1 - part + 'px';
    }
  },
  methods: {
    next() {
      this.current++;
    },
    prev() {

    }
  }
}
</script>

<style scoped>
.carousel {
  overflow: hidden;
}

.inner {
  transform: translate3d(var(--track), 0, 0)
}

.item {
  background: url(@/assets/images/temp/slide1.jpg) no-repeat;
  background-size: cover;
}
</style>
