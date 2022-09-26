<template>
  <app-page class="tw-pb-40 2xl:tw-pb-0 tw-relative">
    <div class="wrapper">
      <div class="grid">
        <h1 class="h1 tw-mb-20">ход <br class="md:tw-hidden" /> строительства</h1>

        <div class="tw-flex tw-flex-wrap tw-space-x-10 tw-mb-20 md:tw-mb-30">
          <button
            class="tab"
            :class="{ 'tab--active': curTab === tab }"
            v-for="tab in tabs"
            :key="tab"
            @click="curTab = tab"
          >
            {{ tab }}
          </button>
        </div>

        <div class="tw-flex tw-flex-wrap -tw-ml-10 -tw-mt-10 tw-mb-30 items app-scroll-y">
          <ProgressItem
            v-for="i in 100" :key="i"
            class="tw-w-1/2 tw-pl-10 tw-pt-10 md:tw-w-1/3"
            title="Январь 2021 г."
            picCount="25"
            picSrc="/gallery/g1.jpg"
            @click="showedGallery = true"
          />
        </div>

        <div class="2xl:tw-pb-40">
          <AppButton class="tw-w-full md:tw-max-w-[200px]">Онлайн-трансляция</AppButton>
        </div>

        <div v-if="$grid['2xl']" class="tw-relative overlay">
          <div class="tw-flex tw-flex-wrap -tw-mx-10 -tw-mt-20 tw-overflow-x-hidden app-scroll-y">
            <div class="tw-w-1/2 tw-px-10 tw-pt-20 tw-cursor-pointer" v-for="i in 10" :key="i" @click="showedGallery = true">
              <img src="/gallery/g1.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showedGallery" class="gallery-dialog tw-pt-[70px] tw-pb-[110px] tw-relative">
      <button
        class="tw-absolute tw-right-30 tw-top-20"
        @click="showedGallery = false"
      >
        <AppIcon name="close" size="36px" fill="white" />
      </button>
      <SwiperGallery :sources="['/gallery/g1.jpg', '/gallery/g2.jpg', '/gallery/g3.jpg', '/gallery/g4.jpg']" />
    </div>
  </app-page>
</template>

<script>
import { ref } from '@vue/reactivity';
import ProgressItem from '@/components/ProgressItem.vue';
import SwiperGallery from '@/components/SwiperGallery.vue';

export default {
  setup() {
    const tabs = ref(['2019', '2020', '2021', '2022']);
    const curTab = ref('2019');
    const showedGallery = ref(false);

    return {
      tabs,
      curTab,
      showedGallery
    };
  },
  components: {
    ProgressItem,
    SwiperGallery
  },
};
</script>

<style scoped>
.tab {
  flex-basis: 66px;
  padding: 5px 16px;
  background: theme('colors.dark');
  border-radius: 6px;
  text-align: center;
}

.tab--active {
  background: theme('colors.orange');
}

.gallery-dialog {
  background: rgba(8, 25, 36, 0.7);
  backdrop-filter: blur(7px);
  position: fixed;
  height: calc(100% - 101px);
  width: 100%;
  top: 101px;
  left: 0;
}

@screen md {
  .tab {
    flex-basis: 80px;
    padding: 10px 16px;
  }

  .items {
    padding-right: 30px;
    height: calc(100vh - 505px);
    min-height: 200px;
    overflow-x: hidden;
    align-content: start;
  }
}

@screen xl {
  .grid {
    display: grid;
    grid-template-columns: 700px 1fr;
  }

  .items {
    height: calc(100vh - 410px);
  }

  .grid:first-child {
    grid-row: 1 / 2;
  }

  .grid > *:nth-child(2) {
    grid-row: 2 / 3;
  }

  .grid > *:nth-child(3) {
    grid-row: 3 / 4;
  }

  .grid > *:nth-child(4) {
    grid-row: 1 / 4;
    padding-left: 78px;
    align-self: center;
  }
}

@screen 2xl {
  .grid {
    grid-template-columns: 50% 50%;
  }

  .items {
    height: calc(100vh - 484px);
  }

  .grid:first-child {
    grid-row: 1 / 2;
  }

  .grid > *:nth-child(2) {
    grid-row: 2 / 3;
  }

  .grid > *:nth-child(3) {
    grid-row: 3 / 4;
  }

  .grid > *:nth-child(4) {
    grid-row: 4 / 5;
    padding-left: 0;
    align-self: flex-start;
  }

  .grid > *:nth-child(5) {
    grid-row: 1 / 5;
    grid-column: 2 / 3;
    padding-left: 78px;
    padding-right: 10px;
  }

  .grid > *:nth-child(5) > div {
    height: calc(100vh - 192px);
  }

  .overlay::after {
    /* content: ''; */
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.06) 0%, rgba(0, 0, 0, 0.6) 100%);
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 10;
    width: calc(100% - 78px);
    height: 240px;
  }
}
</style>
