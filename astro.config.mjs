// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 👇 在这里填入你的 Cloudflare 网址 (例如 https://xxx.pages.dev)
  // 如果不知道，先填个占位符，等上线后再改，否则 RSS 会报错
  site: 'https://my-website-7yq.pages.dev', 
  
  vite: {
    plugins: [tailwindcss()]
  }
});