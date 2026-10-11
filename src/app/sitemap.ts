import type { MetadataRoute } from "next";
import { hubs, landings } from "@/lib/content";
import { articles } from "@/lib/insights";
import { tools } from "@/lib/resources";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const u = (p: string) => `${SITE.url}${p}`;
  return [
    { url: u("/"), priority: 1, changeFrequency: "weekly" },
    ...hubs.map((h) => ({ url: u(`/${h.slug}`), priority: 0.8, changeFrequency: "monthly" as const })),
    ...landings.map((l) => ({ url: u(`/${l.slug}`), priority: l.kind === "spares" ? 0.9 : l.kind === "series" ? 0.8 : 0.7, changeFrequency: "monthly" as const })),
    { url: u("/obsolete-parts"), priority: 0.9, changeFrequency: "monthly" as const },
    { url: u("/insights"), priority: 0.6, changeFrequency: "weekly" },
    ...articles.map((a) => ({ url: u(`/insights/${a.slug}`), priority: 0.5, lastModified: a.date })),
    { url: u("/resources"), priority: 0.8, changeFrequency: "weekly" },
    ...tools.map((t) => ({ url: u(`/resources/tools/${t.slug}`), priority: 0.7, changeFrequency: "monthly" as const })),
    { url: u("/resources/glossary"), priority: 0.6 },
    { url: u("/resources/nameplate-checklist"), priority: 0.5 },
    { url: u("/about"), priority: 0.5 },
    { url: u("/contact-industrial-automation-supplier"), priority: 0.8 },
  ];
}
