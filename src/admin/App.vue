<template lang="pug">

  .maincontent
    appHeader
    about
    works
    reviews
    
</template>

<script>


export default {
  components: {
    appHeader: () => import("./components/header"),
    about: () => import("./components/about"),
    works: () => import("./components/works"),
    reviews: () => import("./components/reviews")
  }
}

</script>

<style lang="postcss">
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");

.container {
  max-width: 1080px;
}

</style>