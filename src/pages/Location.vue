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
            :zoom="17"
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
        coords: [54.709000, 55.828768],
        address: 'Адрес',
        name: 'ЖК',
      }
    }
  },
  computed: {
    markers() {
      return [this.homePoint, ...this.filteredPoints].map(point => ({
        ...point,
        'balloon-template': this.balloonHtml(point.name, point.address),
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
    balloonHtml(name, address) {
      return `
        <p>${name}</p>
        <p>${address}</p>
      `;
    }
  },
  components: {
    TabsItem
  }
}

function getPoints() {
  return  [
    {
      id: 1,
      category: 'bus',
      coords: [54.708025, 55.828768],
      address: 'add 1',
      name: '2',
    },
    {
      id: 2,
      category: 'market',
      coords: [54.706225, 55.828768],
      address: '1',
      name: '2',
    },
    {
      id: 3,
      category: 'health',
      coords: [54.709325, 55.828768],
      address: '1',
      name: '2',
    },
    {
      id: 4,
      category: 'sport',
      coords: [54.704725, 55.828768],
      address: '1',
      name: '2',
    },
    {
      id: 5,
      category: 'det',
      coords: [54.701725, 55.828768],
      address: '1',
      name: '2',
    },
    {
      id: 6,
      category: 'school',
      coords: [54.703500, 55.828768],
      address: '1',
      name: '2',
    },
    {
      id: 7,
      category: 'razv',
      coords: [54.709999, 55.828768],
      address: '1',
      name: '2',
    }
  ];
}
</script>

<style>

</style>
