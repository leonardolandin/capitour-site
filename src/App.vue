<template>
  <Header/>
  <router-view/>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  components: { Header }
}
</script>

<style>
body {
  margin: 0;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 250, 250, 0.5)
    ),
    url("./assets/wallpaper.jpg");
  background-size: cover;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  opacity: 1;
  width: 100%;
  height: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
