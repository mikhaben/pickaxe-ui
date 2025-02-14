import PixButton from '@/src/components/PixButton.vue'
import PixCheckbox from '@/src/components/PixCheckbox.vue'
import PixInput from '@/src/components/PixInput.vue'
import PixLink from '@/src/components/PixLink.vue'
import PixLoading from '@/src/components/PixLoading.vue'
import PixNumKeyboard from '@/src/components/PixNumKeyboard.vue'
import PixTextarea from '@/src/components/PixTextarea.vue'
import type { App } from 'vue'
import '@/src/styles/main.css'

const components = [
  PixButton,
  PixCheckbox,
  PixInput,
  PixLink,
  PixLoading,
  PixNumKeyboard,
  PixTextarea,
]

function pickaxeInit(app: App): void {
  for (const component of components) {
    app.component(component.name || 'Unknown', component)
  }
}

export * from '@/src/utils/IdGenerator'

export {
  PixButton,
  PixCheckbox,
  PixInput,
  PixLink,
  PixLoading,
  PixNumKeyboard,
  PixTextarea,

  pickaxeInit,
}
