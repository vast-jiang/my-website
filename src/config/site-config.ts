// src/config/site-config.ts

export const SITE_CONFIG = {
  title: 'Astro DOS Terminal',
  description: 'Personal Cyberpunk Command Center based on Astro v5',
  url: 'https://blog.jianghao.work', // 部署时确保此处正确
  author: {
    name: 'VAST_JIANG',
    id: '16909',
    location: 'CN_CHANGZHOU_WUJIN_7',
    avatar: '/images/avatar.png', // 请确保 public/images/ 下有此文件
  }
} as const;

export const SOCIAL_LINKS = [
  { name: 'GITHUB',   file: 'CODE.EXE',    url: 'https://github.com/vast-jiang', desc: '源代码仓库' },
  { name: 'BILIBILI', file: 'TV_BILI.EXE', url: 'https://b23.tv/x721wEC', desc: 'B站 频道' },
  { name: '抖音',     file: 'TIKTOK.BAT',  url: 'https://v.douyin.com/P2-kvozEmPA/', desc: '短视频' },
  { name: '视觉中国', file: 'PHOTO.JPG',   url: 'https://500px.com.cn/community/user-details/7486f8a4d4f76b956585e8113b24e2531', desc: '摄影集' },
  { name: 'STEAM',    file: 'GAME.EXE',    url: 'https://steamcommunity.com/profiles/76561199545014237/', desc: '游戏库' },
  { name: '嘉立创',   file: 'PCB.PRO',     url: 'https://oshwhub.com/ticdi/works', desc: '硬件工程' },
  { name: 'QQ邮箱',   file: 'MAIL.BAT',    url: 'mailto:16909925690@qq.com', desc: '发送邮件' },
  { name: 'GMAIL',    file: 'GMAIL.BAT',   url: 'mailto:jianghao1573@gmail.com', desc: 'Global Mail' },
  
  // 👇 新增 RSS 订阅入口
  { name: 'RSS订阅',  file: 'FEED.XML',    url: '/rss.xml', desc: '订阅最新文章' },
];

export const CONTACTS = [
  { name: '微信', file: 'WECHAT.INI', value: 'CjCjHaoHaoHao', hint: '添加请备注' },
  { name: 'QQ',   file: 'TENCENT.MSG', value: '1690925690', hint: '在线' },
  { name: '闲鱼', file: 'MARKET.LOG',  value: '搜: Fluoxetine', hint: '交易' },
];

export const SKILLS = [
  { name: 'FRONTEND_DEV', lv: 92, mem: '0x0A' },
  { name: 'HARDWARE_ENG', lv: 75, mem: '0x0B' },
  { name: 'PHOTOGRAPHY',  lv: 85, mem: '0x0C' },
  { name: 'UI_DESIGN',    lv: 60, mem: '0x0D' },
];

export const MUSIC_PLAYLIST = [
  { name: "Art Inside-VØJ_Gotei.mp3", url: "/music/Art Inside-VØJ_Gotei.mp3" }, 
  // 在此添加更多: { name: "LOFI.mp3", url: "/music/lofi.mp3" },
];

export interface ProjectItem {
  type: string;
  title: string;
  link: string;
  date?: string;
  img?: string;
  desc?: string;
  tech?: string[];
  size?: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    type: "PHOTO",
    title: "风景",
    date: "2025.10",
    img: "https://youke1.picui.cn/s1/2025/11/28/6929bd6ed8f55.jpg",
    link: "#",
  },
  {
    type: "CODE",
    title: "Astro-DOS",
    desc: "我的个人网站源码",
    tech: ["Astro", "TS"],
    link: "https://github.com/vast-jiang",
  },
  {
    type: "FILE",
    title: "JhNovel Setup 1.0.0.exe",
    size: "115.9MB",
    desc: "点击下载简历",
    link: "https://pibt.cpolar.cn/down/O9vMnOrL9MLr.exe",
  },
];