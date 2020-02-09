<template lang="pug">
  section.section.reviews
    .container.reviews__container
      .reviews__title
        h2 Блок «Отзывы»
      .reviews__edit-block
        .edit-block__title
          span Новый отзыв
        .edit-block__content.edit-block__content--reviews
          .edit-block__content--left
            .edit__photo
              .edit__photo--icon
            .edit__btn
              button.btn.btn--undecor Добавить фото
          .edit-block__content--right
            .edit__stroke
              .edit__row.edit__row--reviews
                .edit__name
                  span Имя автора
                input(type="text" class="edit__input")
              .edit__row.edit__row--reviews
                .edit__name
                  span Титул автора
                input(type="text" class="edit__input")
            .edit__stroke.edit__stroke--full
              .edit__row.edit__row--reviews.edit__row--full
                .edit__name
                  span Отзыв
                textarea(type="text" class="edit__textarea")
            .edit__btns.edit__btns--reviews
              button.btn.btn--undecor Отмена
              button.btn Сохранить
      .reviews__windows
        ul.reviews__windows--list
          li.reviews__windows--item.reviews__windows--btn_item
            button.add--window
              .add--icon
              .add--text Добавить отзыв
          li.reviews__windows--item
            .reviews__windows--header
              .windows--header__pic.vladimir
              .windows--header__text
                .windows--header__name
                  span Владимир Сабанцев
                .windows--header__position
                  span Преподаватель
            .reviews__windows--content
              .windows--content__text
                span Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
              .control__btns 
                button.control__btn
                  .contol__btn-text Править
                  .control__btn-icon.pen
                button.control__btn
                  .contol__btn-text Удалить
                  .control__btn-icon.close
          li.reviews__windows--item
            .reviews__windows--header
              .windows--header__pic.dima
              .windows--header__text
                .windows--header__name
                  span Ковальчук Дмитрий
                .windows--header__position
                  span Основатель Loftschool
            .reviews__windows--content
              .windows--content__text
                span Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
              .control__btns 
                button.control__btn
                  .contol__btn-text Править
                  .control__btn-icon.pen
                button.control__btn
                  .contol__btn-text Удалить
                  .control__btn-icon.close
  
</template>

<script>
export default {
  name: 'reviews'
};
</script>

<style lang="postcss">

@import url("../../../styles/mixins.pcss");

.reviews__title {
  margin-bottom: 60px;
  font-size: 17px;
  color: #414c63;
}

.reviews__edit-block {
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  background-color: #fff;
  padding: 0 30px 50px 30px;

  @include phones {
    padding: 0 25px 40px 25px;
  }
}

.edit-block__content--reviews {
  display: flex;
  justify-content: flex-start;

  @include phones {
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
  }
}

.edit-block__content--left {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 25%;
  max-width: 250px;
  margin-right: 30px;

  @include phones {
    width: 100%;
    margin-right: 0;
    margin-bottom: 50px;
  }
}

.edit__photo {
  width: 200px;
  height: 200px;
  background-color: #dee4ed;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.edit__photo--icon {
  background-image: svg-load("avatar.svg", fill=#fff, width=100%, height=100%);
  width: 100px;
  height: 112px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: transparent;
}

.edit-block__content--right {
  width: 56%;
  max-width: 610px;
  display: flex;
  flex-direction: column;

  @include phones {
    width: 100%;
  }
}

.edit__stroke {
  display: flex;
  justify-content: space-between;

  &--full {
    margin-top: 40px;
  }

  @include phones {
    flex-direction: column;
  }
}

.edit__row--reviews {
  margin-top: 0;
  width: 47%;

  @include phones {
    width: 100%;
  }
}

.edit__row--full {
  width: 100%;
}

.edit__btns--reviews {
  align-self: flex-end;
}

.reviews__windows {
  padding: 30px 0;
  min-height: 440px;
}

.reviews__windows--list {
  display: flex;
  justify-content: space-between;
  
  @include tablets {
    flex-wrap: wrap;
  }
}

.reviews__windows--item {
  display: flex;
  flex-direction: column;
  max-width: 340px;
  width: 31%;
  min-height: 380px;
  width: 340px;
  height: 380px;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  background-color: #fff;
  padding: 3%;
  margin-bottom: 30px;
  margin-left: 2%;

  &:first-child {
    padding: 0;
    margin-left: 0;
  }

  @include tablets {
    width: 48%;
    max-width: 390px;

    &:first-child {
      padding: 0;
    }

    &:nth-child(odd) {
    margin-left: 0;
  }
    
  }

  @include phones {
    width: 100%;
    margin-left: 0;
    padding: 7%;
  }
}

.reviews__windows--btn_item {
  @include phones {
    height: 120px;
  }
}

.reviews__windows--header {
  display: flex;
  margin-bottom: 60px;
  position: relative;

  &:after {
    position: absolute;
    content: "";
    border: 1px solid #1f232d;
    opacity: 0.15;
    bottom: -30px;
    width: 100%;
  }
}

.windows--header__pic {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 7%;
}

.vladimir {
  background-image: url('../../../images/content/reviews/vladimir.png');
}

.dima {
  background-image: url('../../../images/content/reviews/dima.png');
}

.windows--header__name {
  font-size: 18px;
  font-weight: bold;
  color: #414c63;
}

.windows--header__position {
  font-size: 16px;
  font-weight: 600;
  color: rgba(65, 76, 99, 0.5);
}

.reviews__windows--content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.windows--content__text {;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.88;
  color: rgba(65, 76, 99, 0.7);
}

</style>