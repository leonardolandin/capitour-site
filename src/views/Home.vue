<template>
  <div class="home">
    <Opinion />
  </div>
</template>

<script>
import Opinion from '@/components/Opinion.vue'

export default {
  components: { Opinion },
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

<style scoped>
  .home {
    display: flex;
    justify-content: center;
    margin-top: 100px;
  }
</style>
