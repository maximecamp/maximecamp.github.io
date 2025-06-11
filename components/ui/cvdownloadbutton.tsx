"use client";

import { useState, useEffect } from 'react';

interface CVDownloadButtonProps {
  url: string;
  text: string;
}

export default function CVDownloadButton({ url, text }: CVDownloadButtonProps) {
  const [downloadState, setDownloadState] = useState<'idle' | 'downloading' | 'success'>('idle');

  const handleClick = () => {
    setDownloadState('downloading');
  };

  useEffect(() => {
    if (downloadState === 'downloading') {
      const timer = setTimeout(() => {
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'CV-Maxime-Camp.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setDownloadState('success');
      }, 1500); // Simulate download time

      return () => clearTimeout(timer);
    } else if (downloadState === 'success') {
      const timer = setTimeout(() => {
        setDownloadState('idle');
      }, 3000); // Show success state for 3 seconds

      return () => clearTimeout(timer);
    }
  }, [downloadState, url]);

  const buttonClasses = `relative inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-base font-semibold rounded-full text-white transition-all duration-300 ease-in-out shadow-md overflow-hidden cursor-pointer ${
    downloadState === 'idle' ? 'bg-blue-600 hover:bg-blue-700 w-auto' :
    downloadState === 'downloading' ? 'bg-blue-600 w-12 h-12' :
    'bg-green-700 hover:bg-green-800 w-auto'
  }`;

  const buttonDisabled = downloadState !== 'idle';

  return (
    <button
      onClick={handleClick}
      disabled={buttonDisabled}
      className={buttonClasses}
      style={{ minWidth: downloadState !== 'idle' ? '3rem' : 'auto' }}
    >
      <div className="relative">
        {downloadState === 'idle' && (
          <span className="transition-opacity duration-300">{text}</span>
        )}
        {downloadState === 'downloading' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-100" cx="12" cy="12" r="10" stroke="white" strokeWidth="4"></circle>
              <path className="opacity-100" fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        )}
        {downloadState === 'success' && (
          <div className="flex items-center space-x-2">
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-semibold">Téléchargé</span>
          </div>
        )}
      </div>
    </button>
  );
} 