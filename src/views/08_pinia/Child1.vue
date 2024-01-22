<template>
  <div class="container">
    <h2>
      this is child1 and infoCount is: {{ infoStore.count }} from infoStore
    </h2>
  </div>
</template>

<script setup lang="ts">
import UseInfoStore from "../../store/modules/info";
// 执行UseInfoStore函数
let infoStore = UseInfoStore();

// console.log(infoStore);
</script>

<style scoped>
.container {
  width: 200px;
  height: 200px;
  background: rgb(236, 214, 73);
}
</style>
