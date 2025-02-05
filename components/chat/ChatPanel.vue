<template>
  <div class="w-80 bg-black border-l border-gray-800">
    <div class="p-4 border-b border-gray-800">
      <h2 class="text-lg font-semibold">Chat</h2>
    </div>
    <div class="flex-grow overflow-y-auto p-4">
      <div class="space-y-4">
        <div class="flex flex-col">
          <span class="text-sm text-gray-400">Casual_Mike</span>
          <div class="bg-gray-900 rounded p-2 mt-1">
            Hey Beeve, can you help me edit a video? I have a 5-minute clip, and I want to cut it down to 3 minutes.
          </div>
        </div>
        <div class="flex flex-col">
          <span class="text-sm text-gray-400">Assistant</span>
          <div class="bg-gray-900 rounded p-2 mt-1">
            Got it! Would you like me to trim the video evenly or remove specific parts?
          </div>
        </div>
      </div>
    </div>
    <div class="p-4 border-t border-gray-800">
      <div class="flex">
        <input
          type="text"
          placeholder="Type your message here"
          class="flex-grow px-3 py-2 bg-gray-900 rounded-l focus:outline-none"
        />
        <button class="px-4 py-2 bg-gray-800 rounded-r">
          Send
        </button>
      </div>
    </div>
  </div>
</template>