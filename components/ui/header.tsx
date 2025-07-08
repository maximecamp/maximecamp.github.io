"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import UserImg from "@/public/images/user-image.jpg";
import Particles from "./particles";
import MaltLogo from "@/public/images/svg/malt.svg";
import ThemeToggle from "./theme-toggle";
import { useTheme } from "next-themes";

export default function Header() {
  const pathname = usePathname();

  const { resolvedTheme } = useTheme()


  return (
    <header className="text-center pt-6">

      {/* Particles animation */}
      {resolvedTheme === 'dark' && <Particles className="absolute inset-0 -z-10" quantity={150} staticity={100} ease={100} />}
      
      <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-8 gap-4 sm:gap-0">
        {/* Nav links */}
        <ul className="inline-flex gap-4 items-center">
          <li>
            <Link
              href="/"
              className={`relative transition-colors ${
                pathname === "/"
                  ? "text-gray-800 dark:text-gray-100"
                  : "text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100"
              }`}
            >
              Accueil
              {pathname === "/" && (
                <span className="absolute inset-x-0 bottom-0 h-px bg-gray-800 dark:bg-gray-100"></span>
              )}
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={`relative transition-colors ${
                pathname.startsWith("/blog")
                  ? "text-gray-800 dark:text-gray-100"
                  : "text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100"
              }`}
            >
              Blog
              {pathname.startsWith("/blog") && (
                <span className="absolute inset-x-0 bottom-0 h-px bg-gray-800 dark:bg-gray-100"></span>
              )}
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`relative transition-colors ${
                pathname === "/contact"
                  ? "text-gray-800 dark:text-gray-100"
                  : "text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100"
              }`}
            >
              Contact
              {pathname === "/contact" && (
                <span className="absolute inset-x-0 bottom-0 h-px bg-gray-800 dark:bg-gray-100"></span>
              )}
            </Link>
          </li>
          <li className="mt-2">
            <ThemeToggle />
          </li>
        </ul>


          {/* Social icons */}
        <ul className="inline-flex gap-4 items-center">
          <li>
            <a
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600/[0.65] shadow-xs text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
              href="https://www.linkedin.com/in/maxime-camp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            </a>
          </li>
          {/* <li>
            <a
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600/[0.65] shadow-xs text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
              href="#0"
              aria-label="GitHub"
            >
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
              >
                <path d="M7.95 0C3.578 0 0 3.578 0 7.95c0 3.479 2.286 6.46 5.466 7.553.397.1.497-.199.497-.397v-1.392c-2.187.497-2.683-.994-2.683-.994-.398-.894-.895-1.192-.895-1.192-.696-.497.1-.497.1-.497.795.1 1.192.795 1.192.795.696 1.292 1.888.894 2.286.696.1-.497.298-.895.497-1.093-1.79-.2-3.578-.895-3.578-3.976 0-.894.298-1.59.795-2.087-.1-.198-.397-.993.1-2.086 0 0 .695-.2 2.186.795a6.408 6.408 0 0 1 1.987-.299c.696 0 1.392.1 1.988.299 1.49-.994 2.186-.796 2.186-.796.398 1.094.199 1.889.1 2.087.496.597.795 1.292.795 2.087 0 3.081-1.889 3.677-3.677 3.876.298.398.596.895.596 1.59v2.187c0 .198.1.496.596.397C13.714 14.41 16 11.43 16 7.95 15.9 3.578 12.323 0 7.95 0Z" />
              </svg>
            </a>
          </li> */}
          <li>
            <a
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600/[0.65] shadow-xs text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
              href="https://www.malt.fr/profile/maximecamp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Malt"
            >
              <Image src={MaltLogo} alt="Malt" width={18} height={18} />
            </a>
          </li>
        </ul>
          
        </div>
      {/* Intro */}
      <div className="mb-4">
        <Image
          className="inline-flex rounded-full shadow-lg mb-4"
          src={UserImg}
          width={96}
          height={96}
          alt="Maxime Camp"
          priority
        />
        <div className="mb-5">
          <h1 className="font-inter-tight font-bold text-gray-800 dark:text-gray-100 text-2xl mb-1">
            Maxime Camp
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            Développeur fullstack avec 4 ans d&apos;expérience, expert en React, Next.js, Node.js et Typescript.
          </p>
          <a
            className="btn-sm text-gray-800 dark:text-gray-200 bg-white dark:bg-transparent border border-gray-200 dark:border-gray-700 shadow-xs relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-linear-[45deg,transparent_25%,var(--color-white)_50%,transparent_75%,transparent_100%] before:opacity-20 dark:before:opacity-100 dark:before:bg-linear-[45deg,transparent_25%,var(--color-white)_50%,transparent_75%,transparent_100%] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-1500 inline-flex items-center gap-2"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('contact');
              if (element) {
                const offset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }}
          >
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Disponible pour un projet
          </a>
        </div>
        
      </div>
    </header>
  );
}
