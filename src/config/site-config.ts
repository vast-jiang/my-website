export const SITE_CONFIG = {
  title: 'Astro DOS Terminal',
  description: 'Personal Cyberpunk Command Center based on Astro v5',
  url: 'https://blog.jianghao.work',
  author: {
    name: 'VAST_JIANG',
    id: '16909',
    location: 'CN_CHANGZHOU_WUJIN_7',
    avatar: '/images/avatar.png',
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
  { name: "CYBER_CITY.mp3", url: "/music/bgm.mp3" }, 
];

export const GISCUS_CONFIG = {
  repo: "vast-jiang/astro-dos-theme",
  repoId: "R_kgDOQeuWZg",
  category: "Announcements",
  categoryId: "DIC_kwDOQeuWZs4CzMLe",
  theme: "transparent_dark",
  lang: "zh-CN"
} as const;

// ⚡ 特性开关 (Feature Flags)
export const FEATURES = {
  // 核心功能
  search: false,
  codeCopy: true,
  
  // 仪表盘
  weather: true,
  clock: true,
  yearProgress: true,
  ipStatus: true,
  
  // 娱乐与特效
  glitch: true,
  games: true,
  matrix: true,
  
  // 👇 新增两个独立开关
  techGraph: true,  // 技术栈拓扑图
  gameGraph: true,  // 游戏库拓扑图
} as const;

export interface ProjectItem {
  type: string;
  title: string;
  link: string;
  date?: string;
  img?: string;
  desc?: string;
  tech?: string[];
  size?: string;
  featured?: boolean;
}
export const PROJECTS: ProjectItem[] = [];