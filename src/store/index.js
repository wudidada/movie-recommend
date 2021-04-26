import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    answers: {},
  },
  mutations: {
    addAnswer(state, answer) {
      console.log(answer);
      state.answers = { ...state.answers, ...answer };
      console.log(state);
    },
  },
});
