import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

const SITE_URL = "https://aurevian.agency";

export const metadata = {
  title: {
    default: "Aurevian — Intelligent Product Engineering",
    template: "%s — Aurevian",
  },
  description:
    "Engineering intelligent products with modern design, smooth user experiences, and scalable development for the next era.",
  keywords: [
    "Aurevian", "product engineering", "web development", "UI/UX design",
    "intelligent products", "software development", "modern design",
  ],
  authors: [{ name: "Aurevian" }],
  creator: "Aurevian",
  publisher: "Aurevian",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Aurevian",
    title: "Aurevian — Intelligent Product Engineering",
    description:
      "Engineering intelligent products with modern design, smooth user experiences, and scalable development for the next era.",
    url: SITE_URL,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurevian — Intelligent Product Engineering",
    description:
      "Engineering intelligent products with modern design, smooth user experiences, and scalable development for the next era.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: SITE_URL },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" data-scroll-behavior="smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/aurevian.webp" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preload" href="/heroBG.mp4" as="video" fetchpriority="high" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Aurevian",
              url: SITE_URL,
              logo: `${SITE_URL}/aurevian.webp`,
              description:
                "Engineering intelligent products with modern design, smooth user experiences, and scalable development for the next era.",
              sameAs: [
                // Social links add korte paro ekhane
              ],
            }),
          }}
        />
      </head>
      <body className="dark" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
