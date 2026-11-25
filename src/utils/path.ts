/** 适配 GitHub Pages 子路径（base）的路由工具 */
const base = import.meta.env.BASE_URL.replace(/\/+$/, '');

/** route('/projects') -> '/projects' 或 '/repo-name/projects' */
export function route(path = '/'): string {
  if (path === '/' || path === '') return base === '' ? '/' : `${base}/`;
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}`;
}

/** 当前 pathname 是否命中某导航项（首页精确匹配，其余前缀匹配） */
export function isActive(pathname: string, path: string): boolean {
  const full = route(path).replace(/\/+$/, '');
  const clean = pathname.replace(/\/+$/, '');
  if (full === '' || full === base.replace(/\/+$/, '')) return clean === full;
  return clean === full || clean.startsWith(`${full}/`);
}
