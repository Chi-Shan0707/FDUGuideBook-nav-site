import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "FDUGuideBook",
  description: "复旦冒险指南 - 导航网站",
  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',

    nav: nav(),
    sidebar: sidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'qq', link: 'https://twitter.com/vuejs' },
    ],

    search: { provider: 'local' },

    externalLinkIcon: true,
    langMenuLabel: '切换语言',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    outline: { level: [2, 3], label: '目录' },
    returnToTopLabel: '返回顶部',
    editLink: {
      pattern: 'https://github.com/ac-wiki/ac-wiki/blame/main/docs/:path',
      text: '在 GitHub 上编辑',
    },
    lastUpdated: {
      text: '更新于',
      formatOptions: { dateStyle: 'short', timeStyle: 'medium' },
    },
    docFooter: { prev: '上一篇', next: '下一篇' },

    footer: {
      message: '努力建设中',
    },
  },

  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    // 使用 @iconify/vue 组件，已在自定义主题中全局注册，无需 CDN
  ],
  
  markdown: {
    math: true,
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息',
    },
  },

  vite: {
    server: {
      allowedHosts: true,
    },
    optimizeDeps: {
      include: ['@iconify/vue']
    }
  },
})

function nav() {
  return [
    { text: '首页', link: '/' },
    { text: '指南', link: '/guide/' },
    { text: '资源', link: '/resources/' },
    { text: '关于', link: '/about/' },
  ]
}

function sidebar() {
  return {
    '/guide/': [
      {
        text: '指南',
        items: [
          { text: '开始使用', link: '/guide/getting-started' },
          { text: '常见问题', link: '/guide/faq' },
        ]
      }
    ],
    '/resources/': [
      {
        text: '资源',
        items: [
          { text: '学习资源', link: '/resources/learning' },
          { text: '社区链接', link: '/resources/community' },
        ]
      }
    ]
  }
}