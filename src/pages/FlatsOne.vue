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
          <iframe width="100%" height="100%" :src="flat.video_clip" allowfullscreen />
        </div>

        <div class="forth">
          <p class="tw-text-lg tw-font-extrabold tw-text-secondary tw-mb-20 xl:tw-text-md xl:tw-font-normal xl:tw-mb-10 2xl:tw-font-extrabold">
            особенности
          </p>
          <div>
            <div class="tw-flex tw-flex-wrap -tw-ml-20 -tw-mt-10 tw-mb-30 md:tw-basis-[300px] md:tw-mr-20 xl:tw-basis-full">
              <p
                class="tw-w-1/2 tw-pl-20 tw-pt-10 tw-leading-100 xl:tw-w-full xl:tw-pt-8"
                v-for="(value, key) in $store.getters['flats/featuresHas'](flat)"
                :key="key"
              >
                {{ value }}
              </p>
            </div>
            <div class="tw-mb-40 md:tw-mb-30">
              <AppButton class="tw-w-full" @click="showedBook = true">
                Заявка на бронь
              </AppButton>
            </div>
            <div class="tw-space-y-20 md:tw-flex md:tw-justify-center md:tw-space-x-60 md:tw-space-y-0 md:tw-mb-30 xl:tw-mb-0 xl:tw-flex-wrap xl:tw-space-x-0 xl:tw-justify-start xl:tw-space-y-8 2xl:tw-space-y-20">
              <div>
                <button class="control" @click="createPDF">
                  <AppIcon class="tw-mr-20 xl:tw-hidden 2xl:tw-block" size="24px" name="pdf" fill="white"/>
                  <span class="control__text">Скачать pdf</span>
                </button>
              </div>
              <div>
                <button class="control" v-if="hasView" @click="showView">
                  <AppIcon class="tw-mr-20 xl:tw-hidden 2xl:tw-block" size="24px" name="flat-adv-vid" fill="white"/>
                  <span class="control__text">Посмотреть виды из окон</span>
                </button>
              </div>
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

      <GDialog v-model="showedView" background="transparent" content-class="tw-h-screen tw-flex tw-items-center tw-justify-center tw-relative">
        <template #default="{ onClose }">
          <button
            class="tw-absolute tw-right-30 tw-top-0"
            @click="onClose"
          >
            <AppIcon name="close" size="36px" fill="white" />
          </button>
          <div class="tw-absolute tw-left-1/2 tw-top-1/2 -tw-translate-x-1/2 -tw-translate-y-1/2 -tw-z-10">
            <Spinner size="100px" />
          </div>
          <img v-if="hasView" class="tw-w-auto tw-max-h-full" :src="flat.images[1]" alt="вид из окна" />
        </template>
      </GDialog>
    </div>
  </app-page>
</template>

<script>
import DialogBook from '@/components/DialogBook.vue';
import { GDialog } from 'gitart-vue-dialog'
import 'gitart-vue-dialog/dist/style.css';

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
      showedBook: false,
      showedView: false
    }
  },
  methods: {
    async getFlat() {
      this.$store.dispatch('loaders/start', 'loading flat');
      this.flat = await this.$store.dispatch('flats/flatsOne', { id: this.id });
      this.$store.dispatch('loaders/end', 'loading flat');
    },
    showView() {
      this.showedView = true;
    },
    async createPDF() {
      const path = await this.$store.dispatch('flats/createPDF', {
        pdf_info_rooms_count: this.flat.rooms_number,
        pdf_info_kv_num: this.flat.number,
        pdf_info_kv_etazh: this.flat.storey_number,
        pdf_info_kompleks: this.flat.house_name,
        pdf_info_kv_sq: this.flat.total_area,
        pdf_info_image: this.flat?.images?.[0],
      });

      console.log(path);

      this.downloadPDF(path);
    },
    downloadPDF(path) {
      let a = document.createElement("a");
      a.href = path;
      a.target = '_blank';
      a.style = "display: none";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  },
  computed: {
    hasView() {
      if(!this.flat?.images?.[1]) return false;
      return this.flat.images[1].indexOf('/windows_view/') !== -1;
    }
  },
  components: {
    DialogBook,
    GDialog
  }
}
</script>
<style>
  :root {
    --g-dialog-content-shadow: none;
  }
</style>
<style scoped>

  .content {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto;
  }

  .control {
    @apply tw-flex tw-items-center;
  }

  .control__text {
    @apply tw-leading-100 tw-underline;
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
