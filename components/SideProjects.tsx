type SideProjectItem = {
  title?: string;
  description?: string;
  link?: string;
};

interface SideProjectsProps {
  sectionTitle: string;
  items: SideProjectItem[];
};

export default function SideProjects({ sectionTitle, items }: SideProjectsProps) {
  return (
    <section>
      <h2 className="font-inter-tight text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
        {sectionTitle}
      </h2>
      <div className="grid min-[580px]:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <article
            key={index}
            className="relative p-5 rounded-xl group"
          >
            {/*<div
              className="absolute top-5 right-7 text-gray-400 dark:text-gray-600 group-hover:text-gray-600 dark:group-hover:text-gray-400 group-hover:rotate-45 transition"
              aria-hidden="true"
            >
               <svg
                className="fill-current opacity-80 dark:opacity-100"
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
              >
                <path d="M1.018 10 0 8.983l7.572-7.575H1.723L1.736 0H10v8.266H8.577l.013-5.841L1.018 10Z" />
              </svg> 
            </div> */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                {/* <a className="before:absolute before:inset-0" href={item.link}>
                  {item.title}
                </a> */}
                {item.title}
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
