# 贡献与部署

Wiki 采用 Git 管理 + 自动部署：以 Markdown 编写词条，提交到 GitHub 后网站自动更新。

## 编辑权限

本站的"管理员登录"就是 GitHub 账号本身，编辑权由仓库角色控制：

| 角色 | 权限 | 如何编辑 |
| --- | --- | --- |
| **管理员**（仓库所有者/维护者） | 可审核、可直接推送 | 直接在 `main` 分支修改并推送 |
| **成员**（协作者） | 可写但受保护 | 新建分支提 Pull Request，经 1 人审核后合并 |
| **访客**（无仓库权限） | 只读 | Fork 仓库后提 Pull Request |

`main` 分支已开启保护：所有改动须通过 1 人审核才能合并，且仅管理员可绕过保护直推、禁止强制推送与删除分支。需要给哪位同学开通编辑权限，在 GitHub 仓库 **Settings → Collaborators** 中添加即可。

## 添加一个新词条

1. 在仓库的 `docs/wiki/` 下找到对应分类目录（如 `activities/`、`artifacts/`）；
2. 新建一个 `.md` 文件，文件名用英文短横线，如 `docs/wiki/activities/mid-autumn.md`；
3. 参考 [示例词条（模板）](/guide/sample-entry) 编写内容；
4. 将页面加入侧边栏（见下文），或让链接从其他词条指向它；
5. 管理员直接推送到 `main`；成员则推送到新分支并提交 Pull Request（详细步骤见 [投稿与 Pull Request 指引](/guide/pr-guide)）。

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

- 推送代码到 GitHub `main` 分支后，Cloudflare Pages 会自动构建并部署；
- `.github/workflows/deploy.yml` 可作为显式部署工作流，需在仓库中配置 `CLOUDFLARE_API_TOKEN`、`CLOUDFLARE_ACCOUNT_ID` 两个 Actions Secret，以及 `CLOUDFLARE_PAGES_PROJECT` Actions Variable。

## 修改侧边栏 / 导航

所有站点配置都在 `docs/.vitepress/config.mts`：

- 顶部导航：`themeConfig.nav`
- 各分类侧边栏：`themeConfig.sidebar`

新增词条后，在对应分类的 `items` 里加一行即可：

```ts
sidebar: {
  '/wiki/activities/': [
    {
      text: '活动',
      items: [
        { text: '概览', link: '/wiki/activities/' },
        { text: '中秋晚会', link: '/wiki/activities/mid-autumn' },   // 新增
      ],
    },
  ],
},
```

## 已完成的上线配置

- ✅ `editLink` 已指向真实仓库 `thuphys-thirstywiki/SUsite`，页面可直接跳转在线编辑；
- ✅ Cloudflare Pages 自动部署已启用，线上地址 https://thu-phys.com/ ；
- ✅ `main` 分支保护已开启（PR 审核 + 仅管理员直推）；
- ✅ 自定义域名 `thu-phys.com` 已绑定。
