<template>
  <div class="tw-overflow-x-hidden tw-h-screen tw-bg-primary">
    <div class="tw-min-h-full tw-relative tw-z-0 layout-base tw-overflow-hidden">
      <Header />
      <router-view />
      <Footer class="tw-relative tw-z-10" />
    </div>
  </div>
</template>

<script>
export default {

}
</script>
