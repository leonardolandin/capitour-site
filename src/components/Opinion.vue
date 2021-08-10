<template>
    <div class="containerOpinion">
        <h1>Veja teste</h1>
        <div>
            <div class="description">
                <span>testes teste teste testes teste teste testes teste teste testes teste teste testes teste teste testes teste teste testes teste teste testes teste teste testes teste teste testes teste teste testes teste teste testes teste teste testes teste teste testes teste teste testes teste teste testes teste teste testes teste teste testes teste teste testes teste teste testes teste teste testes teste teste  teste teste testes teste teste teste teste testes teste teste teste teste testes teste teste teste teste testes teste teste teste teste testes teste teste teste teste testes teste teste teste teste testes teste teste teste teste testes teste teste teste teste testes teste teste teste teste testes teste teste teste teste testes teste teste teste teste testes teste teste teste teste testes teste teste teste teste testes teste teste teste teste testes teste teste teste teste testes teste teste teste teste testes teste teste teste teste testes teste teste teste teste testes teste teste </span>
            </div>
            <div class="images">
                <img src="" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Opinion'
}
</script>

<style>
.containerOpinion {
    width: 50%;
    height: 450px;
    flex-direction: column;
    display: flex;
    background-color: white;
}

.containerOpinion > div {
    padding: 30px;
}

.description {
    display: flex;
    flex-direction: row;
    max-width: 50%;
    height: 75%;
    text-align: center;
}

.description > span {
    width: 180px;
    display: inline-block;
    white-space: pre;
    text-overflow: ellipsis;
    overflow: hidden;
    vertical-align: middle;
}
</style>
