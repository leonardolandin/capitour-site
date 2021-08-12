<template>
    <div class="containerInfo">
        <div class="infos">
            <h1>{{infos.title}}</h1>
            <p>{{infos.description}}</p>
        </div>
        <div>
            <Slider :images="infos.images"/>
        </div>
    </div>
</template>

<script>
import Slider from '@/components/Slider.vue'

export default {
  name: 'Info',
  props: ['infos'],
  components: { Slider }
}
</script>

<style scoped>
.containerInfo {
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
}

.infos {
    margin: 105px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

@media only screen and (max-width: 414px) {
    .containerInfo {
        flex-direction: column;
    }
}
</style>
