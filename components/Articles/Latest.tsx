import Link from 'next/link'
import Particles from '@/components/ui/particles'
import { getSortedPostsData } from '@/lib/posts'


interface Item {
  link: string
  title: string
}

export default function LatestArticles() {
  const posts = getSortedPostsData().slice(0, 5)


  const items: Item[] = posts.map((post) => ({
    link: `/blog/${post.id}`,
    title: post.title
  }))

  return (
    <section>
      <h2 className="font-inter-tight text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
        Mes derniers articles
      </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mx-auto pb-8 md:pb-10">
      {items.map((item, index) => (
        <div key={index}>
          <Link href={item.link}>
              <div className="relative h-full rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out z-20 overflow-hidden">
                {/* Animation de particules */}
                <Particles className="absolute inset-0 -z-10" quantity={10} />
                <div className="flex items-center justify-center w-full h-[150px] aspect-video">
                  <div className={`absolute inset-0 w-full h-full rounded-[inherit] blur-[2px] opacity-80`} aria-hidden="true" />
                  <div className="absolute inset-0 flex items-center justify-center w-full max-w-3xl mx-auto">
                    <h3 className="sm:px-2 font-inter-tight text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 flex flex-col items-center justify-center text-center">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            
          </Link>
        </div>
      ))}
    </div>
    
    <div className="text-center">
      <Link 
        href="/blog" 
        className="w-max px-4 py-2 rounded-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600/[0.65] shadow-xs text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 transition-colors"
      >
        Tous les articles
      </Link>
    </div>
    </section>
  )
}
