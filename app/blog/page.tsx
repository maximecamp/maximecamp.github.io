import ArticleList from '@/components/Articles/All/List'
import { blogpage_text } from '@/data/blogpage'
import { data as footerContactData } from '@/data/footercontact'
import ContactCard from '@/components/ContactCard'
import { BackToHome, GoToProjects, SectionNavigation } from '@/components/navigation'
import JsonLd from '@/components/ui/json-ld'
import { generateCollectionPageSchema, SITE_URL } from '@/lib/structured-data'
import { getSortedPostsData } from '@/lib/posts'

export const metadata = {
  title: 'Blog - Maxime Camp Développeur freelance react, node.js, react native, flutter à Paris',
  description: 'Découvrez mes articles sur le développement web et mobile, les technologies et les bonnes pratiques.',
  keywords: ["Maxime Camp", "Développeur freelance", "React", "TypeScript", "Node.js", "React Native", "Flutter", "Paris"],
  authors: [{ name: "Maxime Camp" }],
  creator: "Maxime Camp",
  publisher: "Maxime Camp",
  openGraph: {
    title: "Blog - Maxime Camp Développeur freelance react, node.js, react native, flutter à Paris",
    description: "Découvrez mes articles sur le développement web et mobile, les technologies et les bonnes pratiques.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function BlogPage() {
  const posts = getSortedPostsData()
  
  const collectionPageSchema = generateCollectionPageSchema({
    name: 'Blog - Maxime Camp',
    description: 'Découvrez mes articles sur le développement web et mobile, les technologies et les bonnes pratiques.',
    url: `${SITE_URL}/blog`,
    items: posts.map(post => ({
      name: post.title,
      url: `${SITE_URL}/blog/${post.id}`,
    })),
  })

  return (
    <>
      <JsonLd data={collectionPageSchema} id="json-ld-blog" />
      <section>
        {/* Page header */}
        <h2 className="font-inter-tight text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
            {blogpage_text.header.title}
        </h2>
        <div className="space-y-1">
          <ArticleList />
        </div>
      </section>
      <ContactCard data={footerContactData}/>
      {/* Navigation */}
      <SectionNavigation 
        left={<BackToHome />}
        right={<GoToProjects />}
        className="mt-12"
      />
    </>
  )
}