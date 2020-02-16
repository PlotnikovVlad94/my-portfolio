<template lang="pug">
  section.section.about
    .container.about__container
      .about__title-block
        .about__title
          h2 Блок «Обо мне»
        button(type="submit").about__add-btn(
          @click="editCardModeOn = true"
        ) Добавить группу    
      .about__windows 
        ul.about__windows-list
          li.about__windows-item(
            v-if="editCardModeOn === true"
          )
            skillGroupAdd(
              :categories="categories"
              :editCardModeOn="editCardModeOn"
            )
          li.about__windows-item(
            v-for="category in categories"
          )
            skillGroup(
              :category="category"
              :skills = "filterSkillsByCategoryId(category.id)"
              )
</template>

<script>
import { mapActions, mapState } from 'vuex';
import $axios from 'axios';
import { eventBus } from '../../main';
export default {
  components : {
    skillGroupAdd: () => import('../skillGroupAdd'),
    skillGroup: () => import('../skillgroup')
  },
  data () {
    return {
      editCardModeOn: false
    }
  },
  methods: {
    ...mapActions('categories', ['getCategories']),
    ...mapActions('skills', ['getSkills']),
    ...mapActions('tooltipe', ['showTooltipe']),
    filterSkillsByCategoryId(categoryId) {
      return this.skills.filter(skill => skill.category === categoryId)
    }
  },
  computed: {
    ...mapState('categories', {
      categories: state => state.categories
    }),
    ...mapState('skills', {
      skills: state => state.skills
    })
  },
  async created() {
    try {
      await this.getCategories();
    } catch(error) {
      this.showTooltipe({
        active: true,
        message: 'Проверьте введенные данные'
      })
    }
    try {
      await this.getSkills();
    } catch(error) {
      this.showTooltipe({
          active: true,
          message: 'Проверьте введенные данные'
      })
    }
  },
  mounted() {
    eventBus.$on('falseMode', boolean => {
      this.editCardModeOn = boolean.flag
    })
  }
}
</script>

<style lang="postcss">
@import url("../../../styles/mixins.pcss");
.about {
  min-height: 525px;
}
.about__container {
  display: flex;
  flex-direction: column;
}
.about__title-block {
  display: flex;
  justify-content: space-between;
  max-width: 405px;
  @include phones {
    flex-direction: column;
  }
}
.about__title {
  font-size: 17px;
  font-weight: bold;
  text-align: left;
  color: #414c63;

  @include phones {
    margin-bottom: 30px;
  }
}
.about__add-btn {
  color: #d0731b;
  background-color: transparent;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  &:before {
    content: "+";
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-image: linear-gradient(to top, #d0731b, #dc9322);
    line-height: 20px;
    color: #fff;
    margin-right: 13px;
    flex-shrink: 0;
    flex-basis: 20px;
  }
}
.add-btn__text {
  font-size: 16px;
  font-weight: 600;
  color: #d0731b;
}
.add-btn__block--about {
  width: 21px;
  height: 21px;
}
.add-btn__block {
  border-radius: 50%;
  background-image: linear-gradient(to top, #d0731b, #dc9322);
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(45deg);
  &--window {
    width: 40px;
    height: 40px;
  }
}
.add-btn__icon {
  background-image: svg-load("cross.svg", fill=#fff, width=100%, height=100%);
  &--window {
    width: 15px;
    height: 15px;
  }
  &--about {
    width: 8px;
    height: 8px;
  }
}
.windows__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    border-bottom: 1px solid;
    bottom: -14px;
    opacity: 0.51;
  }
}
.windows__header-name {
  max-width: 273px;
  width: 63%;
}
.windows__header-btns {
  display: flex;
  justify-content: space-between;
  max-width: 50px;
  width: 13%;
}
.windows__add-btn {
  color: #d0731b;
  background-color: transparent;
  font-weight: bold;
  padding: 0;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    content: "+";
    font-size: 30px;
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-image: linear-gradient(to top, #d0731b, #dc9322);
    color: #fff;
  }
}
.about__windows {
  margin-top: 60px;
}
.about__windows-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.about__windows-item {
  background-color: #fff;
  width: 48.5%;
  max-width: 525px;
  min-height: 387px;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 10px;
  @include phones {
    width: 100%;
    padding: 20px;
  }
}
.windows__skills {
  height: 100%;
  padding: 30px 0;
}
.skills__item {
  display: flex;
  justify-content: space-between;
}
.skills__name {
  width: 65%;
  max-width: 273px;
}
.windows__add-skill {
  max-width: 372px;
  align-self: flex-end;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.new-skill__name {
  width: 58%;
  max-width: 218px;
}
.skill__percent {
  max-width: 74px;
  width: 21%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @include phones {
    width: 25%;
  }
  &:after {
    position: absolute;
    content: "%";
    left: 65%;
  }
}

.skill-name__input {
  padding: 16px 0px;
  &--new {
    padding: 16px 20px;
  }
}
.skill-percent__input {
  padding: 16px 11px;
}
.skill-name__input--new,
.skill-percent__input--new {
  border-bottom: 1px solid #000;
  font-size: 16px;
  font-weight: normal;
}
.skills__btns {
  width: 13%;
  display: flex;
  max-width: 50px;
  justify-content: space-between;
  align-items: center;
  @include phones {
    width: 15%;
  }
}
.skills-btn {
  background-color: transparent;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.51;
}


.about__windows-item__form {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>