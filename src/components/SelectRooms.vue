<template>
  <AppSelect
    name="liter"
    label="Комнат"
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
        v-for="room in rooms"
        :key="room"
        @click="onInput(room, field, handleChange)"
        class="tw-w-48 tw-h-48 tw-leading-[48px] 2xl:tw-w-[64px] 2xl:tw-h-[64px] 2xl:tw-leading-[64px] tw-rounded-full tw-border tw-text-md rooms"
        :class="{
          'tw-border-gray tw-bg-white tw-text-secondary': !isActive(room),
          'tw-border-orange tw-bg-orange tw-text-white': isActive(room),
         }"
      >
        {{ room }}
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
      rooms: [1, 2, 3, 4]
    };
  },
  methods: {
    isActive(room) {
      return this.modelValue?.some(item => item === room);
    },
    display(val) {
      if(!val) return '';
      return val.join(', ');
    },
    onInput(room, field, handleChange) {
      const fieldSet = new Set(field.value);
      fieldSet.has(room)
        ? fieldSet.delete(room)
        : fieldSet.add(room);
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
.rooms + .rooms {
  margin-left: -8px;
}
</style>
