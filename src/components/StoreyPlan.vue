<template>
  <div class="tw-bg-white tw-px-16 lg:tw-flex lg:tw-flex-col">
    <div class="tw-hidden lg:tw-block lg:tw-grow"></div>
    <div class="tw-overflow-auto app-scroll-x app-scroll-y tw-mb-30 tw-relative lg:tw-mb-0" ref="map">
      <div class="tw-min-w-[800px] tw-min-h-[300px] md:tw-min-h-[500px] md:tw-min-w-[1000px] lg:tw-min-w-0 lg:tw-min-h-0 tw-text-primary tw-relative tw-px-30 tw-py-60">
        <svg class="tw-w-full tw-h-full" :viewBox="viewbox" xmlns="http://www.w3.org/2000/svg">
          <image :xlink:href="storeyImg" />
          <path
            v-for="flat in flatsMap"
            :key="flat.id"
            class="flat"
            :class="{
              'flat--free': flat.status === 'free',
              'flat--booked flat-hover': flat.status === 'booked',
              'flat--sold flat-hover': flat.status === 'sold',
              'flat-hover': flatPopup?.flat?.id === flat.id
            }"
            :d="flat.polygon"
            @click="showFlat(flat.id)"
            @mouseenter="onMouseenter($event, flat)"
            @mouseleave="onMouseleave"
          />
        </svg>
        <div class="side side--top">Двор</div>
        <div class="side side--left">ул. Султанова</div>
        <div class="side side--right">ул. Гафури</div>
        <div class="side side--bottom">ул. Чернышевского</div>
      </div>
      <!-- <template v-if="$grid['2xl']"> -->
      <!-- </template> -->
    </div>
    <div class="tw-hidden lg:tw-block lg:tw-grow"></div>
    <div class="tw-pt-10">
      <ul class="tw-flex tw-flex-wrap tw-justify-center -tw-mt-10 -tw-ml-30">
        <li class="status-info before:tw-bg-primary">
          <span>квартира продана</span>
        </li>
        <li class="status-info before:tw-bg-orange">
          <span>квартира забронирована</span>
        </li>
        <li class="status-info before:tw-bg-positive">
          <span>квартира свободна</span>
        </li>
      </ul>
    </div>

    <teleport to="body">
      <div
        v-if="flatPopup"
        class="flat-popup"
        :style="flatPopup.coords"
        @mouseenter="showedPopup = true"
        @mouseleave="onMouseleave"
      >
        <div class="tw-flex">
          <p class="tw-text-xl tw-font-extrabold tw-leading-100 tw-mr-8">{{ flatPopup.flat.rooms_number }}</p>
          <div class="tw-text-xs tw-leading-100 tw-pt-4">
            <p class="tw-border-b tw-border-b-secondary tw-pb-2">{{ flatPopup.flat.living_area }} <span>м<sup>2</sup></span></p>
            <p class="tw-pt-4">{{ flatPopup.flat.total_area }} <span>м<sup>2</sup></span></p>
          </div>
        </div>
        <div class="tw-pt-40">
          <p class="tw-text-right tw-text-secondary tw-leading-100">№ {{ flatPopup.flat.number }}</p>
        </div>
        <button
          class="tw-absolute tw-bottom-10 hover:tw-opacity-80 active:tw-opacity-70"
          @click="showedBook = true"
        >
          <AppIcon name="plus" size="36px" />
        </button>
      </div>

      <DialogBook
        v-if="flatPopup"
        v-model:showed="showedBook"
        :flatNumber="flatPopup.flat.number"
        @update:showed="flatPopup = null"
      />
    </teleport>
  </div>
</template>

<script>
import DialogBook from '@/components/DialogBook.vue';
import { computed, toRef, ref, watch, nextTick } from 'vue';
import { useRouter } from 'vue-router';
import { debounce } from 'throttle-debounce';

export default {
  props: {
    imageMap: {
      required: true,
      type: Object
    }
  },
  emits: ['update:showed'],
  setup(props, { emit }) {
    const router = useRouter();
    const imageMap = toRef(props, 'imageMap');
    const flatPopup = ref(null);
    const showedPopup = ref(null);
    const showedBook = ref(false);
    const map = ref(null);

    const viewbox = computed(() => `0 0 ${imageMap.value.width} ${imageMap.value.height}`);
    const storeyImg = computed(() => imageMap.value.path);
    const flatsMap = computed(() => imageMap.value.flats);

    const showFlat = (flatId) => {
      router.push({ name: 'flats.one', params: { id: flatId } })
    }

    const onMouseenter = (e, flat) => {
      showedPopup.value = true;
      const { left, top } = e.srcElement.getBoundingClientRect();
      const { pageYOffset : pageY, pageXOffset: pageX } = window;
      flatPopup.value = {
        coords: { top: top + pageY + 'px', left: left + pageX + 'px' },
        flat
      }
      emit('update:showed', flat);
    }

    const hidePopup = debounce(200, () => {
      if(showedPopup.value || showedBook.value) return;
      flatPopup.value = null;
      emit('update:showed', null);
    });

    const onMouseleave = () => {
      showedPopup.value = false;
      hidePopup();
    }

    watch(imageMap, () => {
      nextTick(() => {
        map.value.classList.remove('a');
        setTimeout(() => {
          map.value.classList.add('a');
        }, 50);
      })
    })

    return {
      map,
      viewbox,
      storeyImg,
      flatsMap,
      flatPopup,
      showFlat,
      onMouseenter,
      onMouseleave,
      showedPopup,
      showedBook
    }
  },
  components: {
    DialogBook
  }
}
</script>

<style scoped>
  @keyframes appear {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .a {
    animation-duration: 1.5s;
    animation-name: appear;
  }

  .flat {
    opacity: 0;
    cursor: pointer;
  }

  .flat:hover, .flat-hover {
    opacity: 0.5;
  }

  .flat--free {
    fill: theme('colors.positive');
  }

  .flat--booked {
    fill: theme('colors.orange');
  }

  .flat--sold {
    fill: theme('colors.gray');
  }

  .status-info {
    @apply tw-text-secondary tw-text-xs tw-flex tw-items-center tw-leading-100 tw-pl-30 tw-pt-10;
  }

  .status-info::before {
    content: '';
    width: 10px;
    height: 10px;
    margin-right: 10px;
    border-radius: 50%;
  }

  .flat-popup {
    position: absolute;
    transform: translateY(-100%);
    padding: 10px;
    z-index: 100;
    min-width: 150px;
    border-radius: 18px;
    background: theme('colors.primary');
    box-shadow: 0px 56px 22px rgba(0, 0, 0, 0.01), 0px 31px 19px rgba(0, 0, 0, 0.05), 0px 14px 14px rgba(0, 0, 0, 0.09), 0px 3px 8px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
  }

  @screen xl {
    .status-info {
      @apply tw-text-sm
    }

    .status-info::before {
      width: 14px;
      height: 14px;
    }
  }

  /* @screen 2xl { */
    .side {
      @apply tw-absolute tw-text-secondary tw-text-xs;
    }

    .side--left, .side--right {
      @apply tw-top-1/2 -tw-translate-y-1/2 -tw-rotate-90;
    }

    .side--left {
      @apply -tw-left-20;
    }

    .side--right {
      @apply -tw-right-20;
    }

    .side--bottom, .side--top {
      @apply tw-left-1/2 -tw-translate-x-1/2
    }

    .side--bottom {
      @apply tw-bottom-20;
    }

    .side--top {
      @apply tw-top-0;
    }
  /* } */
</style>
