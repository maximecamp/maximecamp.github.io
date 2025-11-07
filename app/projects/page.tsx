import { data as projectsData } from "@/data/projects";
import ProjectsList from "@/components/Projects/ProjectsList";
import { Project } from "@/types/project";
import { BackToHome, SectionNavigation } from "@/components/navigation";

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <ProjectsList projects={projectsData.projects as Project[]} />
      {/* Navigation */}
      <SectionNavigation 
        left={<BackToHome />}
        className="mt-12"
      />
    </div>
  );
}
