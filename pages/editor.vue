<template>
  <div class="flex flex-col h-screen bg-black">
    <!-- Top Bar -->
    <TopBar />

    <!-- Main Content -->
    <div class="flex flex-1 overflow-hidden">
      <!-- Editor Area -->
      <div class="flex flex-col flex-1">
        <!-- Video Preview -->
        <div class="flex-1 bg-black">
          <VideoPreview />
        </div>

        <!-- Timeline -->
        <div class="h-64">
          <Timeline />
        </div>
      </div>

      <!-- Chat Panel -->
      <ChatPanel />
    </div>
  </div>
</template>

<script setup>
import TopBar from '~/components/editor/TopBar.vue';
import VideoPreview from '~/components/editor/VideoPreview.vue';
import Timeline from '~/components/editor/Timeline.vue';
import ChatPanel from '~/components/chat/ChatPanel.vue';
</script>
