<template>
    <div class="containerCard">
        <div class="info">
            <span id="title">{{info.title}}</span>
            <span id="date">{{getDate(info.created)}}</span>
        </div>
        <div class="actions">
            <div title="Editar">
                <img src="@/assets/card/edit.png">
            </div>
            <div title="Remover" v-if="info.active">
                <img src="@/assets/card/remove.png">
            </div>
            <div title="Ativar" v-else>
                <img src="@/assets/card/accept.png">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['info'],
  methods: {
    getDate (date) {
      const dateFormat = new Date(date)
      if (dateFormat) {
        return `${this.addZero(dateFormat.getDay(), 'DAY')}/${this.addZero(dateFormat.getMonth() + 1, 'MONTH')}/${dateFormat.getFullYear()} ás ${dateFormat.getHours()}:${this.addZero(dateFormat.getMinutes(), 'MINUTES')}`
      }
    },
    addZero (number, type) {
      if (type === 'MONTH' || type === 'DAY') {
        if (number <= 9) {
          return `0${+number}`
        } else {
          return number
        }
      } else if (type === 'MINUTES') {
        if (number.toString().length === 1) {
          return `0${number}`
        } else {
          return number
        }
      }
    }
  }
}
</script>

<style scoped>
    .containerCard {
        display: flex;
        flex-direction: row;
        border: 2px solid #eceaea;
        border-radius: 7px;
        padding: 10px;
        justify-content: space-between;
        margin-bottom: 10px;
        transition: all 0.9s;
    }

    .info {
        display: flex;
        flex-direction: column;
    }

    #title {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        width: 300px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    #date {
        color: #9e9e9e;
    }

    .actions {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .actions > div {
        margin: 10px;
    }

    img {
        height: 35px;
        cursor: pointer;
    }
</style>
