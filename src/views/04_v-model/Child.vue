<template>
  <div class="child">
    <h3>钱数：{{ props.modelValue }}</h3>
    <!-- 使用update:函数名 处理一个使用V-model绑定过的数据 -->
    <button @click="$emits('update:modelValue', props.modelValue + 1)">
      父子组件数据同步
    </button>
  </div>
</template>

<script setup lang="ts">
let props = defineProps(["modelValue"]);

let $emits = defineEmits(["update:modelValue"]);
</script>

<style scoped>
.child {
  width: 600px;
  height: 300px;
  background: skyblue;
}
</style>
