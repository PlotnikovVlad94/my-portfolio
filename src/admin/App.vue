<template lang="pug">

  .maincontent
    appHeader
    router-view
    
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  components: {
    appHeader: () => import("./components/header")
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