<template>
  <div>
    <h3 class="text-lg font-semibold mb-2">Files</h3>
    <FileItem v-for="file in files" :key="file.id" :file="file" />
  </div>
</template>

<script setup>
import FileItem from './FileItem.vue';

const files = [
  { id: 1, name: 'File1.mp4' },
  { id: 2, name: 'File2.mp4' },
];
</script>
