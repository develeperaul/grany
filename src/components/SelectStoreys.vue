<template>
  <AppSelect
    name="liter"
    label="Этаж"
    v-slot="{ close, showed, style, handleChange }"
    v-bind="{ display, modelValue }"
    @update:modelValue="$emit('update:modelValue', $event)"
  >
    <div
      v-click-outside="{ handler: close, middleware }"
      v-if="showed"
      v-bind="{ style }"
      class="tw-w-[288px] md:tw-w-[343px] lg:tw-w-[410px] tw-bg-white tw-rounded-[18px] tw-p-40 tw-shadow-2xl"
    >
      <SelectSlider
        class="tw-mb-32"
        :min="13"
        :max="28"
        :value1="val1"
        :value2="val2"
        @update:range="handleChange"
      />
      <SelectControls v-bind="{ handleChange, close }"/>
    </div>
  </AppSelect>
</template>

<script>
import FeaturesItem from './FeaturesItem.vue';
import SelectControls from './SelectControls.vue';
import SelectSlider from './SelectSlider.vue';

export default {
  props: {
    modelValue: {},
  },
  emits: ['update:modelValue'],
  computed: {
    val1() {
      return this.modelValue?.[0];
    },
    val2() {
      return this.modelValue?.[1];
    }
  },
  methods: {
    display(val) {
      if(!val) return '';
      return `${val[0]}-${val[1]}`
    },
    middleware(event) {
      return event.srcElement !== document.body;
    }
  },
  components: {
    FeaturesItem,
    SelectControls,
    SelectSlider
  },
};
</script>
