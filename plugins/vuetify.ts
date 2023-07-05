// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
    directives,

    ssr: true,
    theme: {
      // defaultTheme: 'dark',
      themes: {
        'dark': {
          colors: {
            primary: '#000000', // '#0071e3'
          }
        }
      }
    },
    defaults: {
      VAppBar: {
        flat: true,
        class: ['border-b']
      },
      VBtn: {
        class: ['text-body-2', 'font-weight-medium']
      },
      VCard: {
        flat: true,
        border: true,
      }
    },
    // components,
    // directives,
  })

  nuxtApp.vueApp.use(vuetify)
})
