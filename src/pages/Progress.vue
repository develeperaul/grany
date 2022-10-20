<template>
  <app-page class="tw-pb-40 2xl:tw-pb-0 tw-relative">
    <div class="wrapper">
      <div class="grid">
        <h1 class="h1 tw-mb-20">ход <br class="md:tw-hidden" /> строительства</h1>

        <div class="tw-flex tw-flex-wrap tw-space-x-10 tw-mb-20 md:tw-mb-30">
          <button
            class="tab"
            :class="{ 'tab--active': curTab.id === tab.id }"
            v-for="tab in tabs"
            :key="tab.id"
            @click="curTab = tab"
          >
            {{ tab.name }}
          </button>
        </div>

        <div class="tw-flex tw-flex-wrap -tw-ml-10 -tw-mt-10 tw-mb-30 items app-scroll-y">
          <ProgressItem
            v-for="item in items" :key="item.id"
            class="tw-w-1/2 tw-pl-10 tw-pt-10 md:tw-w-1/3"
            v-bind="item"
            @click="grid['2xl'] ? show2xl(item.images) : show(item.images)"
          />
        </div>

        <div class="2xl:tw-pb-40">
          <AppButton class="tw-w-full md:tw-max-w-[200px] tw-invisible">Онлайн-трансляция</AppButton>
        </div>

        <div v-if="$grid['2xl']" class="tw-relative overlay tw-overflow-x-hidden app-scroll-y">
          <div class="tw-flex tw-flex-wrap -tw-mx-10 -tw-mt-20">
            <div
              class="tw-w-1/2 tw-px-10 tw-pt-20 tw-cursor-pointer"
              v-for="(image, index) in showed2xlGallery"
              :key="image"
              @click="show(showed2xlGallery, index)"
            >
              <img :src="image" alt="фото из галлереи" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showedGallery" class="gallery-dialog tw-pt-[70px] tw-pb-[110px] tw-relative">
      <button
        class="tw-absolute tw-right-30 tw-top-20"
        @click="showedGallery = null"
      >
        <AppIcon name="close" size="36px" fill="white" />
      </button>
      <SwiperGallery :sources="showedGallery" :initialSlide="selectedImage"/>
    </div>
  </app-page>
</template>

<script>
import { ref, computed, watch } from 'vue';
import { useStore } from 'vuex';
import { useGrid } from 'vue-screen'
import ProgressItem from '@/components/ProgressItem.vue';
import SwiperGallery from '@/components/SwiperGallery.vue';

export default {
  setup() {
    const store = useStore();
    const grid = useGrid();
    const curTab = ref(null);
    const galleries = ref(null);
    const gallery = ref(null);
    const showedGallery = ref(null);
    const showed2xlGallery = ref(null);
    const selectedImage = ref(null);

    const getGalleries = async () => {
      store.dispatch('loaders/start', 'loading galleries');
      galleries.value = await store.dispatch('galleries/getMixed');
      store.dispatch('loaders/end', 'loading galleries');
    }

    const getGallery = async (id) => {
      store.dispatch('loaders/start', 'loading gallery');
      gallery.value = await store.dispatch('galleries/mixedOne', { id });
      store.dispatch('loaders/end', 'loading gallery');
    }

    getGalleries();

    const tabs = computed(() => {
      if(!galleries.value) return null;
      return galleries.value.map( ({ name, id }) => ({ name, id }) );
    });

    const items = computed(() => {
      if(!gallery.value) return null;
      return gallery.value.items.map(item => ({
        id: item.id,
        title: item.name,
        picCount: item?.images?.length,
        picSrc: item?.images?.[0]?.url,
        images: item?.images?.map(image => image.url)
      }));
    });

    const show = (images, index = 0) => {
      selectedImage.value = index;
      showedGallery.value = images;
    }

    const show2xl = (images) => showed2xlGallery.value = images

    watch(tabs, (value) => {
      if(value && value.length > 0) curTab.value = value[0];
    });

    watch(curTab, (value) => getGallery(value.id));

    return {
      tabs,
      curTab,
      showedGallery,
      showed2xlGallery,
      gallery,
      galleries,
      items,
      show,
      show2xl,
      grid,
      selectedImage
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
    height: calc(100vh - 192px);
  }

  .grid > *:nth-child(5) > div {
    /* height: calc(100vh - 192px); */
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
