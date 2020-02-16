<template lang="pug">
.skills__item(
    v-if="editSkillModeOn === false"
  )
  .skills__name
    input(
      :value="skill.title" 
      readonly).skill-name__input
  .skill__percent
    input(
      :value="skill.percent" 
      readonly).skill-percent__input
  .skills__btns
    button(
      type="button"
      @click="editSkillModeOn = true"
    ).skills-btn.pen
    button(
      type="button"
      @click="removeThisSkill"
    ).skills-btn.trash
.skills__item(
    v-else
  )
  .skills__name
    input(
      placeholder="Название"
      v-model="editedSkill.title"
    ).skill-name__input
  .skill__percent
    input(
      placeholder="%"
      v-model="editedSkill.percent"
    ).skill-percent__input
  .skills__btns
    button(
      type="button"
      @click="editThisSkill"
    ).skills-btn.okay
    button(
      type="button"
      @click="editSkillModeOn = false"
    ).skills-btn.close
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: {
    skill: Object
  },
  data() {
    return {
      editSkillModeOn: false,
      editedSkill: {...this.skill}
    }
  },
  methods: {
    ...mapActions('skills', ['removeSkill', 'editSkill', 'getSkills']),
     ...mapActions('tooltipe', ['showTooltipe']),
    async removeThisSkill() {
      try {
        await this.removeSkill(this.skill.id);
      } catch(error) {
          this.showTooltipe({
            active: true,
            message: 'Что-то пошло не так'
          });
      }
    },
    async editThisSkill() {
      try {
        await this.editSkill(this.editedSkill);
        await this.getSkills();
        this.editedSkill.title = '';
        this.editedSkill.percent = '';
        this.editSkillModeOn = false;
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