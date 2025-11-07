import { getPostData, getSortedPostsData } from '@/lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'
import ArticleDetail from '@/components/Articles/Detail/Detail'
import { notFound } from 'next/navigation'
import { BackToBlog, GoToProjects, SectionNavigation } from '@/components/navigation'


export async function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map(post => ({
    slug: post.id,
  }))
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = await getPostData(params.slug)
  
  if (!post) {
    notFound()
  }
  
  return {
      title: post.title,
  }
}

export default async function PostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = await getPostData(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto">
        <div className="pb-12 md:pb-20">
            <ArticleDetail post={{ title: post.title, date: post.date, readingTime: post.reading_time ?? 0, sources: post.sources, cta: post.cta }}>
                <MDXRemote source={post.content} />
            </ArticleDetail>
        </div>
        
        {/* Navigation */}
        <SectionNavigation 
          left={<BackToBlog />}
          right={<GoToProjects />}
        />
      </div>
    </section>
  )
} 