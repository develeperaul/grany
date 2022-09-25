<template>
  <app-page class="2xl:tw-pt-[100px] page-pb">
    <div class="wrapper tw-relative decor-rock after:tw-content-none 2xl:after:tw-content-['']">
      <div class="2xl:tw-flex 2xl:tw-justify-between">
        <div class="tw-mb-20">
          <p class="tw-font-extrabold tw-text-lg tw-leading-100 md:tw-text-xl 2xl:tw-text-xl10">упс ...</p>
        </div>
        <div class="2xl:tw-basis-[862px]">
          <h1 class="tw-text-md tw-leading-120 tw-text-secondary tw-max-w-[260px] tw-mb-20 md:tw-max-w-[600px] md:tw-text-lg md:tw-font-extrabold md:tw-mb-60">
            Извините, страница не&nbsp;найдена
          </h1>
          <div class="tw-mb-40 md:tw-mb-60 2xl:tw-max-w-[755px]">
            <img class="tw-w-full" width="288" height="107" src="@/assets/images/fallback.svg" alt="404">
          </div>
          <div class="md:tw-text-center xl:tw-text-left">
            <AppLink class="md:tw-inline-flex" external :to="{ name: 'main' }">На главную</AppLink>
          </div>
        </div>
      </div>
    </div>
  </app-page>
</template>

<script>
export default {

}
</script>
