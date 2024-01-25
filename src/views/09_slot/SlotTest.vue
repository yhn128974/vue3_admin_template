<template>
  <div>
    <h1>there is slot test plain</h1>
    <Test>
      <div>
        <p>this text well be shown in the default slot</p>
      </div>
      <template v-slot:demo1>
        <p>this text well be shown in the demo1 slot</p>
      </template>
      <!--v-slot==#  -->
      <template #demo2>
        <p>this text well be shown in the demo2 slot</p>
      </template>
    </Test>
    <!-- 以下为作用域插槽 -->
    <Test1 :todos="todos">

      <template v-slot="{$row,$index}"> 
        <span :style="{color:$row.done?'green':'red'}">{{ $row.title }}--{{ $index }}</span>
      </template>

    </Test1>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import Test from "./Test.vue";
import Test1 from "./Test1.vue";

let todos = ref([
  {
    id: 1,
    title: "have a lunch",
    done: true,
  },
  {
    id: 2,
    title: "go to sleeping",
    done: false,
  },
  {
    id: 3,
    title: " strike children",
    done: false,
  },
]);
</script>

<style scoped></style>
