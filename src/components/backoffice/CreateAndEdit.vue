<template>
    <div>
        <form>
            <div>
                <label for="">Titulo</label>
                <input type="text" name="" id="">
            </div>
            <div>
                <label for="">Descrição</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div>
                <label for="">Imagem</label>
                <input type="file" name="" id="">
            </div>

            <button class="createInfo">Criar</button>
        </form>
    </div>
</template>

<style scoped>
    form > div {
        display: flex;
        flex-direction: column;
    }

    form > div > input[type=text] {
        height: 30px;
        padding: 10px;
        border: 2px solid #03a025;
        border-radius: 5px;
    }

    form > div > input[type=file] {
        margin-top: 10px
    }

    form > div > label {
        font-weight: bold;
    }

    form > div {
        margin-bottom: 20px;
    }

    form > div > textarea {
        width: 97% !important;
        height: 97% !important;
        border: 2px solid #03a025;
        border-radius: 5px;
    }
</style>
