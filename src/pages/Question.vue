<template>
  <QuestionBox :question="question" :selectOption="selectOption"></QuestionBox>
</template>

<script>
import { getQuestion } from "../api";
import QuestionBox from "../components/QuestionBox";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      question: {},
      index: 1,
      field: ""
    };
  },
  components: {
    QuestionBox
  },
  methods: {
    ...mapMutations(["addAnswer"]),
    loadQuestion() {
      getQuestion(this.index).then(response => {
        console.log(response);
        console.log(response.desc);
        if (response.desc) {
          this.$set(this.question, "question", response.desc);
          this.$set(this.question, "options", response.options);
          this.field = response.field;
          this.index += 1;
        } else {
          this.$router.push("/recommend");
        }
      });
    },
    selectOption(option) {
      this.addAnswer({ [this.field]: option.value });
      this.loadQuestion();
    }
  },
  created() {
    console.log("created");
    this.loadQuestion();
  }
};
</script>

<style>
</style>