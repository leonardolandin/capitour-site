<template>
  <div class="home">
    <Slider :images="this.images"/>
  </div>
</template>

<script>
import Slider from '@/components/Slider.vue'

export default {
  components: { Slider },
  data () {
    return {
      images: [
        '@/assets/slides/1.jpg',
        '@/assets/slides/2.jpg',
        '@/assets/slides/3.jpg',
        '@/assets/slides/4.jpg',
        '@/assets/slides/5.jpg'
      ]
    }
  }
}
</script>
