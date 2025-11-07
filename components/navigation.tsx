import Link from "next/link";

interface NavigationProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Navigation({ 
  href, 
  children, 
  icon,
  variant = 'primary',
  size = 'md',
  className = ""
}: NavigationProps) {
  const baseClasses = "inline-flex items-center font-medium transition-all duration-200 ease-in-out rounded-lg";
  
  const variantClasses = {
    primary: "text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm hover:shadow-md border border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600",
    secondary: "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-100 hover:bg-white dark:hover:bg-gray-800",
    ghost: "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
  };
  
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };
  
  const iconSizeClasses = {
    sm: "w-3 h-3",
    md: "w-4 h-4", 
    lg: "w-5 h-5"
  };

  return (
    <Link 
      href={href} 
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {icon && <span className={`mr-2 ${iconSizeClasses[size]}`}>{icon}</span>}
      {children}
    </Link>
  );
}

// Composants spécialisés pour les cas d'usage courants

export function BackToProjects() {
  return (
    <Navigation 
      href="/projects"
      variant="secondary"
      size="sm"
      icon={
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      }
    >
      Retour aux projets
    </Navigation>
  );
}

export function BackToHome() {
  return (
    <Navigation 
      href="/"
      variant="secondary"
      size="sm"
      icon={
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      }
    >
      Retour à l&apos;accueil
    </Navigation>
  );
}

export function BackToBlog() {
  return (
    <Navigation 
      href="/blog"
      variant="secondary"
      size="sm"
      icon={
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      }
    >
      Retour aux articles
    </Navigation>
  );
}

export function GoToProjects({ size = 'sm', variant = 'primary' }: { size?: 'sm' | 'md' | 'lg', variant?: 'primary' | 'secondary' | 'ghost' }) {
  return (
    <Navigation 
      href="/projects"
      variant={variant}
      size={size}
      icon={
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      }
    >
      Voir mes projets
    </Navigation>
  );
}

export function GoToContact() {
  return (
    <Navigation 
      href="/contact"
      variant="primary"
      size="sm"
      icon={
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      }
    >
      Me contacter
    </Navigation>
  );
}

// Composant de navigation de section avec style Material 3 Expressive
interface SectionNavigationProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
  className?: string;
}

export function SectionNavigation({ left, right, className = "" }: SectionNavigationProps) {
  return (
    <div className={`flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700 ${className}`}>
      <div className="flex items-center">
        {left}
      </div>
      <div className="flex items-center">
        {right}
      </div>
    </div>
  );
}
