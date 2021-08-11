<template>
  <div class="containerSlide">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="`${currentImg}`" />
      </div>
      <a class="prev" @click="prev">&#10094; </a>
      <a class="next" @click="next">&#10095; </a>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: ['images'],
  data () {
    return {
      timer: null,
      currentIndex: 0
    }
  },
  methods: {
    next: function () {
      this.currentIndex += 1
    },
    prev: function () {
      this.currentIndex -= 1
    }
  },
  computed: {
    currentImg: function () {
      return this.images[Math.abs(this.currentIndex) % this.images.length]
    }
  }
}
</script>

<style scoped>
.prev, .next {
  cursor: pointer;
  position: relative;
  width: auto;
  padding: 16px;
  color: black;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover, .next:hover {
  background-color: #066906;
  color: white;
}

.containerSlide {
  width: 100%;
  height: 100%;
}

.containerSlide > div {
  width: 100%;
  height: 100%;
}

.containerSlide > div > img {
  border: 6px solid #066906;
  border-radius: 15px;
  max-width: 700px;
  max-height: 370px;
}
</style>
