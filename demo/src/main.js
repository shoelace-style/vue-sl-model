import "@shoelace-style/shoelace/dist/themes/light.css"
import "@shoelace-style/shoelace/dist/components/input/input"

import ShoelaceModelDirective from '@shoelace-style/vue-sl-model'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(ShoelaceModelDirective)

// app.config.compilerOptions.isCustomElement = tag => tag.startsWith('sl-')
// ^ Not needed. Defined in vite.config.js

app.mount('#app')
