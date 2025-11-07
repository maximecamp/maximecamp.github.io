import Image from "next/image";
import { Project } from "@/types/project";
import { LIST_STYLES, DEFAULT_LIST_STYLE, ListStyle } from "@/styles/list-styles";
import CheckmarkIcon from "@/components/ui/icons/CheckmarkIcon";
import { BackToProjects, SectionNavigation } from "@/components/navigation";
import ProjectTechnologies from "./ProjectTechnologies";

interface ProjectDetailProps {
  project: Project;
}

interface ListItemProps {
  items: string[];
  style: ListStyle;
}

function ListItem({ items, style }: ListItemProps) {
  const listConfig = LIST_STYLES[style];
  
  if (style === 'decimal') {
    return (
      <ol className="space-y-2 pl-6" style={{ listStyleType: listConfig.listStyleType }}>
        {items.map((item, itemIndex) => (
          <li key={itemIndex} className="text-base text-gray-600 dark:text-gray-400">
            {item}
          </li>
        ))}
      </ol>
    );
  }
  
  return (
    <ul className="space-y-2">
      {items.map((item, itemIndex) => (
        <li key={itemIndex} className={listConfig.className}>
          {listConfig.useSvgIcon && (
            <CheckmarkIcon className="w-4 h-4 fill-current text-green-500 mr-3 mt-0.5 shrink-0" />
          )}
          {listConfig.icon && !listConfig.useSvgIcon && (
            <span className="text-gray-600 dark:text-gray-400 mr-3 mt-1 shrink-0 text-lg leading-none">
              {listConfig.icon}
            </span>
          )}
          <span className="text-base text-gray-600 dark:text-gray-400">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="space-y-8">
      {/* Header du projet */}
      <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          {/* Logo */}
          <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center shrink-0">
            {project.logo ? (
              <Image 
                src={project.logo} 
                alt={`Logo ${project.title}`}
                width={64}
                height={64}
                className="max-h-16 max-w-16 object-contain"
              />
            ) : (
              <div className="text-gray-400 dark:text-gray-500 text-2xl font-bold">
                {project.title.charAt(0)}
              </div>
            )}
          </div>

          {/* Informations du projet */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
              {project.title}
            </h1>
            <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
              {project.description}
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="text-sm px-3 py-1 bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-800"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Technologies */}
            {project.technologies && (
              <ProjectTechnologies technologies={project.technologies} />
            )}

            {/* Lien externe */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
              >
                Voir le projet en ligne
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Contenu du projet */}
      <div className="space-y-6">
        {project.paragraphs.map((paragraph, index) => (
          <div key={index} className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm">
            {paragraph.title && (
              <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-6">
                {paragraph.title}
              </h2>
            )}
            {paragraph.text && (
            <p className="text-base text-gray-600 dark:text-gray-400 mb-6">
              {paragraph.text}
            </p>
            )}
            
            {/* Liste du paragraphe */}
            {paragraph.list && paragraph.list.length > 0 && (
              <div className="mb-6">
                {paragraph.list.map((listItem, listIndex) => (
                  <div key={listIndex} className="mb-4">
                    <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100 mb-3">
                      {listItem.title}
                    </h3>
                    <ListItem 
                      items={listItem.items} 
                      style={listItem.style || DEFAULT_LIST_STYLE} 
                    />
                  </div>
                ))}
              </div>
            )}
            
            {/* Images du paragraphe */}
            {paragraph.images.length > 0 && (
              <div className={`grid grid-cols-1 ${paragraph.images.length === 1 ? 'md:grid-cols-1' : 'md:grid-cols-3'} gap-4`}>
                {paragraph.images.map((image, index) => (
                  <div key={index} className="flex flex-col">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.width ?? 500}
                      height={image.height ?? 300}
                      className="w-full h-auto object-cover rounded-lg"
                    /> 
                    {image.legend && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
                        {image.legend}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation */}
      <SectionNavigation 
        left={<BackToProjects />}
      />
    </div>
  );
}
