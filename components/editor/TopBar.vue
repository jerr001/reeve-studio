<script setup>
const emit = defineEmits(['import', 'export'])

const handleImport = () => {
  emit('import')
}

const handleExport = () => {
  emit('export')
}
</script>

<template>
  <div class="fixed top-0 left-0 right-0 h-12 border-b border-gray-700 flex items-center justify-between px-4 bg-[#09090B] z-10">
  <!-- <div class="fixed w-[1440px] h-[1024px] bg-[#09090B] flex items-center justify-between px-6"> -->
    <!-- Left section -->
    <div class="flex items-center gap-4">
      <!-- Project name/title -->
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-blue-500"></span>
        <span class="text-white text-sm font-medium">Project Name</span>
      </div>
      
      <!-- Version/status indicator -->
      <span class="text-gray-400 text-xs">100%</span>
    </div>

    

    <!-- Right section -->
    <div class="flex items-center gap-4">
      <!-- Import/Export buttons -->
      <button 
        @click="handleImport"
        class="px-4 py-2 text-sm text-white bg-gray-800 rounded-md hover:bg-gray-700"
      >
        Import
      </button>
      <button 
        @click="handleExport"
        class="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700"
      >
        Export
      </button>
    </div>
  </div>
</template>