import "./globals.css";

export const metadata = {
  title: "Aurevian",
  description:
    "Engineering intelligent products with modern design, smooth user experiences, and scalable development for the next era.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="icon" type="image/svg+xml" href="/aurevian.png" />
      </head>
      <body className="dark" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
