<template lang="pug">
  .login
    .login__content
      form(@submit.prevent="login").login__form
        .login__form-title Авторизация
        .login__row
          app-input(
            title="Логин"
            icon="user"
            v-model="user.name"
          )
        .login__row
          app-input(
            title="Пароль"
            icon="key"
            type="password"
            v-model="user.password"
          )
        .login__btn
          button(
            type="submit"
          ).btn-aut Отправить
</template>

<script>
import $axios from "../../requests";
import { mapActions } from 'vuex';

export default {
  components: {
    appInput: () => import("../input")
  },
  data() {
    return {
      user: {
        name: "plotnikovv-0220",
        password: "qwerty"
      }
    };
  },
  methods: {
    ...mapActions('tooltipe', ['showTooltipe']),
    async login() {
      try {
        const response = await $axios.post("/login",  this.user); 
        const token = response.data.token;
        localStorage.setItem("token", token);
        $axios.defaults.headers["Authorization"] = `Bearer ${token}`;
        this.$router.replace("/");  
      } catch(error) {
          this.showTooltipe({
            active: true,
            message: 'Неверный логин или пароль'
          })
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";
.login {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("~images/content/reviews-bg.png") center center / cover no-repeat;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.5;
    background: $text-color;
  }
}
.login__form-title {
  font-size: 36px;
  text-align: center;
  font-weight: 600;
}
.login__content {
  position: relative;
  @include phones {
    height: 100%;
    width: 100%;
  }
}
.login__row {
  margin-bottom: 35px;
}
.login__btn {
  display: flex;
  width: 100%;
  padding: 0 8%;
  justify-content: center;
}
.btn-aut {
  padding: 35px 120px;
  background-image: linear-gradient(to top, #d0731b, #dc9322);
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;

  &:hover,
  &:focus {
    background-image: linear-gradient(to top, #dc9322, #d0731b);
    transition: .2s;
  }

  &:focus {
    box-shadow: 1px 1px 10px 3px #d0731b;
  }
}
.login__form {
  width: 563px;
  padding: 50px 77px 60px;
  background: #fff;
  @include phones {
    width: 100%;
    padding-right: 7%;
    padding-left: 7%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>