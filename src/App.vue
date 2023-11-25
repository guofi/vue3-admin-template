<template>
  <div>
    <el-button type="primary" size="default" :icon="Plus">primary button</el-button>
    <el-button type="success" size="small" :icon="Edit">Edit button</el-button>
    <el-button type="danger" size="default" :icon="Delete">Delete button</el-button>
    <el-pagination
      :page-sizes="[100, 200, 300, 400]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    />
  </div>
</template>

<script setup lang="ts">
import {Plus,Edit,Delete} from '@element-plus/icons-vue'
</script>





<style scoped lang="scss"></style>
