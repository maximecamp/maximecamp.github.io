interface CheckmarkIconProps {
  className?: string;
}

export default function CheckmarkIcon({ className = "w-4 h-4 fill-current text-green-500 mr-3 mt-0.5 shrink-0" }: CheckmarkIconProps) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 12 12" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.28 2.28L3.989 8.575 1.718 6.304C1.328 5.914 0.695 5.914 0.305 6.304s-0.39 1.024 0 1.414l2.992 2.992c0.39 0.39 1.024 0.39 1.414 0L11.695 3.699c0.39-0.39 0.39-1.024 0-1.414s-1.024-0.39-1.414 0z" />
    </svg>
  );
}
