<template lang="pug">
.works__edit-block
  .edit-block__title
    span Редактирование работы
  .edit-block__content.edit-block__content--works
    .edit-block__upload(
      :style="{ backgroundImage : avatarPreview, backgroundSize : 'cover'}"
    )
      .edit-block__upload--text
        p Перетащите или загрузите для загрузки изображения
      .edit-block__upload--btn
        button.btn Загрузить
        input(
          type="file" accept="image/jpeg" @change="renderFile"
        ).load-file
    .edit-block__info
      form.edit-block__form
        .edit__row
          .edit__name
            span Название
          input(
            placeholder="Название сайта"
            v-model="currentWork.title"
          ).edit__input
        .edit__row
          .edit__name
            span Ссылка
          input(
            placeholder="https://www.google.ru"
            v-model="currentWork.link"
          ).edit__input
        .edit__row
          .edit__name
            span Описание
          textarea(
            placeholder="Введите описание"
            v-model="currentWork.description"
          ).edit__textarea
        .edit__row
          .edit__name
            span Добавление тэга
          input(
            placeholder="Введите тэги через запятую"
            v-model="currentWork.techs"
          ).edit__input
        .edit__btns 
          button(
            type="submit"
            @click="$emit('cancelEditLoad')"
          ).btn.btn--undecor Отмена
          button(
            type="submit"
            @click="editCurrentWork"
          ).btn Сохранить
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  
  data() {
    return {
      photoRender: "",
      renderedPhoto: "",
      editedWork: "",
      isError: "true"
    }
  },
  methods: {
    ...mapActions('works', ['editWork']),
    ...mapActions('tooltipe', ['showTooltipe']),
    renderFile(event) {
      const file = event.target.files[0];
      this.photoRender = file;
      this.currentWork.photo = file;
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
    async editCurrentWork() {
      try {
        this.editWork(this.currentWork)
        this.$emit('cancelEditLoad');
      } catch (error) {
        this.showTooltipe({
          active: true,
          message: 'Проверьте введенные данные'
        })
      }
    }
  },
  computed: {
    ...mapState("works", {
      currentWork: state => state.currentWork
    }),
    avatarPreview() {
      return `url(${this.renderedPhoto})`;
    }
  }
}
</script>