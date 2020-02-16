<template lang="pug">
.works__windows--content
  .works__windows--pic-content
    img(:src="getAbsoluteImgPath", alt="").works__windows--pic
    ul.works-windows__tags-list
      li(
        v-for="tag in tagsArray"
        ).works-windows__tags-item
        p.works-section__tags-text {{tag}}
  .works__windows--control
    .control__title
      span {{work.title}}
    .control__desc
      span {{work.description}}
    .control__link
      a {{work.link}}
    .control__btns 
      button(
        type="button"
        @click="editWork"
      ).control__btn
        .contol__btn-text Править
        .control__btn-icon.pen
      button(
        type="button"
        @click="deleteCurrentWork()"
      ).control__btn
        .contol__btn-text Удалить
        .control__btn-icon.close
</template>

<script>
import {mapActions, mapMutations} from "vuex";
import requests  from "../requests";
export default {
  
  props: {
    work: Object
  },
  data() {
    return {
      photoUrl: "",
      isError: "true"
    }
  },
  methods: {
    ...mapActions('works', ['deleteWork']),
    ...mapMutations("works", ["SET_CURRENT_WORK"]),
    ...mapActions('tooltipe', ['showTooltipe']),
    editWork() {
      try{
        this.SET_CURRENT_WORK(this.work.id);
        this.$emit("editWork");
      } catch(error) {
        this.showTooltipe({
          active: true,
          message: error.message
        })
      }
    },
    deleteCurrentWork() {
      try {
        this.deleteWork(this.work.id)
      } catch(error) {
        this.showTooltipe({
          active: true,
          message: error.message
        })
      }
    }
  },
  computed: {
    getAbsoluteImgPath() {
      var photo = this.work.photo
      const baseUrl = requests.defaults.baseURL;
      return `${baseUrl}/${photo}`;
    },
    tagsArray () {
      return this.work.techs.split(',');
    }
  }
}
</script>