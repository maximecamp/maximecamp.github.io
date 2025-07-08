import Link from "next/link";
import { ReactNode } from "react";
import FormattedDate from "@/components/ui/Date";
import ShareButtons from "./ShareButtons";
import Sources from "./Sources";
import Cta from "@/components/cta/Cta";

interface Source {
  name: string;
  url: string;
}

export default function ArticleDetail(props: {
  post: {
    title: string;
    date: string; 
    readingTime?: number;
    sources?: Source[];
    cta?: string;
  };
  children: ReactNode;
}) {
  return (
    <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pb-16 md:pb-20">
      {/* Middle area */}
      <div className="grow">
        <div className="max-w-full">
          {/* Back */}
          <div className="mb-6">
            <Link
              className="inline-flex items-center text-blue-500 hover:text-blue-600"
              href="/blog"
            >
              <div className="rounded-full border border-slate-200 dark:border-slate-800 dark:bg-linear-to-t dark:from-slate-800 dark:to-slate-800/30">
                <span className="sr-only">Retour</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34">
                  <path className="fill-current" d="m16.414 17 3.293 3.293-1.414 1.414L13.586 17l4.707-4.707 1.414 1.414z" />
                </svg>
              </div>
              <span className="ml-2 text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-500">Retour aux articles</span>
            </Link>
          </div>

          <article>
            {/* Post header */}
            <header>
              <div className="flex items-center justify-between mb-6">
                
                {props.post.readingTime && props.post.readingTime > 0 && (
                  <div className="text-xs sm:text-base mr-4 text-slate-500">
                    Temps de lecture : {props.post.readingTime} minutes
                  </div>
                )}
                
                <div className="text-xs text-slate-500 uppercase mr-4">
                  <FormattedDate dateString={props.post.date} />
                </div>
                
                {/* Share buttons */}
                <ShareButtons postTitle={props.post.title} />
              </div>
              <h1 className="font-inter-tight text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6">{props.post.title}</h1>
            </header>
            {/* Post Content */}
            <div className="prose dark:prose-invert max-w-none">
              {props.children}
            </div>
            
            {/* Post Sources */}
            {props.post.sources && <Sources sources={props.post.sources} />}

            {/* CTA */}
            {props.post.cta && 
            <>
            <p className="mt-18 text-2xl font-bold">Passez à l&apos;action</p>
            <Cta cta={props.post.cta} />
            </>
            }

          </article>
        </div>
      </div>

    </div>
  );
}