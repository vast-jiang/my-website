# 📟 Astro DOS Cyberpunk Terminal

<div align="center">

![Astro](https://img.shields.io/badge/Astro_v5-2C2052?style=for-the-badge&logo=astro&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**一个运行在浏览器里的赛博朋克微型操作系统**
<br>
A retro-futuristic mini OS running in your browser.

[🇨🇳 中文文档](#-中文文档) | [🇺🇸 English Docs](#-english-documentation)

</div>

---

## 🇨🇳 中文文档

### 📖 项目简介

**Astro DOS Terminal** 是一个具有高度沉浸感的个人主页与博客系统。它摒弃了传统的网页布局，完美融合了 MS-DOS 的怀旧指令交互与 Cyberpunk 2077 的视觉美学。

这不仅仅是一个静态博客，它包含了一个**虚拟文件系统 (VFS)**、**全局命令行终端**以及**沉浸式媒体体验**。

### ✨ 核心特性

| 模块 | 功能描述 |
| :--- | :--- |
| **📺 视觉引擎** | 真实的 CRT 扫描线、文字辉光、屏幕曲面畸变与复古开机动画。 |
| **💻 终端系统** | **CLI 2.0 核心**。支持 `ls`, `cd`, `cat`, `open`, `sudo` 等指令，像黑客一样浏览网站。 |
| **🗂️ 虚拟文件系统** | 模拟真实的目录结构 (`/home`, `/bin`, `/var/log`)，支持自定义文件与快捷方式。 |
| **🎵 媒体中心** | 全局持久化音乐播放器，支持切歌、暂停与**实时频谱可视化**。 |
| **🏷️ 索引系统** | 数据库风格的**标签云 (Tag Cloud)**，支持多维度筛选文章。 |
| **💬 通讯模块** | 集成 **Giscus** 评论系统，定制化**透明暗色主题**，完美融入玻璃面板。 |
| **⚡ 极致性能** | 基于 **Astro v5** + **View Transitions**，实现 APP 般的无刷新流畅体验。 |

### 📂 项目架构 (V3.0.0)

项目采用领域驱动设计 (DDD)，结构清晰，易于维护：

```
/
├── public/                  # 静态资源 (图片、音乐、下载文件)
├── src/
│   ├── components/          # UI 组件库
│   │   ├── common/          # 原子组件 (SEO头部, 图片防挂, 搜索)
│   │   ├── dashboard/       # 仪表盘组件 (系统监控, 留言板, 作品集)
│   │   ├── layout/          # 布局组件 (页眉, 页脚)
│   │   └── system/          # 系统核心 (控制台, CLI逻辑, 播放器)
│   ├── config/              # ⚙️ 配置中心 (修改此处即可定制网站)
│   │   ├── site-config.ts   # 个人信息、社交链接、Giscus配置
│   │   └── terminal-fs.ts   # 虚拟文件系统定义
│   ├── content/             # Markdown 博客文章
│   ├── layouts/             # 页面基础布局
│   └── pages/               # 路由页面 (首页, 标签页, RSS等)
└── package.json
```
### 🚀 快速开始

在终端中运行以下命令：

| 命令 | 作用 |
| :--- | :--- |
| `npm install` | 安装依赖 |
| `npm run dev` | 启动本地开发服务器 (localhost:4321) |
| `npm run build` | 构建生产环境代码到 `./dist/` |
| `npm run preview` | 预览生产环境构建效果 |

### ⚙️ 个性化配置指南

你不需要懂复杂的代码即可定制此主题，只需修改 `src/config/` 下的文件：

#### 1. 身份与社交 (Site Config)

编辑 `src/config/site-config.ts`：

- `SITE_CONFIG`: 修改网站标题、你的名字、ID、地理位置。
- `SOCIAL_LINKS`: 修改首页显示的社交卡片。
- `MUSIC_PLAYLIST`: 替换为你喜欢的 `.mp3` 音乐链接。
- `GISCUS_CONFIG`: 填入你的 GitHub Repo ID 和 Category ID。

#### 2. 定制终端文件 (Virtual FS)

编辑 `src/config/terminal-fs.ts`：

- 添加 `type: 'file'`：创建文本文件（访客可用 `cat` 读取）。
- 添加 `type: 'link'`：创建快捷方式（访客可用 `open` 跳转）。

#### 3. 快速写博客 (VS Code)

在 `.md` 文件中输入 `dosblog` 并回车，自动生成标准头部：
yaml
title: "文章标题"
description: "文章摘要"
date: 2025-01-01
tags: ["TECH", "LIFE"]
draft: false
### 🎮 终端彩蛋指令

在网页任意位置按 <kbd>Ctrl</kbd> + <kbd>K</kbd> 或点击右下角按钮呼出终端：

- `help` : 查看指令清单
- `ls` / `ll` : 列出当前目录文件
- `whoami` : 查看当前访客身份
- `game` : 玩"猜数字"小游戏
- `matrix` : 进入黑客帝国模式 (视觉特效)
- `reboot` : 重启系统界面

---

## 🇺🇸 English Documentation

### 📖 Introduction

**Astro DOS Terminal** is a highly immersive, retro-futuristic personal website system. It abandons traditional web layouts in favor of a fusion between MS-DOS nostalgia and Cyberpunk 2077 aesthetics.

It is not just a blog; it is a **Simulated Operating System** running in your browser.

### ✨ Key Features

| Module | Description |
| :--- | :--- |
| **📺 Visual Engine** | Authentic CRT scanlines, text glow, screen curvature, and retro boot sequences. |
| **💻 Terminal OS** | **CLI 2.0 Core**. Use `ls`, `cd`, `cat`, `open`, `sudo` to browse the site like a hacker. |
| **🗂️ Virtual FS** | Simulated file system (`/home`, `/bin`, `/var/log`) with custom files and shortcuts. |
| **🎵 Media Center** | Global persistent music player with track switching and real-time visualizer. |
| **🏷️ Index System** | Database-style **Tag Cloud** for filtering articles. |
| **💬 Comms** | Integrated Giscus comments with a custom transparent dark theme. |
| **⚡ Performance** | Built on **Astro v5** with **View Transitions** for an App-like experience. |

### 📂 Project Structure (V3.0.0)

Domain-Driven Design (DDD) structure for easy maintenance:
```
/
├── public/                  # Static assets (images, music, downloads)
├── src/
│   ├── components/          # UI Component Library
│   │   ├── common/          # Atoms (SEO Head, Image, Search)
│   │   ├── dashboard/       # Widgets (Monitor, GuestBook, Portfolio)
│   │   ├── layout/          # Layout (Header, Footer)
│   │   └── system/          # Core (Console, CLI Logic, Audio Player)
│   ├── config/              # ⚙️ Configuration Center
│   │   ├── site-config.ts   # Personal info, Socials, Giscus config
│   │   └── terminal-fs.ts   # Virtual FS Definitions
│   ├── content/             # Markdown Blog Posts
│   ├── layouts/             # Page Layouts
│   └── pages/               # Route Pages (Home, Tags, RSS, etc.)
└── package.json
```
### 🚀 Getting Started

Run these commands in your terminal:

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server (`localhost:4321`) |
| `npm run build` | Build for production to `./dist/` |
| `npm run preview` | Preview production build locally |

### ⚙️ Customization Guide

#### 1. Identity & Socials

Edit `src/config/site-config.ts`:

- Update `SITE_CONFIG` with your name, location, and ID.
- Update `SOCIAL_LINKS` and `MUSIC_PLAYLIST`.
- Update `GISCUS_CONFIG` with your repository details.

#### 2. Virtual File System

Edit `src/config/terminal-fs.ts`:

- Add `type: 'file'` for text files (readable via `cat`).
- Add `type: 'link'` for shortcuts (openable via `open`).

### 🎮 Terminal Commands

Press <kbd>Ctrl</kbd> + <kbd>K</kbd> to toggle the global terminal:

- `help` : List available commands.
- `ls` : List directory contents.
- `whoami` : Show current user session.
- `game` : Play a mini-game.
- `matrix` : Trigger visual effects.
- `reboot` : Restart the UI.

---

<div align="center">
Built with ❤️ by VAST_JIANG
</div>
