import { defineConfig } from 'vitepress'

// 部署到 GitHub Pages 项目站时，构建命令会注入 /<仓库名>/ 作为 base；
// 本地预览或部署到 Vercel 时默认使用根路径 / 。
const base = process.env.BASE_PATH || '/'

export default defineConfig({
  base,

  title: '物理系学生会 Wiki',
  description: '清华大学物理系学生会知识库 —— 组织、活动、学习与生活的百科全书',

  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['meta', { name: 'theme-color', content: '#5b4fae' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${base}logo.svg` }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: '物理系学生会 Wiki',

    nav: [
      { text: '首页', link: '/' },
      { text: '使用指南', link: '/guide/' },
      { text: '组织与制度', link: '/org/' },
      { text: '活动百科', link: '/activities/' },
      { text: '学习指南', link: '/study/' },
      { text: '生活指南', link: '/life/' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '使用指南',
          items: [
            { text: '关于本站', link: '/guide/' },
            { text: 'Markdown 写作指南', link: '/guide/markdown' },
            { text: '示例词条（模板）', link: '/guide/sample-entry' },
            { text: '贡献与部署', link: '/guide/contribute' },
          ],
        },
      ],
      '/org/': [
        {
          text: '组织与制度',
          items: [
            { text: '概览', link: '/org/' },
            { text: '部门介绍', link: '/org/departments' },
            { text: '常用流程与模板', link: '/org/procedures' },
          ],
        },
      ],
      '/activities/': [
        {
          text: '活动百科',
          items: [
            { text: '概览', link: '/activities/' },
            { text: '活动筹备指南', link: '/activities/planning' },
          ],
        },
      ],
      '/study/': [
        {
          text: '学习指南',
          items: [{ text: '概览', link: '/study/' }],
        },
      ],
      '/life/': [
        {
          text: '生活指南',
          items: [{ text: '概览', link: '/life/' }],
        },
      ],
    },

    // 内置本地全文搜索，支持中文
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          searchOptions: {
            boost: { title: 4, text: 2, titles: 1 },
            fuzzy: 0.1,
          },
          options: {
            // 中文按字/词拆分，保证中文全文检索可用
            processTerm: (term) =>
              term.split(/[\s，。！？、（）【】"":：;；]+/).flatMap((w) =>
                w.length > 1 ? [w, ...w.split('')] : w,
              ),
          },
        },
      },
    },

    outline: { level: [2, 3], label: '本页目录' },
    lastUpdated: {
      text: '最后更新',
      formatOptions: { dateStyle: 'short', timeStyle: 'short' },
    },
    docFooter: { prev: '上一篇', next: '下一篇' },

    // 部署后替换为真实的仓库地址
    editLink: {
      pattern: 'https://github.com/hanselhan23/SUsite/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },

    darkModeSwitchLabel: '主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    langMenuLabel: '语言',

    footer: {
      message: '基于 VitePress · Markdown 驱动',
      copyright: '清华大学物理系学生会',
    },
  },

  markdown: {
    math: true,
    lineNumbers: true,
    image: { lazyLoading: true },
  },
})
