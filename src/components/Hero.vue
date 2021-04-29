<template>
  <div class="hero">
    <div class="pane">
      <div
        :class="[
          'content',
          { animate__animated: loaded },
          { animate__fadeInUp: loaded },
        ]"
      >
        <h1 class="name">
          {{ item.title }}
        </h1>
        <div class="meta">
          <div class="info">
            <!---->
            <span>{{ releaseYear }}</span>
            <star-rating
              :rating="item.vote_average / 2"
              read-only
              :star-size="14"
              :show-rating="false"
              :increment="0.5"
              style="display: inline-block; margin-left: 12px"
              :title="item.vote_average"
            ></star-rating>
            <span style="margin-left: 12px">{{ item.runtime }}分钟</span>
            <span style="margin-left: 12px">{{ geners }}</span>
          </div>
        </div>
        <div class="desc">
          {{ item.overview.trim() }}
        </div>
        <!-- <button type="button" class="button button--icon trailer_3TaRf">
          <span class="icon"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="#fff"
            >
              <path d="M3 22v-20l18 10-18 10z"></path></svg
          ></span>
          <span class="txt">Watch Trailer</span>
        </button> -->
        <a :href="buttonLink" target="_blank">
          <button type="button" class="button" @click="getData">
            <span class="txt">{{ buttonText }}</span>
          </button>
        </a>
        <button
          type="button"
          class="button"
          @click="getData"
          style="margin-left: 12px"
        >
          <span class="txt">下一部</span>
        </button>
      </div>
    </div>
    <div class="backdrop">
      <div>
        <img
          :alt="item.title"
          :class="[
            { animate__animated: loaded },
            { animate__fadeIn: loaded },
            { animate__slow: loaded },
            'image',
          ]"
          :src="backdrop"
        />
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    getData: Function,
    loaded: Boolean
  },
  components: {
    StarRating
  },

  computed: {
    buttonLink() {
      if (this.item.homepage) {
        return this.item.homepage;
      } else {
        return `https://www.imdb.com/title/${this.item.imdb_id}/`;
      }
    },
    buttonText() {
      if (this.item.homepage) {
        return "官网";
      } else {
        return "IMDB";
      }
    },
    geners() {
      const gens = [];
      for (const g of this.item.genres) {
        gens.push(g.name);
      }
      return gens.join("/");
    },
    releaseYear() {
      return this.item.release_date.slice(0, 4);
    },
    type() {
      return this.item.title ? "movie" : "tv";
    },
    backdrop() {
      return this.loaded
        ? "https://image.tmdb.org/t/p/original/" + this.item.backdrop_path
        : "";
    }
  }
};
</script>

<style lang="less" scoped>
@import "./Hero.less";
</style>
