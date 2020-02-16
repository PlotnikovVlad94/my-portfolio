<template lang="pug">

  .maincontent
    appHeader
    router-view
    tooltipe
    
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  components: {
    appHeader: () => import("./components/header"),
    tooltipe: () => import("./components/tooltipe")
  },
  computed: {
    ...mapGetters("user", ["userIsLogged"]),
    ...mapState("tooltipe", {
      status: state => state.toolData.active
    }),
 },
  methods:{
      ...mapActions('tooltipe',['hideTooltipe']),
    },
  watch:{
    status:function(){
      if(this.status){
        let timeout;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          this.hideTooltipe();
        }, 2000);
      }
    }
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

.section {
  padding: 60px 0;
}

.section:before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -100;
  content: "";
  background-image: linear-gradient(0deg,rgba(255,255,255,.9),rgba(255,255,255,.9)), url('../images/content/welcome-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

h2 {
  font-size: 21px;
  font-weight: bold;
  color: #414c63;
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
  border-bottom: 1px solid #000;

  &[readonly] {
    border: none;
  }
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
  height: 12px;
  opacity: 1;
}
.okay {
  background-image: svg-load("tick.svg", fill=#00d70a, width=100%, height=100%);
  width: 15px;
  height: 12px;
  opacity: 1;
}

</style>