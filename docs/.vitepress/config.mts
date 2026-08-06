import { defineConfig } from 'vitepress'

// 站点部署在 Cloudflare Pages 根路径（https://thu-phys.com），base 固定为 /
const base = '/'

export default defineConfig({
  base,

  title: '物理系学生会文档库',
  description: '清华大学物理系学生会的 Wiki 与人员工作文档',

  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['meta', { name: 'theme-color', content: '#087a72' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${base}logo.svg` }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: '物理系学生会文档库',

    nav: [
      { text: '首页', link: '/' },
      { text: 'Wiki', link: '/wiki/' },
      { text: '人员文档', link: '/people/' },
      { text: '维护指南', link: '/guide/' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '使用指南',
          items: [
            { text: '关于本站', link: '/guide/' },
            { text: 'Markdown 写作指南', link: '/guide/markdown' },
            { text: '示例词条（模板）', link: '/guide/sample-entry' },
            { text: '投稿与 Pull Request', link: '/guide/pr-guide' },
            { text: '贡献与部署', link: '/guide/contribute' },
          ],
        },
      ],
      '/wiki/': [
        { text: 'Wiki', items: [
          { text: 'Wiki 首页', link: '/wiki/' },
          { text: '活动', link: '/wiki/activities/' },
          { text: '可复用素材', link: '/wiki/artifacts/' },
          { text: '组织知识', link: '/wiki/knowledge/' },
        ] },
        { text: '活动', items: [
          { text: '迎新', link: '/wiki/activities/orientation/' },
          { text: '学生节', link: '/wiki/activities/student-festival/' },
          { text: '新生舞会', link: '/wiki/activities/freshman-ball/' },
        ] },
      ],
      '/people/': [
        { text: '人员文档', items: [
          { text: '从这里开始', link: '/people/' },
          { text: '物理系同学', link: '/people/physics-students' },
          { text: '学生会主席', link: '/people/president' },
          { text: '主席团成员', link: '/people/executive-team' },
        ] },
        { text: '部门工作', items: [
          { text: '文宣', link: '/people/departments/publicity' },
          { text: '体育', link: '/people/departments/sports' },
          { text: '生权', link: '/people/departments/student-rights' },
          { text: '联络', link: '/people/departments/outreach' },
        ] },
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
      pattern: 'https://github.com/thuphys-thirstywiki/SUsite/edit/main/docs/:path',
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
