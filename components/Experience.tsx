'use client';

import Image from "next/image";
import Link from "next/link";

type Technology = {
  tag?: string;
  highlighted?: boolean;
};

type ExperienceLink = {
  link: string;
  text: string;
  type: "primary" | "secondary";
};

type ExperienceItem = {
  block_type?: string;
  title?: string;
  subtitle?: string;
  category?: string;
  links?: ExperienceLink[];
  icon?: string;
  date?: string;
  duration?: string;
  location?: string;
  technologies?: Technology[];
};

interface ExperienceProps {
  sectionTitle: string;
  items: ExperienceItem[];
}

export default function Experience({ sectionTitle, items }: ExperienceProps) {
  return (
    <section>
      <h2 className="font-inter-tight text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
        {sectionTitle}
      </h2>
      <div className="space-y-3">
        {items.map((item, index) => {
          const isItem = item.block_type === "item";
          const links = (isItem && item.links) ? item.links.filter((l) => l.link && l.link.trim() !== "") : [];
          const hasActions = links.length > 0;

          return (
            <article
              key={index}
              className={`group relative rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out p-5 sm:p-6 ${isItem ? "sm:ml-12" : "mx-12 sm:mx-0"}`}
            >
              <div className={`flex flex-col gap-4 ${isItem ? "sm:flex-row sm:items-start sm:gap-6" : "items-center sm:items-stretch"}`}>
                {isItem && (
                  <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center bg-gray-50 dark:bg-gray-700 shadow-sm transition-transform group-hover:scale-105">
                    {item.icon && (
                      <Image
                        src={item.icon}
                        alt={item.title || "Logo"}
                        width={28}
                        height={28}
                        className="w-7 h-7 sm:w-8 sm:h-8"
                      />
                    )}
                  </div>
                )}
                <div className={`flex-1 min-w-0 ${isItem ? "" : "text-center sm:text-left"}`}>
                  <div className={`flex flex-col sm:flex-row sm:flex-wrap gap-1 sm:gap-2 ${isItem ? "sm:items-baseline sm:justify-between" : "items-center justify-center sm:items-baseline sm:justify-between"}`}>
                    <div>
                      {item.title && (
                        <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-lg">
                          {item.title}
                        </h3>
                      )}
                      {item.subtitle && (
                        <p className="text-base text-gray-600 dark:text-gray-400 mt-0.5">
                          {item.subtitle}
                        </p>
                      )}
                    </div>
                    <div className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-1 sm:mt-0 ${isItem ? "" : "justify-center sm:justify-start"}`}>
                      {item.date && <span>{item.date}</span>}
                      {item.duration && (
                        <span className="text-gray-400 dark:text-gray-500">{item.duration}</span>
                      )}
                      {item.location && (
                        <span className="text-gray-400 dark:text-gray-500">{item.location}</span>
                      )}
                    </div>
                  </div>
                  {item.category && (
                    <p className="text-sm font-medium text-gray-400 dark:text-gray-500 mt-2">
                      {item.category}
                    </p>
                  )}
                  {item.technologies && item.technologies.length > 0 && (
                    <div className={`flex flex-wrap gap-2 mt-4 ${isItem ? "" : "justify-center sm:justify-start"}`}>
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
                  {hasActions && (
                    <div className={`flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 ${links.length > 1 ? "justify-between" : "justify-end"}`}>
                      {links.map((entry, linkIndex) => {
                        const isExternal = entry.link.startsWith("http");
                        const primaryClass = "text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors";
                        const secondaryClass = "text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors";
                        const className = entry.type === "primary" ? primaryClass : secondaryClass;
                        const content = (
                          <>
                            <span>{entry.text}</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              {isExternal ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              )}
                            </svg>
                          </>
                        );
                        return isExternal ? (
                          <a key={linkIndex} href={entry.link} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1 ${className}`}>
                            {content}
                          </a>
                        ) : (
                          <Link key={linkIndex} href={entry.link} className={`inline-flex items-center gap-1 ${className}`}>
                            {content}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
