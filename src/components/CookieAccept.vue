<template>
  <Transition class="tw-transition-opacity tw-duration-300" leave-active-class="tw-opacity-0">
    <div v-if="show" class="tw-rounded-md tw-bg-primary tw-flex tw-items-center tw-px-12 tw-py-10">
      <p class=" tw-mr-20">Мы используем куки, чтобы пользоваться сайтом было удобно</p>
      <AppButton @click="accept">Ок</AppButton>
    </div>
  </Transition>
</template>

<script>
export default {
  mounted() {
    this.check();
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    check() {
      const value = localStorage.getItem('cookieAccepted');
      if(!value) this.show = true
    },
    accept() {
      localStorage.setItem('cookieAccepted', true);
      this.show = false;
    }
  }
}
</script>

<style>

</style>
