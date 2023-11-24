<script setup lang="ts">
for (let i = 0; i < 10; i++) {
  console.log('test husky...')
}
</script>

<template>
  <div class="box">
    <h1>This is App's root component.</h1>
  </div>
</template>

<style scoped lang="scss">
.box {
  widows: 160px;
  height: 80px;
  background: red;
  h1 {
    color: white;
  }
}
</style>
