import Vue from "vue";
import axios from 'axios';

const preview = {
  template: "#slider-preview",
  props: {
    works: Array,
    currentWork: Object
  },

};

const btn = {
  template: "#slider-btn",
};

const display = {
  template: "#slider-display",
  components: {
    preview, btn
  },
  props: {
    works: Array,
    currentWork: Object,
    currentIndex: Number
  }
};

const tags = {
  template: "#slider-tags",
  props: {
    currentWork: Object
  },
  computed : {
    tagsArray () {
      return this.currentWork.techs.split(',');
    }
  }
};

const info = {
  template: "#slider-info",
  components: {
    tags
  },
  props: {
    currentWork: Object
  }
};

new Vue({
  el: "#works-component",
  template: "#works-container",
  components: {
    display, info
  },
  data() {
    return {
      works: [],
      baseURL: "https://webdev-api.loftschool.com",
      userID: 285,
      currentIndex: 0
    }
  },
  computed: {
    currentWork() {
      return this.works[this.currentIndex]
    }
  },
  watch: {
    currentIndex(value) {
      if(value === this.works.length) {
        this.currentIndex = 0;
      }

      if(value === -1) {
        this.currentIndex = this.works.length - 1;
      }
    }
  },
  methods: {
    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const requiredPic = `${this.baseURL}/${item.photo}`;
        item.photo = requiredPic;

        return item;
      })
    },
    handleSlide(direction) {
      switch(direction) {
        case "next":
          this.currentIndex + 1 < this.works.length ? this.currentIndex++ : this.currentIndex
          break;
        case "prev":
          this.currentIndex > 0 ? this.currentIndex-- : this.currentIndex  
          break;
      }
    },
    clickAtWork(workIndex) {
      this.currentIndex = workIndex;
    },
    async getWorks() {
      await axios.get(`${this.baseURL}/works/${this.userID}`)
        .then(response => this.works = this.makeArrWithRequiredImages(response.data))
    }
    
  },
  created() {
    this.getWorks();
  }
});


