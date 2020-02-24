<template lang="pug">
.reviews__edit-block
  .edit-block__title
    span Новый отзыв
  .edit-block__content--reviews
    .edit-block__content--left
      .edit__photo(
        :style="{ backgroundImage : avatarPreview, backgroundSize : 'cover'}"
      )
        .edit__photo--icon
      .edit__btn
        button.btn.btn--undecor Добавить фото
      input(
        type="file" accept="image/jpeg/png" @change="renderFile"
      ).load-file
    form.edit-block__content--right
      .edit__stroke
        .edit__row.edit__row--reviews
          .edit__name
            span Имя автора
          input(
            placeholder="Ковальчук Дмитрий"
            v-model="addReviewData.author"
          ).edit__input
        .edit__row.edit__row--reviews
          .edit__name
            span Титул автора
          input(
            placeholder="Основатель LoftSchool"
            v-model="addReviewData.occ"
          ).edit__input
      .edit__stroke.edit__stroke--full
        .edit__row.edit__row--reviews.edit__row--full
          .edit__name
            span Отзыв
          textarea(
            placeholder="Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!"
            v-model="addReviewData.text"
          ).edit__textarea
      .edit__btns.edit__btns--reviews
        button(
          type="submit" 
          @click="$emit('cancelLoad')"
        ).btn.btn--undecor Отмена
        button(
          type="submit"
          @click="addNewReview"
        ).btn Сохранить
            
</template>

<script>
import {mapActions, mapState} from "vuex";
export default {
  
  data() {
    return {
      renderedPhoto: "",
      addReviewData: {
        photo: "",
        author: "",
        occ: "",
        text: ""
      },
      isError: "true"
    }
  },
  methods: {
    ...mapActions('reviews', ['addReview']),
    ...mapActions('tooltipe', ['showTooltipe']),
    renderFile(event) {
      const file = event.target.files[0];
      this.addReviewData.photo = file;
      const reader = new FileReader();
      try {
        reader.readAsDataURL(file);
        reader.onloadend  = () => {
          this.renderedPhoto = reader.result;
        }
      } catch (error) {
        this.showTooltipe({
          active: true,
          message: 'Проверьте введенные данные'
        })
      }
    },
    async addNewReview() {
      try {
        var reviewFormData = new FormData();
        reviewFormData.append('photo', this.addReviewData.photo);
        reviewFormData.append('author', this.addReviewData.author);
        reviewFormData.append('occ', this.addReviewData.occ);
        reviewFormData.append('text', this.addReviewData.text);
        this.addReview(reviewFormData);
        this.$emit('cancelLoad');
        } catch (error) {
          this.showTooltipe({
          active: true,
          message: 'Проверьте введенные данные'
        })
      }
    },
  },
  computed: {
    avatarPreview() {
      return `url(${this.renderedPhoto})`;
    }
  }
}
</script>