<template lang="pug">
  form.about__windows-item__form
    .windows__header(
      v-if="editCategoryModeOn === false"
    )
      input(
        :value="this.category.category"
        readonly
      ).windows__header-name
      .windows__header-btns
        button(
          type="button"
          @click="editCategoryModeOn = true"
        ).skills-btn.pen
        button(
          type="button"
          @click="removeThisCategory"
        ).skills-btn.trash
    .windows__header(
      v-else
    )
      input(
        placeholder="Название"
        v-model="editedCategory.title"
      ).windows__header-name
      .windows__header-btns
        button(
          type="button"
          @click="editThisCategory"
        ).skills-btn.okay
        button(
          type="button"
          @click="editCategoryModeOn = false"
        ).skills-btn.close
    .windows__skills
      ul.skills__list
        li(
          v-for="skill in skills"
        )
          skillItem(
            :skill="skill"
          )
    .windows__add-skill.add-skill
      .new-skill__name
        input(
        placeholder="Новый навык" 
        v-model="createSkill.title" 
        :disabled="skillFormIsBlocked ? true : false"
      ).skill-name__input.skill-name__input--new
      .skill__percent.new-skill__percent
        input(
        placeholder="100" 
        v-model="createSkill.percent"
        :disabled="skillFormIsBlocked ? true : false"
      ).skill-percent__input.skill-percent__input--new
      button(
        type="button" 
        @click="addNewSkill"
      ).windows__add-btn  
</template>

<script>
import { mapActions } from 'vuex';
export default {
  components : {
    skillItem: () => import('./skillItem')
  },
  props: {
    category: Object,
    skills: Array
  },
  data() {
    return {
      createSkill: {
        title: '',
        percent: '',
        category: this.category.id
      },
      skillFormIsBlocked: false,
      editCategoryModeOn: false,
      editedCategory: {...this.category}
    }
  },
  methods: {
    ...mapActions('skills', ['addSkill']),
    ...mapActions('tooltipe', ['showTooltipe']),
    ...mapActions('categories', ['removeCategory', 'editCategory', 'getCategories']),
    async addNewSkill() {
      this.skillFormIsBlocked = true;
      try {
        await this.addSkill(this.createSkill);
        this.createSkill.title = "";
        this.createSkill.percent = "";
      } catch(error) {
          this.showTooltipe({
            active: true,
            message: 'Проверьте введенные данные'
          })
      } finally {
        this.skillFormIsBlocked = false;
      }
    },
    async removeThisCategory() {
      try {
        await this.removeCategory(this.category.id);
      } catch(error) {
          this.showTooltipe({
            active: true,
            message: 'Что-то пошло не так'
          })
      }
    },
    async editThisCategory() {
      try {
        await this.editCategory(this.editedCategory);
        await this.getCategories();
        this.editedCategory.title = "";
        this.editCategoryModeOn = false;
      } catch(error) {
          this.showTooltipe({
            active: true,
            message: 'Проверьте введенные данные'
          })
      }
    }
  }
}
</script>