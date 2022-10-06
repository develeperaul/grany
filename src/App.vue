<template>
  <router-view />
  <notifications />
  <notifications group="error" position="bottom center" />
  <NavFullScreen />
  <DialogCallback />
  <teleport to="body">
    <CookieAccept class="tw-absolute tw-bottom-80 lg:tw-bottom-120 tw-right-20 tw-z-50 tw-max-w-full md:tw-max-w-[343px] lg:tw-max-w-[540px]" />
  </teleport>
  <InlineSvg class="tw-hidden" :src="require('@/assets/sprites/sprite-icons.svg')" />
</template>
<script>
import NavFullScreen from '@/components/NavFullScreen.vue';
import DialogCallback from '@/components/DialogCallback.vue';
import CookieAccept from '@/components/CookieAccept.vue';

export default {
  components: {
    NavFullScreen,
    CookieAccept,
    DialogCallback,
  }
}
</script>
