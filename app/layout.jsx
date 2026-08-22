import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const SITE_URL = "https://aurevian.agency";

export const metadata = {
  title: {
    default: "Aurevian",
    template: "%s — Aurevian",
  },
  description:
    "Aurevian builds software and AI solutions that solve real business problems, turning ideas into practical, scalable digital products.",
  keywords: [
    "Aurevian",
    "product engineering",
    "web development",
    "UI/UX design",
    "intelligent products",
    "software development",
    "modern design",
  ],
  authors: [{ name: "Aurevian" }],
  creator: "Aurevian",
  publisher: "Aurevian",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Aurevian",
    title: "Aurevian",
    description:
      "Aurevian builds software and AI solutions that solve real business problems, turning ideas into practical, scalable digital products.",
    url: SITE_URL,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurevian",
    description:
      "Aurevian builds software and AI solutions that solve real business problems, turning ideas into practical, scalable digital products.",
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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link
          rel="preload"
          href="/heroBG.mp4"
          as="video"
          fetchpriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Aurevian",
              url: SITE_URL,
              logo: `${SITE_URL}/favicon.svg`,
              description:
                "Aurevian builds software and AI solutions that solve real business problems, turning ideas into practical, scalable digital products.",
              sameAs: [
                "https://www.facebook.com/aurevian.agency",
                "https://www.instagram.com/aurevian_00/",
                "https://www.linkedin.com/company/aurevian-agency",
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
