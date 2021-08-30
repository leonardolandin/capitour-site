<template>
  <div class="home">
    <Info :infos="conexao"/>
    <div class="opinions" v-for="opinion in opinions" :key="opinion.title">
      <Opinion :opinion="opinion"/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Opinion from '@/components/Opinion.vue'
import Info from '@/components/Info.vue'

export default {
  components: { Opinion, Info, Footer },
  data () {
    return {
      opinions: [
        {
          title: 'Hospedagem',
          description: 'Eu gostei muito desse lugar Eu gostei muito desse lugar Eu gostei muito desse lugar Eu gostei muito desse lugar',
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
      ],
      conexao: {
        title: 'Conexão Aventura',
        description: 'Venha conhecer as maravilhas do Mar de Minas, com suas Lindas Cachoeiras e Trilhas.',
        images: [
          'https://i.imgur.com/PQBuVOS.jpg'
        ]
      }
    }
  }
}
</script>

<style scoped>
  .opinions {
    display: flex;
    justify-content: center;
    margin-top: 100px;
  }

  .home {
    overflow: auto;
    display: flex;
    flex-direction: column;
    max-height: 86%;
  }

  @media only screen and (max-width: 414px) {
    .opinions {
      margin-bottom: 50px;
    }
  }
</style>
