<template>
  <div>
    <div class="tw-flex tw-text-secondary tw-text-xs tw-mb-8">
      <p v-html="displayVal(val1)"></p>
      <div class="tw-grow tw-px-4"></div>
      <p v-html="displayVal(val2)"></p>
    </div>

    <div class="tw-pt-18 tw-pb-18">
      <div class="area" ref="area">
        <button
          class="slider"
          ref="slider1"
          :style="{ left: coords1.left + 'px' }"
          @mousedown="onMoudedown"
        >
          <AppIcon
            name="arrow-down"
            size="18px"
            iconClass="slider__icon -tw-rotate-90"
            slim
          />
        </button>

        <div
          class="range"
          :style="{ left: coords1.left + 'px', width: coords2.left - coords1.left + 'px' }"
          ref="range"
        ></div>

        <button
          class="slider"
          ref="slider2"
          :style="{ left: coords2.left + 'px' }"
        >
          <AppIcon
            name="arrow-down"
            size="18px"
            iconClass="slider__icon tw-rotate-90"
            slim
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { throttle } from 'throttle-debounce';

export default {
  props: {
    min: {
      required: true,
      type: Number
    },
    max: {
      required: true,
      type: Number
    },
    value1: {
      default: undefined,
      type: Number
    },
    value2: {
      default: undefined,
      type: Number
    },
    displayVal: {
      default: (val) => val,
      type: Function
    }
  },
  mounted() {
    // пересчитать размеры если экран изменится
    window.addEventListener('resize', this.resizer);

    // соранить ссылки на элемнты
    this.slider1 = this.$refs.slider1;
    this.slider2 = this.$refs.slider2;
    this.area = this.$refs.area;
    this.range = this.$refs.range;

    // поcчитать координаты ползунков
    this.setSliders();

    // подписаться на события мыши
    this.on(this.slider1, this.coords1, 'left');
    this.on(this.slider2, this.coords2, 'right');
  },
  unmounted() {
    window.removeEventListener('resize', this.resizer);
  },
  emits: ['update:value1', 'update:value2', 'update:range'],
  data() {
    return {
      resizer: throttle(150, this.setSliders),
      slider1: null,
      slider2: null,
      area: null,
      range: null,
      val1: this.value1 || this.min,
      val2: this.value2 || this.max,
      coords1: {
        left: 0,
        shiftX: 0,
      },
      coords2: {
        left: 0,
        shiftX: 0,
      },
    };
  },
  watch: {
    value1(val) {
      if(val === this.val1) return;
      this.val1 = val || this.min;
      this.setSliders();
    },
    value2(val) {
      if(val === this.val2) return;
      this.val2 = val || this.max;
      this.setSliders();
    },
  },
  methods: {
    setSliders() {
      const step =  (this.area.offsetWidth - this.slider1.offsetWidth * 2) / (this.max - this.min);
      this.coords1.left = (this.val1 - this.min) * step;
      this.coords2.left = (this.val2 - this.min) * step + this.slider2.offsetWidth;
    },
    on(slider, coords, direction) {
      const onMoudedown = (event) => {
        event.preventDefault();

        coords.shiftX = event.clientX - slider.getBoundingClientRect().left;

        const onMouseMove = (event) => {
          coords.left = event.clientX - coords.shiftX - this.area.getBoundingClientRect().left;

          // ограничить левый край
          if (coords.left < 0) {
            coords.left = 0;
          }

          // ограничить с соседом
          if(direction === 'left') {
            if(coords.left + slider.offsetWidth >= this.coords2.left) {
              coords.left = this.coords2.left - slider.offsetWidth;
            }
          } else if(direction === 'right'){
            if(coords.left <= this.coords1.left + slider.offsetWidth) {
              coords.left = this.coords1.left + slider.offsetWidth
            }
          }

          // ограничить правый край
          let rightEdge = this.area.offsetWidth - slider.offsetWidth;
          if (coords.left > rightEdge) {
            coords.left = rightEdge;
          }

          // посчитать значения
          const step = (this.area.offsetWidth - slider.offsetWidth * 2) / (this.max - this.min);
          if(direction === 'left') {
            this.val1 = Math.floor(this.min + this.coords1.left / step);
          } else {
            this.val2 = Math.floor(this.min + (this.coords2.left - slider.offsetWidth) / step);
          }
        };

        const onMouseUp = () => {
          this.$emit('update:value1', this.val1);
          this.$emit('update:value2', this.val2);
          this.$emit('update:range', [this.val1, this.val2]);
          document.removeEventListener('mouseup', onMouseUp);
          document.removeEventListener('mousemove', onMouseMove);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
      };

      slider.addEventListener('mousedown', onMoudedown);
    },
  },
};
</script>

<style scoped>
.slider {
  @apply tw-w-[36px] tw-h-[36px] tw-bg-white tw-border tw-border-orange tw-rounded-full tw-text-center tw-absolute tw-top-0 -tw-translate-y-1/2 tw-z-10;
}

.slider__icon {
  @apply tw-stroke-secondary tw-mx-auto;
}

.range {
  @apply tw-h-[1px] tw-bg-orange tw-absolute tw-inset-0;
}

.area {
  @apply tw-h-[1px] tw-bg-gray tw-relative;
}
</style>
