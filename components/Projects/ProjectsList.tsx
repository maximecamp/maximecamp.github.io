"use client";

import { useState, useMemo } from "react";
import ProjectCard from "@/components/Projects/ProjectCard";
import { Project } from "@/types/project";
import { data } from "@/data/projects";

interface ProjectsListProps {
  projects: Project[];
}

export default function ProjectsList({ projects }: ProjectsListProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Extraire tous les tags uniques
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach(project => {
      project.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [projects]);

  // Filtrer les projets selon les tags sélectionnés
  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) {
      return projects;
    }
    return projects.filter(project =>
      selectedTags.every(tag => project.tags.includes(tag))
    );
  }, [projects, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedTags([]);
  };

  return (
    <div className="space-y-6">
      <h2 className="font-inter-tight text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
        {data.header.title}
      </h2>
      {/* Filtres par tags */}
      <div className="p-5 rounded-xl bg-white dark:bg-gray-800 shadow-sm">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Filtrer par technologies :
          </span>
          {selectedTags.length > 0 && (
            <button
              onClick={clearFilters}
              className="cursor-pointer text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              Effacer tout
            </button>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`cursor-pointer text-sm px-3 py-1.5 rounded-full border transition-all duration-200 ${
                selectedTags.includes(tag)
                  ? 'bg-blue-500 text-white border-blue-500 shadow-sm'
                  : 'bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Liste des projets */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project as Project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            Aucun projet trouvé avec les filtres sélectionnés.
          </p>
        </div>
      )}
    </div>
  );
}
