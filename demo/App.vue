<script lang="ts" setup>
import Buttons from '@/demo/Buttons.vue'

const items = [
  { title: 'Button', anchor: 'button' },
  { title: 'Checkbox', anchor: 'checkbox' },
  { title: 'NumKeyboard', anchor: 'numkeyboard' }
]
</script>

<template>
  <div class="h-full flex gap-4 p-3">

    <div class="border-r border-gray-700 pr-2">
      <ul class="flex flex-col gap-2">
        <li
          v-for="item in items"
          :key="item.anchor"
          class="p-2 hover:text-green-500"
        >
          <a :href="'#' + item.anchor">{{ item.title }}</a>
        </li>
      </ul>
    </div>

    <div class="">
      <buttons />
    </div>

  </div>
</template>
