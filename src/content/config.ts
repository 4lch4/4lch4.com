import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string().optional(),
			img_alt: z.string().optional(),
			repo: z.string().optional(),
		}),
	}),
	posts: defineCollection({
		schema: z.object({
			title: z.string(),
			summary: z.string(),
			draft: z.boolean().optional(),
			images: z.array(z.string()).optional(),
			createdDate: z.coerce.date(),
			publishedDate: z.coerce.date().optional(),
			modifiedDate: z.coerce.date().optional(),
			tags: z.array(z.string()).optional(),
		})
	})
};
