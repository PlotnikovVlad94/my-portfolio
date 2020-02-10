<template lang="pug">
  li.about__windows-item
    .windows__header
      input.windows__header-name(placeholder="Название новой группы")
      .windows__header-btns
        button.skills-btn.pen
    .windows__skills
      ul.skills__list
        li.skills__item
          .skills__name
            input(type="text" class="skill-name__input" placeholder="Git" v-model="title")
          .skill__percent
            input(type="text" class="skill-percent__input" placeholder="100")
          .skills__btns
            button.skills-btn.pen
            button.skills-btn.trash
               
    .windows__add-skill.add-skill
      .new-skill__name
        input(type="text" class="skill-name__input skill-name__input--new" placeholder="Новый навык")
      .skill__percent.new-skill__percent
        input(type="text" class="skill-percent__input skill-percent__input--new" placeholder="100")
      a.windows__add-btn
        .add-btn__block.add-btn__block--window
          .add-btn__icon.add-btn__icon--window   
  
</template>

<script>

export default {
  name: 'skillsGroup'
};

</script>

<style lang="postcss" scoped>
.input__error-tooltip {
  display: none;
  position: absolute;
  top: 100%;
  left: 30%;
  transform: translateX(-50%);
  z-index: 100;
}
.input {
  display: block;
  position: relative;
  &.no-side-paddings {
    .input__elem {
      padding-right: 0;
      padding-left: 0;
    }
  }
  &_labeled {
    .input__elem {
      padding: 15px 0 18px;
    }
  }
  &_iconed {
    .input__title {
      margin-left: 45px;
      margin-bottom: 13px;
    }
    .input__elem {
      padding-left: 45px;
      background: left center / auto 29px no-repeat;
      font-size: 18px;
      font-weight: bold;
      padding-top: 17px;
      padding-bottom: 17px;
    }
  }
  &_icon {
    @each $icon in (user, key) {
      &-$(icon) {
        .input__elem {
          background-image: svg-load("$(icon).svg", fill=#cfd2d7);
        }
      }
    }
  }
  &.error {
    @each $icon in (user, key) {
      &.input_icon-$(icon) {
        .input__elem {
          background-image: svg-load("$(icon).svg", fill=#cd1515;);
        }
      }
    }
  }
}
.error {
  .field__elem {
    border-color: #cd1515;
  }
  .input__error-tooltip {
    display: block;
  }
}
.textarea {
  position: relative;
}
.input__title {
  color: rgba(65, 76, 99, 0.5);
  font-weight: 600;
  opacity: 0.5;
}
.textarea__elem {
  height: 150px;
  padding: 20px;
  border: 1px solid rgba(#fff, 0.2);
  resize: none;
  font-weight: 600;
  margin-top: 10px;
  width: 100%;
}
.input__elem {
  width: 100%;
  padding: 10px 8%;
  border: none;
  border-bottom: 1px solid #1f232d;
  &::placeholder {
    color: rgba(55, 62, 66, 0.25);
  }
}
</style>