<template>
  <div class="background">
    <div class="container">
      <div class="listOption">
        <div v-for="item in list" :key="item.name">
          <ListOption :image="item.image" :name="item.name" :type="item.type" @selectOption="selectNewOption"/>
        </div>
      </div>
      <div class="containerClear"><div class="clearLine"/></div>
        <div v-if="type != null && !createAndEditVar">
          <div class="sizeCards">
            <div>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          <div>
            <button class="createInfo" @click="createAndEdit()">Criar</button>
          </div>
        </div>
        <div v-if="createAndEditVar">
          <CreateAndEdit :data="info"/>
        </div>
    </div>
  </div>
</template>

<script>
import ListOption from '@/components/backoffice/ListOptions.vue'
import Card from '@/components/backoffice/Card.vue'
import CreateAndEdit from '@/components/backoffice/CreateAndEdit.vue'
import Info from '@/services/Info.js'

export default {
  components: { ListOption, Card, CreateAndEdit },
  data () {
    return {
      list: [
        {
          name: 'Hospedagem',
          image: 'icon-hotel.png',
          type: 'ACCOMMODATION'
        },
        {
          name: 'Passeio Quadriciclo',
          image: 'icon-quadriciclo.png',
          type: 'QUADRICYCLE'
        },
        {
          name: 'Passeio Banana Boat',
          image: 'icon-banana.png',
          type: 'BANANABOAT'
        },
        {
          name: 'Passeio 4X4',
          image: 'icon-4x4.png',
          type: '4X4'
        },
        {
          name: 'Lancha',
          image: 'icon-lancha.png',
          type: 'BOAT'
        },
        {
          name: 'Capitólio e Serra',
          image: 'icon-montanha.png',
          type: 'CAPITOLIO'
        },
        {
          name: 'Rapel',
          image: 'icon-rapel.png',
          type: 'RAPEL'
        }
      ],
      type: null,
      createAndEditVar: null,
      info: {}
    }
  },
  methods: {
    selectNewOption (type) {
      if (type) {
        this.type = type
        this.createAndEditVar = false
        Info.getByType(type).then(response => {
          console.log(response)
        })
      }
    },
    createAndEdit () {
      this.createAndEditVar = true
    }
  }
}
</script>

<style>
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
    max-height: 80%;
    overflow: auto;
  }

  .createInfo {
    width: 100px;
    border: 5px solid #03a025;
    height: 50px;
    background-color: #18a837;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 40px;
  }
</style>
