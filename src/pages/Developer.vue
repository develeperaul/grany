<template>
  <app-page class="tw-pb-40 tw-relative decor tw-bg-primary">
    <div class="wrapper">
      <div class="developer xl-separator">
        <h1 class="h1 tw-max-w-[288px] tw-normal-case tw-mb-20 md:tw-max-w-[700px] xl:tw-col-span-1 xl:tw-mb-30 header">
          застройщик <br class="tw-hidden md:tw-block" /> «Агидель-ИнвестСтрой»
        </h1>
        <p class="title tw-text-secondary tw-text-md tw-leading-120 tw-mb-20 tw-max-w-[343px] md:tw-max-w-[700px] md:tw-text-[31px] md:tw-font-extrabold">
          специализированный застройщик «Агидель-ИнвестСтрой» — застройщик, которому доверяют
        </p>
        <div class="tw-space-y-20 tw-mb-30 content" v-html="content"></div>
        <div class="features">
          <div class="tw-flex tw-flex-wrap -tw-ml-40 tw-mb-30 xl:-tw-mt-20 xl:tw-mb-[50px] 2xl:tw-mb-30">
            <div class="tw-pl-40 tw-w-1/2 md:tw-w-auto md:tw-basis-[160px] xl:tw-pt-20">
              <p class="tw-font-extrabold tw-text-lg tw-leading-100 tw-mb-10 tw-text-orange md:tw-text-xl10 xl:tw-text-xl 2xl:tw-text-xl10">19+</p>
              <p class="tw-leading-120">лет на рынке <br/> недвижимости</p>
            </div>
            <div class="tw-pl-40 tw-w-1/2 md:tw-w-auto md:tw-basis-[160px] xl:tw-pt-20">
              <p class="tw-font-extrabold tw-text-lg tw-leading-100 tw-mb-10 tw-text-orange md:tw-text-xl10 xl:tw-text-xl 2xl:tw-text-xl10">21</p>
              <p class="tw-leading-120">реализованных <br/> домов</p>
            </div>
            <div class="tw-pl-40 tw-w-1/2 md:tw-w-auto md:tw-basis-[160px] xl:tw-pt-20">
              <p class="tw-font-extrabold tw-text-lg tw-leading-100 tw-mb-10 tw-text-orange md:tw-text-xl10 xl:tw-text-xl 2xl:tw-text-xl10">13</p>
              <p class="tw-leading-120">домов сданы <br/> раньше срока</p>
            </div>
            <div class="tw-pl-40 tw-w-1/2 md:tw-w-auto xl:tw-pt-20">
              <p class="tw-font-extrabold tw-text-lg tw-leading-100 tw-mb-10 tw-text-orange md:tw-text-xl10 xl:tw-text-xl 2xl:tw-text-xl10">3 006</p>
              <p class="tw-leading-120">квартир</p>
            </div>
          </div>
          <div>
            <AppLink external native target="_blank" :to="$store.state.homeSite + '/page-o_kompanii.php'">
              О застройщике
            </AppLink>
          </div>
        </div>
      </div>
    </div>
  </app-page>
</template>

<script>

export default {
  data() {
    return {
      content: `
        <p>
          Более 19 лет имя компании «Агидель-ИнвестСтрой» ассоциируется у жителей г. Уфы со стабильностью
          и гарантией качества. Мы привлекаем к работе лучших специалистов и используем самые последние инженерные решения, позволяющие использовать с пользой каждый квадратный метр квартиры. Тандем
          с генеральным подрядчиком ООО «Уфастроймонтаж» обеспечивает высокое качество работ и применение современных материалов. Поэтому неудивительно, что каждый год спрос на наши квартиры только растет.
        </p>
        <p>
          Основная цель компании — обеспечить население качественным жильем, поэтому мы предлагаем квартиры комфорт-класса. На сегодняшний день Специализированный застройщик «Агидель-ИнвестСтрой» предлагает квартиры в микрорайонах Дёма, Черниковка, а теперь и в историческом центре Уфы. Все объекты спроектированы с учетом последних инноваций в сфере строительства и имеют благоустроенную
          придомовую территорию с современными детскими площадками
        </p>
      `
    }
  }
}
</script>

<style scoped>
.developer {
  display: grid;
  grid-template-columns: 100%;
  column-gap: 80px;
}

@screen xl {
  .developer {
    grid-template-columns: 720px 150px;
    column-gap: 80px;
  }

  .features {
    grid-column: 2 / 3;
    grid-row: 1 / 4;
  }

  .title, .content {
    grid-column: 1 / 2;
  }

  .decor {
    background-image: url(@/assets/images/decor-1.png);
    background-repeat: no-repeat;
    background-size: 760px;
    background-position-y: center;
    background-position-x: -300px;
    background-blend-mode: overlay;
  }
}

@screen 2xl {
  .features {
    grid-column: 2 / 3;
    grid-row: auto;
  }

  .title, .content {
    grid-column: 2 / 3;
  }

  .developer {
    grid-template-columns: 50% 50%;
    column-gap: 0;
  }

  .header {
    grid-row: 1 / 6;
  }

  .decor {
    background-size: 1402px;
    background-position-x: -479px;
    background-position-y: center;
  }
}
</style>
