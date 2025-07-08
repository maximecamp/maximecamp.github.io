type DateProps = {
  dateString: string;
  className?: string;
  options?: Intl.DateTimeFormatOptions;
};

export default function FormattedDate({ dateString, className, options }: DateProps) {
  const formattedDate = new Date(dateString).toLocaleDateString('fr-FR', options ?? {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return <time dateTime={dateString} className={className}>{formattedDate}</time>;
} 