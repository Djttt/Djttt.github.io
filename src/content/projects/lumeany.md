---
title: "LumeAny · 跨平台视频解析与下载工具"
org: "个人作品集 · Web + 桌面端双形态"
role: 独立开发
period: "2025 – 至今"
order: 3
summary: "设计并开发跨平台视频解析与下载工具：多平台链接解析、下载管理、用户认证与 AI Agent 工具调用，覆盖前端交互、后端服务、安全防护、网络代理与桌面端自动更新的完整链路。"
tags: [Vue 3, TypeScript, FastAPI, Tauri, Rust, yt-dlp, Docker, MCP]
metrics:
  - value: "10+"
    label: 支持解析的视频平台数
  - value: "130+"
    label: pytest 测试用例保障质量
  - value: "Web + Desktop"
    label: 响应式网页与 Tauri 桌面双形态
---

一个从 0 到 1 独立完成的**全栈个人产品**：前端、后端、桌面端、发布流水线与服务器部署全部由自己交付，也是把「工程化」落到实处的练手场。

## 前端与用户体系

基于 Vue 3 + Vite 开发响应式 Web 应用：分享文案链接提取、解析任务管理、历史记录、多语言国际化与主题切换；集成 **Google OAuth** 与邮箱验证，完善登录状态与异常处理流程。

## 后端解析服务

基于 **FastAPI + SQLAlchemy** 封装 yt-dlp，支持 10+ 视频平台解析与下载链接下发；设计匿名用户额度、登录用户**滑动窗口限流**及 **JWT 双 Token 可撤销会话**机制。

## 复杂平台解析攻坚

针对小红书短链接跳转登录墙问题，实现**重定向参数解析与真实笔记链接还原**，自动提取隐藏在 `redirectPath` 中的访问参数，用户无需手动复制长链接。

## 跨平台桌面端

基于 **Tauri v2 + Rust** 构建桌面应用，采用 UI、Rust 命令层与独立 Sidecar 的分层架构：

- 下载进程管理与实时进度同步；
- 应用自动更新与 yt-dlp 组件**独立热更新**；
- 通过 **SHA-256 + minisign** 校验更新文件完整性与签名；
- 内置**本地 MCP Server**，供 AI Agent 直接调用工具能力。

## 工程化与自动化部署

编写 **130+ pytest** 测试用例，采用 `uv` 管理 Python 依赖；基于 **GitHub Actions** 构建 Windows / macOS 双平台自动化发布流水线；结合 Docker Compose + Caddy 完成服务容器化部署与 HTTPS 接入。
