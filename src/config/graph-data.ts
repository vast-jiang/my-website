// 定义节点颜色
const C = {
  CORE: '#ffffff',      // 核心 (白色)
  MECH: '#ff9900',      // 机械 (橙色)
  ELEC: '#33ff00',      // 电子 (绿色)
  SOFT: '#00ccff',      // 软件/Web (蓝色)
  TOOL: '#ff3355',      // 工具/设计 (红色)
  GAME: '#bd00ff',      // 游戏 (紫色)
};

// 1. 技术栈数据
export const TECH_NODES = [
  // 核心
  { id: '0', name: 'VAST_JIANG', symbolSize: 50, category: 'CORE', color: C.CORE },
  
  // 机械类 (MECH)
  { id: '1', name: '机械制图', symbolSize: 20, category: 'MECH', color: C.MECH },
  { id: '2', name: 'SolidWorks', symbolSize: 25, category: 'MECH', color: C.MECH },
  { id: '3', name: 'CAD', symbolSize: 20, category: 'MECH', color: C.MECH },
  { id: '4', name: '液压与气动', symbolSize: 15, category: 'MECH', color: C.MECH },
  { id: '5', name: 'Ansys', symbolSize: 18, category: 'MECH', color: C.MECH },

  // 电子/控制 (ELEC)
  { id: '6', name: 'Proteus', symbolSize: 18, category: 'ELEC', color: C.ELEC },
  { id: '7', name: '电子技术', symbolSize: 20, category: 'ELEC', color: C.ELEC },
  { id: '8', name: '控制技术', symbolSize: 18, category: 'ELEC', color: C.ELEC },
  { id: '9', name: '模拟电路', symbolSize: 15, category: 'ELEC', color: C.ELEC },
  { id: '10', name: '数字电路', symbolSize: 15, category: 'ELEC', color: C.ELEC },
  { id: '11', name: 'PCB', symbolSize: 22, category: 'ELEC', color: C.ELEC },
  { id: '12', name: '嵌入式', symbolSize: 25, category: 'ELEC', color: C.ELEC },
  { id: '13', name: 'LoRa', symbolSize: 18, category: 'ELEC', color: C.ELEC },
  { id: '14', name: 'Meshtastic', symbolSize: 15, category: 'ELEC', color: C.ELEC },

  // 软件/算法 (SOFT)
  { id: '15', name: 'Matlab', symbolSize: 20, category: 'SOFT', color: C.SOFT },
  { id: '16', name: 'C语言', symbolSize: 25, category: 'SOFT', color: C.SOFT },
  { id: '17', name: 'Web', symbolSize: 22, category: 'SOFT', color: C.SOFT },
  { id: '18', name: 'Linux', symbolSize: 25, category: 'SOFT', color: C.SOFT },
  { id: '19', name: 'TIA Portal', symbolSize: 18, category: 'SOFT', color: C.SOFT },

  // 设计/工具 (TOOL)
  { id: '20', name: 'Lightroom', symbolSize: 18, category: 'TOOL', color: C.TOOL },
  { id: '21', name: 'Photoshop', symbolSize: 20, category: 'TOOL', color: C.TOOL },
  { id: '22', name: 'DaVinci', symbolSize: 20, category: 'TOOL', color: C.TOOL },
];

// 自动生成连线：所有节点连接到 ID=0 (VAST_JIANG)
export const TECH_LINKS = TECH_NODES.filter(n => n.id !== '0').map(n => ({
  source: '0',
  target: n.id
}));


// 2. 游戏库数据
export const GAME_NODES = [
  // 核心
  { id: 'g0', name: 'PLAYER_ONE', symbolSize: 50, category: 'CORE', color: C.CORE },

  // 游戏列表 (GAME)
  { id: 'g1', name: 'Minecraft', symbolSize: 30, category: 'GAME', color: C.GAME },
  { id: 'g2', name: 'Clash of Clans', symbolSize: 20, category: 'GAME', color: C.GAME },
  { id: 'g3', name: 'Terraria', symbolSize: 25, category: 'GAME', color: C.GAME },
  { id: 'g4', name: 'Stardew Valley', symbolSize: 22, category: 'GAME', color: C.GAME },
  { id: 'g5', name: "Don't Starve", symbolSize: 22, category: 'GAME', color: C.GAME },
  { id: 'g6', name: 'Project Zomboid', symbolSize: 20, category: 'GAME', color: C.GAME },
  { id: 'g7', name: 'Escape from Tarkov', symbolSize: 28, category: 'GAME', color: C.GAME }, // 逃离塔科夫
];

// 自动生成连线
export const GAME_LINKS = GAME_NODES.filter(n => n.id !== 'g0').map(n => ({
  source: 'g0',
  target: n.id
}));