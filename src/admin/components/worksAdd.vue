<template lang="pug">
.works__edit-block
  .edit-block__title
    span Добавление работы
  .edit-block__content.edit-block__content--works
    label.edit-block__upload(
      :style="{ backgroundImage : avatarPreview, opacity : 0.9, backgroundSize : 'cover'}"
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
            v-model="addWorkData.title"
          ).edit__input
        .edit__row
          .edit__name
            span Ссылка
          input(
            placeholder="https://www.google.ru"
            v-model="addWorkData.link"
          ).edit__input
        .edit__row
          .edit__name
            span Описание
          textarea(
            placeholder="Введите описание"
            v-model="addWorkData.description"
          ).edit__textarea
        .edit__row
          .edit__name
            span Добавление тэга
          input(
            placeholder="Введите тэги через запятую"
            v-model="addWorkData.techs"
          ).edit__input
        .edit__btns 
          button(
            type="submit"
            @click="$emit('cancelLoad')"
          ).btn.btn--undecor Отмена
          button(
            type="submit"
            @click="addNewWork"
          ).btn Сохранить
</template>

<script>
import {mapActions, mapState} from "vuex";
export default {
  
  data() {
    return {
      renderedPhoto: "",
      addWorkData: {
        title: "",
        techs: "",
        photo: "",
        link: "",
        description: ""
      },
      isError: "true"
    }
  },
  methods: {
    ...mapActions('works', ['addWork']),
    ...mapActions('tooltipe', ['showTooltipe']),
    renderFile(event) {
      const file = event.target.files[0];
      this.addWorkData.photo = file;
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
    async addNewWork() {
      try {
        var workFormData = new FormData();
        workFormData.append('photo', this.addWorkData.photo);
        workFormData.append('title', this.addWorkData.title);
        workFormData.append('techs', this.addWorkData.techs);
        workFormData.append('link', this.addWorkData.link);
        workFormData.append('description', this.addWorkData.description);
        await this.addWork(workFormData);
        await this.$emit('cancelLoad');
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