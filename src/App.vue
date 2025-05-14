<script setup lang="ts">
import Layout from './Layout.vue';
</script>

<template>
  <Layout>  
    <router-view />
  </Layout>
</template>

<style scoped>
:deep(.el-divider--horizontal){
  margin:15px 0!important;
  border-top:0.1vw var(--el-border-color) var(--el-border-style);
}
</style>
