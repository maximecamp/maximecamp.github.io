import { getPostData, getSortedPostsData } from '@/lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'
import ArticleDetail from '@/components/Articles/Detail/Detail'


export async function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map(post => ({
    slug: post.id,
  }))
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = await getPostData(params.slug)
  return {
      title: post.title,
  }
}

export default async function PostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = await getPostData(params.slug)

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-2">
        <div className="pb-12 md:pb-20">
            <ArticleDetail post={{ title: post.title, date: post.date, readingTime: post.reading_time, sources: post.sources, cta: post.cta }}>
                <MDXRemote source={post.content} />
            </ArticleDetail>
        </div>
      </div>
    </section>
  )
} 