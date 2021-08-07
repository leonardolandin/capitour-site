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
        'https://i.imgur.com/PQBuVOS.jpg',
        'https://i.imgur.com/ezXmvK5.jpg',
        'https://i.imgur.com/VZPQmv5.jpg',
        'https://i.imgur.com/uyXz9by.jpg',
        'https://i.imgur.com/e2YQ6Xy.jpg'
      ]
    }
  }
}
</script>
