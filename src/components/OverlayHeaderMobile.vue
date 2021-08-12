<template>
    <div>
        <div :class="show ? 'menu' : 'menu hidden'">
            <div class="closeMenuMobile">
                <i @click="closeMenuMobile()">&times;</i>
            </div>
            <div class="containerClear"><div class="clearLine"/></div>
            <div class="containerLogo">
                <img src="@/assets/header/logo.png">
            </div>
            <div class="containerClear"><div class="clearLine"/></div>
            <div>
                <nav class="containerListItens">
                    <ul>
                        <li>
                            <a href="/">
                                <img src="@/assets/mobile/overlay/icon-house.png" alt="Casa">
                                <span>Inicio</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="@/assets/mobile/overlay/icon-hotel.png" alt="Hotel">
                                <span>Hospedagem</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="@/assets/mobile/overlay/icon-quadriciclo.png" alt="Quadriciclo">
                                <span>Passeio Quadriciclo</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="@/assets/mobile/overlay/icon-banana.png" alt="Banana Boat">
                                <span>Passeio Banana Boat</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="@/assets/mobile/overlay/icon-lancha.png" alt="Lancha">
                                <span>Passeio Lancha</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="@/assets/mobile/overlay/icon-4x4.png" alt="4x4">
                                <span>Passeio 4X4</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="@/assets/mobile/overlay/icon-montanha.png" alt="Ambiente">
                                <span>Capitólio e Serra da Canastra</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="@/assets/mobile/overlay/icon-rapel.png" alt="Rapel">
                                <span>Rapel</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div :class="show ? 'overlay': 'overlay hiddenOverlay'"/>
    </div>
</template>

<script>

export default {
  props: ['show'],
  methods: {
    closeMenuMobile: function () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
    .menu {
        background: #fff none repeat scroll 0 0;
        width: 320px;
        position: absolute;
        box-shadow: 1px 2px 3px #ddd;
        left: -1px;
        transition: left .5s ease 0s;
        margin-right: 1px;
        z-index: 31;
        min-height: 102vh;
        overflow-y: scroll;
        height: 100vh;
    }

    .hidden {
        left: -320px !important;
    }

    .closeMenuMobile {
        font-size: 75px;
        display: flex;
        justify-content: flex-end;
    }

    .closeMenuMobile > i {
        margin-right: 40px;
    }

    .containerLogo {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }

    .containerLogo > img {
        height: 120px;
    }

    .clearLine {
        border: 1px solid #e4e4e4;
        border-block-end: none;
        width: 200px;
    }

    .containerClear {
        display: flex;
        justify-content: center;
    }

    .overlay {
        background-color: #000;
        position: fixed;
        margin-right: -100%;
        width: 101%;
        height: 103vh;
        opacity: .8;
        z-index: 30;
        transition: transform .2s;
    }

    .hiddenOverlay {
        display: none;
        transition: transform .5s;
    }

    .containerListItens > ul {
        list-style: none;
        line-height: 70px;
        padding: 0;
        background-color: #f3f3f3;
    }

    .containerListItens > ul > li {
        list-style-type: none;
        margin: 0 16px;
        font-weight: 600;
    }

    .containerListItens > ul > li > a {
        color: black;
        text-decoration: none;
        display: flex;
        align-items: center;
    }

    .containerListItens > ul > li > a > img {
        height: 24px;
        margin-right: 10px;
    }

    .container {
        margin: 20px 0 20px 0;
    }
</style>
