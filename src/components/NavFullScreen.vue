<template>
  <div class="nav tw-overflow-x-hidden" v-if="value">
    <div class="tw-min-h-full tw-relative tw-z-0 layout-base tw-overflow-y-hidden">
      <Header />
      <div class="tw-pt-30 tw-pb-30 2xl:tw-pt-[100px]">
        <div class="wrapper tw-relative decor">
          <div class="lg:tw-pl-[90px] 2xl:tw-pl-[904px]">
            <div class="links tw-mb-30 md:tw-mb-40">
              <nav class="menu tw-space-y-14 md:tw-space-y-20">
                <router-link
                  class="tw-text-md md:tw-text-xl tw-block tw-font-extrabold tw-leading-120"
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
                <AppLink external to="#">Новости и акции</AppLink>
              </div>
              <div class="tw-w-full md:tw-w-1/2 tw-pl-30 tw-pt-20">
                <AppLink external to="#">Ход строительства</AppLink>
              </div>
              <div class="tw-w-full md:tw-w-1/2 tw-pl-30 tw-pt-20">
                <AppLink external to="#">Документы</AppLink>
              </div>
              <div class="tw-w-full md:tw-w-1/2 tw-pl-30 tw-pt-20">
                <AppLink external to="#">Застройщик</AppLink>
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
export default {
  name: 'NavFullScreen',
  data() {
    return {
      nav: [
        {
          label: 'о проекте',
          to: { name: 'main' },
        },
        {
          label: 'расположение',
          to: { name: 'main' },
        },
        {
          label: 'благоустройство',
          to: { name: 'main' },
        },
        {
          label: 'галерея',
          to: { name: 'main' },
        },
        {
          label: 'условия покупки',
          to: { name: 'main' },
        },
        {
          label: 'контакты',
          to: { name: 'main' },
        },
      ],
    };
  },
  computed: {
    value() {
      return this.$store.state.navShowed;
    },
  },
};
</script>

<style scoped lang="scss">
.nav {
  position: fixed;
  z-index: 900;
  @apply tw-inset-0 tw-bg-primary;
}

.links {
  max-width: 600px;
}

@screen md {
  .decor::after {
    content: '';
    width: 1030px;
    height: 1030px;
    position: absolute;
    z-index: -1;
    top: -145px;
    right: -392px;
    background-image: url(@/assets/images/3d-gora.png);
    background-repeat: no-repeat;
    background-blend-mode: difference;
    background-size: cover;
    @apply tw-bg-primary;
  }
}

@screen xl {
  .decor::after {
    top: -94px;
    right: -281px;
  }
}

@screen 2xl {
  .decor::after {
    width: 1260px;
    height: 1260px;
    left: 0;
    top: -183px;
  }
}
</style>
