<template>
    <div>
        <form @submit="createAndEdit(model, $event)">
            <div>
                <label for="">Titulo</label>
                <input type="text" v-model="model.title">
            </div>
            <div>
                <label for="">Descrição</label>
                <textarea cols="30" rows="10" v-model="model.description"></textarea>
            </div>
            <div>
                <label for="">Imagem</label>
                <input type="file" @change="uploadImage">
            </div>
            <input value="Criar" type="submit" class="createInfo">
        </form>
    </div>
</template>

<script>
import Info from '@/services/Info.js'

export default {
  name: 'CreateAndEdit',
  props: ['data', 'type'],
  data () {
    return {
      model: this.data
    }
  },
  methods: {
    createAndEdit (model, e) {
      e.preventDefault()
      if (model) {
        if (model._id) {
          Info.setEditInfo(model).then(response => {
            console.log(response)
          })
        } else {
          this.model.type = this.type
          Info.setNewInfo(model).then(response => {
            console.log(response)
          })
        }
      }
    },
    uploadImage (e) {
      if (e.target.files.length) {
        this.setImage(e.target.files[0])
      } else {
        return false
      }
    },
    setImage (file) {
      const fileReader = new FileReader()

      fileReader.onload = (e) => {
        this.model.image = { path: e.target.result, name: file.name }
      }

      fileReader.readAsDataURL(file)
    }
  }
}
</script>

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
