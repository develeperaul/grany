<template>
  <router-view />
  <notifications />
  <notifications group="error" position="bottom center" />
  <NavFullScreen />
  <DialogCallback />
  <teleport to="body">
    <CookieAccept class="tw-fixed tw-bottom-80 lg:tw-bottom-120 tw-right-20 tw-z-50 tw-max-w-full md:tw-max-w-[343px] lg:tw-max-w-[540px]" />
  </teleport>
  <InlineSvg class="tw-hidden" :src="require('@/assets/sprites/sprite-icons.svg')" />
</template>
<script>
import NavFullScreen from '@/components/NavFullScreen.vue';
import DialogCallback from '@/components/DialogCallback.vue';
import CookieAccept from '@/components/CookieAccept.vue';

export default {
  async created() {
    try {
      if(process.env.NODE_ENV === 'production') {
        await this.appendMetric();
      }
    } catch(e) {
      console.error(e);
    }
  },
  methods: {
    async appendMetric() {
      const data = await this.$store.dispatch('getMetric');
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.innerHTML = data;
      document.head.appendChild(script);
    }
  },
  components: {
    NavFullScreen,
    CookieAccept,
    DialogCallback,
  }
}
</script>
