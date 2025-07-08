'use client'

import { useState } from 'react'
import Tooltip from '@/components/ui/Tooltip'

interface Source {
  name: string
  url: string
}

interface SourcesProps {
  sources: Source[]
}

export default function Sources({ sources }: SourcesProps) {
  const [isOpen, setIsOpen] = useState(false)

  if (!sources || sources.length === 0) {
    return null
  }

  return (
    <div className="mt-8">
      <div
        role="button"
        tabIndex={isOpen ? -1 : 0}
        onClick={() => !isOpen && setIsOpen(true)}
        onKeyDown={(e) => !isOpen && (e.key === 'Enter' || e.key === ' ') && setIsOpen(true)}
        className={`relative transition-all duration-300 ease-in-out rounded-2xl ${
          isOpen
            ? 'p-4 border border-slate-200 dark:border-slate-800 w-full '
            : 'inline-block px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 cursor-pointer border border-transparent hover:border-slate-200 dark:hover:border-slate-700'
        }`}
      >
        {!isOpen && <div className="text-sm font-medium">Sources</div>}
        {isOpen && (
          <div className="opacity-100 transition-opacity duration-300 delay-200">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-slate-800 dark:text-slate-100">Sources</h3>
              <Tooltip text="Masquer">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsOpen(false)
                  }}
                  className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 cursor-pointer"
                  aria-label="Masquer les sources"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </Tooltip>
            </div>
            <div className="flex flex-wrap gap-x-2 gap-y-1">
              {sources.map((source, index) => (
                <span key={index} className="inline-flex items-center text-sm">
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 hover:underline"
                  >
                    {source.name}
                  </a>
                  {index < sources.length - 1 && <span className="text-slate-500 dark:text-slate-400">,</span>}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 