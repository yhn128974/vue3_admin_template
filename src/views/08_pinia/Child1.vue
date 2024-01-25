<template>
  <div class="container">
    <div v-for="(item, index) in doStore.todos" :key="item.id">
      <hr />
      <div>the action is {{ item.title }}</div>
    </div>
    <hr />
    <el-button @click="updateTodo">click this to update todos</el-button>
    <hr />
    <div>{{ doStore.total }}</div>
  </div>
</template>

<script setup lang="ts">
import useTodoStore from "../../store/modules/todo";
// 执行UseInfoStore函数
let doStore = useTodoStore();

// console.log(doStore);

const updateTodo = () => { 
  doStore.updateTodo();
};
</script>

<style scoped>
.container {
  height: 200px;
  background: rgb(236, 214, 73);
  flex-direction: column;
}
</style>
