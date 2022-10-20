<template>
  <AppSelect
    name="features"
    label="Особенности"
    v-slot="{ close, showed, style, handleChange, field }"
    v-bind="{ display, modelValue }"
    @update:modelValue="$emit('update:modelValue', $event)"
  >
    <div
      v-click-outside="close"
      v-if="showed"
      v-bind="{ style }"
      class="tw-w-[288px] md:tw-w-[343px] lg:tw-w-[600px] tw-bg-white tw-rounded-[18px] tw-p-40 tw-shadow-2xl"
    >
      <div class="tw-flex tw-flex-wrap -tw-ml-10 -tw-mt-10">
        <FeaturesItem
          class="tw-ml-10 tw-mt-10"
          v-for="feature in features"
          :key="feature.name"
          v-bind="feature"
          :active="isActive(feature)"
          @click="onInput(feature, field, handleChange)"
        />
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
      features: [
        {
          name: 'Гардеробная',
          value: 'has_wardrobe',
          icon: 'flat-adv-garb',
        },
        {
          name: 'Видовая квартира',
          value: 'has_panoramic_view',
          icon: 'flat-adv-vid',
        },
        {
          name: 'Лоджия',
          value: 'has_loggia',
          icon: 'flat-adv-balkon',
        },
        {
          name: '2 С/У',
          value: 'has_two_bathrooms',
          icon: 'flat-adv-toilet',
        },
        // {
        //   name: 'Мастер-спальня',
        //   value: 'has_master_bedroom',
        //   icon: 'flat-adv-spal',
        // },
        {
          name: 'Кухня-гостиная',
          value: 'has_kitchen_united_with_lounge',
          icon: 'flat-adv-gost',
        },
      ],
    };
  },
  methods: {
    isActive(feature) {
      return this.modelValue?.some(item => item.name === feature.name);
    },
    display(val) {
      if(!val) return '';
      return val.map(item => item.name).join(', ');
    },
    onInput(feature, field, handleChange) {
      const fieldSet = new Set(field.value);
      fieldSet.has(feature)
        ? fieldSet.delete(feature)
        : fieldSet.add(feature);
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

<style>
</style>
