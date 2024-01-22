<template>
  <div class="container">
    <div>
      this is child and infoCount is: {{ infoStore.count }} from infoStore
    </div>
    <hr />
    <div>
      arrCount is
      {{ infoStore.total }}
    </div>
    <el-button @click="handle_change_count"
      >click to change infoCount</el-button
    >
  </div>
</template>

<script setup lang="ts">
import UseInfoStore from "../../store/modules/info";
// 执行UseInfoStore函数
let infoStore = UseInfoStore();

// console.log(infoStore);
const handle_change_count = () => {
  // 修改数据的方法
  // infoStore.count++;

  // infoStore.$patch({
  //   count: 250,
  // });
  infoStore.changeCount(66, 77);
};
</script>

<style scoped>
.container {
  width: 200px;
  height: 200px; 
  background: yellowgreen;
  flex-direction: column;
}
</style>
