<template lang="pug">
.reviews__windows--content
  .reviews__windows--header
    .windows--header__pic-container
      img(:src="getAbsoluteImgPath", alt="").windows--header__pic
    .windows--header__text
      .windows--header__name
        span {{review.author}}
      .windows--header__position
        span {{review.occ}}
  .reviews__windows--content
    .windows--content__text
      span {{review.text}}
    .control__btns 
      button(
        type="button"
        @click="editReview"
      ).control__btn
        .contol__btn-text Править
        .control__btn-icon.pen
      button(
        type="button"
        @click="deleteCurrentReview()"
      ).control__btn
        .contol__btn-text Удалить
        .control__btn-icon.close
            
</template>

<script>
import {mapActions, mapMutations} from "vuex";
import requests  from "../requests";
export default {
  
  props: {
    review: Object
  },
  data() {
    return {
      photoUrl: ""
    }
  },
  methods: {
    ...mapActions('reviews', ['deleteReview']),
    ...mapMutations("reviews", ["SET_CURRENT_REVIEW"]),
    ...mapActions('tooltipe', ['showTooltipe']),
    editReview() {
      try {
        this.SET_CURRENT_REVIEW(this.review.id);
        this.$emit("editReview");
      } catch(error) {
        this.showTooltipe({
          active: true,
          message: error.message
        })
      }
    },
    deleteCurrentReview() {
      try {
        this.deleteReview(this.review.id);
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
      var photo = this.review.photo
      const baseUrl = requests.defaults.baseURL;
      return `${baseUrl}/${photo}`;
    }
  }
}
</script>