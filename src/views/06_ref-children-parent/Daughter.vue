<template>
  <div class="container">
    <h1>
      I am cao jie the daughter of chao cao. my money number is {{ money }} now,
    </h1>
    <button @click="getmoney($parent)">give me money</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
let money = ref(2000);

const getmoney = ($parent) => {
  money.value += 100;
  $parent.money -= 100;
};
</script>

<style scoped>
.container {
  width: 300px;
  height: 300px;
  background-color: hotpink;
}
</style>
