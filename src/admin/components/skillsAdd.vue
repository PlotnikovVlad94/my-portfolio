<template lang="pug">

</template>

<script>
import { mapActions } from 'vuex';
export default {
  data(){
    return {
      skillTitle: ""
    };  
  },
  methods: {
    ...mapActions("categories", ["addNewSkillGroup"]),
    async addSkillGroup(){
      try {
        await this.addNewSkillGroup(this.skillTitle);
        this.skillTitle = "";     
      } catch (error) {
        alert(error.message);
      }
    }
  }
}
</script>

<style lang="postcss">

</style>