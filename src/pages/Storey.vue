<template>
  <app-page class="lg:tw-pt-0">
    <div class="wrapper">
      <div v-if="!imageMap && $store.getters['loaders/is']('loading storeys')" class="tw-absolute">
        <Spinner class="tw-absolute"  size="100px" />
      </div>
      <div class="content">
        <div class="first tw-mb-20 lg:tw-mb-0 lg:tw-border-r lg:tw-border-dark lg:tw-pl-30 lg:tw-pr-16 lg:tw-py-30">
          <router-link class="button-back" :to="{ name: 'facad.house' }">
            Назад к фасаду
          </router-link>
          <div class="tw-hidden tw-text-xl tw-font-extrabold tw-leading-100 tw-mt-20 lg:tw-block" v-if="showedFlat">
            №{{ showedFlat.id }}
          </div>
        </div>
        <div class="tw-overflow-y-hidden app-scroll-x tw-relative second tw-mb-30 lg:tw-mb-0 lg:tw-py-30">
          <div class="tw-hidden lg:tw-block tw-w-[70px] tw-text-center tw-text-secondary tw-h-20 tw-mb-20">
            этаж
          </div>
          <div class="tw-flex tw-flex-wrap tw-w-[560px] tw-pb-20 -tw-ml-10 -tw-mt-10 lg:-tw-ml-[5px] lg:-tw-mt-[5px] lg:tw-w-[70px]">
            <div
              class="tw-pl-10 tw-pt-10 lg:tw-pl-[5px] lg:tw-pt-[5px]"
              v-for="(storeyId, value) in storeys"
              :key="storeyId"
            >
              <ButtonStorey
                :label="value"
                :active="isActive(storeyId)"
                @click="changeStorey(storeyId)"
              />
            </div>
          </div>
        </div>
        <div
          class="third -tw-mx-16 md:tw-mx-0 lg:tw-py-30"
          v-if="storey && imageMap"
        >
          <StoreyPlan
            class="tw-pt-40 tw-pb-20 tw-h-full lg:tw-pb-40"
            :imageMap="imageMap"
            @update:showed="showedFlat = $event"
          />
        </div>
      </div>
    </div>
  </app-page>
</template>

<script>
import ButtonStorey from '@/components/ButtonStorey.vue';
import StoreyPlan from '@/components/StoreyPlan.vue';
import { ref, toRef, watch, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  props: {
    id: {
      required: true,
      type: [String, Number]
    }
  },
  setup(props) {
    const store = useStore();
    const router = useRouter();
    const storey = ref(null);
    const entrance = ref(null);
    const showedFlat = ref(null);
    const id = toRef(props, 'id');

    const getEntrance = async (id) => {
      store.dispatch('loaders/start', 'loading entrance');
      entrance.value = await store.dispatch('entrances/entrancesOne', { id });
      store.dispatch('loaders/end', 'loading entrance');
    };

    const getStorey = async () => {
      store.dispatch('loaders/start', 'loading storeys');
      storey.value = await store.dispatch('storeys/storeysOne', { id: id.value });
      store.dispatch('loaders/end', 'loading storeys');
    };

    const load = async () => {
      await getStorey();
      await getEntrance(storey.value.entrance);
    }

    watch(id, load, { immediate: true });

    const storeys = computed(() => entrance.value?.storeys);

    const imageMap = computed(() => storey.value?.image_maps?.[0]);


    const changeStorey = (storeyId) => {
      router.push({ name: 'storey', params: { id: storeyId } });
    }

    const isActive = (storeyId) => +storeyId === +id.value

    return {
      storey,
      entrance,
      storeys,
      changeStorey,
      isActive,
      imageMap,
      showedFlat
    }
  },
  components: {
    ButtonStorey,
    StoreyPlan
  }
}
</script>

<style scoped>
  .content {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto;
  }

  @screen md {
    .content {
      grid-template-rows: auto auto 1fr;
    }
  }

  @screen lg {
    .content {
      grid-template-columns: 70px 180px 1fr;
      grid-template-rows: 1fr 1fr;
      column-gap: 30px;
      height: calc(100vh - 182px);
    }

    .second {
      grid-column: 1 / 2;
      grid-row: 1 / 3;
    }

    .first {
      grid-column: 2 / 3;
      grid-row: 1 / 3;
    }

    .third {
      grid-column: 3 / 4;
      grid-row: 1 / 3;
    }
  }
</style>
