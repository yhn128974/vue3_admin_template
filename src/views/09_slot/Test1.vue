<template>
  <div class="container">
    <div>
      <ul v-for="(item, index) in todos" :key="item.id">
        <li :style="{ color: item.done ? 'green' : 'red' }">
          that content is {{ item.title }},that you finished ? Oh
          {{ item.done }}
          <!-- 作用域插槽，可以将数据回传给父组件 -->
          <div>
            <slot :$row="item" :$index="index"> </slot>
          </div>
        </li>
        <hr />
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { defineProps } from "vue";
defineProps(["todos"]);
</script>

<style scoped>
.container {
  width: 100%;
  height: 400px;
  background-color: skyblue;
}
</style>
