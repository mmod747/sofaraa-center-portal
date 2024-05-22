// Vuetify
import 'vuetify/styles'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify, type ThemeDefinition } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { VBtn } from 'vuetify/components/VBtn'
import { ar } from 'vuetify/locale'
import 'vuetify/styles'

// Components
const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#C988FC',
    background: '#FFFFFF',
    surface: '#FFFFFF',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    success: '#388E3C',
    info: '#424242',
    warning: '#bb3e3e'
  }
}

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme
    }
  },
  locale: {
    locale: 'ar',
    messages: { ar }
  },
  aliases: {
    MyButton: VBtn
  },
  defaults: {
    VBtn: {
      variant: 'flat',
      class: 'text-none'
    },
    MyButton: { variant: 'tonal' }
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
  components,
  directives
})
export default vuetify
