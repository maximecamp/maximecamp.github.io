'use client';

import Image from "next/image";
import { useState } from "react";

type Technology = {
  tag?: string;
  highlighted?: boolean;
};

type ExperienceItem = {
  title?: string;
  subtitle?: string;
  category?: string;
  link?: string;
  icon?: string;
  date?: string;
  location?: string;
  description?: string;
  technologies?: Technology[];
};

interface ExperienceProps {
  sectionTitle: string;
  items: ExperienceItem[];
}

export default function Experience({ sectionTitle, items }: ExperienceProps) {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggleExpand = (index: number) => {
    setExpanded(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section>
      <h2 className="font-inter-tight text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
        {sectionTitle}
      </h2>
      <div className="space-y-1">
        {items.map((item, index) => {
          const hasDescription = item.description && item.description.trim() !== '';

          return (
          <article
            key={index}
            onClick={() => hasDescription && toggleExpand(index)}
            tabIndex={hasDescription ? 0 : undefined}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                if (hasDescription) {
                  toggleExpand(index);
                }
              }
            }}
            className={`group relative p-5 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col sm:flex-row items-start sm:items-center gap-6 ${hasDescription ? 'cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-800/[.65] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400' : ''}`}
          >
            <div className="absolute top-5 right-5 sm:static shrink-0 w-10 h-10 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center bg-gray-100 dark:bg-gray-700 shadow-md transition-transform group-hover:scale-105">
              {item.icon && <Image src={item.icon} alt={item.title || 'Company Icon'} width={32} height={32} className="w-4 h-4 sm:w-8 sm:h-8" />}
            </div>
            <div className="flex-1 w-full">
              <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-2">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    {item.title && (
                      <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-lg">
                        {item.title}
                      </h3>
                    )}
                    {hasDescription && (
                      <svg className={`w-4 h-4 fill-current text-gray-400 dark:text-gray-500 shrink-0 transition-transform duration-300 ease-in-out ${expanded[index] ? 'rotate-90' : ''}`} viewBox="0 0 16 16">
                        <path d="M6 4l4 4-4 4" />
                      </svg>
                    )}
                  </div>
                  {item.category && (
                    <div className="block sm:hidden text-sm font-medium text-blue-600 dark:text-blue-400 mt-1">
                      {item.category}
                    </div>
                  )}
                  {item.subtitle && (
                    <div className="text-base font-medium text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">
                      {item.subtitle}
                    </div>
                  )}
                  {item.location && (
                    <div className="text-base font-medium text-gray-500 dark:text-gray-500 mt-1">
                      {item.location}
                    </div>
                  )}
                </div>
                <div className="text-left sm:text-right mt-2 sm:mt-0 flex-shrink-0 sm:ml-4">
                  {item.date && (
                    <div className="text-base font-medium text-gray-500 dark:text-gray-400">
                      {item.date}
                    </div>
                  )}
                  {item.category && (
                    <div className="hidden sm:block text-base font-medium text-blue-600 dark:text-blue-400 mt-1">
                      {item.category}
                    </div>
                  )}
                  {hasDescription && (
                    <div className="text-sm font-medium mt-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-800">
                      {expanded[index] ? 'Réduire' : 'En savoir plus'}
                    </div>
                  )}
                </div>
              </div>

              <div className={`grid transition-all duration-300 ease-in-out ${expanded[index] ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                  {item.description && item.description.trim() !== '' && (
                    <p className="text-base text-gray-700 dark:text-gray-300 whitespace-pre-line py-2">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
              
              {item.technologies && item.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`text-sm px-3 py-1 rounded-full ${tech.highlighted ? "bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-800" : "bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600"}`}
                    >
                      {tech.tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </article>
        )})}
      </div>
    </section>
  );
}

