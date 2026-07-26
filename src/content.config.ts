import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				/**
				 * Souther source shown beside the hero copy, in place of the hero image.
				 * Rendered by src/components/Hero.astro.
				 */
				heroCode: z.string().optional(),
			}),
		}),
	}),
};
