<template>
  <div class="container">
    <div class="questionOptions">
      <div class="question">{{ question.question }}?</div>
      <div class="options">
        <div
          class="option"
          v-for="option in question.options"
          :key="option.value"
          @click="selectOption(option)"
        >
          {{ option.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: Object,
    selectOption: Function
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/images/bg.jpg");
  background-size: cover;
  &::before {
    width: 100%;
    height: 100%;
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    // z-index: -1;
    background-color: rgba(0, 0, 0, 0.8);
  }
  .questionOptions {
    position: absolute;
    padding: 80px 60px;
    background-color: rgba(7, 7, 7, 0.8);
    border-radius: 10px;
    color: #fff;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.8);
    .question {
      font-size: 36px;
    }
    .options {
      display: flex;
      .option {
        padding: 5px 15px;
        margin-right: 15px;
        margin-top: 40px;
        border: 1px solid white;
        cursor: pointer;
        border-radius: 10%;
        &:hover {
          background-color: rgba(255, 255, 255, 0.6);
          transition: all 0.6s;
        }
      }
    }
  }
}
</style>