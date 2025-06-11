interface ContactCardProps {
    data: {
        title?: string;
        description?: string;
        buttons?: {
            text: string;
            url: string;
            style: string;
        }[];
        email?: string;
        phone?: string;
        availabilityHighlighted?: string;
        availabilityNormal?: string;
    };
}

export default function ContactCard({ data }: ContactCardProps) {
    return (
      <section id="contact">
        {/* Contact Card */}
        <div className="mt-12 p-8 bg-gray-50 dark:bg-gray-800/50 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700/50">
            <div className="text-center">
                <h3 className="font-inter-tight text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                    {data.title}
                </h3>
            </div>
            <div className="text-left">
                <p className="text-base text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                    {data.description}
                </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
                {data.buttons?.map((button) => (
                    <a
                        key={button.url}
                        href={button.url}
                        target={button.url.startsWith('http') ? '_blank' : undefined}
                        rel={button.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className={`w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-base font-semibold rounded-full shadow-md transition-all duration-200 ease-in-out ${button.style}`}
                    >
                        {button.text}
                    </a>
                ))}
            </div>
            <div className="text-center text-base text-gray-500 dark:text-gray-400 space-y-1">
                <p>
                    <a href={`mailto:${data.email}`} className="hover:underline">{data.email}</a>
                    {data.phone && data.phone !== "" && (
                    <>
                        <span className="text-gray-300 dark:text-gray-600 mx-2">|</span>
                        <a href={`tel:${data.phone.replace(/\s/g, '')}`} className="hover:underline">{data.phone}</a>
                    </>
                    )}
                </p>
                <p className="font-medium pt-2">
                    <span className="text-green-900 dark:text-green-600 ">
                        {data.availabilityHighlighted}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                        {data.availabilityNormal}
                    </span>
                </p>
            </div>
        </div>
</section>
  );
}