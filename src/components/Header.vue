<template>
    <nav>
        <img src="@/assets/header/logo.png">
        <ul>
            <li> <a href="/">Início</a></li>
            <li> <a href="/hospedagem">Hospedagem</a></li>
            <li> <a href="/quadriciclo">Passeio Quadriciclo</a></li>
            <li> <a href="/banana-boat">Passeio Banana Boat</a></li>
            <li> <a href="/lancha">Passeio Lancha</a></li>
            <li> <a href="/lancha">Passeio 4X4</a></li>
            <li> <a href="/lancha">Capitólio e Serra da Canastra</a></li>
            <li> <a href="/rapel">Rapel</a></li>
        </ul>
    </nav>
</template>

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
        height: 100%;
        width: 100%;
        background-color: #f9f9f9;
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
</style>
