<template>
  <app-page class="page-pb">
    <div class="wrapper">
      <section v-if="flat" class="content">
        <div class="first tw-mb-20 md:tw-text-right xl:tw-text-left">
          <a class="button-back" href="javascript:void(0)" @click.prevent="$router.back()">
            Вернуться назад
          </a>
        </div>

        <div class="tw-flex tw-flex-wrap tw-mb-20 second xl:tw-mb-30 2xl:tw-mb-80">
          <div class="tw-font-extrabold tw-text-lg tw-mr-20 xl:tw-text-xl 2xl:tw-text-xl10">№{{ flat.number }}</div>
          <div class="tw-font-extrabold tw-text-lg tw-text-orange 2xl:tw-text-xl">
            {{ flat.total_area }} <span>м<sup>2</sup></span>
          </div>
          <p class="tw-w-full">
            {{ flat.house_name }} литер  •  {{ flat.storey_number }} этаж  •  {{ flat.rooms_number }} комнаты
          </p>
        </div>

        <div class="tw-mb-40 tw-min-h-[500px] -tw-mx-16 md:tw-mx-0 third xl:tw-pl-30 xl:tw-min-h-0 xl:tw-border-l xl:tw-border-dark xl:-tw-mt-30 xl:-tw-mb-40 xl:tw-py-30">
          <iframe width="100%" height="100%" :src="flat.video_clip" />
        </div>

        <div class="forth">
          <p class="tw-text-lg tw-font-extrabold tw-text-secondary tw-mb-20 xl:tw-text-md xl:tw-font-normal xl:tw-mb-10 2xl:tw-font-extrabold">
            особенности
          </p>
          <div class="md:tw-flex md:tw-flex-wrap md:tw-justify-between">
            <div class="tw-flex tw-flex-wrap -tw-ml-20 -tw-mt-10 tw-mb-30 md:tw-basis-[300px] md:tw-mr-20 xl:tw-basis-full">
              <p
                class="tw-w-1/2 tw-pl-20 tw-pt-10 tw-leading-100 xl:tw-w-full xl:tw-pt-8"
                v-for="(value, key) in $store.getters['flats/featuresHave'](flat)"
                :key="key"
              >
                {{ value }}
              </p>
            </div>
            <div class="md:tw-basis-[180px] xl:tw-basis-full">
              <AppButton class="tw-w-full" @click="showedBook = true">
                Заявка на бронь
              </AppButton>
            </div>
          </div>
        </div>

        <teleport to="body">
          <DialogBook v-model:showed="showedBook" :flatNumber="flat.number" />
        </teleport>
      </section>
      <div v-if="$store.getters['loaders/is']('loading flat')">
        <Spinner size="100px" />
      </div>
    </div>
  </app-page>
</template>

<script>
import DialogBook from '@/components/DialogBook.vue';

export default {
  props: {
    id: {
      required: true,
      type: [String, Number]
    }
  },
  created() {
    this.getFlat();
  },
  data() {
    return {
      flat: null,
      showedBook: false
    }
  },
  methods: {
    async getFlat() {
      this.$store.dispatch('loaders/start', 'loading flat');
      this.flat = await this.$store.dispatch('flats/flatsOne', { id: this.id });
      this.$store.dispatch('loaders/end', 'loading flat');
    }
  },
  components: {
    DialogBook
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
    .first {
      grid-row: 1 / 2;
    }

    .second {
      grid-row: 2 / 3;
    }

    .forth {
      grid-row: 3 / 4;
    }
  }

  @screen xl {
    .content {
      grid-template-columns: 210px 1fr;
      grid-template-rows: auto auto auto 1fr;
      min-height: calc(100vh - 252px);
      column-gap: 30px;
    }

    .first, .second, .forth {
      grid-column: 1 / 2;
      grid-row: auto;
    }

    .third {
      grid-column: 2 / 3;
      grid-row: 1 / 5;
    }
  }

  @screen 2xl {
    .content {
      grid-template-columns: 150px 278px 1fr;

    }

    .first {
      grid-column: 1 / 2;
    }

    .second, .forth {
      grid-column: 2 / 3;
    }

    .third {
      grid-column: 3 / 4;
    }
  }
</style>
