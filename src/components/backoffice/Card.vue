<template>
    <div class="containerCard">
        <div class="info">
            <span id="title">Titulo blablablablablabla blablablablablabla blablablablablabla blablablablablabla</span>
            <span id="date">Data e hora</span>
        </div>
        <div class="actions">
            <div title="Editar">
                <img src="@/assets/card/edit.png">
            </div>
            <div title="Remover">
                <img src="@/assets/card/remove.png">
            </div>
            <div title="Ativar">
                <img src="@/assets/card/accept.png">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Card'
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

    img {
        height: 35px;
        cursor: pointer;
    }
</style>
