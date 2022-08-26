<template>
  <div class="layout-base tw-bg-primary tw-min-h-screen">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
  <InlineSvg class="tw-hidden" :src="require('@/assets/sprites/sprite-icons.svg')" />
</template>

<script>
export default {

}
</script>

<style>

</style>
