export const internships = [
  {
    company: '博世汽车部件有限公司',
    companyEn: 'BOSCH',
    dept: 'BMG-XCN / XSE-1',
    period: '2026.06 – 2026.10',
    programs: [
      {
        title: '非标设备智能知识库 RAG',
        stack: ['LangGraph', 'RAG', 'Qwen', 'BGE-M3', 'Milvus', 'MySQL', 'LangSmith', 'Agent Skill'],
        intro:
          '面向非标设备技术规格及企业 Wiki 文档，构建基于 LLM + RAG + Agent 的智能需求分析系统，覆盖知识解析、分层检索、证据关联、智能问答及设备信息自动化入库。',
        points: [
          '负责 RAG 检索优化：采用 MySQL Parent + Milvus Child 构建父子分层知识库，结合关键词与稠密向量混合召回，通过 RRF 实现多路检索结果融合，提升复杂技术文档的召回质量与上下文关联能力。',
          'RAG 评测与链路优化：构建 300 条标准评测集，基于 LangSmith 实现检索效果自动化评测、Trace 追踪及问题归因，针对检索链路持续迭代，Hit@1 从 83.75% 提升至 93.50%，平均上下文准确率达到 81.46%。',
          'LangGraph Agent 工作流：基于 LangGraph 实现多轮状态化 Agent 编排，结合 Skill 封装可复用业务能力，通过 Human-in-the-Loop 实现图片识别、结构化信息提取、人工校验及知识入库闭环。',
        ],
        metrics: [
          { value: '93.50%', label: 'Hit@1（由 83.75% 提升）' },
          { value: '81.46%', label: '平均上下文准确率' },
        ],
      },
      {
        title: '产线端侧 AI 基础服务部署与模型推理优化',
        stack: ['NVIDIA DGX Spark', 'SGLang', 'vLLM', 'Qwen', 'RadixAttention', 'KV Cache', 'Docker', 'Dify'],
        intro:
          '基于 NVIDIA DGX Spark 构建端侧 AI 推理服务平台，使用 SGLang/vLLM 部署 Qwen 系列模型及 ASR、TTS、Embedding、Reranker 等 AI 服务，围绕推理调度、KV Cache 复用、Prefill 优化及服务容器化开展性能优化。',
        points: [
          '推理引擎部署与架构优化：基于 SGLang/vLLM 搭建 OpenAI-compatible 推理服务，熟悉模型加载、Tokenizer、Scheduler、Batching、Worker 等核心执行链路，针对不同模型与任务配置推理参数，优化模型服务资源利用率。',
          'KV Cache 与 Prefix Cache 优化：基于 SGLang RadixAttention 实现共享前缀 KV Cache 复用，利用 Radix Tree 管理请求前缀及缓存状态，结合多分支 Prompt/DSL 工作流减少重复 Prefill 计算，提升缓存命中率并降低首 Token 延迟。',
          '高并发推理调度优化：结合 Continuous Batching 动态调度请求，利用 Chunked Prefill 将长 Prompt 分块处理，降低长序列 Prefill 对 Decode 阶段的资源干扰；通过 KV Cache 复用与批处理策略优化，实测推理吞吐提升约 2×。',
          'Prefill / Decode 执行优化：理解 Prefill 与 Decode 阶段的计算特征及 GPU 资源竞争关系，围绕 Prompt 长度、Batch Size、KV Cache 显存占用和请求并发度进行参数调优，改善推理服务的吞吐与响应延迟。',
          '多模型服务工程化：基于 Docker 标准化部署 LLM、ASR、TTS、Embedding、Reranker 等推理服务，统一 API 接口并对接 Dify，实现多模型服务编排、调用及端侧 AI 能力集成。',
        ],
        metrics: [{ value: '≈ 2×', label: '实测推理吞吐提升' }],
      },
    ],
  },
];
