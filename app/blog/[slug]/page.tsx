import { getPostData, getSortedPostsData } from '@/lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'
import ArticleDetail from '@/components/Articles/Detail/Detail'
import { notFound } from 'next/navigation'
import { BackToBlog, GoToProjects, SectionNavigation } from '@/components/navigation'
import JsonLd from '@/components/ui/json-ld'
import { generateBlogPostingSchema, SITE_URL } from '@/lib/structured-data'


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

  const postUrl = `${SITE_URL}/blog/${post.id}`
  const imageUrl = post.image 
    ? (post.image.startsWith('http') ? post.image : `${SITE_URL}${post.image}`)
    : undefined

  const blogPostingSchema = generateBlogPostingSchema({
    title: post.title,
    description: post.excerpt || post.title,
    url: postUrl,
    image: imageUrl,
    datePublished: post.date,
    dateModified: post.date,
    readingTime: post.reading_time,
  })

  return (
    <>
      <JsonLd data={blogPostingSchema} id={`json-ld-blog-${post.id}`} />
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
    </>
  )
} 