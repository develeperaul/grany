<template>
  <svg
    class="tw-w-full tw-h-full tw-min-w-[380px]"
    :viewBox="`0 0 ${width} ${height}`"
    :preserveAspectRatio="ratio"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <image width="100%" height="100%" :xlink:href="image" />
    <path
      v-for="(storey, i) in storeys"
      :key="storey.id"
      class="tw-opacity-0 hover:tw-opacity-50 tw-cursor-pointer"
      fill="#FF8413"
      :d="d"
      :style="{ transform: `translateY(${offset * i}px)` }"
      @click="$router.push({ name: 'storey', params: { id: storey.id } })"
    />
  </svg>
</template>

<script>
export default {
  props: {
    d: {
      required: true,
      type: String
    },
    offset: {
      required: true,
      type: Number
    },
    storeys: {
      required: true,
      type: Array
    },
    image: {
      required: true,
      type: String
    },
    ratio: {
      default: 'xMidYMid slice',
      type: String
    },
    height: {
      required: true,
      type: String
    },
    width: {
      required: true,
      type: String
    }
  }
}
</script>

<style>

</style>
