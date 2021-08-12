<template>
    <div class="containerOpinion">
        <h1 v-if="opinion.title != null">{{opinion.title}}</h1>
        <div>
            <div class="description">
                <span> "{{opinion.description}}" </span>
                <div class="userInfo">
                    <div class="nameOrHour">
                        <span id="user">{{opinion.user}}</span>
                        <span id="hour">{{ formatDate(opinion.date) }}</span>
                    </div>
                    <img class="userImage" src="@/assets/user.png">
                </div>
            </div>
            <div class="images">
                <Slider :images="opinion.images"/>
            </div>
        </div>
        <div class="about" v-if="opinion.home">
            <a class="link" :href="opinion.url"><span>Quer ver mais comentários como esse? Clique Aqui!!</span></a>
        </div>
    </div>
</template>

<script>
import Slider from '@/components/Slider.vue'

export default {
  name: 'Opinion',
  props: ['opinion'],
  components: { Slider },
  methods: {
    formatDate: function (date) {
      if (date) {
        return `${this.addZero(date.getDay(), 'DAY')}/${this.addZero(date.getMonth() + 1, 'MONTH')}/${date.getFullYear()} ás ${date.getHours()}:${this.addZero(date.getMinutes(), 'MINUTES')}`
      }
    },
    addZero: function (number, type) {
      if (type === 'MONTH' || type === 'DAY') {
        if (number <= 9) {
          return `0${+number}`
        } else {
          return number
        }
      } else if (type === 'MINUTES') {
        if (number.toString().length === 1) {
          return `0${number}`
        } else {
          return number
        }
      }
    }
  }
}
</script>

<style>
.containerOpinion {
  width: 70%;
  flex-direction: column;
  display: flex;
  background-color: white;
  border-radius: 50px;
  border: 1px solid white;
}

.containerOpinion > div {
  padding: 40px;
  display: flex;
  flex-direction: row;
}

.description {
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.description > span {
  display: -webkit-box;
  max-height: 300px;
  text-align: justify;
  -webkit-line-clamp: 15;
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

.userImage {
  height: 40px;
  align-self: center;
  margin-left: 15px;
}

.images {
  width: 65%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about {
  padding: 0px !important;
  height: 50px;
}

.about > a {
  color: black;
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  transition: all 0.4s;
}

.about > a:hover {
  color: white;
  background-color: #18a837;
}

@media only screen and (max-width: 414px) {
  .containerOpinion {
    width: 96%;
  }

  .containerOpinion > div {
    flex-direction: column;
  }

  .description {
    width: 100%;
    margin-bottom: 20px;
  }

  .description > span {
    max-height: 70px;
    -webkit-line-clamp: 4;
  }

  img {
    max-width: 290px !important;
  }

  .opinions {
    margin-bottom: 50px;
  }
}
</style>
