<template lang="pug">
.inner-tooltip(
  :class="{active : toolData.active}"
)
  .inner-tooltip-container
    .tooltip__text {{toolData.message}}
    button.tooltip__close(@click="closeTooltipe")
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  methods:{
    ...mapActions('tooltipe',['hideTooltipe']),
    closeTooltipe(){
      this.hideTooltipe();
    }
  },
  computed:{
    ...mapState('tooltipe', {
      toolData : state => state.toolData
    })
  },
  created() {
    console.log(this.toolData)
  }
}
</script>

<style lang="postcss">
.inner-tooltip {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  display: none;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(255,255,255,.8);
  }
  &.active {
    display: flex;
  }
}

.inner-tooltip-container {
  padding: 22px;
  background: #b13333;
  display: flex;
  min-width: 400px;
  justify-content: space-between;
  color: #fff;
  z-index: 100;
}
.tooltip__close {
  width: 20px;
  height: 20px;
  background: svg-load('cross.svg', fill=#fff) center center no-repeat;
  cursor: pointer;
  margin-left: 20px;
}
.error {
  background: #cd1515;
  color: #fff;
  padding: 12px 20px;
  font-size: 14px;
  white-space: nowrap;
  position: absolute;
  bottom: 0;
  left: 0;
  &:before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top: 0;
    border-bottom-color: #cd1515;
    border-bottom-width: 7px;
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>