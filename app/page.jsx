import Home from "../src/sections/Home";
import ClientShell from "./ClientShell";

export const metadata = {
  title: "Aurevian — Intelligent Product Engineering",
  description:
    "Engineering intelligent products with modern design, smooth user experiences, and scalable development for the next era.",
  openGraph: {
    title: "Aurevian — Intelligent Product Engineering",
    description:
      "Engineering intelligent products with modern design, smooth user experiences, and scalable development for the next era.",
    url: "https://aurevian.agency",
  },
  alternates: {
    canonical: "https://aurevian.agency",
  },
};

export default function HomePage() {
  return (
    <ClientShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Aurevian",
            url: "https://aurevian.agency",
            description:
              "Engineering intelligent products with modern design, smooth user experiences, and scalable development for the next era.",
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://aurevian.agency/search?q={search_term_string}",
              },
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
      <Home />
    </ClientShell>
  );
}
