import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/ui/Logo";
import FormattedDate from "@/components/ui/Date";


export default function ArticleItem(props: { metadata: { image?: string; logo?: string; title: string; publishedAt: string; summary?: string; readingTime?: number }; slug: string }) {
  return (
    <article className="py-5 border-b border-slate-100 dark:border-slate-800">
      <div className="flex items-start">
        {props.metadata.image && <Image className="rounded-sm w-16 h-16 sm:w-[88px] sm:h-[88px] object-cover mr-6" src={props.metadata.image} width={88} height={88} alt={props.metadata.title} />}
        {props.metadata.logo && <Logo src={props.metadata.logo} width={32} height={32} style="w-4 h-4 sm:w-8 sm:h-8" alt={props.metadata.title} containerStyle="w-16 h-16 sm:w-[88px] sm:h-[88px] mr-6" />}
        <div>
          
          <h3 className="font-aspekta text-lg font-[650] mb-1">
            <Link
              className="inline-flex relative hover:text-blue-600 dark:hover:text-blue-400 duration-150 ease-out before:scale-x-0 before:origin-center before:absolute before:inset-0 before:bg-sky-200 dark:before:bg-sky-500 before:opacity-30 before:-z-10 before:translate-y-1/4 before:-rotate-2 hover:before:scale-100 before:duration-150 before:ease-in-out"
              href={`/blog/${props.slug}`}
            >
              {props.metadata.title}
            </Link>
          </h3>
          <div className="flex">
            {props.metadata.summary && <div className="grow text-sm text-slate-500 dark:text-slate-400">{props.metadata.summary}</div>}
          </div>
          <div className="text-xs text-slate-500 uppercase mt-2">
            <FormattedDate dateString={props.metadata.publishedAt} />
          </div>
        </div>
      </div>
    </article>
  );
}