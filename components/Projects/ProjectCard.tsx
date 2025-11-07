import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link 
      href={`/projects/${project.slug}`}
      className="group block"
    >
      <div className="p-5 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out h-full">
        {/* Logo/Image placeholder */}
        <div className="w-full h-32 bg-gray-100 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
          {project.logo ? (
            <Image 
              src={project.logo} 
              alt={`Logo ${project.title}`}
              width={80}
              height={80}
              className="max-h-20 max-w-20 object-contain"
            />
          ) : (
            <div className="text-gray-400 dark:text-gray-500 text-sm">
              {project.title.charAt(0)}
            </div>
          )}
        </div>

        {/* Titre */}
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-base text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag, index) => (
            <span 
              key={index}
              className="text-xs px-2 py-1 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="text-xs px-2 py-1 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <span className="text-sm text-blue-600 dark:text-blue-400 group-hover:underline">
              Voir le projet →
            </span>
          </div>
      </div>
    </Link>
  );
}
