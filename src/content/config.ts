import { defineCollection, z } from 'astro:content';

// 1. 定义博客集合
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
    image: z.string().optional(),
  }),
});

// 2. 定义项目集合 (你的报错是因为缺少这个!)
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().optional(),
    cover: z.string().optional(),
    link: z.string().optional(),
    // 枚举类型，确保类型安全
    type: z.enum(['CODE', 'HARDWARE', 'DESIGN', 'PHOTO', 'FILE']),
    tech: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
  }),
});

// 3. 导出集合 (必须包含 projects)
export const collections = { blog, projects };