<template>
  <div class="tw-h-screen tw-overflow-hidden tw-relative tw-bg-primary">
    <Header class="tw-absolute tw-inset-x-0 tw-top-0" />
    <div class="tw-absolute tw-inset-0 tw-z-[5]">
      <svg class="tw-w-full tw-h-full" viewBox="0 0 1920 900" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
        <image width="100%" height="100%" :xlink:href="require('@/assets/images/house-1.jpg')" />
        <path
          v-for="(storey, i) in storeys"
          :key="storey.id"
          class="tw-opacity-0 hover:tw-opacity-50 tw-cursor-pointer"
          fill="#FF8413"
          d="M1137 254.736V234.581L1296.01 264.814L1619 224V246.674L1296.01 289L1137 254.736Z"
          :style="{ transform: `translateY(${22 * i}px)` }"
          @click="$router.push({ name: 'storey', params: { id: storey.id } })"
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
      entrance: null
    }
  },
  created() {
    this.getEntrance();
  },
  methods: {
    async getEntrance() {
      this.entrance = await this.$store.dispatch('entrances/entrancesOne', { id: 1 });
    }
  },
  computed: {
    storeys() {
      if(!this.entrance) return null;
      const entries = Object.entries(this.entrance.storeys);
      const sorted = entries.sort((a, b) => b[0] - a[0]);
      return sorted.map(entry => ({ id: entry[1], number: entry[0] }))
    },
  }
}
</script>

<style scoped>
</style>
