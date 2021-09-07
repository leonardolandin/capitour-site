<template>
    <div class="background">
        <div class="container">
            <div class="listOption">
              <div v-for="item in list" :key="item.name">
                <ListOption :image="item.image" :name="item.name" />
              </div>
            </div>
            <div class="containerClear"><div class="clearLine"/></div>
            <div class="sizeCards">
              <div>
                <Card />
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import ListOption from '@/components/backoffice/ListOptions.vue'
import Card from '@/components/backoffice/Card.vue'

export default {
  components: { ListOption, Card },
  data () {
    return {
      list: [
        {
          name: 'Hospedagem',
          image: 'icon-hotel.png'
        },
        {
          name: 'Passeio Quadriciclo',
          image: 'icon-quadriciclo.png'
        },
        {
          name: 'Passeio Banana Boat',
          image: 'icon-banana.png'
        },
        {
          name: 'Passeio 4X4',
          image: 'icon-4x4.png'
        },
        {
          name: 'Capitólio e Serra',
          image: 'icon-montanha.png'
        }
      ]
    }
  }
}
</script>

<style scoped>
    .container {
      background-color: white;
      width: 40%;
      display: flex;
      height: 460px;
      flex-direction: row;
      margin-top: 100px;
      padding: 80px;
      justify-content: space-between;
    }

    .background {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 100px;
    }

    .listOption {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }

    .clearLine {
      border: 1px solid #e4e4e4;
      border-block-end: none;
      width: 10px;
      border-top: none;
      border-bottom: none;
    }

    .containerClear {
      display: flex;
      justify-content: center;
    }

    .sizeCards {
      width: 60%;
    }
</style>
