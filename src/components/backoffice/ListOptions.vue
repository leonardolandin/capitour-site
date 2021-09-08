<template>
    <div class="item">
        <a @click="selectOption(type)">
            <img :src="getImage(image)" :alt="name">
            <span>{{name}}</span>
        </a>
    </div>
</template>

<script>
export default {
  name: 'ListOptions',
  props: ['image', 'name', 'type'],
  methods: {
    getImage: (url) => {
      var images = require.context('../../assets/list/', false, /\.png$/)
      return images(`./${url}`)
    },
    selectOption (type) {
      if (type) {
        this.$emit('selectOption', type)
      }
    }
  }
}
</script>

<style scoped>
    img {
        height: 40px;
    }

    span {
        margin-left: 10px;
        font-weight: bold;
    }

    .item {
        transition: all 0.4s;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 10px;
        cursor: pointer;
        width: 100%;
    }

    .item:hover {
        background-color: #fff7f7;
        transition: all 0.3s;
    }

    a {
        display: flex;
        flex-direction: row;
        text-decoration: none;
        color: black;
        align-items: center;
    }
</style>
