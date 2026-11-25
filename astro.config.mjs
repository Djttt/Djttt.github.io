import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages 部署说明：
// - 用户站点（仓库名 = <username>.github.io）：BASE_PATH 用 '/'
// - 项目站点（如 personal-site）：BASE_PATH 用 '/repo-name'
// 两者均由部署工作流自动推导；本地可用环境变量覆盖，例如：
//   SITE_URL=https://dengjun1029.github.io BASE_PATH=/site npm run build
export default defineConfig({
  site: process.env.SITE_URL || 'https://dengjun1029.github.io',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
