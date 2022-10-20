<template>
  <app-page>
    <SwiperGallery v-if="gallery" :sources="images" />
  </app-page>
</template>

<script>
import SwiperGallery from '@/components/SwiperGallery.vue';

export default {
  created() {
    return this.getGallery();
  },
  data() {
    return {
      gallery: null
    }
  },
  methods: {
    async getGallery() {
      this.gallery = await this.$store.dispatch('galleries/galleriesOne', { id: 1 });
    }
  },
  computed: {
    images() {
      return this.gallery?.images?.map(image => image.url) || [];
    }
  },
  components: {
    SwiperGallery
  },
}
</script>
