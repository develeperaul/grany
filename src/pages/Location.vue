<template>
  <app-page class="tw-relative">
    <div class="wrapper xl:tw-h-full xl:tw-flex xl-separator md:tw-pb-[410px] xl:tw-pb-0">
      <div class="xl:tw-w-1/2 md:tw-relative md:tw-z-10">
        <h1 class="h1 tw-mb-20 2xl:tw-mb-[50px]">расположение</h1>
          <div
            class="tw-flex tw-overflow-x-auto app-scroll-x tw-pb-20 tw-mb-20 md:tw-max-w-[600px] md:tw-flex-wrap xl:tw-max-w-[370px] xl:-tw-mt-10 xl:-tw-ml-30"
          >
          <div
            class="tw-shrink-0 tw-mr-20 last:tw-mr-0 xl:tw-w-1/2 xl:tw-mr-0 xl:tw-pt-10 xl:tw-pl-30"
            v-for="tab in tabs"
            :key="tab.name"
          >
              <TabsItem
                class="xl:tw-w-full"

                :active="tabValue === tab.name"
                :fill="tab.fill"
                v-bind="tab"
                @click="tabValue = tab.name"
              />
            </div>
          </div>
        </div>
        <div class="xl:tw-w-1/2 md:tw-absolute md:tw-bottom-0 md:tw-left-0 md:tw-right-0 md:tw-h-full md:tw-pt-[220px] xl:tw-left-auto xl:tw-pt-0 xl:tw-top-0 2xl:tw-mt-0 2xl:tw-py-30">
          <yandex-map
            class="tw-h-[290px] md:tw-h-full"
            :coords="homePoint.coords"
            :zoom="16"
            :controls="[]"
          >
            <ymap-marker
              v-for="location in markers"
              :key="location.id"
              :marker-id="location.id"
              v-bind="location"
            />
          </yandex-map>
        </div>
      </div>
  </app-page>
</template>

<script>
import TabsItem from '@/components/TabsItem.vue';

export default {
  data() {
    return {
      categoryIcon: {
        razv: 'smile',
        school: 'edu',
        sport: 'sport',
        det: 'horse',
        health: 'health',
        market: 'market',
        bus: 'bus',
        home: 'home'
      },
      tabValue: 'all',
      tabs: [
        {
          name: 'all',
          label: 'Все',
          icon: 'location',
          fill: '#C83E04'
        },
        {
          name: 'razv',
          label: 'Развлечения',
          icon: 'smile',
          fill: '#B618A0'
        },
        {
          name: 'school',
          label: 'Школы',
          icon: 'edu',
          fill: '#15DBB9'
        },
        {
          name: 'sport',
          label: 'Спорт',
          icon: 'sport',
          fill: '#0C9550'
        },
        {
          name: 'det',
          label: 'Детские сады',
          icon: 'horse',
          fill: '#F99C13'
        },
        {
          name: 'health',
          label: 'Здоровье',
          icon: 'health',
          fill: '#EC2121'
        },
        {
          name: 'market',
          label: 'Магазины',
          icon: 'market',
          fill: '#0DACFF'
        },
        {
          name: 'bus',
          label: 'Остановки',
          icon: 'bus',
          fill: '#2D2DFF'
        },
      ],
      points: getPoints(),
      homePoint: {
        id: 0,
        category: 'home',
        coords: [54.732512, 55.928220],
        name: 'Жилой комплекс "Грани"',
      }
    }
  },
  computed: {
    markers() {
      return [this.homePoint, ...this.filteredPoints].map(point => ({
        ...point,
        'balloon-template': this.balloonHtml(point.name),
        icon: this.makeIcon(point.category)
      }));
    },
    filteredPoints() {
      if(this.tabValue === 'all') return this.points;
      return this.points.filter(point => point.category === this.tabValue);
    }
  },
  methods: {
    makeIcon(category) {
      return {
        layout: 'default#image',
        imageHref: '/markers/' + this.categoryIcon[category] + '.svg',
        imageSize: [36, 36]
      }
    },
    balloonHtml(name) {
      return `
        <p>${name}</p>
      `;
    }
  },
  components: {
    TabsItem
  }
}

function getPoints() {
  let id = 0;

  function setId() {
    return ++id;
  }

  return  [
    {
      id: setId(),
      category: 'bus',
      coords: [54.732693, 55.931544],
      name: 'Республиканский перинатальный центр',
    },
    {
      id: setId(),
      category: 'bus',
      coords: [54.733742, 55.931788],
      name: 'Школа-лицей № 2',
    },
    {
      id: setId(),
      category: 'bus',
      coords: [54.729787, 55.929972],
      name: 'Школа-лицей № 2',
    },
    {
      id: setId(),
      category: 'market',
      coords: [54.731046, 55.931140],
      name: 'Пятерочка',
    },
    {
      id: setId(),
      category: 'market',
      coords: [54.729226, 55.927564],
      name: 'Пятерочка',
    },
    {
      id: setId(),
      category: 'market',
      coords: [54.732765, 55.931544],
      name: 'Продукты',
    },
    {
      id: setId(),
      category: 'market',
      coords: [54.734924, 55.931975],
      name: 'Магнит',
    },
    {
      id: setId(),
      category: 'market',
      coords: [54.733931, 55.934221],
      name: 'Продукты «Ермолино»',
    },
    {
      id: setId(),
      category: 'market',
      coords: [54.731721, 55.935595],
      name: 'Everyday',
    },
    {
      id: setId(),
      category: 'market',
      coords: [54.733931, 55.934221],
      name: 'Красинский рынок',
    },
    {
      id: setId(),
      category: 'market',
      coords: [54.731046, 55.931140],
      name: 'Prime Food',
    },
    {
      id: setId(),
      category: 'market',
      coords: [54.733501, 55.932719],
      name: 'Zurrahmat, кафе, булочная, пекарня',
    },
    {
      id: setId(),
      category: 'health',
      coords: [54.732584, 55.932433],
      name: 'ГБУЗ РЕСПУБЛИКАНСКИЙ МЕДИКО-ГЕНЕТИЧЕСКИЙ ЦЕНТР',
    },
    {
      id: setId(),
      category: 'health',
      coords: [54.736800, 55.932972],
      name: 'Стоматологическая поликлиника № 9',
    },
    {
      id: setId(),
      category: 'health',
      coords: [54.731721, 55.935595],
      name: 'Промедицина',
    },
    {
      id: setId(),
      category: 'health',
      coords: [54.731046, 55.931140],
      name: 'Стоматология Loona dent',
    },
    {
      id: setId(),
      category: 'health',
      coords: [54.732153, 55.938425],
      name: 'Детская поликлиника № 6',
    },
    {
      id: setId(),
      category: 'health',
      coords: [54.733757, 55.941181],
      name: 'Гастроэнтерологический центр',
    },
    {
      id: setId(),
      category: 'health',
      coords: [54.729518, 55.937217],
      name: 'Invitro, Диагностический центр, медицинская лаборатория',
    },
    {
      id: setId(),
      category: 'health',
      coords: [54.731850, 55.932773],
      name: 'Республиканский клинический перинатальный центр Министерства здравоохранения РБ',
    },
    {
      id: setId(),
      category: 'health',
      coords: [54.732525, 55.939866],
      name: 'Альфамед, медицинская лаборатория, диагностический центр',
    },
    {
      id: setId(),
      category: 'sport',
      coords: [54.734187, 55.935103],
      name: 'Фитнес-клуб Leo Fit',
    },
    {
      id: setId(),
      category: 'sport',
      coords: [54.730744, 55.928430],
      name: 'Центр спортивной подготовки РБ',
    },
    {
      id: setId(),
      category: 'sport',
      coords: [54.736441, 55.933028],
      name: 'Getbett, фитнес-клуб',
    },
    {
      id: setId(),
      category: 'det',
      coords: [54.730167, 55.932308],
      name: 'Детский сад № 307',
    },
    {
      id: setId(),
      category: 'det',
      coords: [54.735516, 55.930583],
      name: 'Детский сад № 255',
    },
    {
      id: setId(),
      category: 'det',
      coords: [54.732525, 55.934269],
      name: 'Детский сад № 19',
    },
    {
      id: setId(),
      category: 'det',
      coords: [54.730167, 55.932308],
      name: 'Детский сад № 307',
    },
    {
      id: setId(),
      category: 'det',
      coords: [54.731046, 55.931140],
      name: 'ПолиматУМ, центр детского развития',
    },
    {
      id: setId(),
      category: 'det',
      coords: [54.734431, 55.940128],
      name: 'Детский сад № 6',
    },
    {
      id: setId(),
      category: 'det',
      coords: [54.732324, 55.940448],
      name: 'Детский сад «Супермалыш»',
    },
    {
      id: setId(),
      category: 'det',
      coords: [54.731877, 55.940277],
      name: 'Детский сад Funs Cool',
    },
    {
      id: setId(),
      category: 'det',
      coords: [54.730388, 55.933205],
      name: '«Солнечный круг», детский сад, ясли',
    },
    {
      id: setId(),
      category: 'school',
      coords: [54.730853, 55.932568],
      name: 'МБОУ центр образования школа № 10',
    },
    {
      id: setId(),
      category: 'school',
      coords: [54.735267, 55.934607],
      name: 'Лицей № 63',
    },
    {
      id: setId(),
      category: 'school',
      coords: [54.735516, 55.930583],
      name: 'Школа-лицей № 2',
    },
    {
      id: setId(),
      category: 'school',
      coords: [54.730388, 55.933205],
      name: '«Солнечный круг», частная школа',
    },
    {
      id: setId(),
      category: 'school',
      coords: [54.731990, 55.939162],
      name: 'Новошкола, частная школа',
    },
    {
      id: setId(),
      category: 'school',
      coords: [54.732911, 55.940248],
      name: 'Гимназия № 91',
    },
    {
      id: setId(),
      category: 'razv',
      coords: [54.731046, 55.931140],
      name: 'Место пряток',
    },
    {
      id: setId(),
      category: 'razv',
      coords: [54.731326, 55.929729],
      name: 'Кофейня «Венский кофе»',
    },
    {
      id: setId(),
      category: 'razv',
      coords: [54.733919, 55.934371],
      name: 'Территория детства Joy, игровая комната',
    },
    {
      id: setId(),
      category: 'razv',
      coords: [54.728585, 55.933813],
      name: 'Groom, караоке-клуб',
    },
    {
      id: setId(),
      category: 'razv',
      coords: [54.728672, 55.932990],
      name: 'Караоке-клуб',
    },
  ];
}
</script>

<style>

</style>
