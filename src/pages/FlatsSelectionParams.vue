<template>
  <app-page>
    <div>
      <div class="wrapper">
        <h1 class="h1">Подбор по параметрам</h1>
        <section class="tw-pb-120 tw-pt-80">
          <div class="tw-flex tw-flex-wrap -tw-ml-24 md:-tw-mt-6 md:tw-max-w-[720px] 2xl:tw-max-w-[1172px]">
            <SelectLiter
              class="tw-ml-24 md:tw-mt-6 tw-basis-full md:tw-basis-[210px]"
              v-model="filter.liter"
            />
            <SelectStoreys
              class="tw-ml-24 md:tw-mt-6 tw-basis-full md:tw-basis-[210px]"
              v-model="filter.storey"
            />
            <SelectRooms
              class="tw-ml-24 md:tw-mt-6 tw-basis-full md:tw-basis-[210px]"
              v-model="filter.rooms"
            />
            <SelectSquare
              class="tw-ml-24 md:tw-mt-6 tw-basis-full md:tw-basis-[210px]"
              v-model="filter.square"
            />
            <SelectFeatures
              class="tw-ml-24 md:tw-mt-6 tw-basis-full md:tw-basis-[210px]"
              v-model="filter.features"
            />
          </div>
        </section>
      </div>
    </div>
    <section class="tw-bg-white tw-pt-80">
      <div class="wrapper">
        <div :class="{ 'tw-absolute': flats }" v-if="$store.getters['loaders/is']('loading flats')">
          <Spinner size="100px" />
        </div>
        <template v-if="flats">
          <p class="lg:tw-text-lg tw-text-md lg:tw-font-extrabold tw-text-secondary tw-leading-100 tw-mb-30">
            Найдено {{ flats.length }} квартир
          </p>
          <FlatsParamsList :items="flats" />
        </template>
      </div>
    </section>
  </app-page>
</template>

<script>
import FlatsParamsList from '@/components/FlatsParamsList.vue';
import SelectFeatures from '@/components/SelectFeatures.vue';
import SelectLiter from '@/components/SelectLiter.vue';
import SelectRooms from '@/components/SelectRooms.vue';
import SelectStoreys from '@/components/SelectStoreys.vue';
import SelectSquare from '@/components/SelectSquare.vue';
import { ref, watch } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();

    const filter = ref({
      liter: null,
      storey: null,
      rooms: null,
      square: null,
      features: null
    });

    const filterGetters = {
      liter: (filter, value) => {
        if(value.length <= 0) return;
        filter.house_id = value?.[0]?.id
      },
      storey: (filter, value) => {
        filter.storey_min = value[0];
        filter.storey_max = value[1];
      },
      rooms: (filter, value) => {},
      square: (filter, value) => {
        filter.total_area_min = value[0];
        filter.total_area_max = value[1];
      },
      features: (filter, value) => {
        Object.values(value).forEach(item => filter[item.value] = 1);
      }
    }

    const flats = ref(null);

    const makeFilter = () => {
      const newFilter = {};
      for(let key in filter.value) {
        if(filter.value[key]) filterGetters[key](newFilter, filter.value[key]);
      }
      return newFilter;
    };

    const getFlats = async () => {
      store.dispatch('loaders/start', 'loading flats');
      flats.value = await store.dispatch('flats/getFlats', makeFilter());
      store.dispatch('loaders/end', 'loading flats');
    };

    watch(filter, () => getFlats(), { deep: true, immediate: true });

    return {
      filter,
      flats
    }
  },
  components: {
    FlatsParamsList,
    SelectFeatures,
    SelectLiter,
    SelectRooms,
    SelectStoreys,
    SelectSquare
  }
}
</script>

<style>

</style>
