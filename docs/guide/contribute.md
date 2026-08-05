# 贡献与部署

Wiki 采用 Git 管理 + 自动部署：任何人都可以在本地写词条，提交到 GitHub 后网站自动更新。

## 添加一个新词条

1. 在仓库的 `docs/` 下找到对应分类目录（如 `org/`、`activities/`）；
2. 新建一个 `.md` 文件，文件名用英文短横线，如 `docs/activities/mid-autumn.md`；
3. 参考 [示例词条（模板）](/guide/sample-entry) 编写内容；
4. 将页面加入侧边栏（见下文），或让链接从其他词条指向它；
5. 提交代码到 GitHub 的 `main` 分支，网站自动更新。

## 本地预览

```bash
npm install          # 首次运行
npm run docs:dev     # 启动本地开发服务器（默认 http://localhost:5173）
```

修改文件后页面会自动热更新，无需手动刷新。

## 构建与部署

```bash
npm run docs:build    # 生成静态站点到 docs/.vitepress/dist
npm run docs:preview  # 本地预览构建产物
```

- 推送代码到 GitHub `main` 分支后，仓库中的 GitHub Actions 工作流会自动构建并部署到 Pages；
- 部署配置位于 `.github/workflows/deploy.yml`，部署路径由仓库名决定。

## 修改侧边栏 / 导航

所有站点配置都在 `docs/.vitepress/config.mts`：

- 顶部导航：`themeConfig.nav`
- 各分类侧边栏：`themeConfig.sidebar`

新增词条后，在对应分类的 `items` 里加一行即可：

```ts
sidebar: {
  '/activities/': [
    {
      text: '活动百科',
      items: [
        { text: '概览', link: '/activities/' },
        { text: '中秋晚会', link: '/activities/mid-autumn' },   // 新增
      ],
    },
  ],
},
```

## 待办：正式上线前

- [ ] 在 `config.mts` 中把 `editLink` 的仓库地址改为真实仓库；
- [ ] 确认 GitHub Actions 的部署仓库/分支设置正确；
- [ ] （可选）配置自定义域名或 HTTPS。
