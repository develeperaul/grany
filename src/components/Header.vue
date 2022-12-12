<template>
  <header class="tw-relative tw-z-10" v-click-outside="onOutside">
    <div class="tw-border-b tw-border-dark tw-py-[13px] lg:tw-py-[23px] 2xl:tw-py-[17px] tw-bg-primary tw-backdrop-blur-[14px]" :class="[ opacityClass ]">
      <div class="wrapper 2xl:tw-max-w-none 2xl:tw-px-40">
        <div class="tw-flex tw-items-center tw-justify-between lg:tw-justify-start">
          <router-link class="logo lg:tw-mr-16 xl:tw-mr-40 2xl:tw-mr-[87px]" to="/">
            <img
              class="tw-w-full"
              width="146"
              height="60"
              src="@/assets/images/logo.svg"
              alt="логотип грани"
            >
          </router-link>

          <router-link
            class="tw-hidden lg:tw-block tw-pt-4 tw-pr-4 lg:tw-mr-16 xl:tw-mr-24 lg:hover:tw-underline"
            :to="{ name: 'about' }"
          >
            О проекте
          </router-link>

          <div class="tw-hidden 2xl:tw-grow 2xl:tw-block"></div>

          <router-link
            class="tw-hidden lg:tw-flex lg:tw-items-center lg:tw-mr-16 xl:tw-mr-24 lg:hover:tw-underline"
            :to="{ name: 'flats.params' }"
          >
            <svg class="tw-w-[36px] tw-h-[36px] lg:tw-mr-14">
              <use xlink:href="#b-key"></use>
            </svg>
            <div class="tw-leading-100">Подобрать квартиру</div>
          </router-link>

          <div class="tw-hidden lg:tw-flex tw-mr-16 2xl:tw-mr-20">
            <router-link
              class="tw-flex tw-items-center tw-bg-orange tw-rounded-l-md lg:tw-px-8 lg:hover:tw-underline lg:hover:tw-bg-orangeHover xl:tw-px-14 tw-py-10"
              :to="{ name: 'facad' }"
            >
              <svg class="tw-w-[30px] tw-h-[30px] tw-mr-10 tw-fill-white">
                <use xlink:href="#fasad"></use>
              </svg>
              <div class="tw-leading-100 tw-pt-4">на фасаде</div>
            </router-link>

            <router-link
              class="tw-flex tw-items-center tw-bg-orange tw-rounded-r-md lg:tw-px-8 lg:hover:tw-underline lg:hover:tw-bg-orangeHover xl:tw-px-14 tw-py-10"
              :to="{ name: 'flats.params' }"
            >
              <svg class="tw-w-[30px] tw-h-[30px] tw-mr-10 tw-fill-white">
                <use xlink:href="#params"></use>
              </svg>
              <div class="tw-leading-100 tw-pt-4">по параметрам</div>
            </router-link>
          </div>

          <div class="tw-hidden lg:tw-block tw-leading-120 lg:tw-mr-20 xl:tw-mr-[42px] 2xl:tw-mr-[124px]">
            <a
              class="tw-font-[nexa-reg] lg:tw-text-sm xl:tw-text-md tw-mb-2 tw-block lg:hover:tw-opacity-90 tw-tracking-tighter"
              :href="`tel:${$store.getters.unmaskedPhone($store.state.headerPhone)}`"
            >
              {{ $store.state.headerPhone }}
            </a>
            <AppLink
              sizeClasses="lg:tw-text-sm xl:tw-text-base"
              external
              native
              to="#"
              @click.prevent="callbackToggle"
            >
              Заказать звонок
            </AppLink>
          </div>

          <button
            class="tw-order-first lg:tw-order-none tw-w-[36px] tw-h-[36px] lg:tw-w-48 lg:tw-h-48 lg:hover:tw-opacity-90"
            @click="navToggle"
          >
            <svg class="tw-w-full tw-h-full">
              <use :xlink:href="navValue ? '#b-cross' : '#b-menu'"></use>
            </svg>
          </button>

          <button class="lg:tw-hidden" @click="toolsToggle">
            <svg class="tw-w-[36px] tw-h-[36px] lg:tw-mr-14">
              <use :xlink:href="toolsValue ? '#b-cross' : '/sprite.svg#b-plan'"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div
      class="lg:tw-hidden tw-py-20 tw-absolute tw-z-0 tw-bottom-0 tw-translate-y-full tw-rounded-b-md tw-inset-x-0 tw-bg-primary tw-bg-opacity-70 tw-backdrop-blur-[14px]"
      :class="[ toolsValue ? 'tw-block' : 'tw-hidden' ]"
    >
      <div class="wrapper">
        <div class="tw-flex">
          <router-link
            class="tw-w-1/2 tw-flex tw-items-center tw-bg-orange tw-rounded-l-md tw-px-8 tw-py-15 tw-border-r tw-border-[#DB5C00]"
            :to="{ name: 'facad'  }"
          >
            <svg class="tw-w-[30px] tw-h-[30px] tw-mr-10 tw-fill-white">
              <use xlink:href="#fasad"></use>
            </svg>
            <div class="tw-leading-100 tw-pt-4">на фасаде</div>
          </router-link>
          <router-link
            class="tw-w-1/2 tw-flex tw-items-center tw-bg-orange tw-rounded-r-md tw-px-8 tw-py-15"
            :to="{ name: 'flats.params' }"
          >
            <svg class="tw-w-[30px] tw-h-[30px] tw-mr-10 tw-fill-white">
              <use xlink:href="#params"></use>
            </svg>
            <div class="tw-leading-100 tw-pt-4">по параметрам</div>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: {
    opacityClass: {
      default: 'tw-bg-opacity-70',
      type: String
    }
  },
  data() {
    return {
      toolsValue: false
    }
  },
  computed: {
    navValue() {
      return this.$store.state.navShowed;
    },
  },
  methods: {
    ...mapMutations(['navToggle', 'callbackToggle']),
    toolsToggle(value) {
      if(typeof value === 'boolean') return this.toolsValue = value;
      this.toolsValue = !this.toolsValue;
    },
    closeAll() {
      this.toolsToggle(false);
      this.$store.commit('navToggle', false);
    },
    onOutside() {
      if(this.toolsValue) this.toolsToggle(false);
    }
  },
  watch: {
    '$route'() {
      this.closeAll();
    },
    navValue() {
      this.toolsToggle(false);
    }
  },
}
</script>

<style scoped>
  .logo {
    width: 146px;
    height: 54px;
  }

  @screen 2xl {
    .logo {
      width: 181px;
      height: 66px;
    }
  }
</style>
