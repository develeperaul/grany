<template>
  <div
    class="-tw-mx-16 md:tw-mx-0 tw-flex tw-flex-wrap tw-border-gray md:tw-border-l"
    :class="{ 'tw-border-t': len > 1 }"
  >
    <FlatsParamsItem v-for="i in len" :key="i" :class="{ 'tw-border-t': len === 1 }" />
  </div>
</template>

<script>
import FlatsParamsItem from '@/components/FlatsParamsItem.vue';

export default {
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
