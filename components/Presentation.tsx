import CVDownloadButton from './ui/cvdownloadbutton';

type PresentationList = {
    title: string;
    items: string[];
};

type PresentationData = {
    header: {
        title: string;
    };
    about: {
        title: string;
        description1: string;
        description2: string;
    };
    services: PresentationList;
    whyMe: PresentationList;
    techStack: {
        title: string;
        items: Array<{
            category: string;
            skills: string;
        }>;
    };
    cv: {
        text: string;
        url: string;
    };
};
  
interface PresentationProps {
    data: PresentationData;
}

export default function Presentation({ data }: PresentationProps) {
  return (
    <section>
      {/* Section Header */}
      <h2 className="font-inter-tight text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
        {data.header.title}
      </h2>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* About Me & CV 
        <div className="space-y-6">
          <div className="p-5 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out h-full">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">{data.about.title}</h3>
            <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
              {data.about.description1}
            </p>
            <p className="text-base text-gray-600 dark:text-gray-400">
              {data.about.description2}
            </p>
          </div>
        </div>
        */}

        {/* Services */}
        <div className="p-5 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">{data.services.title}</h3>
          <ul className="space-y-2 text-base text-gray-600 dark:text-gray-400">
            {data.services.items.map((item, index) => (
              <li key={index} className="flex items-center">
                <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.718 6.304C1.328 5.914 0.695 5.914 0.305 6.304s-0.39 1.024 0 1.414l2.992 2.992c0.39 0.39 1.024 0.39 1.414 0L11.695 3.699c0.39-0.39 0.39-1.024 0-1.414s-1.024-0.39-1.414 0z" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Why Me */}
        <div className="p-5 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">{data.whyMe.title}</h3>
          <ul className="space-y-2 text-base text-gray-600 dark:text-gray-400">
            {data.whyMe.items.map((item, index) => (
               <li key={index} className="flex items-center">
                <span>- {item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 mt-6">
        {/* Tech Stack */}
        <div className="p-5 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">{data.techStack.title}</h3>
            
          <div className="flex flex-wrap gap-2 mt-8">
              <span className="text-sm px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                Web
              </span>
              <span className="text-sm px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                Mobile
              </span>
              <span className="text-sm px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                Frontend
              </span>
              <span className="text-sm px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                Backend
              </span>
              <span className="text-sm px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                API
              </span>
              
            {data.techStack.items.flatMap(item => item.skills.split(', ')).map((skill, index) => (
              <span key={index} className="text-sm px-2.5 py-1 bg-gray-50 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                {skill}
              </span>
            ))}
          </div>
          <p className="text-base text-gray-600 dark:text-gray-400 mt-8">
              {data.about.description2}
            </p>
        </div>
      </div>
      

      <div className="mt-12 flex justify-center">
        <CVDownloadButton url={data.cv.url} text={data.cv.text} />
      </div>

    </section>
  );
} 