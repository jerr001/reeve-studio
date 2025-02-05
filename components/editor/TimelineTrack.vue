<template>
  <div 
    class="relative h-full"
    @click="handleClick"
  >
    <!-- Timeline Grid -->
    <div class="absolute inset-0">
      <div class="h-full grid" :style="gridStyle">
        <div
          v-for="n in gridMarkers"
          :key="n"
          class="border-l border-gray-700 relative"
        >
          <span class="absolute -top-6 left-1 text-xs text-gray-500">
            {{ formatTime((n - 1) * markerInterval) }}
          </span>
        </div>
      </div>
    </div>

    <!-- Playhead -->
    <div 
      class="absolute top-0 bottom-0 w-px bg-red-500"
      :style="{ left: `${(currentTime / duration) * 100}%` }"
    />

    <!-- Video Thumbnail Track -->
    <div 
      class="absolute h-20 top-8 left-0 right-0 bg-gray-600"
      :style="{ width: `${duration * 10}px` }"
    >
      <!-- Add video thumbnails here -->
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  duration: {
    type: Number,
    required: true
  },
  currentTime: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['seek'])

const markerInterval = 1 // 1 second intervals
const gridMarkers = computed(() => Math.ceil(props.duration / markerInterval))

const gridStyle = computed(() => ({
  gridTemplateColumns: `repeat(${gridMarkers.value}, ${markerInterval * 10}px)`
}))

const handleClick = (event) => {
  const rect = event.currentTarget.getBoundingClientRect()
  const clickPosition = event.clientX - rect.left
  const percentage = clickPosition / rect.width
  const time = percentage * props.duration
  emit('seek', time)
}

const formatTime = (time) => {
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}
</script>