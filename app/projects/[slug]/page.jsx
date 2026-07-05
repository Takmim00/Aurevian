import { getAllProjectSlugs, getProjectBySlug } from "../../../src/lib/projects-data";
import Details from "../../../src/sections/Details";
import ClientShell from "../../ClientShell";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllProjectSlugs().map((id) => ({ slug: id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  return {
    title: `${project.title} — Aurevian`,
    description: project.tagline,
    openGraph: {
      title: project.title,
      description: project.tagline,
      images: [{ url: project.image1, width: 1200, height: 900 }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.tagline,
      images: [project.image1],
    },
    alternates: {
      canonical: `https://aurevian.com/projects/${project.id}`,
    },
  };
}

export default async function ProjectDetailsPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <ClientShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: project.title,
            description: project.tagline,
            image: project.image1,
            url: `https://aurevian.com/projects/${project.id}`,
            keywords: project.tags?.join(", "),
            datePublished: project.year,
          }),
        }}
      />
      <Details project={project} />
    </ClientShell>
  );
}
