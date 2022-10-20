<template>
  <div class="tw-pt-40 md:tw-pt-80 2xl:tw-pt-120 md:tw-max-w-[768px] lg:tw-max-w-[1200px] 2xl:tw-max-w-[1920px] tw-mx-auto">
    <section class="project-sheet md:tw-px-40">
      <article class="project-sheet__arc tw-mb-40 md:tw-mb-0">
        <div class="tw-flex tw-flex-wrap tw-mb-20 md:tw-mb-20 2xl:tw-mb-40 tw-px-16 md:tw-px-0">
          <p class="project-sheet__index tw-mb-10 md:tw-mr-30 2xl:tw-mr-[100px]">01</p>
          <h2 class="project-sheet__title">архитектура</h2>
        </div>
        <div class="md:tw-max-w-[435px] 2xl:tw-max-w-[470px] md:tw-pl-[60px] 2xl:tw-ml-auto tw-mb-20 2xl:tw-mb-40 tw-px-16 md:tw-px-0">
          <AppLink class="tw-mb-20" external :to="{ name: 'location' }">Расположение</AppLink>
          <p>{{ arc.text }}</p>
        </div>

        <div class="md:tw-pl-[60px] 2xl:tw-pl-[150px] md:tw-max-w-[440px] md:tw-h-[200px] 2xl:tw-h-[360px] 2xl:tw-max-w-full">
          <img
            width="1440"
            height="720"
            class="tw-object-cover tw-object-center tw-w-full tw-h-full"
            src="@/assets/images/main/render-2.jpg"
            loading="lazy"
            alt="Архитектура"
          >
        </div>
      </article>

      <article class="project-sheet__views tw-mb-40 md:tw-mb-0 md:tw-pt-40 lg:tw-pt-0 lg:tw-ml-[25px] 2xl:tw-pl-[55px]">
        <div class="tw-flex tw-flex-wrap tw-mb-20 md:tw-mb-60 2xl:tw-mb-80 tw-px-16 md:tw-px-0">
          <p class="project-sheet__index tw-mb-10 md:tw-mr-30 2xl:tw-mr-[80px]">02</p>
          <h2 class="project-sheet__title">виды</h2>
        </div>
        <div class="2xl:tw-max-w-[500px] md:tw-pl-[60px] 2xl:tw-ml-auto">
          <p class="tw-mb-20 2xl:tw-mb-40 md:tw-max-w-[300px] 2xl:tw-max-w-[353px] tw-px-16 md:tw-px-0">
            {{ views.text }}
          </p>
          <div class="md:tw-max-w-[240px] 2xl:tw-max-w-[440px] md:tw-h-[220px] lg:tw-h-[340px] 2xl:tw-h-[480px] md:tw-ml-auto md:tw-mr-30">
            <img
              class="tw-object-cover md:tw-object-[-80px] 2xl:tw-object-[-240px] lg:tw-object-[-210px] tw-w-full tw-h-full"
              width="2048"
              height="1366"
              src="@/assets/images/about/views.jpg"
              loading="lazy"
              alt="Памятник Салавату Юлаеву"
            >
          </div>
        </div>
      </article>

      <div class="project-sheet__views2 tw-hidden lg:tw-block lg:tw-h-[290px] 2xl:tw-h-[450px]">
        <img
          class="tw-object-cover tw-w-full tw-h-full"
          width="1600"
          height="1067"
          src="@/assets/images/about/views2.jpg"
          loading="lazy"
          alt="Вид на реку Белая"
        >
      </div>

      <article class="project-sheet__format tw-mb-40 md:tw-mb-0 md:-tw-mt-[190px] lg:tw-mt-0 lg:tw-pt-[100px] 2xl:tw-pt-[120px]">
        <div class="tw-flex tw-flex-wrap tw-mb-20 md:tw-mb-20 2xl:tw-mb-40 tw-px-16 md:tw-px-0">
          <p class="project-sheet__index tw-mb-10 md:tw-mr-30 2xl:tw-mr-[100px]">03</p>
          <h2 class="project-sheet__title tw-max-w-[580px]">закрытый формат</h2>
        </div>
        <div class="md:tw-ml-[60px] tw-max-w-[375px] 2xl:tw-max-w-[410px] 2xl:tw-ml-auto 2xl:tw-pr-20 tw-px-16 md:tw-px-0">
          <p>{{ format.text }}</p>
        </div>

        <div class="md:tw-pl-[60px] 2xl:tw-pl-[150px] tw-pt-20 2xl:tw-pt-40">
          <img
            width="1400"
            height="720"
            src="@/assets/images/about/format.jpg"
            loading="lazy"
            alt="Места для отдыха"
          >
        </div>
      </article>
      <article class="project-sheet__commerce tw-mb-20 md:tw-mb-0 2xl:tw-pt-[110px] md:tw-pl-30 2xl:tw-pl-[75px] 2xl:tw-pr-[80px] md:tw-pt-40 lg:tw-pt-0 lg:-tw-mt-[100px] 2xl:tw-mt-0">
        <div class="tw-flex tw-flex-wrap tw-mb-20 md:tw-mb-20 2xl:tw-mb-40 tw-px-16 md:tw-px-0">
          <p class="project-sheet__index tw-mb-10 md:tw-mr-30 2xl:tw-mr-[100px]">04</p>
          <h2 class="project-sheet__title">коммерция</h2>
        </div>
        <div class="md:tw-max-w-[375px] 2xl:tw-max-w-[350px] md:tw-ml-60 2xl:tw-ml-auto tw-px-16 md:tw-px-0">
          <AppLink class="tw-mb-20" external to="#location">Офисы в центре города</AppLink>
          <p class="md:tw-mb-20 2xl:tw-mb-40 tw-max-w-[353px]">{{ commerce.text }}</p>
        </div>
      </article>

      <article class="project-sheet__parking tw-mb-40 md:tw-mb-0 lg:-tw-mr-20 2xl:-tw-mr-80 2xl:tw-pt-[65px]">
        <div class="tw-flex tw-flex-wrap tw-mb-20 md:tw-mb-[80px] lg:tw-mb-[48px] 2xl:tw-mb-80 tw-px-16 md:tw-px-0">
          <p class="project-sheet__index tw-mb-10 md:tw-mr-30 2xl:tw-mr-[100px]">05</p>
          <h2 class="project-sheet__title md:tw-max-w-[300px] lg:tw-max-w-[380px] 2xl:tw-max-w-full">
            квартиры
          </h2>
        </div>
        <div class="md:tw-ml-[60px] md:tw-max-w-[300px] lg:tw-max-w-[350px] 2xl:tw-max-w-[367px] md:tw-mb-40 2xl:tw-mb-40 2xl:tw-ml-auto 2xl:tw-mr-20 tw-px-16 md:tw-px-0">
          <p>{{ flats.text }}</p>
        </div>
        <div class="md:tw-pl-[60px] tw-pt-20 md:tw-pt-0 2xl:tw-pl-0 2xl:tw-max-w-[540px] 2xl:tw-ml-auto">
          <img
            class="md:tw-max-w-[380px] 2xl:tw-max-w-full"
            width="760"
            height="480"
            src="@/assets/images/about/flats.jpg"
            loading="lazy"
            alt="рендер квартиры"
          >
        </div>
      </article>

      <div class="project__commerceImg tw-mb-40 md:tw-mb-0 2xl:tw-ml-80 2xl:tw-pt-10">
        <img
          class="md:tw-max-w-[240px] 2xl:tw-max-w-[540px] md:tw-h-[250px] lg:tw-h-[200px] 2xl:tw-h-[320px] tw-object-cover tw-object-[0px]"
          width="930"
          height="760"
          src="@/assets/images/about/commerce.jpg"
          loading="lazy"
          alt="Внутри офиса"
        >
      </div>

      <article class="project-sheet__parking2 tw-mb-40 md:tw-mb-0 2xl:tw-mt-[-180px] md:tw-pl-30 2xl:tw-pl-[140px] 2xl:tw-pr-[80px] md:tw-pt-40 lg:tw-pt-0 lg:-tw-mt-[125px] lg:tw-mb-60 2xl:tw-mb-120">
        <div class="tw-flex tw-flex-wrap tw-mb-20 md:tw-mb-[80px] lg:tw-mb-[57px] 2xl:tw-mb-80 tw-px-16 md:tw-px-0">
          <p class="project-sheet__index tw-mb-10 md:tw-mr-30 2xl:tw-mr-[100px]">06</p>
          <h2 class="project-sheet__title">паркинг</h2>
        </div>
        <div class="md:tw-ml-[60px] md:tw-max-w-[380px] 2xl:tw-max-w-[411px] md:tw-mb-20 2xl:tw-mb-40 2xl:tw-ml-auto 2xl:tw-mr-8 tw-px-16 md:tw-px-0">
          <p>{{ parking.text }}</p>
        </div>
        <div class="md:tw-pl-[60px] 2xl:tw-pl-[0px] tw-pt-20 md:tw-pt-0">
          <img
            class="md:tw-max-w-[380px] md:tw-h-[200px] md:tw-object-cover 2xl:tw-max-w-[540px] 2xl:tw-h-[320px] 2xl:tw-object-[-120px]"
            width="1550"
            height="720"
            src="@/assets/images/about/parking.jpg"
            loading="lazy"
            alt="Припаркованный автомобиль"
          >
        </div>
      </article>

      <article class="project-sheet__eng tw-mb-40 md:tw-mb-60 2xl:tw-max-w-[1272px]">
        <div class="tw-px-16 tw-mb-20 md:tw-mb-40 md:tw-px-0">
          <h2 class="project-sheet__title">инженерия</h2>
        </div>
        <ul class="tw-px-16 tw-flex tw-flex-wrap -tw-ml-10 -tw-mt-30 md:tw-px-0 lg:-tw-ml-20 lg:-tw-mt-40 lg:tw-px-0">
          <li
            class="tw-w-1/2 tw-pl-10 tw-pt-30 md:tw-w-1/3 lg:tw-w-1/4 lg:tw-pl-20 lg:tw-pt-40 2xl:tw-pl-30"
            style="--color: #FF6B00"
            v-for="(item, i) in eng.items"
            :key="i"
          >
            <span class="before:tw-mb-10 list-marker tw-flex tw-flex-wrap md:before:tw-shrink-0 md:tw-flex-nowrap">{{ item }}</span>
          </li>
        </ul>
      </article>
      <div class="project-sheet__form md:tw-mb-[60px] lg:tw-mb-0">
        <FormCallBack class="cover lg:tw-max-w-[590px] lg:tw-ml-auto 2xl:tw-max-w-[905px] 2xl:tw-mr-[-45px]" />
      </div>
    </section>


  </div>
</template>

<script>
import FormCallBack from '@/components/FormCallBack.vue';

export default {
  data() {
    return {
      arc: {
        text: 'Современный жилой комплекс «Грани» находится в историческом центре Уфы, в тихом районе с готовой инфраструктурой. Уникальные архитектурные особенности выделяют комплекс в квартале улиц Гафури, Красина, Султанова и Чернышевского. Комплекс состоит из 11 зданий от 18 до 25 этажей. Доминанту «Грани» составляют 3 ромбовидных дома-близнеца. Стильные, современные и стремительные они задают настроение и создают особую атмосферу комплекса',
      },
      views: {
        text: 'Увеличенные оконные проемы на верхних этажах домов открывают удивительную панораму лесного массива и реки Белой'
      },
      format: {
        text: 'Территория комплекса обособлена и закрыта для автомобилей и посторонних. Это позволило создать внутри квартала большой безопасный прогулочный центр с игровой и спортивной площадками, местами для отдыха. Система видеонаблюдения и единая служба охраны гарантируют безопасность жителям'
      },
      commerce: {
        text: 'Первые этажи комплекса предназначены для коммерческих помещений, которые сделают инфраструктуру района еще богаче и насыщеннее за счет магазинов формата «у дома», помещений для кружков и секций, тренажерного зала и салонов сферы обслуживания'
      },
      parking: {
        text: 'Для автомобилей жителей комплекса предусмотрены подземный и наземный паркинги. Проектируя подземный паркинг, мы предусмотрели его функциональность и безопасность: передовые инженерные системы, спуск в паркинг на лифте, система видеонаблюдения'
      },
      flats: {
        text: 'В ассортименте планировок комплекса от студий до 4-комнатных с высотой потолка 2,7 м. Уникальные форматы: квартиры с окнами на 3 стороны света и видовые квартиры с угловым остеклением'
      },
      eng: {
        items: getEng()
      }
    }
  },
  components: {
    FormCallBack
  }
}

function getEng() {
  return [
    'Технология строительства: «монолит-каркас» с заполнением стен керамическим кирпичом',
    'Наружная отделка стен: вентилируемый фасад с повышенными характеристиками теплосбережения, шумоизоляции и пожаробезопасности',
    'Отделка первых этажей: клинкерный кирпич',
    'Внутренние перегородки из гипсолита',
    'Звукоизоляция пола',
    'Окна увеличенные 1,8 м в высоту из ламинированного профиля, энергоэффективные, с улучшенной шумоизоляцией',
    'Стояки тепла, холодного и горячего водоснабжения и канализации находятся вне квартир',
    'Потолки: 2,7 метра',
    'Отделка: черновая',
    'Разводка инженерных коммуникаций: лучевая по полу и потолку',
    'Система пожаротушения и дымоудаления',
    'Предусмотрены места для кондиционеров'
  ]
}
</script>

<style scoped>
.project-sheet {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto auto auto auto auto;
}

.project__commerceImg {
  grid-row: 5 / 6;
}

.project-sheet__title {
  line-height: 84%;
  @apply tw-text-lg tw-font-extrabold;
}

.project-sheet__index {
  @apply tw-text-md tw-leading-100 tw-text-orange tw-w-full md:tw-w-auto;
}

@screen md {
  .project-sheet {
    grid-template-columns: 230px 210px 270px;
    grid-template-rows: auto auto auto auto auto;
    background-position-y: 230px;
    background-position-x: -627px;
    background-size: 1580px;
    background-image: url(@/assets/images/3d-gora.png);
    background-repeat: no-repeat;
    background-color: theme('colors.primary');
    background-blend-mode: difference;
  }

  .project-sheet__arc {
    grid-column: 1 / 4;
  }

  .project-sheet__views {
    grid-column: 2 / 4;
  }

  .project-sheet__format {
    grid-column: 1 / 3;
  }

  .project-sheet__commerce {
    grid-column: 2 / 4;
    grid-row: 4 / 5;
  }

  .project-sheet__parking {
    grid-column: 1 / 3;
    grid-row: 5 / 6;
  }

  .project__commerceImg {
    grid-column: 3 / 6;
    grid-row: 5 / 6;
  }

  .project-sheet__parking2 {
    grid-column: 2 / 4;
    grid-row: 6 / 7;
  }

  .project-sheet__form  {
    grid-column: 1 / 4;
  }

  .project-sheet__eng {
    grid-column: 1 / 4;
  }
}

@screen lg {
  .project-sheet {
    grid-template-columns: 440px 240px 270px;
    grid-template-rows: auto auto auto auto auto;
    background-position-y: 240px;
    background-position-x: 0px;
    background-size: 1240px;
  }

  .project-sheet__arc {
    grid-column: 1 / 2;
  }

  .project-sheet__views {
    grid-column: 2 / 4;
  }

  .project-sheet__views2 {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }

  .project-sheet__format {
    grid-column: 1 / 2;
  }

  .project-sheet__commerce {
    grid-column: 2 / 4;
    grid-row: 3 / 4;
  }

  .project__commerceImg {
    grid-column: 2 / 4;
    grid-row: 4 / 5;
  }

  .project-sheet__parking {
    grid-column: 1 / 2;
    grid-row: 4 / 5;
  }

  .project-sheet__parking2 {
    grid-column: 2 / 4;
    grid-row: 5 / 6;
  }

  .project-sheet__form {
    grid-column: 1 / 6;
  }
}

@screen 2xl {
  .project-sheet {
    grid-template-columns: 855px 540px 440px;
    grid-template-rows: auto 450px auto auto auto;
    background-position-y: 265px;
    background-position-x: 142px;
    background-size: 2030px;
  }

  .project-sheet__title {
    @apply tw-text-xl10;
  }

  .project-sheet__index {
    @apply tw-text-lg tw-font-extrabold;
  }
}
</style>
