<template lang="pug">
  header.header
    .main-header
      .container
        .header__info
          .user
            .user__pic
              img(src="../../images/content/user.jpg").user__pic-avatar
            .user__name 
              span Плотников Владислав           
          .header__title Панель администрирования
        a.header__logout Выйти
    .secondary-header
      .container
        nav.nav
          ul.header__menu-list
            li.header__menu-item(v-for="tab in tabs")
              router-link(
                tag="a"
                :data-text="tab.title" 
                :to="tab.href"
                exact-active-class="active"
              ).header__menu-link 
            
</template>

<script>
export default {
  data () {
    return {
      tabs: [
        {title: "Обо мне", href: "/"},
        {title: "Работы", href: "/works"},
        {title: "Отзывы", href: "/reviews"}
      ]
    };
  }
};
</script>

<style lang="postcss">

@import url("../../styles/mixins.pcss");

.header {
  color: #fff;
}

.main-header,
.secondary-header {
  height: 50%;
  min-height: 80px;
}

.main-header {
  padding: 18px 0;
  background-image: linear-gradient(to top, #3e3e59, #454573);
}

.secondary-header {
  background-color: #fff;
  font-size: 16px;
  color: #414c63;
  display: flex;
  align-items: center;
}


.header__info {
  display: flex;
  align-items: center;
}

.header__title {
  font-size: 14px;
  opacity: 0.5;
  
  @include phones {
    display: none;
  }
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user {
  display: flex;
  align-items: center;
  margin-right: 28px;
}

.user__name {
  font-size: 18px;
  font-weight: 600;
}

.user__pic {
  margin-right: 20px;
  width: 44px;
  height: 44px;
  overflow: hidden;
  flex-shrink: 0;
  border-radius: 50%;
}

.header__logout {
  opacity: 0.7;
  font-size: 16px;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
  @include phones {
    display: none;
  }
}

.nav {
  width: 100%;
  max-width: 300px;
}

.header__menu-list {
  display: flex;
  justify-content: space-between;
  height: 80px;
}

.header__menu-item {
  margin-right: auto;
  width: 33.3%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:last-child {
    margin-right: 0;
  }
}

.header__menu-link {
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  border-bottom: 3px solid transparent;
  text-decoration: none;
  &:before {
    content: attr(data-text);
  }

  &:hover,
  &.active {
    color: #d0731b;
    font-weight: 600;
    border-color: currentColor;
  }
}

</style>
