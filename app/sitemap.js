import { getAllProjectSlugs } from "../src/lib/projects-data";

const SITE_URL = "https://aurevian.agency";

export default async function sitemap() {
  const projectSlugs = getAllProjectSlugs();

  const projectPages = projectSlugs.map((slug) => ({
    url: `${SITE_URL}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...projectPages,
  ];
}
