<template>
  <div class="video-container">
    <!-- Video Element -->
    <video
      ref="video"
      class="video-player"
      :src="videoSrc"
      controls
      v-if="videoSrc"
      @timeupdate="onTimeUpdate"
    ></video>
    <div v-else class="placeholder">No video uploaded</div>

    <!-- Video Controls -->
    <div class="video-controls">
      <button @click="previous" class="control-btn">Previous</button>
      <button @click="rewind" class="control-btn">Rewind</button>
      <button @click="playPause" class="control-btn">
        {{ isPlaying ? "Pause" : "Play" }}
      </button>
      <button @click="forward" class="control-btn">Forward</button>
      <button @click="next" class="control-btn">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoPreview",
  data() {
    return {
      videoSrc: "", // Placeholder for uploaded video source
      isPlaying: false,
    };
  },
  methods: {
    playPause() {
      const video = this.$refs.video;
      if (video.paused) {
        video.play();
        this.isPlaying = true;
      } else {
        video.pause();
        this.isPlaying = false;
      }
    },
    rewind() {
      const video = this.$refs.video;
      video.currentTime = Math.max(video.currentTime - 5, 0);
    },
    forward() {
      const video = this.$refs.video;
      video.currentTime = Math.min(
        video.currentTime + 5,
        video.duration || video.currentTime
      );
    },
    previous() {
      // Logic for switching to the previous video can be implemented here
      alert("Previous video action not implemented.");
    },
    next() {
      // Logic for switching to the next video can be implemented here
      alert("Next video action not implemented.");
    },
    onTimeUpdate(event) {
      // Handle video time updates (e.g., for a custom timeline)
    },
  },
};
</script>

<style scoped>
.video-container {
  width: 1100px;
  height: 662px;
  padding: 9px 0px 9px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  background: #000;
  opacity: 0;
}

.video-player {
  width: 100%;
  height: calc(100% - 50px); /* Leave space for controls */
  object-fit: cover;
}

.placeholder {
  width: 100%;
  height: calc(100% - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 18px;
  background-color: #444;
}

.video-controls {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px 0;
}

.control-btn {
  padding: 10px 20px;
  background: #555;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.control-btn:hover {
  background: #777;
}
</style>