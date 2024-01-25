<template>
  <div class="container">
    <hr />
    <slot></slot>
    <hr />
    <slot name="demo1"></slot>
    <hr />
    <slot name="demo2"></slot>
    <hr />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  width: 100%;
  height: 400px;
  background-color: orange;
}
</style>
