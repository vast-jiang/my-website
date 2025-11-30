// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import AstroPWA from '@vite-pwa/astro';

export default defineConfig({
  site: 'https://blog.jianghao.work', // 替换为你的真实域名

  // 1. Markdown 配置 (为 TOC 做准备)
  markdown: {
    rehypePlugins: [
      rehypeSlug, // 自动给标题添加 ID (#title)
      [rehypeAutolinkHeadings, { behavior: 'wrap' }], // 给标题添加锚点链接
    ],
  },

  integrations: [
    // 2. PWA 配置
    AstroPWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Astro DOS Terminal',
        short_name: 'DOS_OS',
        description: 'Personal Cyberpunk Command Center',
        theme_color: '#000000',
        background_color: '#000000',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/favicon.svg', // 确保 public 目录下有这个图标
            sizes: '192x192',
            type: 'image/svg+xml',
          },
          {
            src: '/favicon.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,mp3}'], // 缓存这些文件
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});