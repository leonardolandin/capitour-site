<template>
    <nav>
        <OverlayHeaderMobile :show="show" @close="openOverlay"/>
        <img v-if="!isMobile || isTablet" src="@/assets/header/logo.png">
        <ul>
            <li class="burger-icon-container"><img src="@/assets/mobile/icon-burger.png" @click="openOverlay" alt="Hamburguer" class="burger-icon"></li>
            <li v-if="!isMobile || isTablet"> <a href="/" id="home">Início</a></li>
            <li v-if="!isMobile || isTablet"> <a href="/hospedagem" id="hospedagem">Hospedagem</a></li>
            <li v-if="!isMobile || isTablet"> <a href="/quadriciclo" id="quadriciclo">Passeio Quadriciclo</a></li>
            <li v-if="!isMobile || isTablet"> <a href="/banana-boat" id="bananaBoat">Passeio Banana Boat</a></li>
            <li v-if="!isMobile || isTablet"> <a href="/lancha" id="lancha">Passeio Lancha</a></li>
            <li v-if="!isMobile || isTablet"> <a href="/passeio-4x4" id="passeio4x4">Passeio 4X4</a></li>
            <li v-if="!isMobile || isTablet"> <a href="/capitolio-e-serra-da-canastra" id="capitolioSerraCanastra">Capitólio e Serra da Canastra</a></li>
            <li v-if="!isMobile || isTablet"> <a href="/rapel" id="rapel">Rapel</a></li>
        </ul>
    </nav>
</template>

<script>
import { isMobile, isTablet } from 'mobile-device-detect'
import OverlayHeaderMobile from '@/components/OverlayHeaderMobile.vue'

export default {
  name: 'Header',
  components: { OverlayHeaderMobile },
  data () {
    return {
      isMobile: isMobile,
      isTablet: isTablet,
      show: false
    }
  },
  methods: {
    openOverlay: function () {
      this.show = !this.show

      isMobile ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'visible')
    }
  }
}
</script>

<style scoped>
    li {
        list-style-type: none;
        width: 200px;
        justify-content: center;
        display: flex;
        align-items: center;
    }

    nav {
        display: flex;
        flex-direction: row;
        width: 100%;
        background-color: #f9f9f9;
        height: 140px;
    }

    img {
        height: 136px;
        margin: 0 0 0 45px;
    }

    ul {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
    }

    a {
        font-size: x-large;
        text-decoration: none;
        height: 100%;
        width: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.5s all;
        color: black;
    }

    a:hover {
        color: white;
        background-color: #18a837;
        border: 0.9px solid;
        border-radius: 3px;
    }

    .burger-icon-container {
        justify-content: end;
        display: none;
    }

    @media only screen and (max-width: 414px) {
        #home, #hospedagem, #quadriciclo, #bananaBoat, #lancha, #passeio4x4, #capitolioSerraCanastra, #rapel {
            display: none;
        }

        .burger-icon {
            display: block;
            height: 40%;
            margin-left: 40px;
        }

        .burger-icon-container {
            display: flex;
        }
    }
</style>
