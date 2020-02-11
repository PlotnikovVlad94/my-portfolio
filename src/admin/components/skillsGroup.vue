<template lang="pug">
  .windows__content
    .windows__skills
      ul.skills__list
        skills-item(
          v-for="skill in category.skills"
          :key="skill.id"
          :skill="skill"
        )
    form(
      @submit.prevent="addNewSkill"
      
    ).windows__add-skill.add-skill
      .new-skill__name
        input(type="text" class="skill-name__input skill-name__input--new" placeholder="Новый навык" v-model="skill.title")
      .skill__percent.new-skill__percent
        input(type="text" class="skill-percent__input skill-percent__input--new" placeholder="100" v-model="skill.percent")
      button(
        type="submit"
      ).windows__add-btn 
  
</template>

<script>
import { mapActions } from "vuex";
export default {
  components: {
    skillItem: () => import("./skillItem")
  },
  data() {
    return {
      loading: false,
      file: {},
      skill: {
        title: "",
        percent: 0,
        category: this.category.id
      }
    };
  },
  props: {
    category: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  methods: {
    handleFile(e) {
      const file = e.target.files[0];
      this.file = file;
      const formData = new FormData();
      formData.append("photo", this.file);
    },
    ...mapActions("skills", ["addSkill"]),
    async addNewSkill() {
      this.loading = true;
      try {
        await this.addSkill(this.skill);
        this.skill.title = "";
        this.skill.percent = "";
      } catch (error) {
        // handling error
      } finally {
        this.loading = false;
      }
    }
  }
};

</script>

<style lang="postcss" scoped>

.windows__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}


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

.windows__add-btn {
  color: #d0731b;
  background-color: transparent;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  &:before {
    content: "+";
    display: block;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-image: linear-gradient(to top, #d0731b, #dc9322);
    color: #fff;

  }
}
</style>