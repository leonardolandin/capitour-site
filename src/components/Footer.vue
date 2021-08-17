<template>
    <div class="footer">
        <div class="infos">
            <h1>CONTACTE-NOS</h1>
            <div>
                <img src="@/assets/footer/telephone-icon.png">
                <span>(11) 9 6559-0827</span>
            </div>
            <div>
                <img src="@/assets/footer/email-icon.png">
                <span>bbenvenuto@terra.com.br</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
    .footer {
        background-color: #034803;
        margin-top: 50px;
        padding: 100px;
        justify-content: center;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .infos {
        color: white;
    }

    .infos > div {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
    }

    img {
        height: 50px;
        margin-right: 10px;
    }
</style>
