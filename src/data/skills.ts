export const skills = [
  {
    key: 'programming',
    name: '开发语言与工程能力',
    desc: '熟练使用 Python、C/C++ 进行工程开发；掌握 asyncio、多进程/多线程及 FastAPI 异步服务开发，熟悉 PyTorch、NumPy、Pandas 与 pytest 工程化测试；掌握 C++ RAII、智能指针、STL、多线程同步，具备生产者-消费者模型、环形缓冲区、零拷贝、UDP 数据传输及相机 SDK 开发经验。',
    tags: ['Python', 'C/C++', 'FastAPI', 'asyncio', 'PyTorch', 'pytest', 'STL', 'UDP'],
  },
  {
    key: 'cuda',
    name: 'CUDA 并行计算与性能优化',
    desc: '熟悉 CUDA 编程模型、线程与 Block 映射、共享内存规约、Kernel 融合、异步拷贝及双流双缓冲；掌握访存合并、Pinned Memory 与 Roofline 性能分析方法，具备 GPU 算子优化实践。',
    tags: ['CUDA', 'Kernel 融合', '共享内存规约', '双流双缓冲', 'Pinned Memory', 'Roofline'],
  },
  {
    key: 'llm',
    name: 'LLM 推理与部署',
    desc: '熟悉 vLLM / SGLang 推理框架，理解 PagedAttention、RadixAttention、Continuous Batching、Chunked Prefill、KV Cache 管理及投机解码等核心机制；具备 Qwen 系列模型本地化部署、推理服务优化及 Docker 多服务部署经验，结合 KV Cache 优化实现吞吐提升，支持 Dify 统一 API 接入。',
    tags: ['vLLM', 'SGLang', 'Qwen', 'PagedAttention', 'RadixAttention', 'KV Cache', 'Continuous Batching', 'Dify'],
  },
  {
    key: 'rag',
    name: 'RAG 与 Agent 工程',
    desc: '熟悉 RAG 知识库构建与检索优化，具备 MySQL Parent + Milvus Child 分层存储、BM25 + 向量混合检索、RRF 融合及 Rerank 精排实践；熟悉 LangGraph 多轮 Agent 工作流、Human-in-the-Loop、状态持久化及 LangSmith Trace 分析与自动化评测。',
    tags: ['RAG', 'LangGraph', 'Milvus', 'BM25', 'RRF', 'Rerank', 'LangSmith', 'BGE-M3'],
  },
  {
    key: 'infra',
    name: '云原生与系统基础设施',
    desc: '熟悉 Linux 系统开发与调试，掌握 Docker 镜像构建、服务容器化及 CUDA/PyTorch 基础环境制作；了解 Kubernetes GPU 资源调度、NCCL 多卡通信、共享内存配置与持久化存储，熟悉 Git、GDB、Perf 等开发调试工具。',
    tags: ['Linux', 'Docker', 'Kubernetes', 'NCCL', 'GDB', 'Perf', 'Git'],
  },
];
