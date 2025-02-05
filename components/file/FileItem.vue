<template>
  <div class="bg-gray-800 p-2 mb-2 rounded hover:bg-gray-700">
    {{ file.name }}
  </div>
</template>

<script setup>
defineProps(['file']);
</script>
