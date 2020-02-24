import Vue from "vue";
import Flickity from 'vue-flickity';
import axios from 'axios';
 
new Vue({
  el: "#reviews-component",
  template: "#reviews-container",
  components: {
    Flickity
  },
  props: {
    review: Object
  },
  
  data() {
    return {
      reviews: [],
      baseURL: "https://webdev-api.loftschool.com",
      userID: 285,
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
        groupCells: '100%',
        cellAlign: 'left'
        
        // any options from Flickity can be used
      }
    }
  },

  methods: {
    makeArrayWithImages(data) {
      return data.map(elem => {
        const requiredPic = `${this.baseURL}/${elem.photo}`;
        elem.photo = requiredPic;
        return elem;
      });
    },

    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    },
    async getReviews() {
      await axios.get(`${this.baseURL}/reviews/${this.userID}`)
        .then(response => this.reviews = this.makeArrayWithImages(response.data))
      },
  },

  created() {
    this.getReviews();
  },
});