import { getAllProjectSlugs, getProjectBySlug } from "../../../src/lib/projects-data";
import Details from "../../../src/sections/Details";
import ClientShell from "../../ClientShell";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllProjectSlugs().map((id) => ({ slug: id }));
}

export default async function ProjectDetailsPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <ClientShell>
      <Details project={project} />
    </ClientShell>
  );
}
