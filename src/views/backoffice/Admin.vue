<template>
    <div class="background">
        <div class="container">
            <div class="list">
                <div v-for="item in list" :key="item.name">
                    <ListOption :image="item.image" :name="item.name" />
                </div>
            </div>
            <div>

            </div>
        </div>
    </div>
</template>

<style scoped>
    .container {
        background-color: white;
        width: 40%;
        display: flex;
        height: 460px;
        flex-direction: row;
        margin-top: 100px;
        padding: 80px;
    }

    .background {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 100px;
    }

    .list {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
</style>

<script>
import ListOption from '@/components/backoffice/ListOptions.vue'

export default {
  components: { ListOption },
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
