import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const front = defineCollection({
	schema: z.object({
		orientation: z.string(),
		buttonHref: z.string(),
		style: z.string(),
		title: z.string(),
		heroImage: z.string(),
		buttonText: z.string(),
	}),
});

const store = defineCollection({
	loader: glob({ base: './src/content/store', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		price: z.string(),
		description: z.string(),
		heroImage: z.string(),
		productImageOne: z.string(),
		productImageTwo: z.string(),
		productImageThree: z.string().optional(),
		productImageFour: z.string().optional(),
		productImageFive: z.string().optional(),
		buttonHref: z.string(),
		buttonText: z.string(),
		releaseDate: z.coerce.date(),
	}),
});

const portfolio = defineCollection({
	loader: glob({ base: './src/content/portfolio', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		heroImage: z.string(),
		productImageOne: z.string(),
		productImageTwo: z.string(),
		productImageThree: z.string().optional(),
		productImageFour: z.string().optional(),
		productImageFive: z.string().optional(),
		productImageSix: z.string().optional(),
		releaseDate: z.coerce.date(),
		services: z.array(z.string()),
	}),
});

export const collections = { blog, front, store, portfolio };
