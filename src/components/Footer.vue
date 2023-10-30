<template>
  <footer class="tw-border-t tw-border-dark tw-py-[13px] md:tw-py-20 xl:tw-py-25">
    <div class="wrapper 2xl:tw-max-w-none 2xl:tw-px-40">
      <div class=" tw-grid tw-gap-12  lg:tw-flex  tw-items-center tw-justify-between">
        <div class=" tw-grid tw-gap-16  lg:tw-mb-0 lg:tw-flex">

          <a href="#" class="logo tw-block tw-mr-30 tw-mb-8 xl:tw-mb-0">
            <img class="tw-w-full" width="152" height="30" src="@/assets/images/logo2.svg" alt="логотип агидель-инвест-строй">
          </a>
          <div class="tw-mb-20 xl:tw-mb-0 tw-basis-full xl:tw-basis-[368px] tw-text-[8px] tw-text-xxs tw-leading-100 tw-mr-20 tw-text-[#718A98]">
            © 2003-2022, ООО СЗ «Агидель-ИнвестСтрой». Опубликованная на сайте информация носит рекламный характер и не является публичной офертой.
            Проектная декларация на&nbsp;сайте <a class="tw-text-[#5CA748] tw-underline" :href="$store.state.domrf" target="_blank">дом.рф</a>
          </div>
        </div>


        <div class=" tw-flex tw-justify-end">

          <div class="tw-basis-[108px] lg:tw-basis-[126px] tw-mr-6 tw-pr-6 lg:tw-mr-20 lg:tw-pr-20 tw-py-2 tw-text-xxs tw-leading-120 tw-border-r tw-border-r-[#718A98] tw-border-solid tw-text-[#718A98]">
            3D-визуализация, дизайн и разработка
          </div>
  
          <a href="#" class="tw-w-[78px] tw-h-[25px]">
            <img width="78" height="25" class="tw-w-full" src="@/assets/images/logo-yes.svg" alt="логотип yes idea">
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      soc: [
        {
          name: '#wts',
          link: 'https://wa.me/73472242041'
        },
        // {
        //   name: '#tg',
        //   link: 'https://wa.me/73472242041'
        // },
        {
          name: '#vk',
          link: 'https://vk.com/agidelinvest'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .logo {
    width: 152px;
    height: 30px;
  }
</style>
