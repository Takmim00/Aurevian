import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: "Aurevian",
  description:
    "Engineering intelligent products with modern design, smooth user experiences, and scalable development for the next era.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" data-scroll-behavior="smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/aurevian.webp" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preload" href="/heroBG.mp4" as="video" fetchpriority="high" />
      </head>
      <body className="dark" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
