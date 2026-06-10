import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import config from "@/config";

export const BLOG_PATH = "src/content/blogs";
export const PAGE_PATH = "src/content/pages";

const posts = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: `./${BLOG_PATH}` }),
  schema: () =>
    z.object({
      author: z.string().default(config.site.author),
      pubDatetime: z.date(),
      title: z.string(),
      tags: z.array(z.string()).default(["others"]),
      description: z.string(),
      canonicalURL: z.string().optional(),
      timezone: z.string().optional(),
    }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: `./${PAGE_PATH}` }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      canonicalURL: z.string().optional(),
    }),
});

export const collections = { posts, pages };
