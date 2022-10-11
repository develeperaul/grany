<template>
  <AppSelect
    name="liter"
    label="Литер"
    v-slot="{ close, showed, style, handleChange, field }"
    v-bind="{ display, modelValue }"
    @update:modelValue="$emit('update:modelValue', $event)"
  >
    <div
      v-click-outside="close"
      v-if="showed"
      v-bind="{ style }"
      class="tw-w-[288px] md:tw-w-[343px] lg:tw-w-[410px] tw-bg-white tw-rounded-[18px] tw-p-40 tw-shadow-2xl"
    >
     <div>
      <button
        v-for="liter in liters"
        :key="liter.id"
        class="tw-w-48 tw-h-48 tw-leading-[48px] 2xl:tw-w-[64px] 2xl:tw-h-[64px] 2xl:tw-leading-[64px] tw-rounded-full tw-border tw-text-md liter disabled:tw-bg-gray"
        :class="{
          'tw-border-gray tw-bg-white tw-text-secondary': !isActive(liter),
          'tw-border-orange tw-bg-orange tw-text-white active': isActive(liter),
         }"
         :disabled="liter.id !== 1"
        @click="onInput(liter, field, handleChange)"
      >
        {{ liter.label }}
      </button>
     </div>

      <SelectControls v-bind="{ handleChange, close }"/>
    </div>
  </AppSelect>
</template>

<script>
import FeaturesItem from './FeaturesItem.vue';
import SelectControls from './SelectControls.vue';

export default {
  props: {
    modelValue: {},
  },
  emits: ['update:modelValue'],
  data() {
    return {
      liters: [
        {
          id: 1,
          label: '1'
        },
        {
          id: 2,
          label: '2'
        },
        {
          id: 3,
          label: '3'
        },
      ]
    };
  },
  methods: {
    isActive(liter) {
      return this.modelValue?.some(item => item.id === liter.id);
    },
    display(val) {
      if(!val) return '';
      return val.map(item => item.label).join(', ');
    },
    onInput(liter, field, handleChange) {
      const fieldSet = new Set(field.value);
      fieldSet.has(liter)
        ? fieldSet.delete(liter)
        : fieldSet.add(liter);
      const fieldValue = Array.from(fieldSet);
      handleChange(fieldValue);
    }
  },
  components: {
    FeaturesItem,
    SelectControls
  },
};
</script>

<style scoped>
.liter + .liter {
  margin-left: -6px;
}

.liter:nth-child(2) {
  position: relative;
  z-index: 1;
}

.liter:nth-child(2).active {
  @apply tw-border-white !important;
}
</style>
