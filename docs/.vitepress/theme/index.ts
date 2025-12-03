// https://vitepress.dev/zh/guide/custom-theme
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { createPinia } from 'pinia'
import { h } from 'vue'
import VueTippy, { roundArrow } from 'vue-tippy'
import { Icon } from '@iconify/vue'

import './style.css'

import LinkList from '../components/unique/LinkList.vue'

// @keep-sorted
const globalComponents = {
  Icon,
  LinkList,
}

export default {
  extends: DefaultTheme,
//   Layout: () => {
//     return h(DefaultTheme.Layout, null, {
//       'doc-before': () => h(Header),
//       'doc-footer-before': () => h(Author),
//       'doc-after': () => h(Footer),
//       'not-found': () => h(NotFound),
//     })
//   },
  enhanceApp({ app }) {
    Object.entries(globalComponents).forEach(([name, component]) => {
      app.component(name, component)
    })

    const pinia = createPinia()
    app.use(pinia)

    app.use(VueTippy, {
      component: 'Tooltip',
      directive: 'tip',
      defaultProps: {
        arrow: roundArrow,
      },
    })
  },
} satisfies Theme
