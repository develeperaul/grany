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
        <p class="lg:tw-text-lg tw-text-md lg:tw-font-extrabold tw-text-secondary tw-leading-100 tw-mb-30">
          Найдено 35 квартир
        </p>
       <FlatsParamsList />
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
import { ref } from 'vue';

export default {
  setup() {
    const filter = ref({
      liter: null,
      storey: null,
      rooms: null,
      square: null,
      features: null
    });

    return {
      filter
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
