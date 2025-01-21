<script lang="ts" setup>
import IconHome from '~icons/pixelarticons/home'
import PixButton from '@/src/components/PixButton.vue'
import PixCheckbox from '@/src/components/PixCheckbox.vue'
import { ref } from 'vue'

const secondary = ref(false)
const small = ref(false)
const disabled = ref(false)
const loading = ref(false)
</script>

<template>
  <div class="">
    <div id="button" class="mb-5">
      <h2 class="text-3xl font-pixel mb-3">Buttons</h2>
      <div class="flex gap-5">
        <div class="flex flex-col gap-2">
          <pix-checkbox v-model="secondary" check-mark label="Secondary" />
          <pix-checkbox v-model="small" check-mark label="Small" />
          <pix-checkbox v-model="disabled" check-mark label="Disabled" />
          <pix-checkbox v-model="loading" check-mark label="Loading" />
        </div>
        <div class="flex gap-3 flex-wrap">
          <pix-button :secondary="secondary" :disabled="disabled" :small="small" :loading="loading">Default</pix-button>
          <pix-button><icon-home /></pix-button>
          <pix-button><span>Text with icon</span><icon-home /></pix-button>
        </div>
      </div>
    </div>
  </div>
</template>
