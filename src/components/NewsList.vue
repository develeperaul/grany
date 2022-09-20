<template>
  <div class="tw-space-y-16 md:tw-space-y-10">
    <NewsItem v-for="item in items" :key="item.id" v-bind="item" @click="show(item.id)" />
  </div>
</template>

<script>
import NewsItem from './NewsItem.vue';

export default {
  inject: ['show'],
  props: {
    items: {
      required: true,
      type: Array
    }
  },
  components: {
    NewsItem,
  }
}
</script>

<style>

</style>
