<template lang="pug">
  form.about__windows-item__form.about__windows-item__form-add
    .windows__header
      input(
        placeholder="Название новой группы" 
        v-model="createCategory.title"
        :disabled="groupFormIsBlocked? true : false"
        :class="{error:validation.hasError('createCategory.title')}"
      ).windows__header-name
      div.error(v-if="validation.hasError('createCategory.title')") {{ validation.firstError('createCategory.title') }}
      .windows__header-btns
        button(
          type="button" 
          @click="addNewCategory"
        ).skills-btn.pen
        button(
          type="button" 
          @click="editCardModeOFalse"
        ).skills-btn.pen
</template>

<script>
import { mapActions } from 'vuex';
import { eventBus } from '../main';
import {Validator} from 'simple-vue-validator';
export default {
  mixins:[require('simple-vue-validator').mixin],
  validators:{
    "createCategory.title": value =>{
      return Validator.value(value).required('Пожалуйста заполните поле!')
    }
  },
  props: {
    categories: Array,
    category: Object,
    editCardModeOn: Boolean
  },
  data () {
    return {
      createCategory: {
        title: ''
      },
      groupFormIsBlocked: false,
      isError: "true"
    }
  },
  methods: {
    ...mapActions('categories', ['addCategory']),
    ...mapActions('tooltipe', ['showTooltipe']),
    async addNewCategory() {
      this.groupFormIsBlocked = true;
      try {
        await this.addCategory(this.createCategory);
        this.createCategory.title = "";
        this.editCardModeOFalse();
      } catch(error) {
          this.showTooltipe({
          active: true,
          message: error.message
        })
      } finally {
        this.groupFormIsBlocked = false;
      }
    },
    editCardModeOFalse() {
      eventBus.$emit('falseMode', {
        flag: false
      })
    }
  },
}
</script>