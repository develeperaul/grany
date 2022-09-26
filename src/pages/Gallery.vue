<template>
  <app-page>
    <swiper
      class="gallery-swiper"
      loop
      lazy
      centeredSlides
      watchSlidesProgress
      :followFinger="false"
      :longSwipes="false"
      :shortSwipes="false"
      :breakpoints="{
        1024: {
          slidesPerView: 1.5
        },
        1920: {
          slidesPerView: 2
        }
      }"
      :navigation="{
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      }"
      :modules="modules"
      :slidesPerView="1"
      :spaceBetween="21"
      @swiper="setSwiper"
    >
      <swiper-slide  v-for="i in 4" :key="i">
        <img
          :data-src="`/gallery/g${i}.jpg`"
          class="swiper-lazy tw-w-full tw-h-full tw-object-cover"
        />
        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </swiper-slide>

      <!-- Navigation arrows -->
      <button class="swiper-prev" @click="swiper.slidePrev()">
        <AppIcon name="swiper-arrow-prev" size="100%" />
      </button>
      <button class="swiper-next" @click="swiper.slideNext()">
        <AppIcon name="swiper-arrow-prev" size="100%" />
      </button>
    </swiper>
  </app-page>
</template>

<script>
import "swiper/css";
import "swiper/css/lazy";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Lazy, Navigation } from "swiper";
import { ref } from '@vue/reactivity';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const swiper = ref(null);
    return {
      modules: [Lazy, Navigation],
      swiper,
      setSwiper: (instance) => {
        swiper.value = instance;
      }
    };
  },
}
</script>
<style>
.swiper-next, .swiper-prev {
  position: absolute;
  width: 36px;
  height: 36px;
  z-index: 10;
  top: 50%;
  transform: translateY(-50%);
}

.swiper-prev {
  left: 16px;
}

.swiper-next {
  right: 16px;
  transform: translateY(-50%) rotate(180deg);
}

@screen lg {
  .swiper-next, .swiper-prev {
    width: 48px;
    height: 48px;
  }

  .swiper-prev {
    left: 40px;
  }

  .swiper-next {
    right: 40px;
    transform: translateY(-50%) rotate(180deg);
  }
}
</style>
<style scoped>
.gallery-swiper {
  width: 100%;
  height: 100%;
}
</style>
