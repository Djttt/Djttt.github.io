# 邓君 · 学术主页（Deng Jun — Scholarly Homepage）

基于 [Astro](https://astro.build) 构建的个人学术风格主页，用于在线展示**教育背景、博世（BOSCH）实习成果、科研项目与作品集**。内容全部来自 `邓君个人简历-11-23.pdf`，所有指标（220ms→28ms、Hit@1 93.50%、吞吐 ≈2× 等）均为简历中的实测数据。

## 设计理念

- **论文题录式首页**：姓名、单位、摘要、关键词，以学术期刊首页的开本呈现
- **参考文献式项目列表**：`[1] [2] [3]` 引用格式，点击展开完整技术报告
- **实测指标为视觉主角**：等宽字体呈现 benchmark 数据，弱化装饰
- **配色**：普鲁士蓝（#21447d）+ 纸本暖白 + 注疏红（仅引注编号）；支持深色模式（右上角 ◐ 切换）
- **字体**：Spectral（拉丁衬线）+ Noto Serif SC（中文正文）+ IBM Plex Sans/Mono（界面与数字）

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
- [ ] `public/resume.pdf`：如简历更新，替换同名文件即可
- [ ] `src/content/projects/*.md` 的 `links` 字段：补充真实仓库 / 论文链接（可选，留空不显示）
- [ ] 手机号、邮箱已公开展示（来自简历），若介意可删除 `about.astro` 中的对应行

## 目录结构

```
├── astro.config.mjs            # 站点配置（site / base 由环境变量注入）
├── .github/workflows/deploy.yml # GitHub Pages 自动部署
├── public/
│   ├── resume.pdf               # 简历下载（复制自原 PDF）
│   └── favicon.svg
└── src/
    ├── content.config.ts        # 项目集合 schema
    ├── content/projects/*.md    # 项目完整技术报告（新增项目 = 新增一个 md）
    ├── data/                    # 简历结构化数据：profile / education / skills / experience
    ├── components/              # Header（刊头+导航+主题切换）/ Footer
    ├── layouts/Base.astro       # HTML 骨架、字体、SEO
    ├── styles/global.css        # 设计令牌与学术排版样式
    └── pages/
        ├── index.astro          # 首页：题录 + 成果速览 + 实习摘要 + 代表项目
        ├── experience.astro     # 实习经历（博世两大项目全量细节）+ 教育背景
        ├── projects/            # 项目列表 + [id] 详情页
        └── about.astro          # 技能 / 论文荣誉 / 联系方式
```

## 新增项目

在 `src/content/projects/` 新建一个 `.md` 文件，frontmatter 遵循 `src/content.config.ts` 的 schema（`title / org / period / order / summary / tags / metrics / links`），正文即详情页内容，构建后自动出现在列表与路由 `/projects/<文件名>/`。
