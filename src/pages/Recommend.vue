<template>
  <Hero :item="featured" :getData="getData" :loaded="loaded" />
</template>

<script>
import { getRecommend } from "../api";
import Hero from "../components/Hero";
import { mapState } from "vuex";

export default {
  data() {
    return {
      featured: {},
      loaded: true,
      index: 1
    };
  },
  components: {
    Hero
  },

  computed: {
    ...mapState(["answers"]),
    trendingTvUrl() {
      return { name: "tv-category-name", params: { name: "trending" } };
    }
  },

  methods: {
    getData() {
      this.loaded = false;
      getRecommend({ ...this.answers, index: this.index })
        .then(data => {
          console.log(data);
          this.featured = data;
          this.loaded = true;
          this.index++;
        })
        .catch(err => {
          if (err.response && err.response.status == 500) {
            this.$router.push("/finished");
          }
        });
    }
  },

  mounted() {
    this.getData();
  }
};
</script>
