import { getRelativeLocaleUrl } from "astro:i18n";
import { MISC_PATH } from "@/content.config";
import { slugifyStr } from "./slugify";
import config from "@/config";

function getPagePathSegments(filePath: string | undefined): string[] {
  return (
    filePath
      ?.replace(MISC_PATH, "")
      .split("/")
      .filter(path => path !== "")
      .filter(path => !path.startsWith("_"))
      .slice(0, -1)
      .map(segment => slugifyStr(segment)) ?? []
  );
}

function getIdSlug(id: string): string {
  const pageId = id.split("/");
  return pageId.length > 0 ? String(pageId[pageId.length - 1]) : id;
}

function getPageSlugPath(id: string, filePath: string | undefined): string {
  const pathSegments = getPagePathSegments(filePath);
  const slug = getIdSlug(id);
  return pathSegments.length > 0
    ? [...pathSegments, slug].join("/")
    : String(slug);
}

/**
 * Returns the slug-only path for use as a route param in `getStaticPaths`.
 * No base prefix, no locale — Astro handles those at a higher level.
 * e.g. `/examples/my-post`
 */
export function getPageSlug(id: string, filePath: string | undefined): string {
  return `/${getPageSlugPath(id, filePath)}/`;
}

/**
 * Returns a fully navigable URL for use in `<a href>` and RSS links.
 * Applies both locale routing and the configured Astro base via
 * `getRelativeLocaleUrl`.
 * e.g. `/posts/my-post` or `/en/posts/my-post`
 */
export function getPageUrl(
  id: string,
  filePath: string | undefined,
  locale: string | undefined = config.site.lang
): string {
  return getRelativeLocaleUrl(locale, `/${getPageSlugPath(id, filePath)}/`);
}
