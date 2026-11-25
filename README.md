# 邓君 · 学术主页（Deng Jun — Scholarly Homepage）

基于 [Astro](https://astro.build) 构建的个人学术风格主页，用于在线展示**教育背景、博世（BOSCH）实习成果、科研项目与作品集**。内容全部来自 `邓君个人简历-11-23.pdf`，所有指标（220ms→28ms、Hit@1 93.50%、吞吐 ≈2× 等）均为简历中的实测数据。

## 设计理念

参考经典学者单页（如 smiles724.github.io）的展示方式：

- **单页长滚动 + 锚点导航**：动态 / 项目 / 实习 / 教育 / 技能 / 荣誉，无需翻页
- **简介区（blurb）**：「Hi，我是邓君！」+ 头像右浮动 + 加粗链接的自我介绍 + 社交图标行
- **News 动态**：红蓝渐变的日期条目，旧动态「更多动态」折叠
- **机构徽标左浮动**：教育 / 实习条目采用 logo 浮动 + 大写小字的时间标签
- **论文式项目列表**：venue 行（机构 · 时间 · 角色）+ 灰色 conference-tag 技术栈 chips + 实测指标内联强调，点击查看完整技术报告
- **配色**：钢蓝 `#345f93` + 砖红悬停 `#8b3f32` + 细线分节（#e3e6e8），无卡片化；支持深色模式（导航 ◐ 切换）
- **字体**：Libre Baskerville + Noto Serif SC（标题）· Source Sans 3 + Noto Sans SC（正文）· Inter（导航/日期/标签）· IBM Plex Mono（指标数字）

## 本地开发

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # 产物输出到 dist/
npm run preview   # 预览构建产物
```

## 部署到 GitHub Pages

站点已内置 GitHub Actions 工作流（`.github/workflows/deploy.yml`），**base path 会自动推导**（用户站点 `/`，项目站点 `/repo-name`）。

1. 在 GitHub 上新建仓库，建议命名 `<你的用户名>.github.io`
2. 推送代码：

   ```bash
   git init
   git add -A
   git commit -m "feat: academic-style personal homepage (Astro)"
   git remote add origin https://github.com/<你的用户名>/<你的用户名>.github.io.git
   git branch -M main
   git push -u origin main
   ```

3. 打开仓库 **Settings → Pages → Build and deployment → Source**，选择 **GitHub Actions**
4. 推送后 Actions 自动构建部署，访问 `https://<你的用户名>.github.io`

## 上线前请检查（TODO）

- [x] `src/data/profile.ts` 的 `github` 已填真实地址；`astro.config.mjs` 的 `site` 默认值与之对应
- [x] 部署工作流会自动推导 `SITE_URL` / `BASE_PATH`（用户站点 `/`，项目站点 `/repo-name`），并生成 `sitemap-index.xml`
- [x] 真实头像与机构标志已接入：`public/img/portrait.jpg`、`swpu.png`、`cas.png`、`bosch.png`、`lumeany.png`（更新时同名替换即可）
- [ ] `public/resume.pdf`：如简历更新，替换同名文件即可
- [ ] `src/content/projects/*.md` 的 `links` 字段：补充真实仓库 / 论文链接（可选，留空不显示）
- [ ] 邮箱在首页展示（电话仅在简历 PDF 中），若介意匿名化写法可在 `index.astro` 调整

## 目录结构

```
├── astro.config.mjs            # 站点配置（site / base 由环境变量注入）
├── .github/workflows/deploy.yml # GitHub Pages 自动部署
├── public/
│   ├── resume.pdf               # 简历下载（复制自原 PDF）
│   └── favicon.svg
├── public/img/                  # 头像占位图与机构徽标（avatar.svg / swpu.svg / bosch.svg）
└── src/
    ├── content.config.ts        # 项目集合 schema
    ├── content/projects/*.md    # 项目完整技术报告（新增项目 = 新增一个 md，需在 index.astro 的 tracks 中登记分组）
    ├── data/                    # 简历结构化数据：profile / education / skills / experience
    ├── components/              # Header（锚点导航+主题切换）/ Footer
    ├── layouts/Base.astro       # HTML 骨架、字体、SEO
    ├── styles/global.css        # 设计令牌与学者单页排版样式
    └── pages/
        ├── index.astro          # 单页主页：简介 / 动态 / 项目 / 实习 / 教育 / 技能 / 荣誉
        └── projects/[id].astro  # 项目完整技术报告页
```

## 新增项目

在 `src/content/projects/` 新建一个 `.md` 文件，frontmatter 遵循 `src/content.config.ts` 的 schema（`title / org / period / order / summary / tags / metrics / links`），正文即详情页内容，构建后自动出现在列表与路由 `/projects/<文件名>/`。
