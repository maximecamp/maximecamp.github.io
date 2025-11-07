import { notFound } from "next/navigation";
import { data as projectsData } from "@/data/projects";
import ProjectDetail from "@/components/Projects/ProjectDetail";
import { Project } from "@/types/project";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectsData.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.projects.find(
    (p) => p.slug === slug
  );

  if (!project) {
    return {
      title: "Projet non trouvé",
    };
  }

  return {
    title: `${project.title} - Maxime Camp`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.projects.find(
    (p) => p.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <section>
      <ProjectDetail project={project as Project} />
    </section>
  );
}
