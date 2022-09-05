<template>
  <AppSelect
    name="features"
    v-slot="{ close, showed, style, onChange, field }"
    :display="display"
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
          @click="1"
        />
      </div>
      <!-- <button @click="close">close</button> -->
    </div>
  </AppSelect>
</template>

<script>
import FeaturesItem from './FeaturesItem.vue';

export default {
  data() {
    return {
      features: [
        {
          name: 'Гардеробная',
          icon: 'flat-adv-garb',
        },
        {
          name: 'Видовая квартира',
          icon: 'flat-adv-vid',
        },
        {
          name: 'Лоджия',
          icon: 'flat-adv-balkon',
        },
        {
          name: '2 С/У',
          icon: 'flat-adv-toilet',
        },
        {
          name: 'Мастер-спальня',
          icon: 'flat-adv-spal',
        },
        {
          name: 'Кухня-гостиная',
          icon: 'flat-adv-gost',
        },
      ],
    };
  },
  methods: {
    display(val) {
      if(!val) return '';
      return val.map(item => item.name).join(', ');
    },
  },
  components: {
    FeaturesItem,
  },
};
</script>

<style>
</style>
