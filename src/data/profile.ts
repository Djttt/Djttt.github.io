export const profile = {
  name: '邓君',
  nameEn: 'Deng Jun',
  role: '计算机技术硕士 · 西南石油大学',
  affiliation: '西南石油大学 · 计算机与软件学院',
  tagline: 'LLM 推理优化 · RAG 与智能体工程 · GPU 并行计算',
  location: '成都',
  email: 'deng_jun1029@163.com',
  phone: '13882509416',
  github: 'https://github.com/dengjun1029',
  resume: '/resume.pdf',
  updated: '2026.11',
};

/** 首页「成果速览」指标 —— 全部来自简历中的实测数据 */
export const bench = [
  { value: '220 → 28 ms', label: '单帧波前处理耗时', note: 'RTC 项目 · CUDA 图像加速' },
  { value: '83.75 → 93.50%', label: 'RAG 检索 Hit@1', note: '博世非标设备知识库 · 300 条评测集' },
  { value: '≈ 2×', label: '端侧推理吞吐提升', note: 'DGX Spark · KV Cache 复用 + 批处理调优' },
  { value: 'Top 10%', label: 'GPA 专业排名', note: '本硕均前 10% · 光学学报（中科院 2 区）1 篇' },
];
