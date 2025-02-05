<template>
  <div class="min-h-screen bg-black text-white">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
/* Reset and base styles */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: #000000;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

/* Remove default outlines and add custom focus styles */
:focus {
  outline: none;
}

button:focus {
  /* Fixed syntax for ring property */
  @apply ring-2 ring-blue-500;
  /* Or you can use:
  box-shadow: 0 0 0 2px rgb(59, 130, 246); */
}

/* Custom scrollbar for timeline */
.timeline-scroll::-webkit-scrollbar {
  height: 6px;
}

.timeline-scroll::-webkit-scrollbar-track {
  background: #1a1a1a;
}

.timeline-scroll::-webkit-scrollbar-thumb {
  background: #333;
  border-radius: 3px;
}

/* Hide default scrollbar */
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

/* Utility classes */
.aspect-video {
  aspect-ratio: 16/9;
}
</style>