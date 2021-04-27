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
          <a :href="item.homepage">
            {{ item.title }}
          </a>
        </h1>
        <div class="meta">
          <div class="info">
            <!---->
            <span>{{ releaseYear }}</span>
            <span style="margin-left: 16px">评分:{{ item.vote_average }}</span>
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
        <button
          type="button"
          class="button button--icon trailer_3TaRf"
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
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    getData: Function,
    loaded: Boolean
  },
  computed: {
    releaseYear() {
      console.log(this.item);
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
