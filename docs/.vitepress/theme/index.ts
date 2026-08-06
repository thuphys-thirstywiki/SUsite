import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import type { Theme } from 'vitepress'
import EditLinkTop from './components/EditLinkTop.vue'
import DocumentLinks from './components/DocumentLinks.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('DocumentLinks', DocumentLinks)
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-top': () => h(EditLinkTop),
    })
  },
} satisfies Theme
