<script lang="ts" setup>
import PixButton from "@/src/components/PixButton.vue";
import PixCheckbox from '@/src/components/PixCheckbox.vue'
import { ref } from 'vue'
import PixNumKeyboard from '@/src/components/PixNumKeyboard.vue'

const check = ref(false)
</script>

<template>
  <div class="h-full">
    <pix-button>Click me</pix-button>

    <pix-checkbox v-model="check" check-mark />

    <pix-num-keyboard />
  </div>
</template>
