import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const domain = "devopssimply.github.io";
  const protocol = "https";
  return [
    {
      url: `${protocol}://${domain}/`,
      lastModified: new Date(),
    },
    {
      url: `${protocol}://${domain}/json-editor`,
      lastModified: new Date(),
    },
  ];
}
