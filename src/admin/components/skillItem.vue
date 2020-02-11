<template lang="pug">
  li.skills__item(v-if="editmode === false")
    .skills__name {{skill.title}}
    .skill__percent {{skill.percent}}
    .skills__btns
      button(type="button" @click="editmode = true").skills-btn.pen
      button(type="button" @click="removeExistedSkill").skills-btn.trash

  li.skills__item(v-else)
    .skills__name
      input(type="text" class="skill-name__input" placeholder="Новый навык" v-model="editedSkill.title")
    .skill__percent
      input(type="text" class="skill-percent__input" placeholder="100" v-model="editedSkill.percent")
    .skills__btns
      button(type="button" @click="editExistedSkill").skills-btn.pen
      button(type="button" @click="editmode = false").skills-btn.trash
  
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      editmode: false,
      editedSkill: { ...this.skill }
    };
  },
  props: {
    skill: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  methods: {
    ...mapActions("skills", ["removeSkill", "editSkill"]),
    async removeExistedSkill() {
      try {
        await this.removeSkill(this.skill);
      } catch (error) {}
    },
    async editExistedSkill() {
      try {
        await this.editSkill(this.editedSkill);
        this.editmode = false;
      } catch (error) {
      }
    }
  }
};
</script>