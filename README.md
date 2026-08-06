# 物理系学生会文档库

清华大学物理系学生会的知识库与工作手册，基于 [VitePress](https://vitepress.dev/zh/) 构建。

文档分为两套互补结构：

- **Wiki**：以文档为中心，按活动、可复用素材与组织知识归档，服务维护和交接；
- **人员文档**：以读者为中心，按身份提供任务引导，并链接到 Wiki 的源文档。

页面底部的「关联文档」与「被引用于」组成双向链接。新增或调整页面时，应同时更新这两处关系。

> 线上地址：https://thu-phys.com/

## 这是什么

用 Markdown 编写的静态维基，记录组织制度、活动、学习与生活四大类信息。所有内容存放在 `docs/` 目录，每个 `.md` 文件就是一个词条页面。

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
├─ index.md              # 首页与两个入口
├─ wiki/                 # 文档中心的知识库
│  ├─ activities/        # 按活动名称归档的介绍、指南与复盘
│  ├─ artifacts/         # 问卷、外链、模板等可复用资源
│  └─ knowledge/         # 组织协作与必要知识
├─ people/               # 按读者身份组织的引导文档
├─ guide/                # 维护与写作指南
├─ public/               # 图片、Logo、图标等静态资源
└─ .vitepress/           # 站点配置与主题
```

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
3. 参考 [示例词条模板](docs/guide/sample-entry.md) 编写内容，并在底部填写双向链接；
4. 将词条登记到 `docs/.vitepress/config.mts` 的侧边栏 `sidebar` 中；
4. 提交并推送，网站自动更新。

详细说明见站内「[贡献与部署](/guide/contribute)」页面。

## 部署

推送到 `main` 分支后，Cloudflare Pages 会自动部署；`.github/workflows/deploy.yml` 也提供可审计的 GitHub Actions 部署兜底。

## 技术栈

- [VitePress](https://vitepress.dev/zh/) — 静态站点生成器
- Markdown + MathJax — 写作语言与数学公式
- Cloudflare Pages + GitHub Actions — 托管与自动部署

## License

内容版权归清华大学物理系学生会所有。
