<template>
  <app-page class="tw-pt-0">
    <div class="wrapper tw-h-full">
      <div class="2xl:tw-h-full news">
        <div class="left app-scroll-y tw-pt-20">
          <h1 class="h1 tw-mb-20">новости и акции</h1>
          <NewsList :items="items" />
        </div>
        <NewsShow
          v-if="$grid['2xl'] && showedId.value !== null"
          class="right app-scroll-y tw-pt-20"
          :id="showedId.value"
        />
        <DialogNewsShow v-if="!$grid['2xl']" />
      </div>
    </div>
  </app-page>
</template>

<script>
import NewsList from '@/components/NewsList.vue';
import DialogNewsShow from '@/components/DialogNewsShow.vue';
import NewsShow from '@/components/NewsShow.vue';

export default {
  provide() {
    return {
      showedId: this.showedId,
      closestIds: () => this.closestIds,
      show: (id) => {
        this.showedId.value = id;
      },
      prev: () => {
        this.showedId.value = this.closestIds.prev;
      },
      next: () => {
        this.showedId.value = this.closestIds.next;
      }
    }
  },
  data() {
    return {
      showedId: {
        value: null
      },
      items: [
        { title: 'новые планировки на сайте', createdAt: '30 мая 2022 г.', id: 1 },
        { title: 'новые планировки на сайте', createdAt: '30 мая 2022 г.', id: 4 },
        { title: 'новые планировки на сайте', createdAt: '30 мая 2022 г.', id: 2 },
      ]
    }
  },
  computed: {
    indexMap() {
      return this.items.reduce((acc, item, index) => {
        acc[item.id] = index;
        return acc;
      }, {})
    },
    closestIds() {
      if(!this.showedId.value) return {
        next: null,
        prev: null,
      };

      const curIndex = this.indexMap[this.showedId.value];
      const prevIndex =  Math.max(0, curIndex - 1);
      const nextIndex =  Math.min(this.items.length - 1, curIndex + 1);

      return {
        prev: prevIndex === curIndex ? null : this.items[prevIndex].id,
        next: nextIndex === curIndex ? null : this.items[nextIndex].id,
      };
    },
  },
  components: {
    NewsList,
    DialogNewsShow,
    NewsShow
  }
}
</script>

<style scoped>
@screen 2xl {
  .news {
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
  }

  .left, .right {
    height: calc(100vh - 182px);
    overflow-x: hidden;
  }

  .right {
    padding-left: 80px;
  }
}
</style>
