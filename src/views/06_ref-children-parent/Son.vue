<template>
  <div class="container">
    <h3>我是子组件 my cash number was {{ money }}</h3>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
let money = ref(666);
// 组件内部的数据默认对外关闭
// 如果想让外部访问需要通过defineExpose方法对外暴露
let fly = () => {
  console.log("I can fly from my stair");
};
defineExpose({
  money,
  fly
});
</script>

<style scoped>
.container {
  width: 300px;
  height: 200px;
  background-color: cyan;
}
</style>
