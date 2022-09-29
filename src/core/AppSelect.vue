<template>
  <Field
    v-slot="{ errorMessage, field, handleChange }"
    ref="field"
    :value="modelValue"
    :label="label"
    @update:modelValue="onInput"
  >
    <div class="tw-relative" :class="$attrs.class">
      <div class="tw-pb-24" ref="control">
        <button
          type="button"
          class="tw-pb-6 tw-border-b tw-cursor-pointer tw-block tw-w-full tw-text-left tw-min-h-[50px] tw-relative tw-pr-26"
          :class="{
            'tw-border-negative': errorMessage,
            'tw-border-white': !errorMessage && !showed,
            'tw-border-orange': !errorMessage && showed
          }"
          @click="toggle"
        >
          <div
            class=" tw-mb-4"
            :class="[ field.value ? 'tw-text-xs tw-text-secondary tw-leading-120' : 'tw-text-sm tw-text-white tw-leading-140' ]"
          >
            {{ label }}
          </div>
          <div class="tw-text-sm" v-html="display(field.value)"></div>

          <svg
            class="tw-w-18 tw-h-18 tw-absolute tw-right-8 tw-top-14"
            :class="{
              'tw-rotate-180 tw-stroke-white': showed,
              'tw-stroke-secondary ': !showed
            }"
          >
            <use xlink:href="/sprite.svg#arrow-down"></use>
          </svg>
        </button>
        <div
          v-if="errorMessage"
          class="tw-text-negative tw-absolute tw-bottom-0"
        >
          {{ errorMessage }}
        </div>
      </div>

      <teleport to="body">
        <slot v-bind="{ close, showed, style, onChange, field, handleChange }" />
      </teleport>
    </div>
  </Field>
</template>

<script>
import { throttle } from 'throttle-debounce';

export default {
  mounted() {
    window.addEventListener('resize', this.resizer);
  },
  unmounted() {
    window.removeEventListener('resize', this.resizer);
  },
  props: {
    display: {
      default: (val) => val,
      type: Function
    },
    modelValue: {},
    label: {
      required: true,
      type: String
    }
  },
  emits: ['update:modelValue'],
  data() {
    return {
      resizer: throttle(50, this.setCoords),
      showed: false,
      coords: {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
      }
    }
  },
  methods: {
    onInput(value) {
      this.$emit('update:modelValue', value)
    },
    onChange(value) {
      this.$refs.field.handleChange(value);
      this.close();
    },
    setCoords() {
      this.coords = this.$refs.control.getBoundingClientRect();
    },
    toggle() {
      this.showed = !this.showed;
      this.setCoords();
    },
    close() {
      this.showed = false
    },
  },
  computed: {
    style() {
      return {
        position: 'absolute',
        left: this.coords.x + 'px',
        top: window.scrollY + this.coords.y + this.coords.height + 'px'
      }
    }
  }
}
</script>

<style>

</style>
