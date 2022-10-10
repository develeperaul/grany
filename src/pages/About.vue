<template>
  <app-page>
    <div class="wrapper">
      <div class="tw-mb-20 2xl:tw-mb-[50px] tw-flex tw-flex-wrap tw-items-center tw-justify-between">
        <h1 class="h1 md:tw-w-full 2xl:tw-w-auto tw-mb-20 2xl:tw-mb-0">о проекте</h1>
        <p class="md:tw-max-w-[700px] 2xl:tw-basis-[870px] 2xl:tw-ml-30">
          Этот жилой комплекс станет передовым для компании «Агидель-ИнвестСтрой», которая аккумулировала весь свой накопленный опыт и воплотила его в этом проекте. Здесь все  создано и организовано для человека и его комфортного окружения.
        </p>
      </div>
      <div class="-tw-mx-16 md:tw-mx-0">
        <img
          class="md:tw-mx-0 tw-w-full tw-h-[400px] md:tw-h-[500px] lg:tw-h-[540px] 2xl:tw-h-[620px] tw-object-cover tw-object-center"
          width="2175"
          height="1574"
          src="@/assets/images/main/render-1.jpg"
          alt="рендер жк"
        >
      </div>
    </div>
    <ProjectSheet />
  </app-page>
</template>

<script>
import ProjectSheet from '@/components/ProjectSheet.vue';

export default {
  components: {
    ProjectSheet
  }
}
</script>

<style>

</style>
