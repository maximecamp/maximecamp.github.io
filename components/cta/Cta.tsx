import React from 'react';
import { data as textContent } from "@/data/contactcard";
import Link from 'next/link';

type CtaProps = {
  cta: string;
};

export default function Cta({ cta }: CtaProps) {
  return (
    <section id="contact">
        <div className="mt-4 p-8 text-center bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700/50">
            <h2 className="text-2xl font-bold mb-4">{cta}</h2>
            <div className="text-left">
                <p className="text-base text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                    Contactez-moi pour discuter de la manière dont mon expertise peut concrétiser vos ambitions.
                </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
                
                    <a
                        key={textContent.buttons[0].url}
                        href={textContent.buttons[0].url}
                        target={textContent.buttons[0].url.startsWith('http') ? '_blank' : undefined}
                        rel={textContent.buttons[0].url.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className={`w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-base font-semibold rounded-full shadow-md transition-all duration-200 ease-in-out ${textContent.buttons[0].style}`}
                    >
                        Prendre rendez-vous
                    </a>
            </div>
            <div className="text-center text-base text-gray-500 dark:text-gray-400 space-y-1">
                <p>
                    <a href={`mailto:${textContent.email}`} className="hover:underline text-black dark:text-white">{textContent.email}</a>
                </p>
                <p className="font-medium pt-2">
                    <span className="text-green-700 dark:text-green-600 font-semibold">
                        {textContent.availabilityHighlighted}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                        {textContent.availabilityNormal}
                    </span>
                </p>
            </div>
        
            <hr className="my-8 border-gray-200 dark:border-gray-700/50" />
            <div className="text-center">
                <p className="text-base m-4 max-w-2xl mx-auto inline-flex relative hover:text-blue-600 dark:hover:text-blue-400 duration-150 ease-out before:scale-x-0 before:origin-center before:absolute before:inset-0 before:bg-sky-200 dark:before:bg-sky-500 before:opacity-30 before:-z-10 before:translate-y-1/4 before:-rotate-2 hover:before:scale-100 before:duration-150 before:ease-in-out">
                    <Link href="/" className="hover:underline">Découvrez mes services de développement sur-mesure</Link>
                </p>
            </div>
        </div>
    </section>
  );
} 