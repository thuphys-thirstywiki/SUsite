# 物理系学生会 Wiki

清华大学物理系学生会的知识库与工作手册，基于 [VitePress](https://vitepress.dev/zh/) 构建。

> 线上地址：https://hanselhan23.github.io/SUsite/

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
├─ index.md              # 首页
├─ guide/                # 使用指南（写作规范、示例模板）
├─ org/                  # 组织与制度
├─ activities/           # 活动百科
├─ study/                # 学习指南
├─ life/                 # 生活指南
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

1. 在 `docs/` 下对应分类目录新建 `.md` 文件（文件名用英文短横线）；
2. 参考 [示例词条模板](docs/guide/sample-entry.md) 编写内容；
3. 将词条登记到 `docs/.vitepress/config.mts` 的侧边栏 `sidebar` 中；
4. 提交并推送，网站自动更新。

详细说明见站内「[贡献与部署](/guide/contribute)」页面。

## 部署

推送到 `main` 分支后，`.github/workflows/deploy.yml` 自动构建并部署到 GitHub Pages。

## 技术栈

- [VitePress](https://vitepress.dev/zh/) — 静态站点生成器
- Markdown + MathJax — 写作语言与数学公式
- GitHub Pages + GitHub Actions — 托管与自动部署

## License

内容版权归清华大学物理系学生会所有。
