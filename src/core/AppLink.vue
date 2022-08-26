<template>
  <a
    v-if="external"
    v-bind="$attrs"
    class="tw-text-orange tw-flex tw-items-center"
    :class="[ sizeClasses ]"
    :href="to"
  >
      <span class="tw-mr-10 tw-underline">
        <slot />
      </span>
      <svg class="tw-w-12 tw-h-12 tw-fill-orange">
      <use xlink:href="#link"></use>
    </svg>
  </a>
  <router-link
    v-else
    v-bind="$props"
    custom
    v-slot="{ href, navigate }"
    class="tw-underline"
  >
    <a v-bind="$attrs" :href="href" @click="navigate">
      <slot />
    </a>
  </router-link>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  inheritAttrs: false,
  props: {
    ...RouterLink.props,
    sizeClasses: {
      default: 'tw-text-sm md:tw-text-base',
      type: String
    },
    external: {
      default: false,
      type: Boolean
    },
  },
}
</script>

<style>

</style>
