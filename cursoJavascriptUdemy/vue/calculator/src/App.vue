<template>
  <div id="app">
      <h1>Calculadora</h1>
      <CalculatorContent/>
  </div>
</template>

<script>
import CalculatorContent from"./main/CalculatorContent.vue";

export default {
  components:{ CalculatorContent}

}
</script>

<style>

* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

body {
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: rgb(255, 255, 255);
  background: linear-gradient(to right, rgb(83,105,118), rgb(41,46,73));
}

</style>
