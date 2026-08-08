# 物理系学生会文档库

清华大学物理系学生会 Wiki，基于 [VitePress](https://vitepress.dev/zh/) 构建。

**一切皆 Wiki**：业务知识、按身份入口、维护指南都在 `docs/wiki/`。首页只负责按身份指路；页面之间用关联与被引用互相链接。

> 线上地址：https://thu-phys.com/

## 这是什么

用 Markdown 编写的静态维基。每个 `.md` 文件就是一个词条页面。

新增/修改词条 → 提交到 GitHub `main` 分支 → 自动构建部署，无需手动发布。

## 编辑权限

"管理员登录"即 GitHub 账号，编辑权由仓库角色控制：

- **管理员**（仓库所有者/维护者）：可直接推送；
- **成员**（协作者）：新建分支提 Pull Request，经 1 人审核后合并；
- **访客**：Fork 后提 Pull Request。

`main` 分支已开启保护（PR 审核 + 仅管理员直推）。新增协作者：GitHub 仓库 **Settings → Collaborators**。

## 目录结构

```
docs/
├─ index.md              # 首页：按身份指路
├─ wiki/                 # 全部文档
│  ├─ people/            # 按身份阅读的入口
│  ├─ activities/        # 活动
│  ├─ artifacts/         # 可复用素材
│  ├─ knowledge/         # 组织知识
│  ├─ guide/             # 维护与写作指南
│  └─ tech/              # 技术扫盲
├─ public/               # 静态资源（logo、图标等）
└─ .vitepress/           # 站点配置与主题
```

> 站点默认使用 `public/logo.svg` 作为 logo 与 favicon。仓库另附有可选的学生会 logo（`public/logo.jpg`），如需使用，将 `docs/.vitepress/config.mts` 中的 `themeConfig.logo`、`head` 里的 favicon 链接及 `docs/index.md` 首页 hero 的 `image.src` 改为 `/logo.jpg` 即可。

## 本地开发

```bash
npm install          # 首次运行
npm run docs:dev     # 启动开发服务器（http://localhost:5173）
```

修改文件后页面自动热更新。

## 构建与预览

```bash
npm run docs:build     # 生成静态站点到 docs/.vitepress/dist
npm run docs:preview   # 本地预览构建产物
```

## 如何添加一个词条

1. 在 `docs/wiki/` 的对应分类目录新建 `.md` 文件（文件名用英文短横线）；
2. 活动文档按「活动介绍、开展指南、流程总结」补齐，素材统一放到 `artifacts/`；
3. 参考 [示例词条模板](docs/wiki/guide/sample-entry.md) 编写内容，并在底部填写双向链接；
4. 将词条登记到 `docs/.vitepress/config.mts` 的侧边栏 `sidebar` 中；
5. 提交并推送，网站自动更新。

详细说明见站内 [贡献与部署](/wiki/guide/contribute)。

## 部署

推送到 `main` 分支后，Cloudflare Pages 会自动部署；`.github/workflows/deploy.yml` 也提供可审计的 GitHub Actions 部署兜底。

## 技术栈

- [VitePress](https://vitepress.dev/zh/) — 静态站点生成器
- Markdown + MathJax — 写作语言与数学公式
- Cloudflare Pages + GitHub Actions — 托管与自动部署

## License

内容版权归清华大学物理系学生会所有。
