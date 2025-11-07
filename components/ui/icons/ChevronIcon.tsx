interface ChevronIconProps {
  className?: string;
}

export default function ChevronIcon({ className = "w-4 h-4 fill-current text-gray-600 dark:text-gray-400 mr-3 mt-0.5 shrink-0" }: ChevronIconProps) {
    return (
      <svg
        className={className}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 10.585l3.71-3.355a.75.75 0 011.02 1.1l-4.25 3.845a.75.75 0 01-1.02 0l-4.25-3.845a.75.75 0 01.02-1.06z"
          clipRule="evenodd"
        />
      </svg>
    );
  }