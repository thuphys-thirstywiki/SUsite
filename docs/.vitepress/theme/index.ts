import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import type { Theme } from 'vitepress'
import EditLinkTop from './components/EditLinkTop.vue'
import DocumentLinks from './components/DocumentLinks.vue'
import SectionNav from './components/SectionNav.vue'
import ContrastToggle from './components/ContrastToggle.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('DocumentLinks', DocumentLinks)
    app.component('SectionNav', SectionNav)
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-top': () => h(EditLinkTop),
      // 高对比度开关：桌面端导航栏（深色模式开关旁）与移动端展开菜单各一个
      'nav-bar-content-after': () => h(ContrastToggle),
      'nav-screen-content-after': () => h(ContrastToggle),
    })
  },
} satisfies Theme
