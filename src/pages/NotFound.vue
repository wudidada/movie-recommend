<template>
  <div class="container">
    <img class="ops" src="../assets/images/404.svg" />
    <br />
    <h3></h3>
    <br />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
body {
  background: #fff;
  background-color: #000;
  padding: 0;
  margin: 0;
  font-family: Helvetica, Arial, sans-serif;
}

.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  margin: 0 auto;
  text-align: center;
  padding-top: 50px;
}

h3 {
  font-size: 16px;
  color: #3498db;
  font-weight: bold;
  text-align: center;
  line-height: 130%;
}
.ops {
  width: 600px;
}

.buton {
  background: #3498db;
  padding: 10px 20px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  border-radius: 3px;
  text-decoration: none;
}

a:hover {
  color: #ff0;
}

span {
  font-size: 14px;
  color: #fff;
  font-weight: normal;
  text-align: center;
}

span a {
  color: #ff0;
  text-decoration: none;
}

span a:hover {
  color: #f00;
}

@media screen and (max-width: 500px) {
  img {
    width: 70%;
  }
  .container {
    padding: 70px 10px 10px 10px;
  }
  h3 {
    font-size: 14px;
  }
}
</style>