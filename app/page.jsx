import Home from "../src/sections/Home";
import ClientShell from "./ClientShell";

export const metadata = {
  title: "Aurevian",
  description:
    "Aurevian builds software and AI solutions that solve real business problems, turning ideas into practical, scalable digital products.",
  openGraph: {
    title: "Aurevian",
    description:
      "Aurevian builds software and AI solutions that solve real business problems, turning ideas into practical, scalable digital products.",
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
              "Aurevian builds software and AI solutions that solve real business problems, turning ideas into practical, scalable digital products.",
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
