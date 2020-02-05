<template lang="pug">
  section.section.about
    .container.about__container
      .about__title-block
        .about__title
          h2 Блок «Обо мне»
        a.about__add-btn
          .add-btn__block.add-btn__block--about
            .add-btn__icon.add-btn__icon--about
          .add-btn__text
            span Добавить группу
      .about__windows 
        ul.about__windows-list
          li.about__windows-item
            .windows__header
              input.windows__header-name(placeholder="Название новой группы")
              .windows__header-btns
                button.skills-btn.pen
            .windows__skills
              ul.skills__list
                li.skills__item
                  .skills__name
                    input(type="text" class="skill-name__input" placeholder="Git")
                  .skill__percent
                    input(type="text" class="skill-percent__input" placeholder="100")
                  .skills__btns
                    button.skills-btn.pen
                    button.skills-btn.trash
                li.skills__item
                  .skills__name
                    input(type="text" class="skill-name__input" placeholder="Terminal")
                  .skill__percent
                    input(type="text" class="skill-percent__input" placeholder="100")
                  .skills__btns
                    button.skills-btn.pen
                    button.skills-btn.trash
                li.skills__item
                  .skills__name
                    input(type="text" class="skill-name__input" placeholder="Webpack")
                  .skill__percent
                    input(type="text" class="skill-percent__input" placeholder="100")
                  .skills__btns
                    button.skills-btn.pen
                    button.skills-btn.trash
                li.skills__item
                  .skills__name
                    input(type="text" class="skill-name__input" placeholder="Gulp")
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
          li.about__windows-item
            .windows__header
              input.windows__header-name(placeholder="Название новой группы")
              .windows__header-btns
                button.skills-btn.pen
            .windows__skills
              ul.skills__list
                li.skills__item
                  .skills__name
                    input(type="text" class="skill-name__input" placeholder="Git")
                  .skill__percent
                    input(type="text" class="skill-percent__input" placeholder="100")
                  .skills__btns
                    button.skills-btn.pen
                    button.skills-btn.trash
                li.skills__item
                  .skills__name
                    input(type="text" class="skill-name__input" placeholder="Terminal")
                  .skill__percent
                    input(type="text" class="skill-percent__input" placeholder="100")
                  .skills__btns
                    button.skills-btn.pen
                    button.skills-btn.trash
                li.skills__item
                  .skills__name
                    input(type="text" class="skill-name__input" placeholder="Webpack")
                  .skill__percent
                    input(type="text" class="skill-percent__input" placeholder="100")
                  .skills__btns
                    button.skills-btn.pen
                    button.skills-btn.trash
                li.skills__item
                  .skills__name
                    input(type="text" class="skill-name__input" placeholder="Gulp")
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
  name: 'about'
};
</script>

<style lang="postcss">

@import url("../../styles/mixins.pcss");

.about {
  padding: 60px 0;
  min-height: 525px;
}

.about__container {
  display: flex;
  flex-direction: column;
}

.about__title-block {
  display: flex;
  justify-content: space-between;
  max-width: 405px;

  @include phones {
    flex-direction: column;
  }
}

.about__title {
  font-size: 17px;
  font-weight: bold;
  text-align: left;
  color: #414c63;
}

.about__add-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 170px;

  @include phones {
    margin-top: 35px;
  }
}

.add-btn__text {
  font-size: 16px;
  font-weight: 600;
  color: #d0731b;
}

.add-btn__block--about {
  width: 21px;
  height: 21px;
}

.add-btn__block {
  border-radius: 50%;
  background-image: linear-gradient(to top, #d0731b, #dc9322);
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(45deg);

  &--window {
    width: 40px;
    height: 40px;
  }
}

.add-btn__icon {
  background-image: svg-load("cross.svg", fill=#fff, width=100%, height=100%);

  &--window {
    width: 15px;
    height: 15px;
  }

  &--about {
    width: 8px;
    height: 8px;
  }
}

.windows__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    border-bottom: 1px solid;
    bottom: -14px;
    opacity: 0.51;
  }

}

.windows__add-btn {
  width: 40px;
  height: 40px;
}

.about__windows {
  margin-top: 60px;
}

.about__windows-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.about__windows-item {
  width: 48.5%;
  max-width: 525px;
  min-height: 387px;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @include phones {
    width: 100%;
    padding: 20px;
  }
}

.windows__skills {
  height: 100%;
  padding: 30px 0;
}

.skills__item {
  display: flex;
  justify-content: space-between;
}

.skills__name {
  width: 65%;
  max-width: 273px;
}

.windows__add-skill {
  max-width: 372px;
  align-self: flex-end;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.new-skill__name {
  width: 58%;
  max-width: 218px;
}

.skill__percent {
  max-width: 74px;
  width: 21%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @include phones {
    width: 25%;
  }

  &:after {
    position: absolute;
    content: "%";
    left: 65%;
  }
}

input {
  border: none;
  background: none;
  outline: none;
  font-weight: bold;
  padding: 14px 0px;
  font-size: 18px;
  font-weight: 600;
  color: #414c63;
  width: 100%;

  &:focus {
    border-bottom: 1px solid #000;
    opacity: 0.51;
  }
}

.skill-name__input {
  padding: 16px 0px;


  &--new {
    padding: 16px 20px;
  }
}

.skill-percent__input {
  padding: 16px 11px;
}

.skill-name__input--new,
.skill-percent__input--new {
  border-bottom: 1px solid #000;
  font-size: 16px;
  font-weight: normal;
}

.skills__btns {
  width: 13%;
  display: flex;
  max-width: 50px;
  justify-content: space-between;
  align-items: center;

  @include phones {
    width: 15%;
  }
}

.skills-btn {
  background-color: transparent;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.51;
}

.pen {
  background-image: svg-load("pencil.svg", fill=#414c63, width=100%, height=100%);
  width: 14px;
  height: 14px;
}

.trash {
  background-image: svg-load("trash.svg", fill=#414c63, width=100%, height=100%);
  width: 12px;
  height: 15px;
}

.close {
  background-image: svg-load("cross.svg", fill=#c92e2e, width=100%, height=100%);
  width: 14px;
  height: 14px;
}


</style>