<template>
  <div class="home" v-for="opinion in opinions" :key="opinion.title">
    <Opinion :opinion="opinion"/>
  </div>
</template>

<script>
import Opinion from '@/components/Opinion.vue'

export default {
  components: { Opinion },
  data () {
    return {
      opinions: [
        {
          title: 'Hospedagem',
          description: 'Eu gostei muito desse lugar',
          images: [
            'https://i.imgur.com/PQBuVOS.jpg',
            'https://i.imgur.com/ezXmvK5.jpg',
            'https://i.imgur.com/VZPQmv5.jpg',
            'https://i.imgur.com/uyXz9by.jpg',
            'https://i.imgur.com/e2YQ6Xy.jpg'
          ],
          date: new Date(),
          user: 'Leonardo Landin',
          home: true,
          url: '/hospedagem'
        }
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
