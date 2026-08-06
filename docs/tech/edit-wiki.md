# 编辑本 Wiki 实战

本页把"写一个词条并发布上线"的完整流程串起来，按你的角色选一种方式即可。**全部流程走完，网站约 1–2 分钟自动更新。**

## 先搞清三件事

1. **内容放哪**：所有词条在仓库的 `docs/` 下，每个 `.md` 文件是一个词条，目录即分类；
2. **写什么格式**：Markdown，语法见 [Markdown 写作指南](/guide/markdown)，模板见 [示例词条（模板）](/guide/sample-entry)；
3. **改完怎么上线**：提交到 GitHub `main` 分支 → 自动部署。

## 方式 A：网页在线编辑（最快，零安装）

适合改错字、改一段内容。有仓库权限的同学直接用，没权限的同学可参考 [投稿与 Pull Request](/guide/pr-guide) 的 Fork 流程。

1. 打开任一词条页面，点右侧栏顶部的 **「在 GitHub 上编辑此页」**；
2. 在 GitHub 的在线编辑器中修改内容；
3. 页面底部 **Commit changes**：
   - 有权限：选 "Commit directly to the `main` branch"，提交即上线；
   - 普通成员：选 "Create a new branch … and start a pull request"，走审核后合并。

## 方式 B：本地编辑（推荐给想深入的同学）

适合写较长的新词条，可以本地实时预览效果。

### 第一步：把仓库拿到本地

```bash
cd 想放项目的目录
git clone git@github.com:thuphys-thirstywiki/SUsite.git
cd SUsite
npm install          # 安装依赖（首次）
```

### 第二步：写词条

1. 在对应分类目录新建文件，如 `docs/activities/mid-autumn.md`；
2. 用任意文本编辑器（推荐 VS Code）编写 Markdown；
3. 启动本地预览：

```bash
npm run docs:dev     # 浏览器打开 http://localhost:5173/ 实时预览
```

### 第三步：登记侧边栏（新词条必须）

打开 `docs/.vitepress/config.mts`，在对应分类的 `items` 里加一行：

```ts
'/activities/': [
  {
    text: '活动百科',
    items: [
      { text: '概览', link: '/activities/' },
      { text: '中秋晚会', link: '/activities/mid-autumn' },  // 新增这一行
    ],
  },
],
```

### 第四步：提交并推送

```bash
git pull                       # 先拉取最新，减少冲突
git add .
git commit -m "新增词条：中秋晚会"
git push                       # 管理员直接推 main；成员需先建分支提 PR
```

::: tip 成员怎么提 PR
`git checkout -b my-entry` 建分支 → 提交 → `git push -u origin my-entry` → 按终端提示在网页创建 PR。详细见 [投稿与 Pull Request](/guide/pr-guide)。
:::

## 新词条检查清单

- [ ] 文件名用英文短横线（如 `course-selection.md`），中文写在标题里
- [ ] 有清晰的 `#` 标题和简介
- [ ] 已登记到 `config.mts` 侧边栏
- [ ] 本地 `npm run docs:build` 构建无报错（可选但推荐）
- [ ] 提交信息写清楚"做了什么"（如 `新增词条：xxx` / `修正：xxx`）

## 常见问题

### 本地预览看不到我的新页面？

确认文件在 `docs/` 下且侧边栏已登记。VitePress 按目录自动生成路由，文件路径即网址。

### 为什么我的改动没上线？

可能原因：没 push、push 到了非 main 分支、PR 还没被审核合并。到仓库的 **Actions** 页可看部署状态。

### 构建报错怎么办？

通常是 Markdown 语法或链接错误。先看报错提示的行号，对照 [写作指南](/guide/markdown) 检查；解决不了就把报错信息发给管理员。

## 推荐学习顺序

想继续深入的同学，建议顺序：

1. [命令行基础](/tech/bash-basics)
2. [Git 基础](/tech/git-basics)
3. 在本地多练习几次方式 B，直到形成肌肉记忆
