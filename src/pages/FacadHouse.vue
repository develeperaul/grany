<template>
  <div class="tw-h-screen tw-min-h-[700px] md:tw-min-h-[1000px] lg:tw-min-h-[800px] xl:tw-min-h-[800px] tw-overflow-hidden tw-relative tw-bg-primary">
    <Header class="tw-absolute tw-inset-x-0 tw-top-0" />
    <div class="tw-absolute tw-inset-0 tw-z-[5] tw-overflow-x-auto tw-pt-80 xl:tw-pt-[102px]">
      <div class="storey-popup" v-if="activeStorey && ['lg', 'xl', '2xl'].includes($grid.breakpoint)">
        <div>
          <p class="tw-text-xl tw-text-orange tw-font-extrabold">
            {{ activeStorey.number }}
          </p>
          <p>этаж</p>
        </div>
        <div>
          <p class="tw-text-xl tw-text-orange tw-font-extrabold">
            {{ activeStorey.flats_counters.free }}
          </p>
          <p>квартир свободно</p>
        </div>
      </div>
      <HousePlan
        v-if="$grid.breakpoint === '' || $grid.breakpoint === 'sm'"
        :storeys="storeys"
        ratio="xMidYMid slice"
        d="M206 192.643V177.14L315.524 200.395L538 169V186.442L315.524 219L206 192.643Z"
        width="743"
        height="837"
        :offset="17"
        :image="require('@/assets/images/house-mobile.jpg')"
        @enter="onEnter"
      />
      <HousePlan
        v-else-if="$grid.breakpoint === 'md'"
        :storeys="storeys"
        ratio="xMidYMid slice"
        d="M290 183.481V166.116L442.74 192.163L753 157V176.535L442.74 213L290 183.481Z"
        width="1000"
        height="900"
        :offset="24"
        :image="require('@/assets/images/house-tablet.jpg')"
        @enter="onEnter"
      />
      <HousePlan
        v-else-if="$grid.breakpoint === 'lg'"
        :storeys="storeys"
        ratio="xMidYMid slice"
        d="M626 178.225V163.651L726.617 185.512L931 156V172.395L726.617 203L626 178.225Z"
        width="1120"
        height="735"
        :offset="16"
        :image="require('@/assets/images/house-lg.jpg')"
        @enter="onEnter"
      />
      <HousePlan
        v-else
        :storeys="storeys"
        ratio="xMidYMid slice"
        d="M1137 254.736V234.581L1296.01 264.814L1619 224V246.674L1296.01 289L1137 254.736Z"
        width="1920"
        height="900"
        :offset="22"
        :image="require('@/assets/images/house-1.jpg')"
        @enter="onEnter"
        @leave="onLeave"
      />
    </div>
    <Footer class="tw-absolute tw-inset-x-0 tw-bottom-0 tw-z-10"/>
  </div>
</template>

<script>
import HousePlan from '@/components/HousePlan.vue';

export default {
  data() {
    return {
      entrance: null,
      storeysMap: new Map(),
      activeStorey: null,
      timer: null
    }
  },
  created() {
    this.getEntrance();
  },
  methods: {
    async getEntrance() {
      this.entrance = await this.$store.dispatch('entrances/entrancesOne', { id: 1 });
    },
    async onEnter(storeyId) {
      if(this.storeysMap.has(storeyId)) {
        this.activeStorey = this.storeysMap.get(storeyId);
      } else {
        this.activeStorey = await this.$store.dispatch('storeys/storeysOne', { id: storeyId });
      }
    },
    onLeave() {
      if(this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.activeStorey = null;
      }, 500);
    }
  },
  computed: {
    storeys() {
      if(!this.entrance) return [];
      const entries = Object.entries(this.entrance.storeys);
      const sorted = entries.sort((a, b) => b[0] - a[0]);
      return sorted.map(entry => ({ id: entry[1], number: entry[0] }))
    },
  },
  components: {
    HousePlan
  }
}
</script>

<style scoped>
.storey-popup {
  padding: 24px;
  border-radius: 18px;
  background: rgba(8, 25, 36, 0.7);
  backdrop-filter: blur(7px);
  color: #ffffff;
  font-size: 14px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 25px;
}

@screen 2xl {
  .storey-popup {
    left: 100px;
  }
}
</style>
