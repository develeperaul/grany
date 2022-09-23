<template>
  <div class="layout-base tw-bg-primary tw-min-h-screen">
    <Header />
    <router-view />
    <Footer />
  </div>
  <InlineSvg class="tw-hidden" :src="require('@/assets/sprites/sprite-icons.svg')" />
</template>

<script>
export default {

}
</script>
