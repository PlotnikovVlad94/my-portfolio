<template lang="pug">
  section.section.reviews
    .container.reviews__container
      .reviews__title
        h2 Блок «Отзывы»
      reviewAdd(
        v-if="addReviewMode === true"
        @cancelLoad="addReviewMode = false"
      )
      reviewEdit(
        v-if="editReviewMode === true"
        @cancelEditLoad="editReviewMode = false"
      )  
      .reviews__windows
        ul.reviews__windows--list
          li.reviews__windows--item.reviews__windows--btn_item
            button(
            @click="confirmLoad"
          ).add--window
              .add--icon
              .add--text Добавить отзыв
          li(
            v-for="review in reviews"
          ).reviews__windows--item
            reviewItem(
            :review="review"
            @editReview="editReviewMode = true"
          )

  
</template>

<script>
import { mapActions, mapState } from 'vuex';
import $axios from 'axios';
export default {
  components : {
    reviewAdd: () => import('../reviewsAdd'),
    reviewEdit: () => import('../reviewsEdit'),
    reviewItem: () => import('../reviewsItem')
  },
  data() {
    return {
      addReviewMode: false,
      editReviewMode: false,
      reviewEdit: {}
    }
  },
  methods: {
    ...mapActions('reviews', ['getReviews']),
    ...mapActions('tooltipe', ['showTooltipe']),
    editCurrentReview(editReviewData) {
      try {
        this.editReviewMode = true;
      } catch(error) {
        this.showTooltipe({
          active: true,
          message: error.message
        })
      }
    },
    confirmLoad() {
      this.addReviewMode = true;
    }
  },
  computed: {
    ...mapState('reviews', {
      reviews: state => state.reviews
    }),
  },
  async created() {
    try {
      await this.getReviews();
    } catch (error) {
      this.showTooltipe({
        active: true,
        message: 'Проверьте введенные данные'
      })
    }
  }
}
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
  margin-top: 48px;

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
  position: relative;

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
  flex-wrap: wrap;
}

.reviews__windows--content {
  display: flex;
  flex-direction: column;
}

.reviews__windows--item {
  max-width: 340px;
  width: 30%;
  min-height: 380px;
  max-width: 340px;
  min-height: 380px;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  background-color: #fff;
  padding: 3%;
  margin-bottom: 30px;
  margin-left: 5%;

  &:first-child {
    padding: 0;
    margin-left: 0;
  }

  &:nth-child(4n) {
  margin-left: 0;

  @include tablets {
    margin-left: 5%;
  }
  @include phones{
    margin-left: 0;
  }
  }

  @include tablets {
    width: 50%;
    max-width: 395px;

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
    min-height: 120px;
  }
}

.reviews__windows--header {
  display: flex;
  margin-bottom: 60px;
  position: relative;

  &:after {
    position: absolute;
    content: "";
    border-bottom: 1px solid #1f232d;
    opacity: 0.15;
    bottom: -30px;
    width: 100%;
  }
}

.windows--header__pic-container {
  height: 50px;
  width: 50px;
  margin-right: 7%;
}

.windows--header__pic {
  height: 100%;
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
  object-position: center top;
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