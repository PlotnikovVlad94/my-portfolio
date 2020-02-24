<template lang="pug">
  section.section.works
    .container.works__container
      .works__title
        h2 Блок «Работы»
      workAdd(
        v-if="addWorkMode === true"
        @cancelLoad="addWorkMode = false"
      )
      workEdit(
        v-if="editWorkMode === true"
        @cancelEditLoad="editWorkMode = false"
      )

      .works__windows
        ul.works__windows--list
          li.works__windows--item.works__windows--btn_item
            button(
              @click="confirmLoad"
            ).add--window
              .add--icon
              .add--text Добавить работу
          li.works__windows--item(
            v-for="work in works"
          )
            workItem(
              :work="work"
              @editWork="editWorkMode = true"
            )
    
</template>

<script>

import { mapActions, mapState } from 'vuex';
import $axios from 'axios';

export default {
  components: {
    workAdd: () => import('../worksAdd'),
    workEdit: () => import('../worksEdit'),
    workItem: () => import('../worksItem')
  },
  data() {
    return {
      addWorkMode: false,
      editWorkMode: false,
      workEdit: {}
    }
  },
  methods: {
    ...mapActions('works', ['getWorks']),
    ...mapActions('tooltipe', ['showTooltipe']),
    editCurrentWork(editWorkData) {
      try {
        this.editWorkMode = true;
      } catch(error) {
        this.showTooltipe({
          active: true,
          message: 'Проверьте введенные данные'
        })
      }
    },
    confirmLoad() {
      this.addWorkMode = true;
    }
  },
  computed: {
    ...mapState('works', {
    works: state => state.works
    }),
  },
  async created() {
    try {
      await this.getWorks();
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

.works {
  color: #414c63;
  opacity: 1;
}

.works__title {
  font-size: 17px;
  font-weight: bold;
}

.works__edit-block {
  min-height: 775px;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  padding: 0 30px 30px 30px;
  background-color: #fff;
  margin-top: 60px;
}

.edit-block__content {
  display: flex;
  justify-content: space-between;
  margin-top: 48px;

  &--works {
      @include tablets {
      flex-direction: column;
    align-items: center;
    }
  }
}

.edit-block__title {
  font-size: 18px;
  font-weight: bold;
  color: #414c63;
  padding: 30px 0px 25px 0;
  position: relative;
  display: flex;

  &:after {
    position: absolute;
    content: "";
    width: 100%;
    bottom: 0;
    opacity: 0.15;
    border-bottom: 1px solid #1f232d;
  }
}

.edit-block__upload {
  border: dashed 2px #a1a1a1;
  background-color: #dee4ed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;

  @Include tablets {
    height: 260px;
  }
}

.edit-block__upload--text {
  max-width: 230px;
  font-size: 16px;
  font-weight: 600;
  line-height: 2.12;
  text-align: center;
  color: rgba(65, 76, 99, 0.5);
  margin-bottom: 27px;
}

.btn {
  padding: 19px 45px;
  border-radius: 30px;
  background-image: linear-gradient(to top, #d0731b, #dc9322);
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;

  &:hover,
  &:focus {
    background-image: linear-gradient(to top, #dc9322, #d0731b);
    transition: .3s;
  }
  &:focus {
    box-shadow: 1px 1px 10px 3px #d0731b;
  }
  {
    &--undecor {
      color: #d0731b;
      border: none;
      background: none;
      text-transform: none;

      @include phones {
        padding: 19px 25px;
      }

      &:hover,
      &:focus {
        background-image: none;
        box-shadow: none;
        color: #dc9322;
        transition: .3s;
      }
    }
  }
}

.edit__btns {
  margin-top: 40px;

  @include tablets {
    display: flex;
    justify-content: center;
  }
}


.edit-block__upload,
.edit-block__info {
  width: 48.5%;
  max-width: 494px;

  @include tablets {
    width: 100%;
  }
}

.load-file {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  cursor: pointer;
}

.edit__row {
  margin-top: 30px;
}

.edit__name {
  font-size: 16px;
  font-weight: 600;
  color: rgba(65, 76, 99, 0.5);
}

.edit__textarea {
  border-bottom: none;
  resize: none;
  height: 150px;
  padding: 20px;
  border: solid 1px rgba(65, 76, 99, 0.2);;
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  margin-top: 19px;
}

.edit__input {
  border-bottom: solid 1px #414c63;
  width: 100%;

  &:focus {
    opacity: 1;
  }
}

.works__windows {
  padding: 30px 0;
}

.works__windows--list {
  display: flex;
  flex-wrap: wrap;

}

.works__windows--item {
  max-width: 340px;
  width: 30%;
  min-height: 556px;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  margin-bottom: 30px;
  margin-left: 5%;
  background-color: #fff;
  &:first-child {
    padding: 0;
    margin-left: 0;
  }

  &:nth-child(4n) {
  margin-left: 0;

  @include tablets {
    margin-left: 5%;
  }

  @include phones {
    margin-left: 0;
  }
}

  @include tablets {
    width: 50%;
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
  }
}

.works__windows--content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.works__windows--btn_item {
  @include phones {
    min-height: 120px;
  }
}

.add--window {
  background-image: linear-gradient(to top, #d0731b, #dc9322);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  height: 100%;
  width: 100%;

  &:hover {
    background-image: linear-gradient(to top, #dc9322, #d0731b);
    transition: .3s;
  }

  @include phones {
    flex-direction: row;
    justify-content: space-around;
  }
}

.add--icon {
  transform: rotate(45deg);
  height: 150px;
  width: 150px;
  background-color: transparent;
  border-radius: 50%;
  border: 2px solid #fff;
  background-image: svg-load("cross.svg", fill=#fff, width=100%, height=100%);
  background-size: 34px 34px;
  background-repeat: no-repeat;
  background-position: center;

  @include phones {
    height: 60px;
    width: 60px;
    background-size: 15px 15px;
  }
}

.add--text {
  margin-top: 30px;
  max-width: 100px;
  text-align: center;

  @include phones {
    margin-top: 0;
    max-width: none;
  }
}

.works__windows--pic-content {
  position: relative;
  width: 100%;
}

.works__windows--pic {
  width: 100%;
}

.works-windows__tags-list {
  display: flex;
  position: absolute;
  right: 8%;
  bottom: 8%;
}

.works-windows__tags-item {
  margin-left: 3%;
  
  background-color: #f4f4f4;
  border-radius: 30px;
}

.works-section__tags-text {
  font-size: 13px;
  font-weight: 600;
  padding: 9px 10px;
  letter-spacing: normal;
  text-align: left;
  color: rgba(40, 51, 64, 0.7);
}

.works__windows--control {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 600;
  padding: 14% 11%;
  height: 65%;

  @include tablets {
    padding: 12% 9%;
  }
}

.control__title {
  font-weight: bold;
}

.control__desc {
  color: rgba(65, 76, 99, 0.7);
}

.control__link {
  color: #383bcf;
}

.control__btns {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.control__btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  padding: 0;
  font-weight: 600;
  color: rgba(65, 76, 99, 0.5);
}

.control__btn-icon {
  margin-left: 10px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 17px;
  width: 17px;
}
</style>