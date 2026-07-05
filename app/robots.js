const SITE_URL = "https://aurevian.agency";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/_next/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
