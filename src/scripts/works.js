import Vue from "vue";

const preview = {
  template: "#slider-preview",
  props: ["works", "currentWork"]
};

const btn = {
  template: "#slider-btn",
};

const display = {
  template: "#slider-display",
  components: {
    preview, btn
  },
  props: ["works", "currentWork", "currentIndex"]
};

const tags = {
  template: "#slider-tags",
  props: ["tags"]
};

const info = {
  template: "#slider-info",
  components: {
    tags
  },
  props: ["currentWork"],
  computed: {
    tagsArray() {
      return this.currentWork.skills.split(', ');
    }
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
      currentIndex: 0
    }
  },
  computed: {
    currentWork() {
      return this.works[this.currentIndex]
    }
  },
  methods: {
    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const requiredPic = require(`../images/content/slider/${item.photo}`);
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
    }
  },
  created() {
    const data = require("../data/works.json");
    this.works = this.makeArrWithRequiredImages(data);
  }
});


