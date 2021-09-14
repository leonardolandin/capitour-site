<template>
  <div class="home">
    <div class="infos" v-for="info in infos" :key="info._id" >
      <Info :infos="info"/>
    </div>
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
import InfoService from '@/services/Info'

export default {
  components: { Opinion, Info, Footer },
  data () {
    return {
      opinions: [],
      infos: []
    }
  },
  mounted () {
    InfoService.getByType('BOAT').then(response => {
      response.data.filter(item => {
        if (item.image.path) {
          const url = item.image.path
          item.image = []
          item.image.push(url)
        }
      })
      this.infos = response.data
    })
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

  .infos {
    margin-bottom: 100px;
  }

  @media only screen and (max-width: 414px) {
    .opinions {
      margin-bottom: 50px;
    }
  }
</style>
