import { defineCollection, z } from 'astro:content';

const knowledge = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.enum(['ecommerce', 'cro', 'shopify', 'metrics']),
    type: z.enum(['concept', 'comparison', 'shopify', 'metric', 'cro']),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).default('beginner'),
    
    // Search Aliases & Tags
    aliases: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),

    // Direct Slug References
    relatedSlugs: z.array(z.string()).default([]),
    confusedWithSlugs: z.array(z.string()).default([]),
    shopifySlug: z.string().optional(),
    comparisonSlugs: z.array(z.string()).default([]),

    // Parent-Child Hierarchy Diagram nodes
    hierarchy: z.array(z.object({
      label: z.string(),
      url: z.string().optional(),
      description: z.string().optional(),
      isCurrent: z.boolean().optional()
    })).default([]),

    // Simple Learning Path Step
    learningPath: z.object({
      id: z.string(),
      title: z.string(),
      order: z.number(),
      nextSlug: z.string().optional(),
      prevSlug: z.string().optional()
    }).optional(),

    // SEO
    seo: z.object({
      metaTitle: z.string().optional(),
      metaDescription: z.string().optional()
    }).optional(),

    draft: z.boolean().default(false)
  })
});

export const collections = {
  knowledge
};
