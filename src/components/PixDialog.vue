<script lang="ts" setup>
import PixButton from '@/src/components/PixButton.vue'
import IconClose from '~icons/pixelarticons/close'

const emit = defineEmits<{
  (e: 'close'): void
}>()
defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="fixed top-0 right-0 bottom-0 left-0 flex flex-col">

    <div @click="emit('close')" class="opacity-95 bg-gray-900 flex-grow"/>

    <div class="p-3 border-t-2 border-gray-800 bg-gray-900">
      <div v-if="title" class="flex flex-col">
        <div class="flex justify-between mb-2">
          <h2 class="text-3xl font-pixel">{{ title }}</h2>
          <pix-button small secondary @click="emit('close')">
            <icon-close />
          </pix-button>
        </div>
        <slot name="subtitle" />
      </div>
      <slot />
    </div>

  </div>
</template>
