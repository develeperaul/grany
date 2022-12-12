<template>
  <div class="layout-base tw-bg-primary tw-h-screen tw-overflow-hidden tw-relative tw-z-0 overlay">
    <Header opacityClass="tw-bg-opacity-40" />
    <div class="slider tw-absolute tw-inset-0 -tw-z-10">
      <div
        class="tw-bg-cover tw-bg-center tw-opacity-0 tw-transition-opacity tw-duration-500 tw-absolute tw-inset-0"
        :style="{ 'background-image': `url(${slide.image})` }"
        :class="{ 'tw-opacity-100 tw-z-10': i === current }"
        v-for="(slide, i) in slides"
        :key="i"
      ></div>
    </div>

    <main class="content tw-flex tw-pb-[8vh]">
      <div class="wrapper tw-w-full tw-mt-auto">
        <div class="slides">
          <p class="tw-font-extrabold tw-text-xl md:tw-text-xl10 2xl:tw-text-xl20 tw-leading-100" v-html="slide.text"></p>
          <div class="controls tw-space-x-4 tw-mt-26 landscape:tw-mt-4">
            <button
              class="controls__item" :class="{ 'controls__item--active': i === current }"
              v-for="(slide, i) in slides"
              :key="i"
              @click="onClick(i)"
            ></button>
          </div>
        </div>
      </div>
    </main>

    <Footer />

    <GDialog v-model="showedBanners" background="transparent" content-class="tw-h-screen tw-flex tw-items-center tw-justify-center tw-relative">
        <template #default="{ onClose }">
          <button
            class="tw-absolute tw-right-30 tw-top-0"
            @click="onClose"
          >
            <AppIcon name="close" size="36px" fill="white" />
          </button>
          <div class="tw-absolute tw-left-1/2 tw-top-1/2 -tw-translate-x-1/2 -tw-translate-y-1/2 -tw-z-10">
            <Spinner size="100px" />
          </div>
          <img
            v-if="hasBanners && isMobileBanner"
            class="tw-w-auto tw-max-h-full"
            :src="banners[1].url"
            alt="баннер"
            @click="showCallback"
          />
          <img
            v-else-if="hasBanners"
            class="tw-w-auto tw-max-h-full tw-cursor-pointer"
            :src="banners[0].url"
            alt="баннер"
            @click="showCallback"
          />
        </template>
      </GDialog>
  </div>
</template>
<script>
import { GDialog } from 'gitart-vue-dialog';
import { mapGetters, mapActions } from 'vuex';

export default {
  async created() {
    if(!this.hasBanners) await this.getBanners();
    if(this.hasBanners) this.showedBanners = true;
  },
  mounted() {
    this.start();
  },
  components: { GDialog },
  data() {
    return {
      showedBanners: false,
      interval: null,
      current: 0,
      slides: [
        {
          text: 'Новые грани жизни',
          image: require('@/assets/images/main/render-1.jpg'),
        },
        {
          text: 'Высотные дома в&nbsp;тихом центре',
          image: require('@/assets/images/main/render-4.jpg'),
        },
        {
          text: 'Новые грани комфорта',
          image: require('@/assets/images/main/render-3.jpg'),
        }
      ]
    }
  },
  methods: {
    ...mapActions(['getBanners']),
    showCallback() {
      this.$store.commit('callbackToggle', true);
      this.showedBanners = false;
    },
    onClick(i) {
      this.current = i;
      this.reset();
    },
    start() {
      this.interval = setInterval(() => this.tick(), 3000);
    },
    tick() {
      this.current >= this.slides.length -1 ? this.current = 0 : this.current++;
    },
    stop() {
      clearInterval(this.interval);
    },
    reset() {
      this.stop();
      this.start();
    }
  },
  computed: {
    ...mapGetters(['banners']),
    hasBanners() {
      return this.banners.length >= 2;
    },
    isMobileBanner() {
      const bp = ['', 'sm', 'md']
      return bp.includes(this.$grid.breakpoint);
    },
    slide() {
      return this.slides[this.current];
    },
    styles() {
      return {
        'background-image': `url(${this.slide.image})`,
      }
    }
  },
}
</script>
<style scoped lang="scss">
.content {
  position: relative;
  z-index: 0;
}

.slides {
  max-width: 450px;
  @apply md:tw-max-w-[600px] 2xl:tw-max-w-[800px];
}

.controls {
  display: flex;
  align-items: center;

  &__item {
    width: 14px;
    height: 14px;
    line-height: 12px;
    flex-shrink: 0;
    border-radius: 50%;
    text-align: center;
    @apply tw-border tw-border-orange tw-border-opacity-0;

    &--active {
      @apply tw-border-opacity-100;
    }

    &::after {
      content: '';
      display: inline-block;
      vertical-align: middle;
      width: 6px;
      height: 6px;
      background: #FFFFFF;
      border-radius: 50%;
    }
  }
}

.overlay::after {
  content: '';
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);
  height: 40vh;
  min-height: 360px;
  z-index: -1;
  @apply  tw-block tw-absolute tw-inset-x-0 tw-bottom-0;
}
</style>
