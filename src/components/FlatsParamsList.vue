<template>
  <div
    class="-tw-mx-16 md:tw-mx-0 tw-flex tw-flex-wrap tw-border-gray md:tw-border-l"
    :class="{ 'tw-border-t': items.length > 1 }"
  >
    <FlatsParamsItem
      :class="{ 'tw-border-t': items.length === 1 }"
      v-for="item in items"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script>
import FlatsParamsItem from '@/components/FlatsParamsItem.vue';

export default {
  props: {
    items: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      len: 5
    }
  },
  components: {
    FlatsParamsItem
  }
}
</script>
