"use client";

import { useState } from "react";
import ChevronIcon from "@/components/ui/icons/ChevronIcon";

interface ProjectTechnologiesProps {
  technologies: Array<{
    what: string;
    using: string[];
  }>;
}

export default function ProjectTechnologies({ technologies }: ProjectTechnologiesProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!technologies || technologies.length === 0) {
    return null;
  }

  return (
    <div className="mt-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="inline-flex items-center font-medium transition-all duration-200 ease-in-out rounded-lg px-3 py-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer"
      >
        {isExpanded ? "Masquer" : "Afficher le détail de la stack technique"}
        <ChevronIcon className={`w-4 h-4 ml-1 transition-transform duration-200 ease-in-out ${isExpanded ? 'rotate-180' : ''}`} />
      </button>

      {isExpanded && (
        <div className="mt-4 space-y-4">
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200 shrink-0">
                {tech.what}
              </span>
              <div className="flex flex-wrap gap-2">
                {tech.using.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="text-sm px-2.5 py-1 bg-gray-50 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
