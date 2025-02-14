<script lang="ts" setup>
import IconHome from '~icons/pixelarticons/home'
import PixButton from '@/src/components/PixButton.vue'
import PixCheckbox from '@/src/components/PixCheckbox.vue'
import { ref } from 'vue'
import PixInput from '@/src/components/PixInput.vue'
import PixLink from '@/src/components/PixLink.vue'
import PixTextarea from '@/src/components/PixTextarea.vue'
import PixDialog from '@/src/components/PixDialog.vue'

const checkbox1 = ref(false)
const checkbox1True = ref(true)
const checkbox2 = ref(false)
const checkbox2True = ref(true)
const checkbox3 = ref(false)
const checkbox3True = ref(true)
const input1 = ref('')
const input2 = ref('')
const textarea = ref('')
const showDialog = ref(false)
</script>

<template>
  <div class="">
    <h2 class="text-3xl font-pixel mb-3">Components</h2>

    <div class="flex flex-col gap-5">
      <div class="flex flex-col gap-2">
        <div class="text-2xl font-pixel">Button</div>
        <div class="flex gap-2">
          <pix-button>default</pix-button>
          <pix-button secondary>secondary</pix-button>
          <pix-button disabled>primary disabled</pix-button>
          <pix-button><icon-home /></pix-button>
          <pix-button small><icon-home /></pix-button>
          <pix-button secondary disabled small loading>Default</pix-button>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <div class="text-2xl font-pixel">Checkbox</div>
        <div class="flex gap-2">
          <pix-checkbox v-model="checkbox1" label="default" />
          <pix-checkbox v-model="checkbox1True" true-value label="default true" />
          <pix-checkbox v-model="checkbox2" toggle label="toggle" />
          <pix-checkbox v-model="checkbox2True" toggle true-value label="toggle true" />
          <pix-checkbox v-model="checkbox3" check-mark label="check mark" />
          <pix-checkbox v-model="checkbox3True" check-mark true-value label="check mark true" />
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <div class="text-2xl font-pixel">Input</div>
        <div class="flex items-start gap-2">
          <pix-textarea v-model="textarea" placeholder="Textarea" />
          <pix-input v-model="input1" placeholder="User input" />
          <pix-input v-model="input2" placeholder="default" disabled />
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <div class="text-2xl font-pixel">Link</div>
        <div class="flex gap-2">
          Click to <pix-link href="https://www.google.com">Google</pix-link> answer!
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <div class="text-2xl font-pixel">Dialog</div>
        <div class="flex gap-2">
          <pix-button @click="showDialog = true">Open Dialog</pix-button>
          <pix-dialog v-if="showDialog" title="Dialog" @close="showDialog = false">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda delectus expedita itaque, molestiae quisquam sapiente sit velit. Aliquam, aperiam dolor doloremque, ducimus exercitationem, facere illum iusto modi neque odio provident reiciendis repudiandae saepe veritatis voluptates? Dolore fuga ipsa, ipsam iure libero molestiae nulla obcaecati odit officiis possimus quae qui quia quidem quis quo rem sed sequi suscipit temporibus totam. Accusamus accusantium adipisci atque consectetur cumque, cupiditate delectus eligendi excepturi facilis fuga fugiat in ipsa natus nesciunt officiis optio provident quae quas quidem recusandae rem repellat sint suscipit vel veniam veritatis voluptatibus! A culpa cum ipsum laborum libero mollitia nihil nostrum?
          </pix-dialog>
        </div>
      </div>
    </div>

  </div>
</template>
