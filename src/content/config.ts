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
			draft: z.boolean().optional(),
		}),
	}),
	posts: defineCollection({
		schema: z.object({
			title: z.string(),
			summary: z.string(),
			images: z.array(z.string()),
			createdDate: z.coerce.date(),
			modifiedDate: z.coerce.date(),
			publishDate: z.coerce.date(),
			author: z.string(),
			slug: z.string().optional(),
			tags: z.array(z.string()),
			draft: z.boolean().optional(),
		})
	})
};
