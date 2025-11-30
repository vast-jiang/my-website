export class SnakeGame {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private onGameOver: (score: number) => void;
  
  // 游戏配置
  private readonly grid = 20; // 格子大小
  private readonly speed = 100; // 移动间隔 (毫秒)，越小越快
  
  // 状态变量
  private lastTime = 0;
  private accumulator = 0;
  private animationId: number | null = null;
  private isRunning = false;
  
  // 蛇与食物
  private snake: { x: number, y: number }[] = [];
  private direction = { x: 0, y: 0 };
  private nextDirection = { x: 0, y: 0 }; // 输入缓冲
  private apple = { x: 0, y: 0 };
  private score = 0;

  constructor(container: HTMLElement, onGameOver: (score: number) => void) {
    this.onGameOver = onGameOver;

    // 初始化画布
    this.canvas = document.createElement('canvas');
    this.canvas.width = 400;
    this.canvas.height = 400;
    this.canvas.style.border = '2px solid #33ff00';
    this.canvas.style.backgroundColor = '#050505';
    this.canvas.style.imageRendering = 'pixelated'; // 复古像素感
    this.canvas.style.boxShadow = '0 0 20px rgba(51, 255, 0, 0.2)';
    this.canvas.style.display = 'block';
    this.canvas.style.margin = '20px auto';
    container.appendChild(this.canvas);

    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;

    // 绑定按键 (绑定到 document 以确保响应)
    this.handleKey = this.handleKey.bind(this);
    this.loop = this.loop.bind(this);
  }

  // 初始化游戏状态
  public start() {
    if (this.isRunning) return;
    
    // 重置数据
    this.snake = [
      { x: 160, y: 160 },
      { x: 140, y: 160 },
      { x: 120, y: 160 },
      { x: 100, y: 160 }
    ];
    this.score = 0;
    this.direction = { x: this.grid, y: 0 }; // 初始向右
    this.nextDirection = { x: this.grid, y: 0 };
    this.placeApple();
    
    this.isRunning = true;
    this.lastTime = 0;
    this.accumulator = 0;
    
    document.addEventListener('keydown', this.handleKey);
    this.animationId = requestAnimationFrame(this.loop);
  }

  public stop() {
    this.isRunning = false;
    if (this.animationId) cancelAnimationFrame(this.animationId);
    document.removeEventListener('keydown', this.handleKey);
    this.canvas.remove();
  }

  private handleKey(e: KeyboardEvent) {
    // 阻止页面滚动
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(e.key)) {
      e.preventDefault();
    }

    // 输入缓冲逻辑：防止一帧内多次转向导致自杀
    // 只有当 当前移动方向 与 按键方向 不相反时，才允许改变 nextDirection
    switch (e.key) {
      case 'ArrowLeft':
        if (this.direction.x === 0) this.nextDirection = { x: -this.grid, y: 0 };
        break;
      case 'ArrowUp':
        if (this.direction.y === 0) this.nextDirection = { x: 0, y: -this.grid };
        break;
      case 'ArrowRight':
        if (this.direction.x === 0) this.nextDirection = { x: this.grid, y: 0 };
        break;
      case 'ArrowDown':
        if (this.direction.y === 0) this.nextDirection = { x: 0, y: this.grid };
        break;
    }
  }

  private placeApple() {
    // 确保苹果不生成在蛇身上
    let valid = false;
    while (!valid) {
      this.apple.x = this.getRandomInt(0, this.canvas.width / this.grid) * this.grid;
      this.apple.y = this.getRandomInt(0, this.canvas.height / this.grid) * this.grid;
      
      valid = !this.snake.some(segment => segment.x === this.apple.x && segment.y === this.apple.y);
    }
  }

  private getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  private update() {
    // 应用缓冲的方向
    this.direction = this.nextDirection;

    // 计算蛇头新位置
    const head = { 
      x: this.snake[0].x + this.direction.x, 
      y: this.snake[0].y + this.direction.y 
    };

    // 穿墙逻辑
    if (head.x < 0) head.x = this.canvas.width - this.grid;
    else if (head.x >= this.canvas.width) head.x = 0;
    
    if (head.y < 0) head.y = this.canvas.height - this.grid;
    else if (head.y >= this.canvas.height) head.y = 0;

    // 碰撞检测 (撞自己)
    // 从第4节开始检测，因为头不可能撞到颈部
    for (let i = 0; i < this.snake.length; i++) {
        if (head.x === this.snake[i].x && head.y === this.snake[i].y) {
            this.isRunning = false;
            this.onGameOver(this.score);
            return;
        }
    }

    // 移动：加入新头
    this.snake.unshift(head);

    // 吃苹果检测
    if (head.x === this.apple.x && head.y === this.apple.y) {
      this.score += 10;
      this.placeApple();
      // 吃到苹果不移除尾巴，蛇变长
    } else {
      // 没吃到，移除尾巴，维持长度
      this.snake.pop();
    }
  }

  private draw() {
    // 清空画布
    this.ctx.fillStyle = '#000000';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // 画网格背景 (可选，增加科技感)
    this.ctx.strokeStyle = '#003300';
    this.ctx.lineWidth = 0.5;
    for(let x=0; x<=this.canvas.width; x+=this.grid) {
        this.ctx.beginPath(); this.ctx.moveTo(x,0); this.ctx.lineTo(x, this.canvas.height); this.ctx.stroke();
    }
    for(let y=0; y<=this.canvas.height; y+=this.grid) {
        this.ctx.beginPath(); this.ctx.moveTo(0,y); this.ctx.lineTo(this.canvas.width, y); this.ctx.stroke();
    }

    // 画苹果
    this.ctx.fillStyle = '#ff3300';
    this.ctx.shadowBlur = 10;
    this.ctx.shadowColor = '#ff3300';
    this.ctx.fillRect(this.apple.x + 1, this.apple.y + 1, this.grid - 2, this.grid - 2);
    this.ctx.shadowBlur = 0;

    // 画蛇
    this.ctx.fillStyle = '#33ff00';
    this.snake.forEach((cell, index) => {
      // 蛇头稍微亮一点
      if (index === 0) {
          this.ctx.fillStyle = '#ccffcc';
          this.ctx.shadowBlur = 10;
          this.ctx.shadowColor = '#33ff00';
      } else {
          this.ctx.fillStyle = '#33ff00';
          this.ctx.shadowBlur = 0;
      }
      this.ctx.fillRect(cell.x + 1, cell.y + 1, this.grid - 2, this.grid - 2);
    });

    // 画分数
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    this.ctx.font = '12px monospace';
    this.ctx.fillText(`SCORE: ${this.score}`, 10, 20);
  }

  private loop(timestamp: number) {
    if (!this.isRunning) return;

    if (!this.lastTime) this.lastTime = timestamp;
    const deltaTime = timestamp - this.lastTime;
    this.lastTime = timestamp;
    this.accumulator += deltaTime;

    // 固定步长更新逻辑，防止高刷新率屏幕速度过快
    while (this.accumulator >= this.speed) {
      this.update();
      this.accumulator -= this.speed;
    }

    this.draw();
    this.animationId = requestAnimationFrame(this.loop);
  }
}