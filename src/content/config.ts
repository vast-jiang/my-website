import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content', // 必须写这个，表示是内容集合
  schema: z.object({
    // 1. 必填项：必须要有标题
    title: z.string(),
    
    // 2. 必填项：必须要有描述
    description: z.string(),
    
    // 3. 必填项：日期
    // z.coerce.date() 意思是：不管你写的是 '2025-11-29' 字符串还是日期对象，都强制转成日期格式
    date: z.coerce.date(),
    
    // 4. 可选项：标签 (解决你可能的报错点)
    // z.array(z.string()) 表示它是字符串数组 ['a', 'b']
    // .optional() 表示你可以不写这个字段，不会报错
    tags: z.array(z.string()).optional(),
    
    // 5. 可选项：草稿状态 (true/false)
    draft: z.boolean().optional(),
    
    // 6. 可选项：封面图 (如果以后想加)
    image: z.string().optional(),
  }),
});

// 导出集合，名字必须叫 'blog'，因为你的文件夹叫 src/content/blog
export const collections = { blog };