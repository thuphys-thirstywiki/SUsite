# 投稿与 Pull Request 指引

本站 `main` 分支已开启保护，普通成员和访客的修改必须通过 **Pull Request（PR，拉取请求）** 提交，由管理员审核通过后才会发布上线。本页面向不熟悉 Git 的同学，从纯网页操作讲起。

## 什么时候需要走 PR

| 你的角色 | 怎么提交 |
| --- | --- |
| **协作者**（有仓库权限） | 创建新分支修改，提 PR |
| **访客**（无仓库权限） | Fork 后修改，提 PR |
| **管理员** | 可直接推送，无需 PR |

::: tip 审核规则
PR 需要 **1 人审核批准** 后才会合并。合并到 `main` 后，网站约 1–2 分钟自动更新。
:::

## 方式一：网页操作（推荐，无需命令行）

### 修改现有词条

1. 打开要修改的词条页面，点击页面上方 **"在 GitHub 上编辑此页"**；
2. 在 GitHub 的在线编辑器中修改内容；
3. 页面底部 **Commit changes** 处，选中 **"Create a new branch for this commit and start a pull request"**；
4. 填一个分支名（如 `fix/typo`），点击 **Propose changes**；
5. 在打开的 PR 页面填写标题和说明，点击 **Create pull request** 完成。

### 新增词条

1. 进入对应分类目录（如 `docs/activities/`），点击 **Add file → Create new file**；
2. 在文件名处输入 `xxx.md`（英文短横线命名，如 `mid-autumn.md`）；
3. 参考 [示例词条（模板）](/wiki/guide/sample-entry) 编写内容；
4. 同样在底部选择 **"Create a new branch … and start a pull request"**，随后创建 PR。

::: tip 记得登记侧边栏
新词条还需要在 `docs/.vitepress/config.mts` 的 `sidebar` 中加一行才会出现在侧边栏。也可以在 PR 说明里注明"请帮我登记侧边栏"，由管理员代劳。
:::

## 方式二：Fork（访客使用）

1. 打开仓库 [thuphys-thirstywiki/SUsite](https://github.com/thuphys-thirstywiki/SUsite)，点击右上角 **Fork** 到自己账号；
2. 在自己的副本中修改或新增文件（网页操作同上）；
3. 回到自己的仓库首页，点击 **Contribute → Open pull request**；
4. 确认改动范围无误后，点击 **Create pull request**。

## 方式三：命令行（适合会 Git 的同学）

```bash
git clone git@github.com:thuphys-thirstywiki/SUsite.git
cd SUsite
git checkout -b my-entry          # 创建并切换到新分支
# 编辑或新增 Markdown 文件
git add .
git commit -m "新增词条：中秋晚会"
git push -u origin my-entry       # 推送分支
# 按终端提示在网页上创建 PR
```

## PR 规范

- **标题**：一句话说明改动，如 `新增词条：中秋晚会`、`修正报销流程的链接`；
- **描述**：说明改了什么、为什么改；
- **一个 PR 只做一件事**：新增词条、修 bug、改格式分开提交，便于审核和回溯。

## 提交后会发生什么

1. 管理员收到 PR 通知并审核；
2. 若有需要修改的地方，管理员会在 PR 中留言；
3. 审核通过后管理员合并，网站自动重新构建部署；
4. 可在仓库 **Pull requests** 页查看所有 PR 的状态。

## 常见问题

::: tip 被要求修改怎么办
在 PR 的 **Files changed** 页点击笔形图标直接修改，提交到**同一分支**，PR 会自动更新。
:::

::: warning 提示合并冲突
如果提示冲突，通常是别人也改过同一个文件。网页上可点击 **Resolve conflicts** 手动解决，或让管理员协助处理。
:::
