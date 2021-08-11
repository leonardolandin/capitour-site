<template>
    <div class="containerOpinion">
        <h1>Veja teste</h1>
        <div>
            <div class="description">
                <span>testes teste teste testes teste teste testes teste teste testes teste teste testes teste teste testes teste teste testes teste teste testes teste teste testes teste teste testes teste teste testes teste teste testes teste teste testes teste teste testes teste teste testes teste teste testes teste teste testes teste teste testes teste teste testes teste teste testes teste teste testes teste teste  teste teste testes teste teste teste teste testes teste teste teste teste testes teste teste teste teste testes teste teste teste teste testes teste teste teste teste testes teste teste teste teste testes teste teste teste teste testes teste teste teste teste testes teste teste teste teste testes teste teste teste teste testes teste teste teste teste testes teste teste teste teste testes teste teste teste teste testes teste teste teste teste testes teste teste teste teste testes teste teste teste teste testes teste teste teste teste testes teste teste teste teste testes teste teste </span>
                <div class="userInfo">
                    <div class="nameOrHour">
                        <span id="user">Nome do usuário</span>
                        <span id="hour">10/08/2001 ás 21:14</span>
                    </div>
                    <img src="@/assets/user.png">
                </div>
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
    border-radius: 50px;
    border: 1px solid white;
}

.containerOpinion > div {
    padding: 30px;
}

.description {
    width: 50%;
}

.description > span {
    display: -webkit-box;
    max-height: 300px;
    text-align: justify;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.nameOrHour {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

#user {
    font-weight: bold;
}

#hour {
    color: #9e9e9e;
}

.userInfo {
    display: flex;
    flex-direction: row;
    margin-top: 50px;
    align-items: flex-end;
    justify-content: flex-end;
}

img {
    height: 40px;
    align-self: center;
    margin-left: 15px;
}
</style>
