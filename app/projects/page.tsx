import { data as projectsData } from "@/data/projects";
import ProjectsList from "@/components/Projects/ProjectsList";
import { Project } from "@/types/project";
import { BackToHome, SectionNavigation } from "@/components/navigation";
import JsonLd from "@/components/ui/json-ld";
import { generateItemListSchema, SITE_URL } from "@/lib/structured-data";

export const metadata = {
  title: 'Projets - Maxime Camp Développeur freelance react, node.js, react native, flutter à Paris',
  description: 'Découvrez mes projets de développement web et mobile réalisés avec React, TypeScript, Node.js, React Native et Flutter.',
  keywords: ["Maxime Camp", "Développeur freelance", "React", "TypeScript", "Node.js", "React Native", "Flutter", "Paris", "Projets"],
  authors: [{ name: "Maxime Camp" }],
  creator: "Maxime Camp",
  publisher: "Maxime Camp",
  openGraph: {
    title: "Projets - Maxime Camp Développeur freelance react, node.js, react native, flutter à Paris",
    description: "Découvrez mes projets de développement web et mobile réalisés avec React, TypeScript, Node.js, React Native et Flutter.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ProjectsPage() {
  const itemListSchema = generateItemListSchema({
    name: 'Projets - Maxime Camp',
    description: 'Découvrez mes projets de développement web et mobile réalisés avec React, TypeScript, Node.js, React Native et Flutter.',
    url: `${SITE_URL}/projects`,
    items: projectsData.projects.map(project => ({
      name: project.title,
      description: project.description,
      url: `${SITE_URL}/projects/${project.slug}`,
    })),
  })

  return (
    <>
      <JsonLd data={itemListSchema} id="json-ld-projects" />
      <div className="space-y-6">
      <ProjectsList projects={projectsData.projects as Project[]} />
      {/* Navigation */}
      <SectionNavigation 
        left={<BackToHome />}
        className="mt-12"
      />
    </div>
    </>
  );
}
