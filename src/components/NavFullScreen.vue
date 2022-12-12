<template>
  <div class="dialog-full tw-overflow-x-hidden" v-if="value">
    <div class="tw-min-h-full tw-relative tw-z-0 layout-base tw-overflow-hidden">
      <Header />
      <div class="tw-pt-30 tw-pb-30 2xl:tw-pt-[100px]">
        <div class="wrapper tw-relative decor-rock">
          <div class="lg:tw-pl-[90px] 2xl:tw-pl-[904px]">
            <div class="links tw-mb-30 md:tw-mb-40">
              <nav class="menu tw-space-y-14 md:tw-space-y-20">
                <router-link
                  class="tw-text-md md:tw-text-xl tw-block tw-font-extrabold tw-leading-120 lg:hover:tw-opacity-80 tw-transition-opacity"
                  active-class="tw-text-orangeHover"
                  v-for="item in nav"
                  :key="item.label"
                  :to="item.to"
                >
                  {{ item.label }}
                </router-link>
              </nav>
            </div>

            <div
              class="tw-max-w-[400px] tw-flex tw-flex-wrap -tw-ml-30 -tw-mt-20"
            >
              <div class="tw-w-full md:tw-w-1/2 tw-pl-30 tw-pt-20">
                <AppLink external :to="{ name: 'news' }">Новости и акции</AppLink>
              </div>
              <div class="tw-w-full md:tw-w-1/2 tw-pl-30 tw-pt-20">
                <AppLink external :to="{ name: 'progress' }">Ход строительства</AppLink>
              </div>
              <div class="tw-w-full md:tw-w-1/2 tw-pl-30 tw-pt-20">
                <AppLink external :to="{ name: 'documents' }">Документы</AppLink>
              </div>
              <div class="tw-w-full md:tw-w-1/2 tw-pl-30 tw-pt-20">
                <AppLink external :to="{ name: 'developer' }">Застройщик</AppLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'NavFullScreen',
  data() {
    return {
      nav: [
        {
          label: 'о проекте',
          to: { name: 'about' },
        },
        {
          label: 'расположение',
          to: { name: 'location' },
        },
        {
          label: 'выбрать планировку',
          to: { name: 'flats.params' },
        },
        {
          label: 'галерея',
          to: { name: 'gallery' },
        },
        {
          label: 'условия покупки',
          to: { name: 'purchase' },
        },
        {
          label: 'контакты',
          to: { name: 'contacts' },
        },
      ],
    };
  },
  computed: {
    value() {
      return this.$store.state.navShowed;
    },
  },
  methods: {
    ...mapMutations(['navToggle']),
  }
};
</script>

<style scoped lang="scss">
.links {
  max-width: 600px;
}
</style>
